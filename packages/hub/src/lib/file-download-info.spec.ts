import { assert, it, describe } from "vitest";
import { fileDownloadInfo } from "./file-download-info";

describe("fileDownloadInfo", () => {
	it("should fetch LFS file info", async () => {
		const info = await fileDownloadInfo({
			repo: {
				name: "bert-base-uncased",
				type: "model",
			},
			path:     "tf_model.h5",
			revision: "dd4bc8b21efa05ec961e3efc4ee5e3832a3679c7",
			hubUrl:   "https://huggingface.co",
		});

		assert.strictEqual(info?.size, 536063208);
		assert.strictEqual(info?.etag, '"a7a17d6d844b5de815ccab5f42cad6d24496db3850a2a43d8258221018ce87d2"');
		assert(info?.downloadLink);
	});

	it("should fetch raw LFS pointer info", async () => {
		const info = await fileDownloadInfo({
			repo: {
				name: "bert-base-uncased",
				type: "model",
			},
			path: