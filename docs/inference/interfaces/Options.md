# Interface: Options

## Properties

### retry\_on\_error

• `Optional` **retry\_on\_error**: `boolean`

(Default: true) Boolean. If a request 503s and wait_for_model is set to false, the request will be retried with the same parameters but with wait_for_model set to true.

#### Defined in

[HfInference.ts:5](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L5)

___

### use\_cache

• `Optional` **use\_cache**: `boolean`

(Default: true). Boolean. There is a cache layer on the inference API to speedup requests we have already seen. Most models can use those results as is as models are deterministic (meaning the results will be the same anyway). However if you use a non deterministic model, you can set this parameter to prevent the caching mechanism from being used resulting in a real new query.

#### Defined in

[HfInference.ts:9](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L9)

___

### use\_gpu

• `Optional` **use\_gpu**: `boolean`

(Default: false). Boolean to use GPU instead of CPU for inference (requires Startup plan at least).

####