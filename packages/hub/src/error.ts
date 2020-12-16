import type { JsonObject } from "type-fest";

export async function createApiError(
	response: Response,
	opts?: { requestId?: string; message?: string }
): Promise<never> {
	const error = new ApiError(response.url, response.status, response.headers.get("X-Request-Id") ?? opts?.requestId);

	error.message = `Api error with status ${error.statusCode}.${opts?.message ? ` ${opts.message}.` : ""} Request ID: ${
		error.requestId
	}, url: ${error.url}`;

	if (response.headers.get("Content-Type")?.startsWith("application/json")) {
		const json = await response.json();
		error.message = json.error || json.message || error.message;
		error.data = json;
	} else {
		error.data = { message: await response.text() };
	}

	throw error;
}

/**
 * Error thrown when an API call to the Hugging Face Hub fails.
 */
export class ApiError extends Error {
	statusCode: number;
	url:    