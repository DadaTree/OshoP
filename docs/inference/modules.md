
# @huggingface/inference

## Classes

- [HfInference](classes/HfInference)

## Interfaces

- [Args](interfaces/Args)
- [AudioClassificationReturnValue](interfaces/AudioClassificationReturnValue)
- [AutomaticSpeechRecognitionReturn](interfaces/AutomaticSpeechRecognitionReturn)
- [ConversationalReturn](interfaces/ConversationalReturn)
- [ImageClassificationReturnValue](interfaces/ImageClassificationReturnValue)
- [ImageSegmentationReturnValue](interfaces/ImageSegmentationReturnValue)
- [ObjectDetectionReturnValue](interfaces/ObjectDetectionReturnValue)
- [Options](interfaces/Options)
- [QuestionAnswerReturn](interfaces/QuestionAnswerReturn)
- [SummarizationReturn](interfaces/SummarizationReturn)
- [TableQuestionAnswerReturn](interfaces/TableQuestionAnswerReturn)
- [TextGenerationReturn](interfaces/TextGenerationReturn)
- [TokenClassificationReturnValue](interfaces/TokenClassificationReturnValue)
- [TranslationReturn](interfaces/TranslationReturn)
- [ZeroShotClassificationReturnValue](interfaces/ZeroShotClassificationReturnValue)

## Type Aliases

### AudioClassificationArgs

Ƭ **AudioClassificationArgs**: [`Args`](interfaces/Args) & { `data`: `any`  }

#### Defined in

[HfInference.ts:468](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L468)

___

### AudioClassificationReturn

Ƭ **AudioClassificationReturn**: [`AudioClassificationReturnValue`](interfaces/AudioClassificationReturnValue)[]

#### Defined in

[HfInference.ts:487](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L487)

___

### AutomaticSpeechRecognitionArgs

Ƭ **AutomaticSpeechRecognitionArgs**: [`Args`](interfaces/Args) & { `data`: `any`  }

#### Defined in

[HfInference.ts:454](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L454)

___

### ConversationalArgs

Ƭ **ConversationalArgs**: [`Args`](interfaces/Args) & { `inputs`: { `generated_responses?`: `string`[] ; `past_user_inputs?`: `string`[] ; `text`: `string`  } ; `parameters?`: { `max_length?`: `number` ; `max_time?`: `number` ; `min_length?`: `number` ; `repetition_penalty?`: `number` ; `temperature?`: `number` ; `top_k?`: `number` ; `top_p?`: `number`  }  }

#### Defined in

[HfInference.ts:307](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L307)

___

### FeatureExtractionArgs

Ƭ **FeatureExtractionArgs**: [`Args`](interfaces/Args) & { `inputs`: `Record`<`string`, `any`\> \| `Record`<`string`, `any`\>[]  }

#### Defined in

[HfInference.ts:363](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L363)

___

### FeatureExtractionReturn

Ƭ **FeatureExtractionReturn**: (`number` \| `number`[])[]

Returned values are a list of floats, or a list of list of floats (depending on if you sent a string or a list of string, and if the automatic reduction, usually mean_pooling for instance was applied for you or not. This should be explained on the model's README.

#### Defined in

[HfInference.ts:378](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L378)

___

### FillMaskArgs

Ƭ **FillMaskArgs**: [`Args`](interfaces/Args) & { `inputs`: `string`  }

#### Defined in

[HfInference.ts:25](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L25)

___

### FillMaskReturn

Ƭ **FillMaskReturn**: { `score`: `number` ; `sequence`: `string` ; `token`: `number` ; `token_str`: `string`  }[]

#### Defined in

[HfInference.ts:29](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L29)

___

### ImageClassificationArgs

Ƭ **ImageClassificationArgs**: [`Args`](interfaces/Args) & { `data`: `any`  }

#### Defined in

[HfInference.ts:380](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L380)

___

### ImageClassificationReturn

Ƭ **ImageClassificationReturn**: [`ImageClassificationReturnValue`](interfaces/ImageClassificationReturnValue)[]

#### Defined in

[HfInference.ts:398](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L398)

___

### ImageSegmentationArgs

Ƭ **ImageSegmentationArgs**: [`Args`](interfaces/Args) & { `data`: `any`  }

#### Defined in

[HfInference.ts:430](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L430)

___

### ImageSegmentationReturn