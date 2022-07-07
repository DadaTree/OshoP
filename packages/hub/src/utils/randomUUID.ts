export async function randomUUID(): Promise<string> {
	if (globalThis.crypto) {
		return globalT