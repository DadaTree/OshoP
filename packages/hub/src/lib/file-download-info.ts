import { HUB_URL } from "../consts";
import { createApiError } from "../error";
import type { Credentials, RepoId } from "../types/public";
import { checkCredentials } from "../utils/checkCredentials";

export interface FileDownloadInfoOutput {
	size:         number;
	etag:         string;
	/**
	 * In case of LFS file, link to download directly from cloud provider
	 */
	downloadLink: string | null;
}
/**
 * @returns null when the file doesn't exist
 */
e