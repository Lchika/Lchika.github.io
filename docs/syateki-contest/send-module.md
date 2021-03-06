---
sidebar_position: 3
---

# 赤外線テスト送信ユニット

赤外線受信ユニットの動作確認や、赤外線受信ユニットと射的参加者作成ユニットの接続テストを行うためのユニットです。

## 動作デモ

<iframe width="560" height="315" src="https://www.youtube.com/embed/af_0-Dd8PZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## ユニットの説明

単3電池2本で動きます。単3電池は配布しないため、用意していただく必要があります。電池ボックスのスイッチをONにすると、動きます。

電源ONの状態であれば、何もしていなくても、赤外線受信ユニットが受信可能な一定の信号を出し続けます。
電源ONの状態の赤外線テスト送信ユニットを赤外線受信ユニットに向ければ、赤外線受信ユニットの赤色LEDが光るはずです。

電源ONの状態で、トリガー部のプッシュボタンを押すと、発射信号を送信します。発射信号を送信した際は、上部のLEDが点灯します。
発射信号を送信することで、的ユニットの被弾時の挙動をテストする事ができます。

## 主な使用部品

|部品名|購入先|
|-|-|
|PICマイコン 10F322 I/P|https://akizukidenshi.com/catalog/g/gI-05824/|
|赤外線LED|https://akizukidenshi.com/catalog/g/gI-12612/|
|プッシュボタン|https://akizukidenshi.com/catalog/g/gP-04367/|

## 回路図・基板図

![回路図](/img/syateki/send-sch.png)

![基板図](/img/syateki/send-pcb.png)

## STLデータ

[STLデータ](https://github.com/Lchika/syateki_stamp_rally_contest/tree/main/send-test-gun/stl)

## ファームウェア

[GitHub](https://github.com/Lchika/syateki-stamp-rally-test-gun)
