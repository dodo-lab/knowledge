---
title: JavaScript Security
---

## CSP の影響

CSPを導入すると、デフォルトでインラインJavaScriptとeval関数が無効になる。

ただし、`unsafe-eval`や`unsafe-inline`を指定することで有効にできる。

## サードパーティ依存関係の脆弱性検知

以下のようなツールを使用し、脆弱性を検知する。

- Retire.js

  クライアント側のJavaScriptライブラリを調べ、脆弱性が含まれているか検知する。

- Snyk.io

  Node.jsプロジェクトのセキュリティ脆弱性を検知する。

## クロスサイトスクリプティング(XSS)

XSS攻撃を防止するための各種戦略。

### HTML サニタイズ

[DOMPurify](https://github.com/cure53/DOMPurify)が有名。

### 安全なメソッドとプロパティの使用

- `.innerHTML`や`document.write()`などは使用しない
- 代わりに、`createTextNote()` / `.textContent` / `.value` / `.className`などを使用する

### JSON の適切な取り扱い

- 適切なHTTPヘッダーの設定

  Content-Type HTTPヘッダーが、text/htmlではなく、application/jsonに設定されていることを確認。これにより、ブラウザや他のクライアントは適切にデータをJSONとして認識する。

- JavaScriptオブジェクトの変換

  eval() を使用せず、代わりにJSON.parse (data) またはdata.toJSON() を使用する。

- JSONのシリアル化

  HTMLにJSONを埋め込む場合は、JSONをシリアル化する。JSON [シリアル化ライブラリ](https://github.com/yahoo/serialize-javascript)などを使用してJSONをシリアル化する。

### Content-Security-Policy(CSP)

適切に構成された [Content-Security-Policy](https://content-security-policy.com/) (CSP) HTTPレスポンス ヘッダーをアプリケーションに実装する。これは「安全な」スクリプト ホストを許可リストに登録し、インライン スクリプトに対するノンスの使用を制限または強制することでXSSやその他のデータ インジェクション攻撃を減少させる、最新のブラウザ機能。
