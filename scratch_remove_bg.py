from PIL import Image

def remove_white(image_path, out_path):
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # If RGB values are high enough, it's white/gray background
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(out_path, "PNG")

if __name__ == '__main__':
    remove_white("d:/bolean/public/images/maskot-bolean.png", "d:/bolean/public/images/maskot-bolean-transparent.png")
