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

### JSONシリアライズコードの自動生成

JSONシリアライズコードを自動生成するために、まずはプロジェクトに`json_serializable`を組み込む必要がある。

```diff yaml title=pubspec.yaml
dependencies:
+ json_annotation: <version>

dev_dependencies:
+ build_runner: <version>
+ json_serializable: <version>
```

自動生成の元となるクラスを実装する。

```dart title=user.dart
import 'package:json_annotation/json_annotation.dart';

// Userクラスから自動生成されるファイル
part 'user.g.dart';

// このクラスがJSONシリアライズを生成する必要があることを明示するアノテーション.
@JsonSerializable()
class User {
  User(this.name, this.email);

  String name;
  String email;
}
```

次のいずれかのコマンドでビルドし、JSONシリアライズのコードを自動生成する。

- `flutter pub run build_runner build`
- `flutter pub run build_runner watch`

:::info
後者の`watch`の方はファイルの更新を監視し、ファイルを保存したタイミングで自動的にビルドしてくれる。
:::

自動生成されたコードは以下のとおり。

```dart title=user.g.dart
// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'user.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

User _$UserFromJson(Map<String, dynamic> json) => User(
      json['name'] as String,
      json['email'] as String,
    );

Map<String, dynamic> _$UserToJson(User instance) => <String, dynamic>{
      'name': instance.name,
      'email': instance.email,
    };
```

JSONシリアライズのprivateなヘルパー関数が自動生成されたので、それを利用した関数をUserクラスに実装する。

```diff dart title=user.dart
import 'package:json_annotation/json_annotation.dart';

// Userクラスから自動生成されるファイル
part 'user.g.dart';

// このクラスがJSONシリアライズを生成する必要があることを明示するアノテーション.
@JsonSerializable()
class User {
  User(this.name, this.email);

  String name;
  String email;

+ // 自動生成された_$UserFromJson関数にJSONデータを渡し、新しいUserインスタンスを生成する.
+ factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);

+ // 自動生成された_$UserToJson関数でUserインスタンスからJSON形式へ変換する.
+ Map<String, dynamic> toJson() => _$UserToJson(this);
}
```

### ProviderとChangeNotifierProviderの使い分け

- Provider

  データを更新する必要がなく、子要素に受け渡すだけで良い場合に利用。

- ChangeNotifierProvider

  データを更新する必要がある場合に利用。
