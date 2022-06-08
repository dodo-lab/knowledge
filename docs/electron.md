---
title: Electron
---

## アプリの実行ファイル作成

`Electron Forge`を利用する。

```bash title=コマンド実行
# Electron Forgeをインストール
npm i -D @electron-forge/cli

# Electron Forgeのセットアップ
npx electron-forge import
```

セットアップが完了すると、`package.json`のスクリプトに`make`コマンドが追加されているため、それを実行する。

```bash title=コマンド実行
npm run make
```

`make`コマンドが成功すると、`out`フォルダに実行ファイルが作成される。

## Tips

### 双方向のIPC通信はinvokeが推奨されている

次の方法でも双方向のIPC通信は可能だが、それぞれデメリットがある。

- `ipcRenderer.send`と`ipcRenderer.on`の組み合わせ

  `ipcRenderer.invoke`であれば1回のやりとりで双方向の通信が可能だが、上記の組み合わせだと`ipcRenderer.on`で受信用のコーディングが必要となるため、冗長になる。
  また、`ipcRenderer.send`で送信したメッセージと、`ipcRenderer.on`で受信するメッセージが連動している保証がない。

- `ipcRenderer.sendSync`

  同期処理になるため、パフォーマンスが悪くなる。
