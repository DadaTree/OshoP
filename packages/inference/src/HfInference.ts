
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
		max_time?:           number;
		/**
		 * (Default: None). Integer to define the minimum length in tokens of the output summary.
		 */
		min_length?:         number;
		/**
		 * (Default: None). Float (0.0-100.0). The more a token is used within generation the more it is penalized to not be picked in successive generation passes.
		 */
		repetition_penalty?: number;
		/**
		 * (Default: 1.0). Float (0.0-100.0). The temperature of the sampling operation. 1 means regular sampling, 0 means always take the highest score, 100.0 is getting closer to uniform probability.
		 */
		temperature?:        number;
		/**
		 * (Default: None). Integer to define the top tokens considered within the sample operation to create new text.
		 */
		top_k?:              number;
		/**
		 * (Default: None). Float to define the tokens that are within the sample operation of text generation. Add tokens in the sample for more probable to least probable until the sum of the probabilities is greater than top_p.
		 */
		top_p?:              number;
	};
};

export interface SummarizationReturn {
	/**
	 * The string after translation
	 */
	summary_text: string;
}

export type QuestionAnswerArgs = Args & {
	inputs: {
		context:  string;
		question: string;
	};
};

export interface QuestionAnswerReturn {
	/**
	 * A string that’s the answer within the text.
	 */
	answer: string;
	/**
	 * The index (string wise) of the stop of the answer within context.
	 */
	end:    number;
	/**
	 * A float that represents how likely that the answer is correct
	 */
	score:  number;
	/**
	 * The index (string wise) of the start of the answer within context.
	 */
	start:  number;
}

export type TableQuestionAnswerArgs = Args & {
	inputs: {
		/**
		 * The query in plain text that you want to ask the table
		 */
		query: string;
		/**
		 * A table of data represented as a dict of list where entries are headers and the lists are all the values, all lists must have the same size.
		 */
		table: Record<string, string[]>;
	};
};

export interface TableQuestionAnswerReturn {
	/**
	 * The aggregator used to get the answer
	 */
	aggregator:  string;
	/**
	 * The plaintext answer
	 */
	answer:      string;
	/**
	 * A list of coordinates of the cells contents
	 */
	cells:       string[];
	/**
	 * a list of coordinates of the cells referenced in the answer
	 */
	coordinates: number[][];
}

export type TextClassificationArgs = Args & {
	/**
	 * A string to be classified
	 */
	inputs: string;
};

export type TextClassificationReturn = {
	/**
	 * The label for the class (model specific)
	 */
	label: string;
	/**
	 * A floats that represents how likely is that the text belongs to this class.
	 */
	score: number;
}[];

export type TextGenerationArgs = Args & {
	/**
	 * A string to be generated from
	 */
	inputs:      string;
	parameters?: {
		/**
		 * (Optional: True). Bool. Whether or not to use sampling, use greedy decoding otherwise.
		 */
		do_sample?:            boolean;
		/**
		 * (Default: None). Int (0-250). The amount of new tokens to be generated, this does not include the input length it is a estimate of the size of generated text you want. Each new tokens slows down the request, so look for balance between response times and length of text generated.
		 */
		max_new_tokens?:       number;
		/**
		 * (Default: None). Float (0-120.0). The amount of time in seconds that the query should take maximum. Network can cause some overhead so it will be a soft limit. Use that in combination with max_new_tokens for best results.
		 */
		max_time?:             number;
		/**
		 * (Default: 1). Integer. The number of proposition you want to be returned.
		 */
		num_return_sequences?: number;
		/**
		 * (Default: None). Float (0.0-100.0). The more a token is used within generation the more it is penalized to not be picked in successive generation passes.