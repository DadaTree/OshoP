import { expect, it, describe } from "vitest";

import { HfInference } from "../src";
import { readFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
const dir = fileURLToPath(new URL(".", import.meta.url));
const TIMEOUT = 60000 * 3;

const FLAC_FILE = join(dir, "..", "test", "sample1.flac");
const CHEETAH_FILE = join(dir, "..", "test", "cheetah.png");
const CAT_FILE = join(dir, "..", "test", "cats.png");

if (!process.env.HF_ACCESS_TOKEN) {
	console.warn("Set HF_ACCESS_TOKEN in the env to run the tests for better rate limits");
}

describe.concurrent(
	"HfInference",
	() => {
		// Individual tests can be ran without providing an api key, however running all tests without an api key will result in rate limiting error.
		const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

		it("throws error if model does not exist", () => {
			expect(
				hf.fillMask({
					model:  "this-model-does-not-exist-123",
					inputs: "[MASK] world!",
				})
			).rejects.toThrowError("Model this-model-does-not-exist-123 does not exist");
		});

		it("fillMask", async () => {
			expect(
				await hf.fillMask({
					model:  "bert-base-uncased",
					inputs: "[MASK] world!",
				})
			).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						score:     expect.any(Number),
						token:     expect.any(Number),
						token_str: expect.any(String),
						sequence:  expect.any(String),
					}),
				])
			);
		});

		it("summarization", async () => {
			expect(
				await hf.summarization({
					model: "facebook/bart-large-cnn",
					inputs:
						"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930.",
					parameters: {
						max_length: 100,
					},
				})
			).toEqual({
				summary_text:
					"The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world.",
			});
		});

		it("questionAnswer", async () => {
			expect(
				await hf.questionAnswer({
					model:  "deepset/roberta-base-squad2",
					inputs: {
						question: "What is the capital of France?",
						context:  "The capital of France is Paris.",
					},
				})
			).toMatchObject({
				answer: "Paris",
				score:  expect.any(Number),
				start:  expect.any(Number),
				end:    expect.any(Number),
			});
		});

		it("table question answer", async () => {
			expect(
				await hf.tableQuestionAnswer({
					model:  "google/tapas-base-finetuned-wtq",
					inputs: {
						query: "How many stars does the transformers repository have?",
						table: {
							Repository:             ["Transformers", "Datasets", "Tokenizers"],
							Stars:                  ["36542", "4512", "3934"],
							Contributors:           ["651", "77", "34"],
							"Programming language": ["Python", "Python", "Rust, Python and NodeJS"],
						},
					},
				})
			).toMatchObject({
				answer:      "AVERAGE > 36542",
				coordinates: [[0, 1]],
				cells:       ["36542"],
				aggregator:  "AVERAGE",
			});
		});

		it("textClassification", async () => {
			expect(
				await hf.textClassification({
					model:  "distilbert-base-uncased-finetuned-sst-2-english",
					inputs: "I like you. I love you.",
				})
			).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						label: expect.any(String),
						score: expect.any(Number),
					}),
				])
			);
		});

		it("textGeneration - gpt2", async () => {
			expect(
				await hf.textGeneration({
					model:  "gpt2",
					inputs: "The answer to the universe is",
				})
			).toMatchObject({
				generated_text: expect.any(String),
			});
		});

		it("textGeneration - google/flan-t5-xxl", async () => {
			expect(
				await hf.textGeneration({
					model:  "google/flan-t5-xxl",
					inputs: "The answer to the universe is",
				})
			).toMatchObject({
				generated_text: expect.any(String),
			});
		});

		it("tokenClassification", async () => {
			expect(
				await hf.tokenClassification({
					model:  "dbmdz/bert-large-cased-finetuned-conll03-english",
					inputs: "My name is Sarah Jessica Parker but you can call me 