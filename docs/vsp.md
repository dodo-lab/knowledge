---
title: VPS
---

## Node.jsのインストール

```bash title=コマンド実行
sudo curl -sL https://rpm.nodesource.com/setup_16.x | bash -
sudo yum install -y nodejs
```

- Nodeを実行して`version 'GLIBC_2.18' not found`のようなエラーが出たら、GLIBC_2.18をコンパイル＆インストール

  ```bash title=コマンド実行
  sudo su
  yum install -y unzip wget gcc
  cd /tmp
  wget https://ftp.gnu.org/gnu/glibc/glibc-2.18.tar.gz
  cd glibc-2.18 && mkdir build
  cd build
  ../configure --prefix=/usr --disable-profile --enable-add-ons --with-headers=/usr/include --with-binutils=/usr/bin
  make && make install
  ```

## Let's Encryptで証明書を作成

- Certbotクライアントをインストール

  ```bash title=コマンド実行
  sudo yum install epel-release
  sudo yum install certbot
  ```

- 証明書を作成

  ドメインは仮で`www.example.com`とする。

  ```bash title=コマンド実行
  certbot certonly --standalone -d www.example.com
  ```

  コマンド実行後にメールアドレスの入力や、利用規約への同意が求められるため、適宜対応する。
  成功したら、`/etc/letsencrypt/live/www.example.com/`に各種証明書ファイルが生成される。

  :::warning
  失敗した場合は下記項目をチェック。
  - 80ポートや443ポートが他のプロセスやサービスに利用されている場合、該当のプロセスやサービスを一時停止する
  - 80ポートや443ポートがファイアーウォールでブロックされている場合、該当ポートへのアクセスを許可する
  :::

## MySQLの導入

### MySQLのインストール

- 最新のGPGキーをインストール

  ```bash title=コマンド実行
  sudo rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022
  ```

- MySQLのインストール

  ```bash title=コマンド実行
  sudo rpm -Uvh http://dev.mysql.com/get/mysql57-community-release-el7-7.noarch.rpm
  sudo yum -y install mysql-community-server
  ```

### MySQLの起動

- MySQL起動

  ```bash title=コマンド実行
  systemctl start mysqld.service
  ```

- MySQL自動起動設定

  ```bash title=コマンド実行
  systemctl enable mysqld.service
  ```

### rootパスワードの変更

- パスワードの変更

  まず初期パスワードを確認する。

  ```bash title=コマンド実行
  cat /var/log/mysqld.log | grep "A temporary password"
  ```

  次にパスワードを変更する。

  ```bash title=コマンド実行
  mysql -u root -p
  # パスワード入力を求められるため、確認した初期パスワードを入力
  set password for root@localhost=password('パスワード');
  ```

### 初期設定

- DBの作成

  ```bash title=コマンド実行
  create database [DB名];
  ```

- ユーザーの作成

  ```bash title=コマンド実行
  create user 'user_name'@'localhost' IDENTIFIED BY 'password';
  ```

- ユーザーの権限を作成したDBのみに絞る

  ```bash title=コマンド実行
  grant select, update on [DB名].* to 'user_name'@'localhost' identified by 'password';
  ```
