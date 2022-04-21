export function base64FromBytes(arr: Uint8Array): string {
	if (globalThis.Buffer) {
		return globalThis.Buffer.from(arr).toString("base64");
	} else {
		const bin: string[] = [];
		arr.forEach((byte) => {
			bin.push(Str