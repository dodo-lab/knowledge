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
