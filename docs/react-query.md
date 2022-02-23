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

### グローバルなインジケータ

いずれかのフェッチ中にグローバルなインジケータを表示したい場合、次のように`useIsFetching`を利用することで実現可能。

```ts
import {CircularProgress} from '@mui/material';
import React from 'react';
import {useIsFetching} from 'react-query';

const GlobalFetchingIndicator: React.FC = () => {
  const isFetching = useIsFetching();

  return isFetching ? (
    <CircularProgress sx={{position: 'absolute', top: 10, right: 10}} size={24} />
  ) : null;
};
```

:::info
実装例では`mui`を使用している。
:::

### 新たなフェッチ中に古いデータを表示

SPA等でページや一部コンテンツを切替える際、フェッチ中は古いデータを表示しておきたいケース。

`config`の`keepPreviousData`に`true`を設定することで実現可能。

```ts title=Reactのコンポーネント内
// isPreviousDataがtrueなら古いdataを返している
const { data, isPreviousData } = useQuery(['page', page], getPageContents, {
  keepPreviousData: true
});
```

### initialDataとplaceholderDataの使い分け

- initialData

  期待するクエリのレスポンスをすでにアプリ側で保持している場合に使用。
  `config.initialData`にデータを設定することで、データがキャッシュに保存され、初回のロードをスキップする。

- placeholderData

  クエリのレスポンスを待たず、疑似レスポンスをレイアウトへ反映したい場合に使用。
  `initialData`と似ているが、こちらはキャッシュに保存されない。あくまでクエリの実行結果が返ってくるまでのレンダリングに使う一時的なデータ。

### 事前にクエリをキャッシュする

実行される可能性のあるクエリを予測できるのであれば、事前にキャッシュをしておくことでUXを向上できる。
事前にキャッシュをするには、`prefetchQuery`を使用する。

```ts title=Reactのコンポーネント内
const queryClient = useQueryClient();
const prefetchAccount = async () => {
  await queryClient.prefetchQuery(['account', email], getAccountByEmail);
};
```

### Queryで取得したデータを変換

`useQuery`などで取得したデータを変換する手段は次のとおり。

- `queryFn`内での変換

  ```ts
  const getTodos = async (): Promise<Todo[]> => {
    const res = await axios.get<Todo[]>('todos');
    return res.data.map(todo => todo.name.toUpperCase());
  }

  export const useGetTodos = () => useQuery('todos', getTodos);
  ```

- カスタムフックで変換

  ```ts
  const getTodos = async (): Promise<Todo[]> => {
    const res = await axios.get<Todo[]>('todos');
    return res.data;
  }

  export const useGetTodos = () => {
    const query = useQuery('todos', getTodos)

    return {
      ...query,
      data: useMemo(
        () => query.data?.map(todo => todo.name.toUpperCase()),
        [query.data]
      ),
    }
  }
  ```

- `useQuery`の`select`オプションで変換

  ```ts
  const getTodos = async (): Promise<Todo[]> => {
    const res = await axios.get<Todo[]>('todos');
    return res.data;
  }

  export const useGetTodos = () => {
    return useQuery('todos', getTodos, {
      select: useCallback(
        (data: Todo[]) => data.map(todo => todo.name.toUpperCase()),
        []
      ),
    })
  }
  ```

### 再レンダリングを抑制

`useQuery`を使うと、`isLoading`や`isFetching`などのパラメータが更新されるたびに再レンダリングされる。

これを抑制するには、次の手段がある。

- `notifyOnChangeProps`オプションで、再レンダリング対象のパラメータを指定

  ```ts title=dataが更新された時だけ再レンダリング
  const { data } = useQuery(['account', email], getAccountByEmail, {
    notifyOnChangeProps: ['data'],
  });
  ```

  :::warning
  上記の例で、`isLoading`や`error`などをレンダリングに反映したい場合は都度`notifyOnChangeProps`を更新する必要があるため、次のようなデメリットがある。
  - メンテナンスコストの増加
  - 更新漏れがあった際に、レンダリングに反映されない不具合が発生
  :::

- `notifyOnChangeProps`オプションで、`'tracked'`を指定

  `'tracked'`の指定により、レンダリングに使用しているパラメータを追跡し、必要なパラメータが更新された時のみ再レンダリングする。

  ```ts title=dataとisLoadingが更新された時だけ再レンダリング
  const { data, isLoading } = useQuery(['account', email], getAccountByEmail, {
    notifyOnChangeProps: 'tracked',
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {data && <p>data.name</p>}
    </>
  );
  ```

  次のように、グローバルに適用することも可能。

  ```ts
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        notifyOnChangeProps: 'tracked',
      },
    },
  });

  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider>
    )
  }
  ```
