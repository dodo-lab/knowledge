---
title: VPS
---

## Node.jsのインストール

```bash
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

  ```bash title=コマンド実行
  certbot certonly --standalone -d www.example.com
  ```

  コマンド実行後にメールアドレスの入力や、利用規約への同意が求められるため、適宜対応する。

  :::warning
  失敗した場合は下記項目をチェック。
  - 80ポートや443ポートが他のプロセスやサービスに利用されている場合、該当のプロセスやサービスを一時停止する
  - 80ポートや443ポートがファイアーウォールでブロックされている場合、該当ポートへのアクセスを許可する
  :::
