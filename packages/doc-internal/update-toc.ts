/**
 * Script to generate entries for interfaces, types & classes in the TOC
 */

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { parse, stringify } from "yaml";

interface Section {
	title:     string;
	local?:    string;
	sections?: Section[];
}

const content = readFileSync("../../docs/_toctree.yml");

const TOC = parse(content.toString()) as Section[];

const dirs = readdirSync("../../docs", { withFileTypes: true }).filter((dir) => dir.isDirectory());

for (const dir of dirs) {
	const section = TOC.