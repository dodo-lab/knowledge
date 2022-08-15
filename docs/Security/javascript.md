---
title: JavaScript Security
---

## CSPの影響

CSPを導入すると、デフォルトでインラインJavaScriptとeval関数が無効になる。

ただし、`unsafe-eval`や`unsafe-inline`を指定することで有効にできる。

## サードパーティ依存関係の脆弱性検知

以下のようなツールを使用し、脆弱性を検知する。

- Retire.js

  クライアント側のJavaScriptライブラリを調べ、脆弱性が含まれているか検知する。

- Snyk.io

  Node.jsプロジェクトのセキュリティ脆弱性を検知する。
