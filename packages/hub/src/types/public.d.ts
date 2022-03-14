export type RepoType = "space" | "dataset" | "model";

export interface RepoId {
	name: string;
	type: RepoType;
}

/** Actually `hf_${string}`, but for convenience, using the string type */
export type AccessToken = string;

export interface Credentials {
	accessToken: AccessToken;
}

expo