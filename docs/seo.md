---
title: SEO
sidebar_position: 10
---

## robots.txt

robots.txtファイルは、検索エンジンのクローラーに、ページやファイルの要求可否を伝えるもの。CSMや管理画面、一部のAPIルートなど、Webサイトの特定の領域をクロールから保護し、インデックスされないようにできる。

## XMLサイトマップ

Webサイト内のページや動画などのファイルに関する情報や、ファイル間の関係性を記載したファイル。検索エンジンはこのファイルを読み取ることで、より賢くWebサイトをクロールできるようになる。

## 検索エンジン向けのメタタグ

### robot tag

```html
<meta name="robots" content="noindex,nofollow" />
```

上記のように`noindex`や`nofollow`を指定することで、検索エンジンに対して次の指示が可能。

- nodeinx

  対象ページをインデックスしない（検索結果に表示しない）

- nofollow

  対象ページのリンクを辿らない

### Googlebot tag

```html
<meta name="googlebot" content="noindex,nofollow" />
```

Googleに対してのみ有効な指定。`noindex`や`nofollow`の意味は上記と同様。

## Web Vitals

Web Vitalsは、Web上のエンドユーザーのページ体験を測定するための統一されたガイダンスと指標で、Googleによって作成された。

Core Web Vitalsは、Web Vitalsのサブセットで、`Loading`・`Interactivity`・`Visual Stability`を測定する3つの指標で構成されている。

- Largest Contentful Paint (LCP)

  ページの読み込み性能の指標。

- First Input Delay (FID)

  エンドユーザーがWebページを操作する際の体感速度を表す指標。

- Cumulative Layout Shift (CLS)

  全体的なレイアウトの安定性を示す指標。

この3つの指標で高いスコアを獲得することにより、検索エンジンのランキングに影響を与える。

## リンク

- [PageSpeed Insights](https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect)

  Googleから提供されており、Webページのパフォーマンスに関するレポートと、改善方法が確認できる。
