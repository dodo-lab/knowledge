---
title: npm
---

## scriptsのコマンド実行前に環境変数を設定

`Linux / Mac`と`Windows`で環境変数の設定方法に差異があるため、`cross-env`を使って記述を統一する。

```bash title=cross-envのインストール
npm i -D cross-env
```

```json title=package.json
"scripts": {
  "debug": "cross-env NODE_OPTIONS='--inspect' next dev",
}
```
