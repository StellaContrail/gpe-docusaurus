---
sidebar_position: 2
---

# Tutorial

本プログラムはGPEの時間発展を計算する`simulation`、
そして計算結果をVisIt用のデータフォーマットに変換する`misc`に分けられる。

## Demo
動作確認として、2次元で量子渦が系の中心に存在しているような状態を求める。

### 計算の実行

シミュレーションの計算設定は`simulation/config.txt`で行う。
このテキストファイルを以下のように編集する。
```php title="/simulation/config.txt"
# Configuration
200 200 1       # dimension
12000           # particle number
0.1             # space step
0.001 0.004     # time step in imaginary/real time development
0.3             # density = x*density_new + (1-x)*density_old in imaginary time development
1               # calculate real time development (1:enabled, 0:disabled)
1000 100        # max iterations / iterations to skip over when writing in real time development
1               # predictor-corrector (1:enabled, 0:disabled)
0.05            # dissipation parameter (typically 0~0.05)
0.00 0.00       # cranking speed in imaginary/real time development
0.00            # noise intensity of cranking speed (0~1, typically 0.01)
8.5 200         # trap radius/strength
0               # trap type (0:CYLINDER/CIRCLE, 1:HO, 2:BULK, 3:SPHERE)
-1              # ratio of radius of the hole/core to the radius of the trap, R_core/R_trap (0.0/negative:disable)
1               # initial vortex (1:enabled, 0:disabled)
0.0 0.0         # initial vortex position (x, y)
-1              # initial vortex circulation
0               # pinning site (1:enabled, 0:disabled)
0.0 0.0 0.0     # pinning site position (x, y, z)
30 4            # pinning site strength/delta (higher for smaller in size)
0               # pinning grid (0:None, 1:SC, 2:BCC)
-1              # pinning grid is replaced at this iteration (iteration; negative=Vgrid since the static calculation)
2.0             # pin separation distance (negative for automated tuning)
11 66.6 4       # grid size (Odd number)/strength/delta
-1              # dynamically created vortex (iteration; negative=disable)
1.2 1.2         # dynamically created vortex position (x, y)
-1              # dynamically created vortex circulation
-1              # dynamically created sound wave (iteration; negative=disable)
0.0 1.7 0.0     # dynamically created sound wave starting point (x, y, z)
60 4            # dynamically created sound wave strength/delta (higher for smaller size)
-1              # feedback is enabled from this iteration (negative=disable)
0.06            # external spin-down torque (positive for spin-down)
15.0            # moment of inertia of the container
-1              # external spin-down torque is enabled from this iteration (negative=disable)
```
上記の設定ファイルでは、系を$200 \times 200$のメッシュに、空間と時刻の刻み幅をそれぞれ$\Delta x = 0.2, \Delta t = 0.004$に設定する。
![Config](/img/system_config.png)

