import { HUB_URL } from "../consts";
import { createApiError } from "../error";
import type { Credentials, RepoId } from "../types/public";
import { checkCredentials } from "../utils/checkCredentials";

/**
 * @returns null when the file doesn't exist
 */
export async function downloadFile