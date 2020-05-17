
# @huggingface/hub

## Classes

- [ApiError](classes/ApiError)

## Interfaces

- [CommitDeletedEntry](interfaces/CommitDeletedEntry)
- [CommitFile](interfaces/CommitFile)
- [CommitOutput](interfaces/CommitOutput)
- [CommitParams](interfaces/CommitParams)
- [Credentials](interfaces/Credentials)
- [FileDownloadInfoOutput](interfaces/FileDownloadInfoOutput)
- [ListFileEntry](interfaces/ListFileEntry)
- [RepoId](interfaces/RepoId)

## Type Aliases

### AccessToken

Ƭ **AccessToken**: `string`

Actually `hf_${string}`, but for convenience, using the string type

#### Defined in

[hub/src/types/repo.d.ts:9](https://github.com/huggingface/huggingface.js/blob/main/packages/hub/src/types/repo.d.ts#L9)

___

### CommitOperation

Ƭ **CommitOperation**: [`CommitDeletedEntry`](interfaces/CommitDeletedEntry) \| [`CommitFile`](interfaces/CommitFile)

#### Defined in

[hub/src/lib/commit.ts:43](https://github.com/huggingface/huggingface.js/blob/main/packages/hub/src/lib/commit.ts#L43)

___

### RepoType

Ƭ **RepoType**: ``"space"`` \| ``"dataset"`` \| ``"model"``

#### Defined in

[hub/src/types/repo.d.ts:1](https://github.com/huggingface/huggingface.js/blob/main/packages/hub/src/types/repo.d.ts#L1)

___

### SpaceHardwareFlavor

Ƭ **SpaceHardwareFlavor**: ``"cpu-basic"`` \| ``"cpu-upgrade"`` \| ``"t4-small"`` \| ``"t4-medium"`` \| ``"a10g-small"`` \| ``"a10g-large"`` \| ``"a100-large"``

#### Defined in

[hub/src/types/repo.d.ts:15](https://github.com/huggingface/huggingface.js/blob/main/packages/hub/src/types/repo.d.ts#L15)

___

### SpaceSdk

Ƭ **SpaceSdk**: ``"streamlit"`` \| ``"gradio"`` \| ``"docker"`` \| ``"static"``

#### Defined in

[hub/src/types/repo.d.ts:24](https://github.com/huggingface/huggingface.js/blob/main/packages/hub/src/types/repo.d.ts#L24)

## Functions

### commit

▸ **commit**(`params`): `Promise`<[`CommitOutput`](interfaces/CommitOutput)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`CommitParams`](interfaces/CommitParams) |

#### Returns

`Promise`<[`CommitOutput`](interfaces/CommitOutput)\>

#### Defined in

[hub/src/lib/commit.ts:344](https://github.com/huggingface/huggingface.js/blob/main/packages/hub/src/lib/commit.ts#L344)

___

### createRepo

▸ **createRepo**(`params`): `Promise`<{ `repoUrl`: `string`  }\>