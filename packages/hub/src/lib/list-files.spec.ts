
import { assert, it, describe } from "vitest";
import type { ListFileEntry } from "./list-files";
import { listFiles } from "./list-files";

describe("listFiles", () => {
	it("should fetch the list of files from the repo", async () => {
		const cursor = listFiles({
			repo: {
				name: "bert-base-uncased",
				type: "model",
			},
			revision: "dd4bc8b21efa05ec961e3efc4ee5e3832a3679c7",
			hubUrl:   "https://huggingface.co",
		});

		const files: ListFileEntry[] = [];

		for await (const entry of cursor) {
			files.push(entry);
		}

		assert.deepStrictEqual(files, [
			{
				lastCommit: {
					date:  "2018-11-14T23:35:08.000Z",
					id:    "504939aa53e8ce310dba3dd2296dbe266c575de4",
					title: "initial commit",
				},
				oid:      "dc08351d4dc0732d9c8af04070ced089b201ce2f",
				path:     ".gitattributes",
				security: {
					avScan: {
						virusFound: false,
						virusNames: null,
					},
					blobId:           "dc08351d4dc0732d9c8af04070ced089b201ce2f",
					name:             ".gitattributes",
					pickleImportScan: null,
					repositoryId:     "models/bert-base-uncased",
					safe:             true,
				},
				size: 345,
				type: "file",
			},
			{
				lastCommit: {
					date:  "2019-06-18T09:06:51.000Z",
					id:    "bb3c1c3256d2598217df9889a14a2e811587891d",
					title: "Update config.json",
				},
				oid:      "fca794a5f07ff8f963fe8b61e3694b0fb7f955df",
				path:     "config.json",
				security: {
					avScan: {
						virusFound: false,
						virusNames: null,
					},
					blobId:           "fca794a5f07ff8f963fe8b61e3694b0fb7f955df",
					name:             "config.json",
					pickleImportScan: null,
					repositoryId:     "models/bert-base-uncased",
					safe:             true,
				},
				size: 313,
				type: "file",
			},
			{
				lastCommit: {
					date:  "2019-06-18T09:06:34.000Z",
					id:    "3d2477d72b675a999d1b13ca822aaaf4908634ad",
					title: "Update pytorch_model.bin",
				},
				lfs: {
					oid:         "097417381d6c7230bd9e3557456d726de6e83245ec8b24f529f60198a67b203a",
					size:        440473133,
					pointerSize: 134,
				},
				oid:      "ba5d19791be1dd7992e33bd61f20207b0f7f50a5",
				path:     "pytorch_model.bin",
				security: {
					avScan: {
						virusFound: false,
						virusNames: null,
					},
					blobId:           "ba5d19791be1dd7992e33bd61f20207b0f7f50a5",
					name:             "pytorch_model.bin",
					pickleImportScan: {
						highestSafetyLevel: "innocuous",
						imports:            [
							{
								module: "collections",
								name:   "OrderedDict",
								safety: "innocuous",
							},
							{