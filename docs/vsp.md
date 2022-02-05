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
