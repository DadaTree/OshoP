import { HUB_URL } from "../consts";
import { ApiError, createApiError } from "../error";
import type {
	ApiCommitHeader,
	ApiCommitLfsFile,
	ApiCommitOperation,
	ApiLfsBatchRequest,
	ApiLfsBatchResponse,
	ApiLfsCompleteMultipartRequest,
	ApiPreuploadRequest,
	ApiPreuploadResponse,
} from "../types/api/api-commit";
import type { Credentials, RepoId } from "../types/public";
import { base64FromBytes } from "../utils/base64FromBytes";
import { checkCredentials } from "../utils/checkCredentials";
import { chunk } from "../utils/chunk";
import { promisesQueue } from "../utils/promisesQueue";
import { promisesQueueStreaming } from "../utils/promisesQueueStreaming";
import { sha256 } from "../utils/sha256";

const CONCURRENT_SHAS = 5;
const CONCURRENT_LFS_UPLOADS = 5;
const MULTIPART_PARALLEL_UPLOAD = 5;

export interface CommitDeletedEntry {
	operation: "delete";
	path:      string;
}

type ContentSource = Blob; // Todo: offer a smart Blob wrapper around (filePath + size) for Node.js

export interface CommitFile {
	operation: "addOrUpdate";
	path:      string;
	content:   ContentSource;
	// forceLfs?: boolean
}

// TODO: find a nice way to handle LFS & non-LFS files in an uniform manner, see https://github.com/huggingface/moon-landing/issues/4370
// export type CommitRenameFile = {
// 	operation: "rename";
// 	path:      string;
// 	oldPath:   string;
// 	content?:  ContentSource;
// };

export type CommitOperation = CommitDeletedEntry | CommitFile /* | CommitRenameFile */;

export interface CommitParams {
	title:          string;
	description?:   string;
	repo:           RepoId;
	operations:     CommitOperation[];
	credentials:    Credentials;
	/** @default "main" */
	branch?:        string;
	/**
	 * Parent commit. Optional
	 *
	 * - When opening a PR: will use parentCommit as the parent commit
	 * - When committing on a branch: Will make sure that there were no intermediate commits
	 */
	parentCommit?:  string;
	isPullRequest?: boolean;
	hubUrl?:        string;
}

export interface CommitOutput {
	pullRequestUrl?: string;
	commit: {
		oid: string;
		url: string;
	};
	hookOutput: string;
}

function isFileOperation(op: CommitOperation): op is CommitFile {
	return op.operation === "addOrUpdate";
}

/**
 * Internal function for now, used by commit.
 *
 * Can be exposed later to offer fine-tuned progress info
 */
async function* commitIter(params: CommitParams): AsyncGenerator<unknown, CommitOutput> {
	checkCredentials(params.credentials);
	yield "preuploading";

	const lfsShas = new Map<string, string | null>();

	const gitAttributes = (
		params.operations.find((op) => isFileOperation(op) && op.path === ".gitattributes") as CommitFile | undefined
	)?.content;

	for (const operations of chunk(params.operations.filter(isFileOperation), 100)) {
		const payload: ApiPreuploadRequest = {
			gitAttributes: gitAttributes && (await gitAttributes.text()),
			files:         await Promise.all(
				operations.map(async (operation) => ({
					path:   operation.path,
					size:   operation.content.size,
					sample: base64FromBytes(new Uint8Array(await operation.content.slice(0, 512).arrayBuffer())),
				}))
			),
		};

		const res = await fetch(
			`${params.hubUrl ?? HUB_URL}/api/${params.repo.type}s/${params.repo.name}/preupload/${encodeURIComponent(
				params.branch ?? "main"
			)}` + (params.isPullRequest ? "?create_pr=1" : ""),
			{
				method:  "POST",
				headers: {
					Authorization:  `Bearer ${params.credentials.accessToken}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			}
		);

		if (!res.ok) {
			throw await createApiError(res);
		}

		const json: ApiPreuploadResponse = await res.json();

		for (const file of json.files) {
			if (file.uploadMode === "lfs") {
				lfsShas.set(file.path, null);
			}
		}
	}

	yield "uploading to LFS";

	for (const operations of chunk(
		params.operations.filter(isFileOperation).filter((op) => lfsShas.has(op.path)),
		100
	)) {
		yield `hashing ${operations.length} files`;

		const shas = await promisesQueue(
			operations.map((op) => async () => {
				const sha = await sha256(op.content);
				lfsShas.set(op.path, sha);
				return sha;
			}),
			CONCURRENT_SHAS
		