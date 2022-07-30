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