閉じ込めトラップは円形のものを仮定しており、半径が$R_0 = 8.5$の大きさを持つ。
量子渦は右回りの循環を持っており、容器の中心に設置されている。
設定ファイルを書き終えたらシミュレーションを実行し、上記の設定のもとで計算を行う。
```bash title="bash"
cd ./master/simulation/
./a.out
```
計算には数十分かかるが、以下のようなログが出力された後に計算が完了する。
``` title="bash"
 OpenMP is valid.
 OpenMP is successfully initiated.
 FFTW_THREADS = 3, OMP_THREADS = 3, FFTW_CODE = 1
 OpenMPI is invalid.
 output folder: data_XXXXXX
Configuration ---------------------------------------------------
 Nx Ny Nz            (Dimension) = 200 200 1
 dh                 (Space step) = .1000000
 dt (IMAG) (REAL)    (Time step) = .0010000 .0040000
 2xmax 2ymax 2zmax    (Box size) = 19.90 19.90 .00
 R0                (Trap radius) = 8.50
 Number of particles             = 2000
------------------------------------------------------------------
 Imaginary time evolution
    1000 iterations have passed, ΔE=.00000000
    2000 iterations have passed, ΔE=.00000000
    3000 iterations have passed, ΔE=.00000000
 solution converged at iter=3000, ΔE=.00000000
 calculation took 0 h 1 m 40 s
 - Number of particles = 2000.00
 - Chemical potential  = 11.97
 - Total energy        = 12580.69
 - <L_i>               = .00,.00,-1.00

 Real time evolution
 Iteration=0/1000 ( .00% )  E=12580.69 N=2000.00 Ω=.00 Lx,Ly,Lz=.00,.00,-1.00
 Iteration=100/1000 ( 10.00% )  E=12580.69 N=2000.00 Ω=.00 Lx,Ly,Lz=.00,.00,-1.00
 Iteration=200/1000 ( 20.00% )  E=12580.69 N=2000.00 Ω=.00 Lx,Ly,Lz=.00,.00,-1.00
 Iteration=300/1000 ( 30.00% )  E=12580.69 N=2000.00 Ω=.00 Lx,Ly,Lz=.00,.00,-1.00
 Iteration=400/1000 ( 40.00% )  E=12580.69 N=2000.00 Ω=.00 Lx,Ly,Lz=.00,.00,-1.00
 Iteration=500/1000 ( 50.00% )  E=12580.69 N=2000.00 Ω=.00 Lx,Ly,Lz=.00,.00,-1.00
 Iteration=600/1000 ( 60.00% )  E=12580.69 N=2000.00 Ω=.00 Lx,Ly,Lz=.00,.00,-1.00
 Iteration=700/1000 ( 70.00% )  E=12580.69 N=2000.00 Ω=.00 Lx,Ly,Lz=.00,.00,-1.00
 Iteration=800/1000 ( 80.00% )  E=12580.69 N=2000.00 Ω=.00 Lx,Ly,Lz=.00,.00,-1.00
 Iteration=900/1000 ( 90.00% )  E=12580.69 N=2000.00 Ω=.00 Lx,Ly,Lz=.00,.00,-1.00
 Iteration=1000/1000 ( 100.00% )  E=12580.69 N=2000.00 Ω=.00 Lx,Ly,Lz=.00,.00,-1.00
 calculation took 0 h 6 m 49 s
 - Number of particles = 2000.00
 - Chemical potential  = 11.97
 - Total energy        = 12580.69
 - <L_i>               = .00,.00,-1.00
 Saved data into: data_XXXXXX

 FFTW variables deallocated
 Temporal variables deallocated
 Simulation finished successfully
```
ここでログの上部と下部にそれぞれ書いてある`data_XXXXXX`が出力フォルダであり、
実行したバイナリファイルと同じ階層に存在する。
`XXXXXX`の部分は`HHmmss`のフォーマットで記述されており、
シミュレーションを実行した時刻が記録される。

### 結果の描画
計算結果はバイナリで出力されており、フォーマットさえ守ればgnuplotなどの汎用的なソフトウェアでも出力可能である。
しかし、本プログラムではVisItに最適化されたSiloとよばれるファイルに変換することによって、
VisItでの計算結果の描画を行う。

`misc`フォルダ内のバイナリファイルを実行する。
```bash title="bash"
cd ./master/misc
./a.out
```
次に入力が求められるが、ここで先程確認した`data_XXXXXX`を入力する。
プログラムは自動的に`data_XXXXXX`内から設定ファイルを読み込み、
個別の計算結果に合った変換処理を行う。

変換は次のようなログを出力した後に完了する。
```
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
ログの最後にある`./output/data_XXXXXX`が変換後のデータが格納されているフォルダを指している。
VisItで描画する際にこのパスが必要となるため、メモしておく。

### VisItでの可視化
VisItで計算結果を描画する。
使用しているバージョンはVisIt v3.1.4である。

VisItを立ち上げると、次のような２つの画面が表示される。
左のウィンドウの上部にある**Open**をクリックする。
![Visit1](/img/visit_1.png)

すると、次のようなモーダルダイアログが表示され、
描画するデータまでのパスを聞いてくる。
ここで先程変換したフォルダのパスを指定し、**OK**ボタンをクリックする。
![Visit2](/img/visit_2.png)

ボタンをクリックすると、データの読み込みに並列処理を用いるかを聞かれるが選択はどちらもでもよい。
次に左のウィンドウの中部から**Add > Pseudocolor > density**と選択する。
最後に**Draw**ボタンをクリックすることによって、右のウィンドウに計算結果が描画される。

描画結果は次のようなものが表示されるはずである。
![Density](/img/density.png)

また、左のウィンドウにある**▶**ボタンを押すことでアニメーションを確認することが出来る。
今回の計算では1+1000/100=11 frames分のみ時間発展がみられる。