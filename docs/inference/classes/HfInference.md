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

▸ **automaticSpeechRecognition**(`args`, `options?`): `Promise`<[`AutomaticSpeechRecognitionReturn