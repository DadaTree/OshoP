import { HUB_URL } from "../consts";
import { createApiError } from "../error";
import type { ApiCreateRepoPayload } from "../types/api/api-create-repo";
import type { Credentials, RepoId, SpaceSdk } from "../types/public";
import { base64FromBytes } from "../utils/base64FromBytes";
import { checkCredentials } from "../utils/checkCredentials";

export async function createRepo(params: {
	repo:        RepoId;
	credentials: C