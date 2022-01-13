---
title: Next.js
sidebar_position: 5
---

## プロジェクト作成

```bash
npx create-next-app [project-name]

# TypeScriptならこっち
npx create-next-app [project-name] --typescript
```

## 環境変数

次の環境変数の定義用ファイルに記述することで、利用可能。

- `.env.development`

  開発環境用。`next dev`で有効になる。

- `.env.production`

  本番環境用。`next start`で有効になる。

- `.env.local`

  ローカル環境用で、`.env.development`や`.env.production`の内容を上書きする。そのため、`.gitignore`でGit管理対象外にしておくべき。

  基本的には`.env.development`をチーム内で共有しておけば事足りるはずだが、個人的に試したいことがある際に有用。

- `.env.test`

  テスト環境用。`NODE_ENV`に`test`が設定されている場合に有効。`.env.local`に上書きされない特徴がある。

:::info
環境変数は基本的に`getStaticProps`や`getServerSideProps`といったSGのビルド／SSRのタイミングで参照可能。
ただし、変数名の先頭に`NEXT_PUBLIC_`を付与するとインライン展開され、クライアント側でも参照可能になる。
:::

## Tips

- `getStaticProps`はビルド時のみ実行されるが、開発中（`next dev`）に限ってはリクエストごとに実行される。
- 任意の場所に`// @refresh reset`のコメントを入れることで、ファイルを更新するたびに対象コンポーネントの状態を強制的にリセットし、再マウントさせることが可能。
