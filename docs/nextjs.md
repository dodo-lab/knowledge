---
title: Next.js
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

## パフォーマンス計測

カスタムAppコンポーネントを作成し、以下のようにreportWebVitals関数をエクスポートすることで計測。
ログ出力しているが、アナリティクスへ送信して後から追跡することも可能。

```ts title=pages/_app.js
export function reportWebVitals(metric) {
  console.log(metric);
}

function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default CustomApp;
```

詳細は[公式](https://nextjs-ja-translation-docs.vercel.app/docs/advanced-features/measuring-performance)を参照。

## デバッグ

### Step 1：Next.jsアプリを起動

環境変数`NODE_OPTIONS`に`--inspect`を指定の上、`next dev`で実行する。

下記のように、`package.json`にデバッグ用のスクリプトを定義しておくと便利。

```json title=package.json
"scripts": {
  "dev": "cross-env NODE_OPTIONS='--inspect' next dev",
}
```

### Step 2：デバッグ開始

Chrome Devtools、VSCodeの2パターンある。

- Chrome Devtools

  1. Chromeで`chrome://inspect`にアクセスすると、Remote Targetに起動しているNext.jsアプリが表示される
  2. Next.jsアプリの`inspect`をクリックし、デバッグ開始

- VSCode

  1. `.vscode/launch.json`ファイルを作成

     ```json title=.vscode/launch.json
     {
       "version": "0.2.0",
       "configurations": [
         {
           "name": "Next: Server",
           "type": "node",
           "request": "attach",
           "skipFiles": ["<node_internals>/**"],
           "port": 9229
         },
         {
           "name": "Next: Client",
           "type": "pwa-chrome",
           "request": "launch",
           "url": "http://localhost:3000",
           "webRoot": "${workspaceFolder}",
           "sourceMaps": true,
           "sourceMapPathOverrides": {
             "webpack://_N_E/*": "${webRoot}/*"
           }
         }
       ]
     }
     ```

  2. `F5`を押下し、デバッグ開始

## Tips

- `getStaticProps`はビルド時のみ実行されるが、開発中（`next dev`）に限ってはリクエストごとに実行される。
- 任意の場所に`// @refresh reset`のコメントを入れることで、ファイルを更新するたびに対象コンポーネントの状態を強制的にリセットし、再マウントさせることが可能。
