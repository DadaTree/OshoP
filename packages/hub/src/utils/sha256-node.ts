import { Readable } from "node:stream";
import { createHash } from "node:crypto";

export async function sha256Node(buffer: ArrayBuffer | Blob): Promise<string> {
	const sha2