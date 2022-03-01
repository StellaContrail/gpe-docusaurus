---
sidebar_position: 3
---

# 出力フォーマット

GPE Solverが出力するファイル群のフォーマットについて説明する。

## 基礎知識

GPE Solverにおいてファイル出力は主に`io.f90`を通して行われる[^1]。
例えば、波動関数を始めとした複素数配列に関連したデータは`output_complex(filename, f)`とよばれるサブルーチンを介して出力される。
このサブルーチン内では任意の複素数配列`f(:)`に対して次のようなフォーマットで定義される。
```fortran title="output_complex(filename, f)"
open(10, file=filename, form="unformatted")
! ...
write (10) x, y, z, abs(f(i))**2, dble(f(i)), aimag(f(i))
! ...
close(10)
```
ここで`form="unformatted"`はbinaryとして出力するためのオプションである。
binaryで実装することにより、ASCII形式に比べて出力や読み込みの時間が短く、サイズも小さく抑えられるという利点がある。
このうち、ファイル内に書き込むフォーマットの定義は
```fortran
write (10) x, y, z, abs(f(i))**2, dble(f(i)), aimag(f(i))
```
の行である。左からX座標、Y座標、Z座標、$|f|^2$、$f$の実部、$f$の虚部を指す。

多次元の場合はインデックスが複雑になるため、計算結果の描画が難しくなってしまう。
しかし、1次元の場合は連続的なリストとなるため、例えばgnuplotでも次のようなコマンドで簡単に描画できる。
```lua title="gnuplot"
plot "data_XXXXXX/latest/wf_imag.bin" binary format="%*int%6double%*int" using 1:4 title "density" with lines
```
ここでformatの前後に付いている`%*int`は、Fortranで出力した際に付与されるrecord markerを飛ばすためのものである。
詳しい説明は[Fortranでバイナリを読み書きするときのあれこれ - 羊小屋の落書き](https://akebi28.hatenablog.jp/entry/2017/02/28/081307)が参考になる。

## 各種ファイルのフォーマット

GPE Solverによって出力されるデータは次のようなフォーマットに従っている。

|ファイル名                   |フォーマット                                                                                  |gnuplotでのフォーマット         |
|------------------------|----------------------------------------------------------------------------------------|------------------------|
|config.dat              |数値 文字列                                                                                  |N/A                     |
|energy_imag.bin         |イテレーション 時刻 化学ポテンシャル 全エネルギー                                                              |%\*int%int%3double%\*int  |
|energy_real.bin         |イテレーション 時刻 全エネルギー 粒子数 運動エネルギー ポテンシャルエネルギー 相互作用エネルギー 回転エネルギー $\Omega_z$ $L_x$ $L_y$ $L_z$|%\*int%int%11double%\*int |
|potential.bin           |X座標 Y座標 Z座標 ポテンシャルの高さ                                                                   |%\*int%4double%\*int      |
|wf_imag_raw.bin         |raw data                                                                                  |N/A                     |
|wf_imag.bin             |X座標 Y座標 Z座標 密度 実部 虚部                                                                    |%\*int%6double%\*int      |
|wf_real/frame_XXX.bin   |X座標 Y座標 Z座標 密度 実部 虚部                                                                    |%\*int%6double%\*int      |
|flux_real/frame_XXX.bin |X座標 Y座標 Z座標 X成分 Y成分 Z成分                                                                 |%\*int%6double%\*int      |

このうち「X座標 Y座標 Z座標」から始まっているようなものに対しては、
多次元を対象にする場合は取り扱いが難しくなる。
そのため、2次元以上の空間次元を対象にする場合には、同梱のSilo Converterを使うことが推奨される。







[^1]:状態量やrawデータなど例外あり。リファクタリングを行って全ての入出力操作を`io.f90`を通して行えるようにするのが好ましい。
