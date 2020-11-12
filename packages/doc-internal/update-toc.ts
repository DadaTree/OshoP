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
	const section = TOC.find((section) => section.sections?.some((file) => file.local?.startsWith(dir.name + "/")));

	if (!section) {
		throw new Error("Missing folder in TOC: " + dir.name);
	}

	// Remove folders under dir
	section.sections = section.sections!.filter((section) => !section.sections);

	cons