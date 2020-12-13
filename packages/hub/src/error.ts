import type { JsonObject } from "type-fest";

export async function createApiError(
	response: Response,
	opts?: { requestI