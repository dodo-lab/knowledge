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
- [Genericsなどで済む場合は`cast()`を使わない](https://dart.dev/guides/language/effective-dart/usage#dont-use-cast-when-a-nearby-operation-will-do)
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

### linterで検知できない[Effective Dart: Design](https://dart.dev/guides/language/effective-dart/design)

- [必要でない限り宣言は`private`にする](https://dart.dev/guides/language/effective-dart/design#prefer-making-declarations-private)
- [1つのライブラリに複数のクラスを含めることを検討する](https://dart.dev/guides/language/effective-dart/design#consider-declaring-multiple-classes-in-the-same-library)
- [サブクラス化することを意図していない、もしくは不明なクラスの継承は避ける](https://dart.dev/guides/language/effective-dart/design#avoid-extending-a-class-that-isnt-intended-to-be-subclassed)
- [クラスが継承可能か文書化する](https://dart.dev/guides/language/effective-dart/design#do-document-if-your-class-supports-being-extended)
- [インターフェースと意図できないクラスの実装を避ける](https://dart.dev/guides/language/effective-dart/design#avoid-implementing-a-class-that-isnt-intended-to-be-an-interface)
- [クラスがインターフェースとして使用できるかを文書化する](https://dart.dev/guides/language/effective-dart/design#do-document-if-your-class-supports-being-used-as-an-interface)
- [コンストラクタを`const`にすることを検討する](https://dart.dev/guides/language/effective-dart/design#consider-making-your-constructor-const-if-the-class-supports-it)
- [フィールドにアクセスする操作は、`getter`を使用する](https://dart.dev/guides/language/effective-dart/design#do-use-getters-for-operations-that-conceptually-access-properties)
- [オーバーロードをごまかすために実行時の型テストの使用を避ける](https://dart.dev/guides/language/effective-dart/design#avoid-using-runtime-type-tests-to-fake-overloading)
- [初期化子をもたない`late final`のフィールドを避ける](https://dart.dev/guides/language/effective-dart/design#avoid-public-late-final-fields-without-initializers)
- [nullableな`Future`、`Stream`、`collection`を返さない](https://dart.dev/guides/language/effective-dart/design#avoid-returning-nullable-future-stream-and-collection-types)
- [関数宣言には戻り値の型を必ず記述する](https://dart.dev/guides/language/effective-dart/design#do-annotate-return-types-on-function-declarations)
- [関数宣言の引数の型は必ず記述する](https://dart.dev/guides/language/effective-dart/design#do-annotate-parameter-types-on-function-declarations)
- [推論されないGenericsの呼び出しは型を記述する](https://dart.dev/guides/language/effective-dart/design#do-write-type-arguments-on-generic-invocations-that-arent-inferred)
- [推論可能なGenericsの呼び出しには型を記述しない](https://dart.dev/guides/language/effective-dart/design#dont-write-type-arguments-on-generic-invocations-that-are-inferred)
- [不完全な汎用型を記述しない](https://dart.dev/guides/language/effective-dart/design#avoid-writing-incomplete-generic-types)
- [推論失敗ではなく、dynamicを明記する](https://dart.dev/guides/language/effective-dart/design#do-annotate-with-dynamic-instead-of-letting-inference-fail)
- [引数として関数を受け取る場合、受け取る関数の引数や戻り値を明記する](https://dart.dev/guides/language/effective-dart/design#prefer-signatures-in-function-type-annotations)
- [あらゆる型を受け取りたい時は`dynamic`ではなく、`Object`を検討する](https://dart.dev/guides/language/effective-dart/design#avoid-using-dynamic-unless-you-want-to-disable-static-checking)
- [値を返さない非同期関数の戻り値は`Future<void>`とする](https://dart.dev/guides/language/effective-dart/design#do-use-futurevoid-as-the-return-type-of-asynchronous-members-that-do-not-produce-values)
- [戻り値の型として`FutureOr<T>`の使用を避ける](https://dart.dev/guides/language/effective-dart/design#avoid-using-futureort-as-a-return-type)
- [引数を省略する可能性がある場合、名前付き引数にする](https://dart.dev/guides/language/effective-dart/design#avoid-optional-positional-parameters-if-the-user-may-want-to-omit-earlier-parameters)
- [`null`や空文字などを受け入れる必須パラメータは避ける](https://dart.dev/guides/language/effective-dart/design#avoid-mandatory-parameters-that-accept-a-special-no-argument-value)
- [範囲を指定する場合、開始と終了を含むパラメータを使用する](https://dart.dev/guides/language/effective-dart/design#do-use-inclusive-start-and-exclusive-end-parameters-to-accept-a-range)
- [`==`演算子は数学的な等価関係に従う](https://dart.dev/guides/language/effective-dart/design#do-make-your--operator-obey-the-mathematical-rules-of-equality)
