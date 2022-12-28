---
title: Go
---

## コマンド

### go.mod の初期化

```bash title=コマンド実行
go mod init [module_name]

# 例
go mod init example.com/test
```

### 依存関係の追加

```bash title=コマンド実行
go get [module_name]

# '.'を指定すると、カレントディレクトリのコードの依存関係を追加する.
go get .
```

### 依存関係の自動更新

モジュール配下のソースコードから必要なモジュールを追加したり、不要なモジュールを削除してくれる。

```bash title=コマンド実行
  go mod tidy
```

### ローカルのモジュールを参照（参照するモジュールを置き換え）

```bash title=コマンド実行
  go mod edit -replace [置き換え前のモジュール名]=[置き換え後のモジュールのパス]

  # 例
  go mod edit -replace example.com/test=../test
```

### ワークスペースの作成

```bash title=コマンド実行
go work init [モジュールのディレクトリ]
```

### ワークスペースにモジュールを追加

```bash title=コマンド実行
go work use [モジュールのディレクトリ]
```

### Go の環境変数

```bash title=コマンド実行
# 環境変数を表示
go env

# 環境変数を設定
go env -w [環境変数名]=[値]

# 環境変数の解除
go env -u [環境変数名]
```

### 実行

```bash title=コマンド実行
  # 実行するディレクトリで...
  go run .
```

### テスト

```bash title=コマンド実行
  # テストコードがあるディレクトリで...
  go test

  # テスト結果を詳細表示する場合...
  go test -v
```

### ビルド

```bash title=コマンド実行
  go build
```

### インストール

インストール先は次の順番で決定する。

1. 環境変数`GOBIN`が設定されている場合、`$GOBIN`にインストールされる
2. 環境変数`GOPATH`が設定されている場合、`$GOPATH/bin`にインストールされる
3. `$HOME/go/bin`にインストールされる

```bash title=コマンド実行
  go install
```
