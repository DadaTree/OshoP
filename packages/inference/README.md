# 🤗 Hugging Face Inference API

A Typescript powered wrapper for the Hugging Face Inference API. Learn more about the Inference API at [Hugging Face](https://huggingface.co/docs/api-inference/index).

Check out the [full documentation](https://huggingface.co/docs/huggingface.js/inference/README) or try out a live [interactive notebook](https://observablehq.com/@huggingface/hello-huggingface-js-inference).



## Install

```console
npm install @huggingface/inference

yarn add @huggingface/inference

pnpm add @huggingface/inference
```

## Usage

❗**Important note:** Using an API key is optional to get started, however you will be rate limited eventually. Join [Hugging Face](https://huggingface.co/join) and then visit [access tokens](https://huggingface.co/settings/tokens) to generate your API key for **free**. 

Your API key should be kept private. If you need to protect it in front-end applications, we suggest setting up a proxy server that stores the API key.

### Basic examples

```typescript
import { HfInference } from '@huggingface/inference'

const hf = new HfInference('your api key')

// Natural Language

await hf.fillMask({
  model: 'bert-base-uncased',
  inputs: '[MASK] world!'
})

await hf.summarization({
  model: 'facebook/bart-large-cnn',
  inputs:
    'The tower is 324 metres (1,063 ft) tall, about the same height as an 81-storey building, and the tallest structure in Paris. Its base is square, measuring 125 metres (410 ft) on each side. During its construction, the Eiffel Tower surpassed the Washington Monument to become the tallest man-made structure in the world, a title it held for 41 years until the Chrysler Building in New York City was finished in 1930.',
  parameters: {
    max_length: 100
  }
})

await hf.questionAnswer({
  model: 'deepset/roberta-base-squad2',
  inputs: {
    question: 'What is the capital of France?',
    context: 'The capital of France is Paris.'
  }
})

await hf.tableQuestionAnswer({
  model: 'google/tapas-base-finetuned-wtq',
  inputs: {
    query: 'How many stars does the transformers repository have?',
    table: {
      Repository: ['Transformers', 'Datasets', 'Tokenizers'],
      Stars: ['36542', '4512', '3934'],
      Contributors: ['651', '77', '34'],
      'Programming language': ['Python', 'Python', 'Rust, Python and NodeJS']
    }
  }
})

await hf.textClassification({
  model: 'distilbert-base-uncased-finetun