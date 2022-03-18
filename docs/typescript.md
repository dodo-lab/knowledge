---
title: TypeScript
---

## Tips

### interfaceの注意点

`interface`で同名の型を定義すると、自動的にマージされた1つの定義となる。

```ts
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const p: Person = {
  name: 'Bob',
  age: 20,
}
```

:::info
`type`で同名の型を定義すると、エラーになる。
:::
