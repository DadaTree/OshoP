import type { JsonObject } from "type-fest";

export async function createApiError(
	response: Response,
	opts?: { requestId?: string; message?: string }
): Promise<never> {
	const error = new ApiError(response.url, response.status, response.headers.get("X-Request-Id") ?? opts?.requestId);

	error.message = `Api error with status ${error.statusCode}.${opts?.message ? ` ${opts.message}.` : ""} Request ID: ${
		error.requestI