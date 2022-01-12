---
title: Next.js
sidebar_position: 5
---

## プロジェクト作成

```bash
npx create-next-app [project-name]

# TypeScriptならこっち
npx create-next-app [project-name] --typescript
```

## Tips

- `getStaticProps`はビルド時のみ実行されるが、開発中（`next dev`）に限ってはリクエストごとに実行される。
- 任意の場所に`// @refresh reset`のコメントを入れることで、ファイルを更新するたびに対象コンポーネントの状態を強制的にリセットし、再マウントさせることが可能。
