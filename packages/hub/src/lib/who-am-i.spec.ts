import { assert, it, describe } from "vitest";
import { TEST_ACCESS_TOKEN } from "../consts";
import { whoAmI } from "./who-am-i";

describe("whoAmI", () => {
	it("should fetch identity info", async () => {
		const info = await whoAmI({ credentials: { accessToken: TEST_ACCESS_T