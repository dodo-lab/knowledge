---
title: Linux
---

## Tips

### シェルをフォークせずに実行

例えば、実行中の`main.sh`から`sub.sh`を呼びだす際に`. ./sub.sh`と指定することで、`sub.sh`をフォークせずに実行できる。

それによって、`main.sh`で定義した環境変数を`sub.sh`でも使用することが可能となる。

:::info
`source ./sub.sh`でも同様の動作になる。
:::
