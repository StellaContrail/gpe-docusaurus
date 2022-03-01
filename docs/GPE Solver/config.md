---
sidebar_position: 2
---

# 設定ファイル

`config.txt`の書き方を説明する。

## config.txt
以下に`config.txt`の例を示す。
```php text="config.txt"
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
0.00 0.85       # cranking speed in imaginary/real time development
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

## 各項目の説明
|行|記入例|コメント|説明|
|:----|:-----------------------------|:----|:----|
|2|200 200 1|# dimension|$N_x~N_y~N_z$で指定する。1次元のときは$N_x~1~1$、2次元のときは$N_x$ $N_y$ $1$と指定する。|
|3|12000|# particle number|粒子数|
|4|0.1|# space step|空間の刻み幅 $\Delta x$|
|5|0.001 0.004|# time step in imaginary/real time development|$\Delta \tau ~ \Delta t$で指定する。それぞれ虚時間/実時間の刻み幅を指す。|
|6|0.3|# density = x\*density_new + (1-x)\*density_old in imaginary time development|[虚時間発展での密度の混ぜ合わせ](flow#solve-steady-state)において、時刻$\tau$の密度を混ぜ合わせる割合|
|7|1|# calculate real time development (1:enabled, 0:disabled)|実時間発展を行うか。1=True, 0=Falseを指す。|
|8|1000 100|# max iterations / iterations to skip over when writing in real time development|実時間発展で計算するイテレーションの数。後ろの数は出力を無視するイテレーションのインターバルを指しており、出力されるデータ数はmod(第1引数,第2引数)+1個となる。|
|9|1|# predictor-corrector (1:enabled, 0:disabled)|実時間発展においてPredictor-Corrector法を導入するか。1=True, 0=Falseを指す。|
|10|0.05|# dissipation parameter (typically 0~0.05)|散逸効果の度合いを指す。通常$\gamma = 0.00 - 0.05$の範囲を取る。|
|11|0.00 0.85|# cranking speed in imaginary/real time development|$\Omega_{imag}$ $\Omega_{real}$で指定する。それぞれ虚時間と実時間発展においての系の回転角速度を表す。|
|12|0.00|# noise intensity of cranking speed (0~1, typically 0.01)|3次元計算においてz軸回りの角速度にノイズを入れる割合。通常$noise\_rate=0.01$が取られる。|
|13|8.5 200|# trap radius/strength|$R_0~V_{trap}$で指定する。それぞれ閉じ込めトラップの半径と高さを表す。|
|14|0|# trap type (0:CYLINDER/CIRCLE, 1:HO, 2:BULK, 3:SPHERE)|閉じ込めトラップの形状を指定する。0=円柱(3次元)/円形(2次元), 1=調和振動子, 2=自由粒子($V=0$), 3=球形(3次元)|
|15|-1|# ratio of radius of the hole/core to the radius of the trap, R_core/R_trap (0.0/negative:disable)|斥力コアの容器の半径に対する比率。$R_c/R_0$で指定する。$R_c/R_0 \leq 0$でコア無し。|
|16|1|# initial vortex (1:enabled, 0:disabled)|虚時間発展の時点で量子渦を作るか。1=True, 0=Falseを指す。|
|17|0.0 0.0|# initial vortex position (x, y)|虚時間発展の時点で量子渦を作る際の量子渦の中心座標。$x~y$で指定する。|
|18|-1|# initial vortex circulation|虚時間発展の時点で量子渦を作る際の量子渦の巻数(winding number)を指定する。|
|19|0|# pinning site (1:enabled, 0:disabled)|虚時間発展の時点で格子点を設置するか。1=True, 0=Falseを指す。|
|20|0.0 0.0 0.0|# pinning site position (x, y, z)|虚時間発展の時点で格子点を設置する際の格子点の位置。$x$ $y$ $z$で指定する。|
|21|30 4|# pinning site strength/delta (higher for smaller in size)|虚時間発展の時点で格子点を設置する際の格子点の高さとサイズ。$V_{pin}~\Delta$で指定する。|
|22|0|# pinning grid (0:None, 1:SC, 2:BCC)|格子点グリッドを設置するか。0=格子無し, 1=SC格子, 2=BCC格子を指す。|
|23|-1|# pinning grid is replaced at this iteration (iteration; negative=Vgrid since the static calculation)|格子点グリッドを置き換えるイテレーション。負の値で虚時間発展の時点から$V_{pin}$の格子点グリッドを使用する。|
|24|2.0|# pin separation distance (negative for automated tuning)|格子点間隔を指す。負の値を指定すると後述する格子点数$N_{pin}$から格子点間隔が自動的に割り出される。|
|25|11 66.6 4|# grid size (Odd number)/strength/delta|$N_{pin}$ $V_{pin}$ $\Delta$を指す。それぞれ格子点数、格子点ポテンシャルの高さ、格子点のサイズを表す。|
|26|-1|# dynamically created vortex (iteration; negative=disable)|実時間発展で動的に量子渦を挿入するイテレーションを指定する。負の値で無効。|
|27|1.2 1.2|# dynamically created vortex position (x, y)|実時間発展で動的に挿入する量子渦の中心座標。$x~y$で指定する。|
|28|-1|# dynamically created vortex circulation|実時間発展で動的に挿入する量子渦の巻数。|
|29|-1|# dynamically created sound wave (iteration; negative=disable)|実時間発展で動的に音波を挿入するイテレーションを指定する。負の値で無効。|
|30|0.0 1.7 0.0|# dynamically created sound wave starting point (x, y, z)|実時間発展で動的に挿入する音波の中心座標。$x$ $y$ $z$で指定する。|
|31|60 4|# dynamically created sound wave strength/delta (higher for smaller size)|実時間発展で動的に挿入する音波を発生させる格子点のポテンシャル高さ$V_{pin}^{sound}$とサイズ$\Delta^{sound}$を指定する。|
|32|-1|# feedback is enabled from this iteration (negative=disable)|フィードバック効果を有効にするイテレーションを指定する。負の値で無効。|
|33|0.06|# external spin-down torque (positive for spin-down)|外部トルクの大きさ$N_c$を指定する。|
|34|15.0|# moment of inertia of the container|クラストの慣性モーメントの大きさ$I_c$を指定する。|
|35|-1|# external spin-down torque is enabled from this iteration (negative=disable)|外部トルクを有効にするイテレーションを指定する。負の値で無効|

:::warning
$|\Omega_{imag}| > 0$は数値的に不安定になってしまい、
定常解を求められないことを確認している。
:::

## シミュレーションの流れと設定値の関係
### 概要
容器の回転によって生成される量子渦の数は、角速度や粒子数だけではなく、
格子点の数や格子点のポテンシャル高さにも左右される。
こういった事情により、グリッチと格子点グリッドとの関係を調べるうえでは、
実時間発展を行う初期状態（Static解）は全て同等の大きさの角運動量を持つべきである。
例えば[Warszwaskiら(2012)の研究](https://doi.org/10.1111/j.1365-2966.2011.18803.x)では、
$V_{grid}=16.6$の格子点グリッドで量子渦を生成し、全てのケースで同等の角運動量を初期状態に設定している。

GPE Solverでは関連するパラメータとして、Feedback効果を有効にするイテレーション`feedback_iter`、
外部トルクを有効にするイテレーション`torque_iter`、
そして格子点グリッドを$V_{grid}=16.6$から`config.txt`で指定されたポテンシャル高さに変更するイテレーション`grid_iter`が存在している。
基本的には`feedback_iter = torque_iter = grid_iter`として良いが、
数値計算の自由度を失わないために個別のパラメータとして宣言している。
あるいは、`grid_iter`の直後は音波などの励起が激しくなるため、`feedback_iter = torque_iter > grid_iter`とするのが推奨される。

`grid_iter < 0`となる場合では、初期化のための格子点グリッドは設定されず、
虚時間発展の時点で`config.txt`で指定されたポテンシャル高さの格子点グリッドで計算される。

以下にそれぞれのパラメータとシミュレーションとの時系列を図示する。
![Flow](/img/GPESolver/flow.png)

:::note
コードの問題により、実際に効果が現れるのは指定されたイテレーションの次のイテレーションになる。
これまでのデータとの互換性を持たせるために仕様としているが、
同じイテレーションで効果が現れるように修正するべきである。
:::

## 例
### 1次元バルク解
```php text="config.txt"
# Configuration
100 1 1         # dimension
20              # particle number
0.2             # space step
0.001 0.004     # time step in imaginary/real time development
0.3             # density = x*density_new + (1-x)*density_old in imaginary time development
1               # calculate real time development (1:enabled, 0:disabled)
1000 100        # max iterations / iterations to skip over when writing in real time development
1               # predictor-corrector (1:enabled, 0:disabled)
0.05            # dissipation parameter (typically 0~0.05)
0.00 0.00       # cranking speed in imaginary/real time development
0.00            # noise intensity of cranking speed (0~1, typically 0.01)
8.5 200         # trap radius/strength
2               # trap type (0:CYLINDER/CIRCLE, 1:HO, 2:BULK, 3:SPHERE)
-1              # ratio of radius of the hole/core to the radius of the trap, R_core/R_trap (0.0/negative:disable)
0               # initial vortex (1:enabled, 0:disabled)
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

