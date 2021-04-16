import { assert, it, describe } from "vitest";
import { fileDownloadInfo } from "./file-download-info";

describe("fileDownloadInfo", () => {
	it("should fetch LFS file info", async () => {
		const info = await fileDownloa