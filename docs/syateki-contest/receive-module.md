---
sidebar_position: 2
---

# 赤外線受信ユニット

赤外線を受信して被弾判定を行うユニットです。

## 動作デモ

<iframe width="560" height="315" src="https://www.youtube.com/embed/bju5XTzR49c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ユニットの説明

ユニット側面から出ているピンソケットに5V電源を接続することで使用します。

### ユニット前面の説明

![前面](/img/syateki/front.jpg)

ユニット前面には、赤外線受信モジュール・赤色LED・フルカラーLEDがついています。

赤色LEDは、本ユニットが赤外線を受信している間、点灯し続けます。
的当てをする側が持っている赤外線送信ユニットは、発射時以外でも、常に一定の赤外線信号を送信しています。
この赤色LEDは、赤外線送信側の照準が合っているかの確認をできるようにするためのものです。

フルカラーLEDは、本ユニットが一度被弾したら、点灯し続けます。

### ユニット背面の説明

![背面](/img/syateki/back.jpg)

ユニット背面には四隅に、深さ10cmのM3ネジ穴があります。ユニットの位置固定用に使ってください。ネジ穴の造形精度はそれなりなので、金属ネジで若干削りながら締めることになると思います。ネジ穴の入り口が狭くてネジが入らない場合は手元のドライバーとかで入り口を削ってください。

ユニット背面の寸法の詳細は[外形及びSTLデータ](#外形及びstlデータ)に書いてあります。

### ユニット側面のピンの説明

![側面](/img/syateki/side.jpg)

ユニット側面には4ピン分のピンソケットがあります。ピンには簡単な説明ラベルがついています。

"受信"と書かれているピンは、赤外線受信状況出力ピンです。
このピンは、赤外線を受信している間、M5Stamp PicoのIOからHIGHを出力します。

"被弾"と書かれているピンは、被弾状況出力ピンです。
このピンは、一度ユニットが被弾したらM5Stamp PicoのIOからHIGHを出力し続けます(M5Stamp Picoがリセットされるまで)。

M5Stamp PicoのIOのロジックレベルは3.3Vです。

### 赤外線受信部設置位置の自由度を高めたい場合

ユニット自体のサイズが大きめなので、ユニットの設置位置に困る場合があると思います。
コネクタ(XH)の自作が可能な方は、ユニット内の基板のみを使用することで、赤外線受信部の設計自由度を高めることが可能です。

### その他

内部基板上のスライドスイッチは、得点集計用サーバーに接続する(本番用設定)か、しない(テスト用設定)かを設定するものです。

## 注意事項

本番前および本番中に、内部基板上のスライドスイッチの操作や、ファームウェアの書き換えなどを行う可能性があります。ユニットを開いて中の基板に触る事ができるように、ユニットのフタ部分が外に露出している状態で使っていただきたいです。

内部基板単体で使う場合は、何らかの方法で基板に触る事ができる構造にしておいていただきたいです。

## 主な使用部品

|部品名|購入先|
|-|-|
|M5Stamp Pico|https://www.switch-science.com/catalog/7360/|
|抵抗内蔵5mmLED 5V 赤色|https://akizukidenshi.com/catalog/g/gI-06245/|
|赤外線リモコン受信モジュール|https://akizukidenshi.com/catalog/g/gI-00622/|
|XHコネクタ ハウジング 2P|https://akizukidenshi.com/catalog/g/gC-12255/|
|XHコネクタ ベース付きポスト 2P|https://akizukidenshi.com/catalog/g/gC-12247/|
|XHコネクタ ハウジング 3P|https://akizukidenshi.com/catalog/g/gC-12256/|
|XHコネクタ ベース付きポスト 3P|https://akizukidenshi.com/catalog/g/gC-12248/|
|スライドスイッチ|https://akizukidenshi.com/catalog/g/gP-12723/|
|ピンソケット|https://akizukidenshi.com/catalog/g/gC-05779/|

## 回路図・基板図

![回路図](/img/syateki/receive-sch.png)

見にくくてすみません。この基板は、違う用途にも使えるようにした関係で、本ユニットと関係のない経路が多いです。

![基板図](/img/syateki/receive-pcb.png)

## 外形及びSTLデータ

[外形](https://github.com/Lchika/syateki_stamp_rally_contest/blob/main/receive-module/drawing/receive-drawing.pdf)

[STLデータ](https://github.com/Lchika/syateki_stamp_rally_contest/tree/main/receive-module/stl)

## ファームウェア

[GitHub](https://github.com/Lchika/ir-stamp-rally-target-stamp)
