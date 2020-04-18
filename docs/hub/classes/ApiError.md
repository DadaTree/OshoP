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

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

doc-internal/node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es2022.error.d.ts:26

___

### data

• `Optional` **data**: `JsonObject`

#### Defined in

[hub/src/error.ts:31](https://github.com/huggingface/huggingface.js/blob/main/packages/hub/src/error.ts#L31)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

doc-internal/node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

doc-internal/node_modules/.pnpm/typescript@4.9.5/node_modules/typescript/lib/lib.es5.d.ts:1053

___

### requestId

• `Optional` **requestId**: `string`

#### Defined in

[hub/src/error.ts:30](https://github.com/huggingface/huggingface.js/blob/main/packages/hub/src/error.ts#L30)

___

### stack

• `Optional` **stack**: `string`

#### Inherite