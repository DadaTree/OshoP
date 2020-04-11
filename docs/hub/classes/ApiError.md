# Class: ApiError

Error thrown when an API call to the Hugging Face Hub fails.

## Hierarchy

- `Error`

  ↳ **`ApiError`**

## Constructors

### constructor

• **new ApiError**(`url`, `statusCode`, `requestId?`, `message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `statusCode` | `number` |
| `requestId?` | `string` |
| `message?` | `string` |

#### Overrides

Error.constructor

#### Defined in

[hub/src/error.ts:33](https://github.com/huggingface/huggingface.js/blob/main/packages/hub/src/error.ts#L33)

## Proper