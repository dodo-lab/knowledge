---
title: Dart
---

## Tips

### [assert](https://dart.dev/guides/language/language-tour#assert)動作の環境差異

本番環境では無視される。開発環境では、条件が偽の場合に例外をスローする。

### [late](https://dart.dev/guides/language/language-tour#late-variables)の初期化

```dart
late String userName = _loadUserName();
```

上記のように、宣言と同時に初期化するようなコードの場合、`userName`が最初に使われるタイミングで初期化（`_loadUserName()`が実行）される。

### 引数のデフォルト値の非推奨事項

引数のデフォルト値を設定するために、古い記述のコードでは`:`（コロン）が使われている場合がある。現在は`=`が推奨されており、`:`は非サポートになる可能性がある。

### 戻り値を指定しない関数

戻り値を指定しない関数は`NULL`を返却する。

```dart
foo() {}
assert(foo() == null);
```

### 型の検証

`object is Type`と`object.runtimeType == Type`の2パターンで型の検証が可能だが、前者（`object is Type`）の方がより安全に検証可能。

```dart
if (p is Point) {
  print('The type of p is Point');
}
```

### Style

- `class`、`enum`、`typedef`などは`UpperCamelCase`を使う
- 変数、定数、関数などは`lowerCamelCase`を使う
- ライブラリ、パッケージ、ディレクトリ、ファイル名などは`lowercase_with_underscores`を使う
- インポートプレフィックスは`lowercase_with_underscores`を使う

  ```dart
  import 'dart:math' as math;
  import 'package:angular_components/angular_components' as angular_components;
  ```

- 未使用のコールバックパラメータは`_`や`__`と定義する

  ```dart
  futureObj.then((_) {
    // callback
  })
  ```
