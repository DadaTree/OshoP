# Interface: Options

## Properties

### retry\_on\_error

• `Optional` **retry\_on\_error**: `boolean`

(Default: true) Boolean. If a request 503s and wait_for_model is set to false, the request will be retried with the same parameters but with wait_for_model set to true.

#### Defined in

[HfInference.ts:5](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts