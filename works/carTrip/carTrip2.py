import matplotlib.pyplot as plt
import numpy as np
from PIL import Image
from pyscript import display
from js import pyX,pyY,py_yen,py_hp,py_pop,py_spd,py_gas
# coding: utf-8

fig1 = plt.figure(figsize=(3.5, 1))
fig1.patch.set_facecolor('#666666')
fig1.patch.set_alpha(0.1)
plt.xlim(0, 100)
x7 = ['pop','yen','HP','gas','spd']
y7 = [py_pop,py_yen//1000000, py_hp,py_gas,py_spd]

plt.barh(x7, y7)
display(plt, target="canvas")


fig2 = plt.figure(figsize=(3.5, 3.5))
fig2.patch.set_facecolor('white')
fig2.patch.set_alpha(0.1)

x=[1360,1402,1530,1487,1343,1360,1445,1445,1360,1275,1292,1402,1343,1309,1207,1147,1232,1088,977,935,1037,1232,1062,977,952,892,850,807,905,850,680,510,680,552,425,765,680,552,637,340,255,212,340,425,425,340,170]
y=[1700,1402,1275,1105,1275,1105,977,850,892,850,799,739,765,714,765,850,1020,918,935,850,807,680,680,595,765,765,680,722,610,552,807,765,722,680,680,552,637,552,510,595,595,510,467,510,425,340,127]

plt.scatter(x, y, s=4)

x2=[pyX]
y2=[pyY]

plt.scatter(x2, y2, s=30,color="r")

x2=[1870,1445]
y2=[1717,2040]

plt.scatter(x2, y2,s=0)

display(plt, target="mlp")

def state():
    return 1
