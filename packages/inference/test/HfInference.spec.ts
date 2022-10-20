import { expect, it, describe } from "vitest";

import { HfInference } from "../src";
import { readFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
const dir = fileURLToPath(new URL(".", import.meta.url));
const TIMEOUT = 60000 * 3;

const FLAC_FILE = join(dir, "..", "test", "sample1.flac");
const CHEETAH_F