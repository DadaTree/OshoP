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
	 * - When opening a PR: will use parentComm