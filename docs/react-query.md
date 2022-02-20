---
title: React Query
---

## Tips

### Queryの依存関係

複数の`Query`を扱う際に、依存関係を持たせたい場合がある。
例えば、アカウント情報を取得してから、そのアカウントが所属している部署情報を取得する…といったケース。

以下のように、`enabled`オプションを指定することで実現可能。

```ts title=Reactのコンポーネント内
// アカウント情報を取得
const { data: account } = useQuery(['account', email], getAccountByEmail);
const accountId = account?.id

// アカウントが所属する部署情報を取得
const { data: department } = useQuery(
  ['departments', accountId],
  getDepartmentsByAccount,
  {
    // アカウント情報(ID)が取得できるまで、このQueryは実行されない
    enabled: !!accountId,
  }
)
```
