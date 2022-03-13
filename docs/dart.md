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

### linterで検知できない[Effective Dart: Usage](https://dart.dev/guides/language/effective-dart/usage)

- [`part of`を使う場合は相対パスで指定する](https://dart.dev/guides/language/effective-dart/usage#do-use-strings-in-part-of-directives)
- [nullをbooleanに変換する場合は`??`を使う](https://dart.dev/guides/language/effective-dart/usage#prefer-using--to-convert-null-to-a-boolean-value)
- [初期化されているか確認する必要があるなら`late`を使わない](https://dart.dev/guides/language/effective-dart/usage#avoid-late-variables-if-you-need-to-check-whether-they-are-initialized)
- [nullableなフィールドをローカル変数にコピーして、型推論をさせる](https://dart.dev/guides/language/effective-dart/usage#avoid-late-variables-if-you-need-to-check-whether-they-are-initialized)
- [型を変更する必要がなければ`List.from()`を使用しない](https://dart.dev/guides/language/effective-dart/usage#dont-use-listfrom-unless-you-intend-to-change-the-type-of-the-result)
- [Generatorなどで済む場合は`cast()`を使わない](https://dart.dev/guides/language/effective-dart/usage#dont-use-cast-when-a-nearby-operation-will-do)
- [可能な限り`cast()`を使わない](https://dart.dev/guides/language/effective-dart/usage#avoid-using-cast)
- [`var`と`final`に一貫性を持たせる](https://dart.dev/guides/language/effective-dart/usage#do-follow-a-consistent-rule-for-var-and-final-on-local-variables)
- [計算できるものをメンバとして保持しない](https://dart.dev/guides/language/effective-dart/usage#avoid-storing-what-you-can-calculate)
- [コンストラクタに依存しないのであれば、宣言時に初期化する](https://dart.dev/guides/language/effective-dart/usage#do-initialize-fields-at-their-declaration-when-possible)
- [コンストラクタの初期化リストで十分な場合は、`late`を使用しない](https://dart.dev/guides/language/effective-dart/usage#dont-use-late-when-a-constructor-initializer-list-will-do)
- [`catch`したエラーを適切に処理し、不用意に破棄しない](https://dart.dev/guides/language/effective-dart/usage#dont-discard-errors-from-catches-without-on-clauses)
- [プログラム上のエラーの場合のみ、Errorオブジェクトをスローする](https://dart.dev/guides/language/effective-dart/usage#do-throw-objects-that-implement-error-only-for-programmatic-errors)
- [`Future`をそのまま使わず、`async/await`を使って可読性を上げる](https://dart.dev/guides/language/effective-dart/usage#prefer-asyncawait-over-using-raw-futures)
- [有用な効果がない場合は`async`を使わない](https://dart.dev/guides/language/effective-dart/usage#prefer-asyncawait-over-using-raw-futures)
- [`stream`を変換するために高階関数を利用する](https://dart.dev/guides/language/effective-dart/usage#consider-using-higher-order-methods-to-transform-a-stream)
- [`Completer`を直接使わない](https://dart.dev/guides/language/effective-dart/usage#avoid-using-completer-directly)
- [`FutureOr<T>`の型を明確にするため、`is Future<T>`で検証する](https://dart.dev/guides/language/effective-dart/usage#do-test-for-futuret-when-disambiguating-a-futureort-whose-type-argument-could-be-object)
