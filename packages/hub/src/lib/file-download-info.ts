import { HUB_URL } from "../consts";
import { createApiError } from "../error";
import type { Credentials, RepoId } from "../types/public";
import { checkCredentials } from "../utils/checkCredentials";

export interface FileDownloadInfoOutput {
	size:         number;
	etag:         string;
	/**
	 * In case 