計算結果：
![Density](/img/GPESolver/1D_Bulk_Density.png)

### 1次元HO解（ソリトン無し）
```php text="config.txt"
# Configuration
200 1 1         # dimension
20              # particle number
0.1             # space step
0.001 0.004     # time step in imaginary/real time development
0.3             # density = x*density_new + (1-x)*density_old in imaginary time development
1               # calculate real time development (1:enabled, 0:disabled)
1000 100        # max iterations / iterations to skip over when writing in real time development
1               # predictor-corrector (1:enabled, 0:disabled)
0.05            # dissipation parameter (typically 0~0.05)
0.00 0.00       # cranking speed in imaginary/real time development
0.00            # noise intensity of cranking speed (0~1, typically 0.01)
8.5 5           # trap radius/strength
1               # trap type (0:CYLINDER/CIRCLE, 1:HO, 2:BULK, 3:SPHERE)
-1              # ratio of radius of the hole/core to the radius of the trap, R_core/R_trap (0.0/negative:disable)
0               # initial vortex (1:enabled, 0:disabled)
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

計算結果：
![Density](/img/GPESolver/1D_HO_Density.png)

### 1次元HO解（ソリトン有り）
```php text="config.txt"
# Configuration
200 1 1         # dimension
20              # particle number
0.1             # space step
0.001 0.004     # time step in imaginary/real time development
0.3             # density = x*density_new + (1-x)*density_old in imaginary time development
1               # calculate real time development (1:enabled, 0:disabled)
1000 100        # max iterations / iterations to skip over when writing in real time development
1               # predictor-corrector (1:enabled, 0:disabled)
0.05            # dissipation parameter (typically 0~0.05)
0.00 0.00       # cranking speed in imaginary/real time development
0.00            # noise intensity of cranking speed (0~1, typically 0.01)
8.5 5           # trap radius/strength
1               # trap type (0:CYLINDER/CIRCLE, 1:HO, 2:BULK, 3:SPHERE)
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

計算結果：
![Density](/img/GPESolver/1D_HO_VORTEX_Density.png)

### 2次元円柱解（量子渦有り）
```php text="config.txt"
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

計算結果：
![Density](/img/density.png)


