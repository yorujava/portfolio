# ライブラリのインポート宣言 --- (*3)
from pyscript import display
import matplotlib.pyplot as plt
import numpy as np
# サイン波を描画 --- (*4)
x = np.linspace(0,10,100)
y = np.sin(x)
fig = plt.figure()
plt.plot(x,y,c="r",label=r"sine")
plt.grid()
plt.legend()
# グラフのレンダリング --- (*5)
display(plt, target="mlp")