---
title: JavaScript Security
---

## CSPの影響

CSPを導入すると、デフォルトでインラインJavaScriptとeval関数が無効になる。

ただし、`unsafe-eval`や`unsafe-inline`を指定することで有効にできる。
