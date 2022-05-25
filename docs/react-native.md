---
title: React Native
---

## プロジェクト作成

```bash title=コマンド実行
npx react-native init [project-name]

# TypeScriptはこっち
npx react-native init [project-name] --template react-native-template-typescript
```

## Tips

### グローバル変数を扱う際の注意

アプリ起動後、物理ボタンのBackキーでアプリを終了させると以下のような状態になる。

- アクティビティの`onDestroy`が実行される
- プロセスは残ったまま

次回アプリ起動時にReactのコンポーネントはすべてマウントし直されるが、プロセスが残っているため、グローバル変数は状態を保持する。

場合によっては、その動作が不具合に繋がる可能性もあり、以下のいずれかの方法で回避可能。

- プロセスを終了する

  ```java title=MainActivity.java
  @Override
  public void invokeDefaultOnBackPressed() {
    System.exit(0);
  }
  ```

- アクティビティをバックグラウンド状態にする

  ```java title=MainActivity.java
  @Override
  public void invokeDefaultOnBackPressed() {
    if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.R) {
      if (!moveTaskToBack(false)) {
        super.invokeDefaultOnBackPressed();
      }
      return;
    }

    super.invokeDefaultOnBackPressed();
  }
  ```

  :::info
  詳細は、[expo-template-bare-minimumの対策](https://github.com/expo/expo/pull/15378)を参照。
  :::
