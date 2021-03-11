import { assert, it, describe, expect } from "vitest";

import { randomBytes } from "crypto";
import { HUB_URL, TEST_ACCESS_TOKEN, TEST_USER } from "../consts";
import { createRepo } from "./create-repo";
import { deleteRepo } from "./delete-repo";
import { downloadFile } from "./download-file";

describe("createRepo", () => {
	it("should create a repo", async () => {
		const repoName = `${TEST_USER}/TEST-${randomBytes(10).toString("hex")}`;

		const result = await createRepo({
			credentials: {
				accessToken: TEST_ACCESS_TOKEN,
			},
			repo: {
				name: repoName,
				type: "model",
			},
			fil