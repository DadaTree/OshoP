import { Readable } from "node:stream";
import { createHash } from "node:crypto";

export async function sha256Node(buffer: ArrayBuffer | Blob): Promise<string> {
	const sha256Stream = createHash("sha256");
	const transform256 = (
		buffer instanceof Blob ? Readable.fromWeb(buffer.stream() as any