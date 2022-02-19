---
title: Next.js
---

## プロジェクト作成

### 新規作成

```bash title=コマンド実行
npx create-next-app [Project-Name]

# TypeScriptならこっち
npx create-next-app [Project-Name] --typescript
```

### テンプレートから作成

```bash title=コマンド実行
npx create-next-app [Project-Name] --example [GitHub-URL]
```

:::warning
`[GitHub-URL]`には`.git`を含めない
:::

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

// TypeScriptの場合
export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}
```

詳細は[公式](https://nextjs.org/docs/advanced-features/measuring-performance)を参照。

## パフォーマンス改善

### Router.prefetch

ページ遷移を高速化するために、ページをプリフィッチ（事前に読み込み）する。

```ts
import Router from 'next/router';

Router.prefetch(url, as);
```

:::info
`next/link`を用いないページ遷移のみ有用。というのも、`next/link`は自動的にページをプリフェッチしているため、`Router.prefetch`が不要。
:::

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

## 開発環境のSSL化

### 証明局と証明書の準備

- 証明局の準備

  以下のコマンドを管理者権限で実行。

  ```bash title=コマンド実行
  choco install mkcert
  mkcert -install
  ```

- 証明書の作成

  Next.jsプロジェクト内の任意の場所で以下のコマンドを実行。

  ```bash title=コマンド実行
  # 引数はドメイン名やIPを指定
  mkcert localhost 127.0.0.1
  ```

  ファイルが作成されるため、以下のようにファイル名を変更しておく。

  ```text
  localhost+1.pem → cert.pem
  localhost+1-key.pem → key.pem
  ```

### カスタムサーバーの準備

- Next.jsプロジェクトの直下に`server.js`を作成

  ```js title=server.js
  const { createServer } = require('https');
  const { parse } = require('url');
  const next = require('next');
  const fs = require('fs');

  const dev = process.env.NODE_ENV !== 'production';
  const hostname = dev ? 'localhost' : 'example.com';
  const port = dev ? 3000 : 443;
  const app = next({ dev, hostname, port });
  const handle = app.getRequestHandler();

  const httpsOptions = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem'),
  };

  app.prepare().then(() => {
    createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on https://${hostname}:${port}`);
    });
  });
  ```

### 実行

- `package.json`を書き換える

  ``` diff json title=package.json
  "scripts": {
  - "dev": "next dev",
  + "dev": "node server.js",
  }
  ```

- `npm run dev`で実行

## Tips

- `getStaticProps`はビルド時のみ実行されるが、開発中（`next dev`）に限ってはリクエストごとに実行される。
- 任意の場所に`// @refresh reset`のコメントを入れることで、ファイルを更新するたびに対象コンポーネントの状態を強制的にリセットし、再マウントさせることが可能。
