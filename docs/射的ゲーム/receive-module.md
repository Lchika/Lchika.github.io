---
sidebar_position: 2
---

# 赤外線受信ユニット

## 動作デモ

## ユニットの使い方

ユニット側面から出ているピンソケットに5V電源を接続することで使用します。
各ピンの説明は以下の画像の通りです。

赤外線受光状況出力ピンは、赤外線を受光している間、M5Stamp PicoのIOからHIGHを出力します。
被弾状況出力ピンは、一度被弾したらM5Stamp PicoのIOからHIGHを出力し続けます(M5Stamp Picoがリセットされるまで)。
M5Stamp PicoのIOのロジックレベルは3.3Vです。

スライドスイッチは、得点集計用サーバーに接続する(本番用設定)か、しない(テスト用設定)かを設定するものなので、触らないでください。

### 赤外線受信部設置位置の自由度を高めたい場合

ユニット自体のサイズが大きめなので、ユニットの設置位置に困る場合があると思います。
コネクタ(XH)の自作が可能な方は、ユニット内の基板のみを使用することで、赤外線受信部設置位置の自由度を高めることが可能です。

## 注意事項

本番前に、基板上のスライドスイッチの操作または、ファームウェアの書き換えなどを行う可能性がありますので、ユニットのフタ部分が外に露出している状態で使っていただきたいです。

基板単体で使う場合は、何らかの方法で基板に触れる構造にしておいていただきたいです。

## 使用部品

|部品名|購入先|
|-|-|
|M5Stamp Pico|https://www.switch-science.com/catalog/7360/|
|赤外線LED|https://akizukidenshi.com/catalog/g/gI-12612/|
|赤外線リモコン受信モジュール|https://akizukidenshi.com/catalog/g/gI-00622/|
|XHコネクタ ハウジング 2P|https://akizukidenshi.com/catalog/g/gC-12255/|
|XHコネクタ ベース付きポスト 2P|https://akizukidenshi.com/catalog/g/gC-12247/|
|XHコネクタ ハウジング 3P|https://akizukidenshi.com/catalog/g/gC-12256/|
|XHコネクタ ベース付きポスト 3P|https://akizukidenshi.com/catalog/g/gC-12248/|
|スライドスイッチ|https://akizukidenshi.com/catalog/g/gP-12723/|
|ピンソケット|https://akizukidenshi.com/catalog/g/gC-05779/|

## 回路図

## STLデータ

## ファームウェア

非公開
