
export interface ApiIndexTreeEntry {
	type: "file" | "directory" | "unknown";
	size: number;
	path: string;
	oid:  string;
	lfs?: {
		oid:         string;
		size:        number;
		/** Size of the raw pointer file, 100~200 bytes */
		pointerSize: number;
	};
	lastCommit: {