---
title: Flutter
---

## コマンド

- パッケージのインストール

  ```bash title=コマンド実行
  flutter pub get
  ```

## リンク

- [Flutter Docs](https://docs.flutter.dev/)

  Flutter公式のドキュメント

- [Flutter Samples](https://flutter.github.io/samples/#)

  Flutterのサンプル集

- [pub.dev](https://pub.dev/)

  Flutter公式のパッケージリポジトリ

- [Awesome Flutter](https://github.com/Solido/awesome-flutter)

- [Dart cheatsheet codelab](https://dart.dev/codelabs/dart-cheatsheet)

- [Material Design](https://material.io/components?platform=flutter)

## Tips

### マルチスレッド

マルチスレッド制御にDartの`Isolate`を使うこともできるが、Flutterが提供している`compute`が推奨されている。

第一引数にマルチスレッドで実行する関数、第二引数に関数の引数を指定する。

```dart
import 'package:flutter/foundation.dart';

compute(function, params);
```
