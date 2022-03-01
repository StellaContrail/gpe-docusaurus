---
sidebar_position: 4
---

# Silo Converter

Silo ConverterはGPE Solverによって出力されたファイルをSilo形式に変換して出力する。

## 使い方
実行ファイルは`make`コマンドによって生成される。

生成ファイルを実行すると、変換するデータフォルダを指定する画面が出てくる。
```bash
Silo Converter ----------------------------
 converts simulation result into silo files

 Input filename?: 
```
ここで指定されたデータは`../simulation/(入力文字列)/latest/`というパスを経由して探索される。
GPE Solverで出力されたフォルダは実行ファイルと同じ階層に出力されるため、
そのまま変換する場合は単純に`data_XXXXXX`と入力する。

プログラムは出力フォルダから`config.bin`をロードし、
空間次元などの系の設定を自動的に読み込む。
```bash
Silo Converter ----------------------------
 converts simulation result into silo files

 Input filename?: data_XXXXXX
 Input folder set as ../simulation/data_XXXXXX/latest/
 Specified dimension is: 200x200x1
 Hit Enter to continue or Ctrl+C to exit...
 Processing the simulation result
 0/10
 10/10
 Finished
 Data saved into: ./output/data_XXXXXX
 Finalizing
-------------------------------------------
```
変換を終えたデータは、`./output/data_XXXXXX/`に出力される。

## プログラムの流れ

Silo Converterの基本的な動作の流れを説明する。

### フローチャート
プログラムは以下のような流れで実行される。
![Flowchart](/img/SiloConverter/flowchart.png)

### Initilization
指定されたデータファイルを読み込んでプログラムの初期化を行う。

まず`config.bin`から設定データを読み込んで、空間次元などの設定を調べる。
その上でallocatable variablesをメモリに割り当てる。

:::caution
`config.bin`からは空間次元 / $\Delta x$ / $\Delta t$ / イテレーション数のデータを読み込んでいる。
上の行から順に`config.bin`を読み込んで設定しているため、GPE Solver側の出力形式を変える場合は
互換性に気をつけなければならない。
:::

### Get index-pos correspondence
indexと座標の対応付けを行う。

座標のデータは`potential.bin`を読み込む際に、ポテンシャルのデータと共に読み込まれる。
```fortran title="silo_converter.f90"
i = 1
do iz = 1, Nz
    do iy = 1, Ny
        do ix = 1, Nx
            read (100) xpos(i), ypos(i), zpos(i), V(i)
            iz2z(iz)=zpos(i); iy2y(iy)=ypos(i); ix2x(ix)=xpos(i)
            i = i + 1
        end do
    end do
end do
```

### Create a Silo instance
Fortranの配列データからSiloファイルを作り出す。

Siloファイルは大まかには、`DBCreate` > `DBPutQuadmesh` > `DBClose`の順で作られる。
`DBCreate`でSiloインスタンスおよび出力ファイルを作り出し、DBPutQuadmeshで描画メッシュを作り出す。
描画メッシュに従って`DBPutQuadvar`などで配列データを書き込み、最後にDBCloseでインスタンスを閉じる。

詳しいドキュメントは[Silo User's Guide](https://wci.llnl.gov/sites/wci/files/2020-08/LLNL-SM-654357.pdf)を参照する。

:::note
現段階では`density` / `potential` / `phase` / `curl/density` / `flux/density`が描画対象となっている。
`potential`以外は波動関数データから逐次計算しており、これはGPE Solver側で出力するファイルサイズを最小限に抑えるためである。
:::

:::warning
もし`./output`フォルダが存在しない場合はエラーを吐き出してhaltする。
プログラム側でも自動生成する機能は実装しているが、それでもエラーを吐いてしまう場合は、
手動で該当フォルダを作り出す必要がある。
:::

### Finalization
**Initialization**で割り当てたallocatable variablesのメモリを解放する。
