import type { SetRequired } from "type-fest";
import type { SpaceHardwareFlavor, SpaceSdk } from "../public";
import type { ApiCommitFile } from "./api-commit";

export type ApiCreateRepoPayload = {
	name:                string;
	canonical?:          boolean;
	license?:            string;
	template?:           string;
	organization?:       