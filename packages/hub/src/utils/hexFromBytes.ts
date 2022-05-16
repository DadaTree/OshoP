export function hexFromBytes(arr: Uint8Array): string {
	if (globalThis.Buffer) {
		return globalThis.Buffer.from(arr).toString("hex");
	} else {
		const bin: string[] = [];
		arr.forEach((byte