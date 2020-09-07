# Interface: ObjectDetectionReturnValue

## Properties

### box

• **box**: `Object`

A dict (with keys [xmin,ymin,xmax,ymax]) representing the bounding box of a detected object.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `xmax` | `number` |
| `xmin` | `number` |
| `ymax` | `number` |
| `ymin` | `number` |

#### Defined in

[HfInference.ts:411](https://github.com/huggingface/huggingface.js/blob/main/packages/inference/src/HfInference.ts#L411)

___

### label

• **label**: `string`

The label for the class (