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

ドメインは仮で`www.example.com`とする。

### Certbotクライアントをインストール

```bash title=コマンド実行
sudo yum install epel-release
sudo yum install certbot
```

### 証明書を作成

```bash title=コマンド実行
certbot certonly --standalone -d www.example.com
```

コマンド実行後にメールアドレスの入力や、利用規約への同意が求められるため、適宜対応する。
成功したら、`/etc/letsencrypt/live/www.example.com/`に各種証明書ファイルが生成される。

`fullchain.pem`を中間証明書を連結した証明書、`privkey.pem`を秘密鍵として扱う。

:::info
`/etc/letsencrypt/live/www.example.com`配下のファイルはシンボリックリンクになっており、実体は`/etc/letsencrypt/archive/www.example.com`にある。
:::

:::warning
失敗した場合は下記項目をチェック。

- 80ポートや443ポートが他のプロセスやサービスに利用されている場合、該当のプロセスやサービスを一時停止する
- 80ポートや443ポートがファイアーウォールでブロックされている場合、該当ポートへのアクセスを許可する
:::

### 証明書の更新

Let's Encryptの証明書の有効期限は3か月のため、定期的な更新が必要。

```bash title=コマンド実行
certbot renew
```

成功したら、`/etc/letsencrypt/live/www.example.com`の証明書と秘密鍵のファイルが更新される。必要に応じてサーバー側の再起動を実施。

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

- MySQLの設定

  ```conf title=/etc/my.cnf
  [mysqld]
  innodb_autoinc_lock_mode=0
  ```

  :::info
  `/etc/my.cnf`が無い場合は、`mysql --help | grep my.cnf`を実行し、最初にヒットした`my.cnf`を修正する。
  :::

  :::warning
  上記設定はパフォーマンスが落ちるため、必要でなければ設定しない方が良い。
  今回は`INSERT IGNORE`で`AUTO_INCREMENT`を加算したくないため、設定している。
  :::

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

## phpMyAdminの導入

### phpMyAdminを含め必要なものをインストール

```bash title=コマンド実行
sudo rpm --import https://rpms.remirepo.net/RPM-GPG-KEY-remi
sudo yum install yum-utils https://rpms.remirepo.net/enterprise/remi-release-7.rpm
sudo yum --enablerepo=remi,remi-php73 install php-7.3.33-1.el7.remi
sudo yum -y install --enablerepo=remi,remi-php73 php-mbstring php-xmlphp-pdo php-mysqlnd
sudo yum --enablerepo=remi,remi-php73 install phpMyAdmin
```

### phpMyAdminの設定

アクセス許可するIPアドレスを設定する。

```diff conf title=/etc/httpd/conf.d/phpMyAdmin.conf
<Directory /usr/share/phpMyAdmin/>
   AddDefaultCharset UTF-8

   Require local
+  Require ip [アクセスを許可するIP]
</Directory>
```

### Apacheを再起動

```bash title=コマンド実行
systemctl restart httpd
```

## puppeteerの依存関係解消

```bash title=コマンド実行
sudo yum install -y alsa-lib.x86_64 atk.x86_64 cups-libs.x86_64 gtk3.x86_64 ipa-gothic-fonts libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXrandr.x86_64 libXScrnSaver.x86_64 libXtst.x86_64 pango.x86_64 xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-fonts-cyrillic xorg-x11-fonts-misc xorg-x11-fonts-Type1 xorg-x11-utils
```

詳細は[公式](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#chrome-headless-doesnt-launch-on-unix)を参照。

## Next.jsの永続化

Next.jsのプロセスを監視し、プロセスが異常状態になったら自動的に再起動をさせる。

- PM2のインストール

  ```bash title=コマンド実行
  npm i -g pm2
  ```

- Next.jsを起動（永続化）

  `npm start`でNext.jsが起動することを前提とする。

  ```bash title=コマンド実行
  pm2 start npm --name "アプリ名" -- start
  ```

- Next.jsの停止

  ```bash title=コマンド実行
  pm2 stop アプリ名
  ```

- Next.jsのログ確認

  ```bash title=コマンド実行
  pm2 log アプリ名

  # ログの表示行数を増やす
  pm2 log アプリ名 --line 100
  ```

- Next.jsの状態確認

  ```bash title=コマンド実行
  pm2 show アプリ名
  ```
