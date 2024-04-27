import matplotlib.pyplot as plt
import numpy as np
from PIL import Image

fig = plt.figure(figsize=(8, 6))
fig.patch.set_facecolor('white')
ax = fig.add_subplot(1, 1, 1)

im = Image.open('./material/ja_map.png')
ax.imshow(im, alpha=0.6)
plt.show()