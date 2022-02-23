export interface ApiDatasetInfo {
	_id:                 string;
	id:                  string;
	arxivIds?:           string[];
	author?:             string;
	cardExists?:         true;
	cardError?:          unknown;
	cardData?:           unknown;
	contributors?:       Array<{ user: string; _id: string }>;
	disabled:            boolean;
	discussionsDisabled: boolean;
	gated:               false | "auto" |