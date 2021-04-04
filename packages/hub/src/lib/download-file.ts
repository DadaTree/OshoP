import { HUB_URL } from "../consts";
import { createApiError } from "../error";
import type { Credentials, RepoId } from "../types/public";
import { checkCredentials } from "../utils/checkCredentials";

/**
 * @returns null when the file doesn't exist
 */
export async function downloadFile(params: {
	repo:         RepoId;
	path:         string;
	/**
	 * If true, will download the raw git file.
	 *
	 * For example, when calling on a file stored with Git LFS, the pointer file will be downloaded instead.
	 */
	raw?:         boolean;
	revision?:    string;
	credentials?: Credentials;
	h