import { HUB_URL } from "../consts";
import { createApiError } from "../error";
import type { ApiCreateRepoPayload } from "../types/api/api-create-repo";
import type { Credentials, RepoId, SpaceSdk } from "../types/public";
import { base64FromBytes } from "../utils/base64FromBytes";
import { checkCredentials } from "../utils/checkCredentials";

export async function createRepo(params: {
	repo:        RepoId;
	credentials: Credentials;
	private?:    boolean;
	license?:    string;
	/**
	 * Only a few lightweight files are supported at repo creation
	 */
	files?:      Array<{ content: ArrayBuffer | Blob; path: string }>;
	/** @required for when {@link repo.type} === "space" */
	sdk?:        SpaceSdk;
	hubUrl?:     string;
}): Promise<{ repoUrl: string }> {
	checkCredentials(params.credentials);
	const [namespace, repoName] = params.repo.name.split("/");

	if (!namespace || !repoName) {
		throw new TypeError(
			`"${params.repo.name}" is not a fully qualified repo name. It should be of the form "{namespace}/{repoName}".`
		);
	}

	const res = await fetch(`${params.hubUrl ?? HUB_URL}/api/repos/create`, {
		method: "POST",
		body: