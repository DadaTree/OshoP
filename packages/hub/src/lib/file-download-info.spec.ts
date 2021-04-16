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