---
sidebar_position: 1
---

# はじめに

本プログラムはGross-Pitaevskii方程式(GPE)を用いて希薄ボース気体などを対象としたボース・アインシュタイン凝縮体(BEC)のダイナミクスを計算することを目的とする。

## 動作環境
確認している動作環境は以下の通りである。

|名前    |バージョン             |
|--------|----------------------|
|gfortran|9.3.0                 |
|OpenMP  |(comes with gfortran) |
|FFTW    |3.3.9 (internal)      |
|Silo    |4.10.2                |


## ダウンロード方法
GPE Solver、およびプロット用変換プログラムは以下のコマンドでダウンロードできる。
```bash title="bash"
wget https://github.com/StellaContrail/gpe/archive/refs/heads/master.zip
unzip master.zip
```
解凍したフォルダの中には２つのフォルダが存在しているが、それぞれ`simulation`がGPE Solver、`misc`がプロット用変換プログラム(Silo Converter)を指している。

## ビルド
プログラムのビルドは`simulation`と`misc`のどちらでも行う必要がある。
各ディレクトリに入って`make`コマンドを実行すれば良い。
```bash title="bash"
cd master
./simulation/make
./misc/make
```
:::note
Silo v4.10.2ではライブラリファイル`silo.inc`が固定形式で書かれており、自由形式のプログラムとは互換性がない。
コンパイルエラーが発生する場合は`silo.inc`内の`C`を`!`で置き換えてやる必要がある。
:::

## ファイル群の説明
### "simulation" フォルダ
GPE Solverが格納されているフォルダ

GPEの定常状態や時間発展を計算する。
([GPE Solverのインターフェイスの解説](https://stellacontrail.github.io/gpe-doxygen/gpe_solver/html/))

|ファイル名|説明|
|:----|:----|
|gpe.f90|メインプログラム|
|setting.f90|系の設定を行うモジュール|
|mathf.f90|数学的な操作をまとめたモジュール|
|io.f90|File I/O操作を行うモジュール|
|constants.f90|設定ファイルの入出力を行うモジュール|
|config.txt|設定ファイル|
|makefile|コンパイル用ファイル|
|plot.gnuplot|データ可視化スクリプト|

### "misc" フォルダ
Silo Converterが格納されているフォルダ

GPE Solverによって出力されたファイルをSilo形式に変換して保存する。
([Silo Converterのインターフェイスの解説](https://stellacontrail.github.io/gpe-doxygen/silo_converter/html/))

|ファイル名|説明|
|:----|:----|
|silo_converter.f90|メインプログラム|
|mathf.f90|数学的な操作をまとめたモジュール|
|makefile|コンパイル用ファイル|
|output|出力先フォルダ|

