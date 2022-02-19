export interface ApiDatasetInfo {
	_id:                 string;
	id:                  string;
	arxivIds?:           string[];
	author?:             string;
	cardExists?:         true;
	cardError?:          unknown;
	cardData?:           unknown;
	contributors?: