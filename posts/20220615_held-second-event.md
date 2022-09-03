---
title: 第2回 micro:bitで遊ぼう
description: micro:bitという学習用のマイコンボードを使ってPythonプログラミングを体験しました
date: 2022-06-15
draft: false
---

### イベントの様子

<img src="/img/posts/held-second-event/microbit.png" alt="microbit" title="microbit" class="post-image" loading="lazy">

2022 年 5 月 28 日(土)に 「[micro:bit で Python プログラミングを体験しよう](https://neumann.connpass.com/event/245025/)」イベントを開催しました。
小学生 3 名、大人 1 名にご参加いただきました。ありがとうございました。

今回は会場として [三島クロケット](https://www.crqt.work) さんをお借りしました。

<img src="/img/posts/held-second-event/microbit-event1.jpg" alt="micro:bit で Python プログラミングを体験しよう" title="micro:bit で Python プログラミングを体験しよう" class="post-image" loading="lazy">

参加者の様子。

<img src="/img/posts/held-second-event/microbit-event2.jpg" alt="micro:bit で Python プログラミングを体験しよう" title="micro:bit で Python プログラミングを体験しよう" class="post-image" loading="lazy">

Raspberry Pi 400 というパソコンを使って micro:bit に Python プログラムを書き込み LED を光らせたり音を鳴らしたりしました。

13:00 にスタートして各自 micro:bit にプログラムを書き込み、時々休憩しながら 15:30 ごろまで作業しました。その後、各自のお気に入りのプログラムを発表し、16:00 頃解散しました。

### micro:bit とは

[micro:bit](https://microbit.org/ja/) はイギリスで開発された教育用のマイコンボードです。
センサーやボタン、 LED 等が予め搭載されており、他の基盤に比べて手軽にプログラミングを体験できるようになっています。

[公式サイトのプログラム例](https://microbit.org/ja/projects/make-it-code-it/) を参考にするだけでもたくさんのプログラムで遊ぶことができます。

<img src="/img/posts/held-second-event/microbit-example.png" alt="micro:bitのプログラム例" title="micro:bitのプログラム例" class="post-image" loading="lazy">

みのむしクリップでスピーカーに接続することで音をだすこともできます。 micro:bit を振ることでサイコロの目が変わるプログラムや音楽を鳴らすプログラムが参加者には特に人気でした。

ブラウザ上で動く Python を使ってプログラムを micro:bit に書き込むことができるのでパソコンには何もインストールする必要がありません。（講師としてはこれが一番驚きました）

<img src="/img/posts/held-second-event/microbit-python.png" alt="micro:bit と Python" title="micro:bit と Python" class="post-image" loading="lazy">

### Raspberry Pi 400 とは

Neumann Lab では [Raspberry Pi 400](https://www.switch-science.com/catalog/6750/) というパソコンを使って演習を行っています。
これはキーボードの形をした小型のコンピュータで 1 万円ほどで購入できます（別途モニターやマウスが必要になります）。 OS は Linux がインストールしてあるためプログラミングを学ぶのに最適です。

Raspberry Pi 400 も LED やモーターなどを接続して動かすことができます。そのためこれ単体でも IoT を学ぶことができますが、今回は micro:bit と併用することで初心者でも簡単に扱えるようになりました。
