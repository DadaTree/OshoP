import { HUB_URL } from "../consts";
import { createApiError } from "../error";
import type { ApiCreateRepoPayload } from "../types/api/api-create-repo";
import type { Credentials, RepoId, SpaceSdk } from "../types/public";
import { base64FromBytes } from "../u