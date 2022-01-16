---
title: MySQL
---

## Tips

### 文字コード指定

#### DB作成時にデフォルトの文字コードを指定

`DEFAULT CHARACTER SET`で文字コードを指定する。

```sql
CREATE DATABASE db
  DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci
```

#### テーブル作成時にデフォルトの文字コードを指定

`DEFAULT CHARSET`で文字コードを指定する。

```sql
CREATE TABLE category(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
```

#### フィールドごとに文字コードを指定

`CHARACTER SET`で文字コードを指定する。

```sql
CREATE TABLE category(
  name VARCHAR(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
)
```

:::warning
`NOT NULL`を`CHARACTER SET`の後に記述しないと、シンタックスエラーになる。
:::

### テーブルがなければ作成

`CREATE TABLE`に`IF NOT EXISTS`を付与する。

```sql
CREATE TABLE IF NOT EXISTS category(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
)
```

### AUTO_INCREMENTの初期値を指定

フィールド設定の後に、`AUTO_INCREMENT = XXXX`で指定する。

```sql
CREATE TABLE IF NOT EXISTS category(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
) AUTO_INCREMENT = 1000000;
```
