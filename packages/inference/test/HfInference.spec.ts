import { expect, it, describe } from "vitest";

import { HfInference } from "../src";
import { readFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url"