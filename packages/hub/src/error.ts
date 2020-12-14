import type { JsonObject } from "type-fest";

export async function createApiError(
	response: Response,
	opts?: { requestId?: string; message?: string }
): Promise<never> {
	const error = new ApiError(response.url, response.status, response.headers.get("X-Request-Id")