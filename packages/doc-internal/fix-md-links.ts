import { readFileSync, writeFileSync } from "fs";
import glob from "glob";
import { join } from "path";

for (const mdFile of await glob("**/*.md", { cwd: "../../docs" })) {
	console.log(mdFile);
	const content = readFileSync(join("../