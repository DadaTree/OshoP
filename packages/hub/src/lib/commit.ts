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
import { 