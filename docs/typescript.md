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

### Nominal Types

TypeScriptの型は構造で識別するため、`C++`や`Java`のように型名で互換性を識別できない。

```ts
type UserName = string;
type ItemName = string;

let user: UserName = "user_name";
let item: ItemName = "item_name";

// どちらの構造も`string`のため、代入できてしまう
user = item;
item = user;
```

型に`readonly`な`unique symbol`を埋め込むことで、型名で識別できるようになる。

```ts
type UserName = string & {readonly brand: unique symbol};
type ItemName = string & {readonly brand: unique symbol};

// 値は`Companion Object Pattern`で取得
function UserName(name: string) {
  return name as UserName;
}
function ItemName(name: string) {
  return name as ItemName;
}

let user = UserName("user_name");
let item = ItemName("item_name");

// コンパイルエラーが発生!!
user = item;
item = user;
```

### Template Literal Types

複数のUnion Typesをテンプレート文字列内で利用すると、各要素同士の組み合わせが定義可能。

```ts
type VerticalAlignment = "top" | "middle" | "bottom";
type HorizontalAlignment = "left" | "center" | "right";

function setAlignment(value: `${VerticalAlignment}-${HorizontalAlignment}`) {}

// OK
setAlignment("top-center");
setAlignment("middle-left");

// NG
setAlignment("top-bottom");
setAlignment("top-side");
```
