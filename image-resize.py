import PIL
from PIL import Image

img = Image.open('asd/1.jpg')
wpercent = (800/float(img.size[0]))
hsize = int((float(img.size[1])*float(wpercent)))
img = img.resize((800,600), PIL.Image.ANTIALIAS)
img.save('resized.jpg')
