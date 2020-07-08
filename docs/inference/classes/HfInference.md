# Class: HfInference

## Constructors

### constructor

• **new HfInference**(`apiKey?`, `defaultOptions?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `apiKey` | `string` | `""` |
| `defaultOptions` | [`Options`](../interfaces/Options) | `{}` |

#### Defined in

[HfInference.ts:507](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L507)

## Properties

### apiKey

• `Private` `Readonly` **apiKey**: `string`

#### Defined in

[HfInference.ts:504](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L504)

___

### defaultOptions

• `Private` `Readonly` **defaultOptions**: [`Options`](../interfaces/Options)

#### Defined in

[HfInference.ts:505](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L505)

## Methods

### audioClassification

▸ **audioClassification**(`args`, `options?`): `Promise`<[`AudioClassificationReturn`](../modules#audioclassificationreturn)\>

This task reads some audio input and outputs the likelihood of classes.
Recommended model:  superb/hubert-large-superb-er

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AudioClassificationArgs`](../modules#audioclassificationargs) |
| `options?` | [`Options`](../interfaces/Options) |

#### Returns

`Promise`<[`AudioClassificationReturn`](../modules#audioclassificationreturn)\>

#### Defined in

[HfInference.ts:617](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L617)

___

### automaticSpeechRecognition

▸ **automaticSpeechRecognition**(`args`, `options?`): `Promise`<[`AutomaticSpeechRecognitionReturn`](../interfaces/AutomaticSpeechRecognitionReturn)\>

This task reads some audio input and outputs the said words within the audio files.
Recommended model (english language): facebook/wav2vec2-large-960h-lv60-self

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`AutomaticSpeechRecognitionArgs`](../modules#automaticspeechrecognitionargs) |
| `options?` | [`Options`](../interfaces/Options) |

#### Returns

`Promise`<[`AutomaticSpeechRecognitionReturn`](../interfaces/AutomaticSpeechRecognitionReturn)\>

#### Defined in

[HfInference.ts:603](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L603)

___

### conversational

▸ **conversational**(`args`, `options?`): `Promise`<[`ConversationalReturn`](../interfaces/ConversationalReturn)\>

This task corresponds to any chatbot like structure. Models tend to have shorter max_length, so please check with caution when using a given model if you need long range dependency or not. Recommended model: microsoft/DialoGPT-large.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ConversationalArgs`](../modules#conversationalargs) |
| `options?` | [`Options`](../interfaces/Options) |

#### Returns

`Promise`<[`ConversationalReturn`](../interfaces/ConversationalReturn)\>

#### Defined in

[HfInference.ts:588](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L588)

___

### featureExtraction

▸ **featureExtraction**(`args`, `options?`): `Promise`<[`FeatureExtractionReturn`](../modules#featureextractionreturn)\>

This task reads some text and outputs raw float values, that are usually consumed as part of a semantic database/semantic search.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`FeatureExtractionArgs`](../modules#featureextractionargs) |
| `options?` | [`Options`](../interfaces/Options) |

#### Returns

`Promise`<[`FeatureExtractionReturn`](../modules#featureextractionreturn)\>

#### Defined in

[HfInference.ts:595](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L595)

___

### fillMask

▸ **fillMask**(`args`, `options?`): `Promise`<[`FillMaskReturn`](../modules#fillmaskreturn)\>

Tries to fill in a hole with a missing word (token to be precise). That’s the base task for BERT models.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`FillMaskArgs`](../modules#fillmaskargs) |
| `options?` | [`Options`](../interfaces/Options) |

#### Returns

`Promise`<[`FillMaskReturn`](../modules#fillmaskreturn)\>

#### Defined in

[HfInference.ts:515](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L515)

___

### imageClassification

▸ **imageClassification**(`args`, `options?`): `Promise`<[`ImageClassificationReturn`](../modules#imageclassificationreturn)\>

This task reads some image input and outputs the likelihood of classes.
Recommended model: google/vit-base-patch16-224

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ImageClassificationArgs`](../modules#imageclassificationargs) |
| `options?` | [`Options`](../interfaces/Options) |

#### Returns

`Promise`<[`ImageClassificationReturn`](../modules#imageclassificationreturn)\>

#### Defined in

[HfInference.ts:631](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L631)

___

### imageSegmentation

▸ **imageSegmentation**(`args`, `options?`): `Promise`<[`ImageSegmentationReturn`](../modules#imagesegmentationreturn)\>

This task reads some image input and outputs the likelihood of classes & bounding boxes of detected objects.
Recommended model: facebook/detr-resnet-50-panoptic

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ImageSegmentationArgs`](../modules#imagesegmentationargs) |
| `options?` | [`Options`](../interfaces/Options) |

#### Returns

`Promise`<[`ImageSegmentationReturn`](../modules#imagesegmentationreturn)\>

#### Defined in

[HfInference.ts:656](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L656)

___

### objectDetection

▸ **objectDetection**(`args`, `options?`): `Promise`<[`ObjectDetectionReturn`](../modules#objectdetectionreturn)\>

This task reads some image input and outputs the likelihood of classes & bounding boxes of detected objects.
Recommended model: facebook/detr-resnet-50

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ObjectDetectionArgs`](../modules#objectdetectionargs) |
| `options?` | [`Options`](../interfaces/Options) |

#### Returns

`Promise`<[`ObjectDetectionReturn`](../modules#objectdetectionreturn)\>

#### Defined in

[HfInference.ts:645](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L645)

___

### questionAnswer

▸ **questionAnswer**(`args`, `options?`): `Promise`<[`QuestionAnswerReturn`](../interfaces/QuestionAnswerReturn)\>

Want to have a nice know-it-all bot that can answer any question?. Recommended model: deepset/roberta-base-squad2

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`QuestionAnswerArgs`](../modules#questionanswerargs) |
| `options?` | [`Options`](../interfaces/Options) |

#### Returns

`Promise`<[`QuestionAnswerReturn`](../interfaces/QuestionAnswerReturn)\>

#### Defined in

[HfInference.ts:529](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L529)

___

### request

▸ **request**(`args`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`Args`](../interfaces/Args) & { `data?`: `any`  } |
| `options?` | [`Options`](../interfaces/Options) & { `binary?`: `boolean` ; `blob?`: `boolean`  } |

#### Returns

`Promise`<`any`\>

#### Defined in

[HfInference.ts:674](https://github.com/huggingface/huggingface.js/blob/main/packages/infer