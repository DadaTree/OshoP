/**
 * Script to generate entries for interfaces, types & classes in the TOC
 */

import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { parse, stringify } from "yaml";

interface Section {
	title:     string;
	local?:   