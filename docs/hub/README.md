# 🤗 Hugging Face Hub API

Official utilities to use the Hugging Face hub API, still very experimental.

```
npm add @huggingface/hub
```

## Usage

For some of the calls, you need to create an account and generate an [access token](https://huggingface.co/settings/tokens).

```ts
import { createRepo, commit, deleteRepo, listFiles } from "@huggingface/hub";
import type { RepoId, Credentials } from "@huggingface/hub";

const repo: RepoId = { type: "model", name: "myname/some-model" };
const credentials: Credentials = { accessToken: "hf_..." };

await createRepo({ repo, credentials, license: "mit" });

await commit({
  repo,
  credentials,
  operations: [
    {
      operation: "addOrUpdate",
      path: "file.txt",
      content: new Blob(["Hello World"]),
    },
  ],
});

await (await downloadFile({ repo, path: "README.md" })).text();

for await (const fileInfo of listFiles({repo})) {
  console.log(fileInfo);
}

await deleteRepo({ repo, credentials });
```

## Performance considerations

When uploading large files, you may want to run th