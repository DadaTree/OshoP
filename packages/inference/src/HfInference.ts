
export interface Options {
	/**
	 * (Default: true) Boolean. If a request 503s and wait_for_model is set to false, the request will be retried with the same parameters but with wait_for_model set to true.
	 */
	retry_on_error?: boolean;
	/**
	 * (Default: true). Boolean. There is a cache layer on the inference API to speedup requests we have already seen. Most models can use those results as is as models are deterministic (meaning the results will be the same anyway). However if you use a non deterministic model, you can set this parameter to prevent the caching mechanism from being used resulting in a real new query.
	 */
	use_cache?:      boolean;
	/**
	 * (Default: false). Boolean to use GPU instead of CPU for inference (requires Startup plan at least).
	 */
	use_gpu?:        boolean;

	/**
	 * (Default: false) Boolean. If the model is not ready, wait for it instead of receiving 503. It limits the number of requests required to get your inference done. It is advised to only set this flag to true after receiving a 503 error as it will limit hanging in your application to known places.
	 */
	wait_for_model?: boolean;
}

export interface Args {
	model: string;
}

export type FillMaskArgs = Args & {
	inputs: string;
};

export type FillMaskReturn = {
	/**
	 * The probability for this token.
	 */
	score:     number;
	/**
	 * The actual sequence of tokens that ran against the model (may contain special tokens)
	 */
	sequence:  string;
	/**
	 * The id of the token
	 */
	token:     number;
	/**
	 * The string representation of the token
	 */
	token_str: string;
}[];

export type SummarizationArgs = Args & {
	/**
	 * A string to be summarized
	 */
	inputs:      string;
	parameters?: {
		/**
		 * (Default: None). Integer to define the maximum length in tokens of the output summary.
		 */
		max_length?:         number;
		/**
		 * (Default: None). Float (0-120.0). The amount of time in seconds that the query should take maximum. Network can cause some overhead so it will be a soft limit.
		 */