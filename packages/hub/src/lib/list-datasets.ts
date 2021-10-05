import { URLSearchParams } from "url";
import { HUB_URL } from "../consts";
import { createApiError } from "../error";
import type { ApiDatasetInfo } from "../types/api/api-dataset";
import type { Credentials } from "../types/public";
import { checkCredentials } from "../utils/checkCredentials";
import { parseLinkHeader } from "../utils/parseLinkHeader";

export interface DatasetEntry {
	id:        string;
	name:      string;
	private:   