import sys
from PIL import Image

def remove_white_bg_floodfill(input_path, output_path, tolerance=220):
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    width, height = img.size
    
    visited = set()
    queue = []
    
    # Add borders (top, bottom, left, right)
    for x in range(width):
        queue.append((x, 0))
        visited.add((x, 0))
        queue.append((x, height-1))
        visited.add((x, height-1))
    for y in range(height):
        queue.append((0, y))
        visited.add((0, y))
        queue.append((width-1, y))
        visited.add((width-1, y))
        
    def is_white_ish(r, g, b):
        return r > tolerance and g > tolerance and b > tolerance

    # Small optimization: use a list for queue, but since pop(0) is O(N), use collections.deque for speed
    from collections import deque
    queue = deque(queue)

    while queue:
        x, y = queue.popleft()
        
        r, g, b, a = pixels[x, y]
        if is_white_ish(r, g, b) and a > 0:
            # Make it transparent
            pixels[x, y] = (255, 255, 255, 0)
            
            # Add neighbors
            for dx, dy in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        visited.add((nx, ny))
                        queue.append((nx, ny))
                        
    img.save(output_path, "PNG")
    print("Done!")

if __name__ == "__main__":
    remove_white_bg_floodfill("d:/bolean/public/images/maskot-bolean.png", "d:/bolean/public/images/maskot-bolean-transparent2.png")
