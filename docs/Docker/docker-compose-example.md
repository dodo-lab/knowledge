---
title: docker-composeの具体例
---

## MySQLとphpMyAdmin

```yml
version: '3.8'

services:
  mysql:
    container_name: mysql
    image: mysql:5.7.36
    environment:
      MYSQL_DATABASE: db_name
      MYSQL_USER: local_user
      MYSQL_PASSWORD: local_pass
      MYSQL_ROOT_PASSWORD: admin
    ports:
      - '3306:3306'
    volumes:
      - db:/var/lib/mysql

  phpmyadmin:
    container_name: phpmyadmin
    image: phpmyadmin/phpmyadmin:5.1.1
    environment:
      - PMA_HOST=mysql
    depends_on:
      - mysql
    ports:
      - '8080:80'

volumes:
  db:
```

:::info

- `ports`の指定がないと、コンテナ外から参照できない。
- `volumes`で永続化しないと、コンテナの再起動でDBが消える。

:::
