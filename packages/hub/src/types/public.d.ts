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

export type SpaceHardwareFlavor =
	| "cpu-basic"
	| "cpu-upgrade"
	| "t4-small"
	| "t4-medium"
	| "a10g-small"
	| "a10g-large"
	| "a100-large";

export type SpaceSdk = "streamlit" | "gradio" | "docker" | "static";

export type SpaceStage =
	| "NO_APP_FILE"
	| "CONFIG_ERROR"
	| "BUILDING"
	| "BUILD_ERROR"
	| "RUNNING"
	| "RUNNING_BUILDING"
	| "RUNTIME_ERROR"
	| "DELETING"
	| "PAUSED"
	| "SLEEPING";

export type AccessTokenRole = "admin" | "write" | "contributor" | "read";

export type AuthType = "access_token" | "app_token" | "app_token_as_user";

export type Task =
	| "text-classification"
	| "token-classification"
	| "table-question-answering"
	| "question-answering"
	| "zero-shot-classification"
	| "translation"
	| "summarization"
	| "conversational"
	| "feature-extraction"
	| "text-generation"
	| "text2text-gene