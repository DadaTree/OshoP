import { expect, it, describe } from "vitest";

import { HfInference } from "../src";
import { readFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
const dir = fileURLToPath(new URL(".", import.meta.url));
const TIMEOUT = 60000 * 3;

const FLAC_FILE = join(dir, "..", "test", "sample1.flac");
const CHEETAH_FILE = join(dir, "..", "test", "cheetah.png");
const CAT_FILE = join(dir, "..", "test", "cats.png");

if (!process.env.HF_ACCESS_TOKEN) {
	console.warn("Set HF_ACCESS_TOKEN in the env to run the tests for better rate limits");
}

describe.concurrent(
	"HfInference",
	() => {
		// Individual tests can be ran without providing an api key, however running all tests without an api key will result in rate limiting error.
		const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

		it("throws error if model does not exist", () => {
			expect(
				hf.fillMask({
					model:  "this-model-doe