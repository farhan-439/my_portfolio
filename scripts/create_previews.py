"""Create compact, clearly labeled motion previews for projects without demo footage."""
from math import cos, pi, sin
from pathlib import Path
from subprocess import Popen

from PIL import Image, ImageDraw, ImageFont


OUT = Path(__file__).resolve().parents[1] / "src/assets"
FONT = "/System/Library/Fonts/Supplemental/Arial.ttf"
BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
small = ImageFont.truetype(FONT, 13)
medium = ImageFont.truetype(FONT, 17)
large = ImageFont.truetype(BOLD, 34)
RED = (199, 78, 82)
CREAM = (235, 231, 223)
MUTED = (154, 155, 154)


def frame(name, kind, phase):
    image = Image.new("RGB", (640, 360), (26, 28, 30))
    d = ImageDraw.Draw(image)
    d.rounded_rectangle((18, 18, 622, 342), radius=16, outline=(77, 77, 77), width=1)
    d.text((40, 36), "ANIMATED CONCEPT PREVIEW", font=small, fill=RED)
    d.text((40, 59), name, font=large, fill=CREAM)
    d.line((40, 109, 600, 109), fill=(74, 75, 76), width=1)
    if kind == "medstick":
        labels = ["Local model", "Trusted sources", "Safety checks"]
        for i, label in enumerate(labels):
            x = 45 + i * 194
            d.rounded_rectangle((x, 150, x + 166, 249), radius=12, fill=(38, 40, 42), outline=(83, 83, 84))
            d.ellipse((x + 68, 166, x + 98, 196), outline=RED, width=3)
            d.text((x + 10, 214), label, font=small, fill=CREAM)
            if i < 2:
                d.line((x + 169, 200, x + 189, 200), fill=RED, width=2)
        d.ellipse((50 + (phase * 500) % 535, 286, 59 + (phase * 500) % 535, 295), fill=RED)
        d.text((42, 310), "Offline retrieval  /  on-device guidance", font=small, fill=MUTED)
    elif kind == "maternal":
        steps = ["Consent", "Check-in", "Risk review", "Clinician"]
        for i, label in enumerate(steps):
            x = 72 + i * 157
            d.ellipse((x - 17, 170, x + 17, 204), fill=RED if phase * 4 >= i else (73, 75, 76))
            d.text((x - 29, 218), label, font=small, fill=CREAM)
            if i < 3: d.line((x + 20, 187, x + 137, 187), fill=(112, 113, 112), width=2)
        d.text((42, 305), "Patient and clinician prototype  /  Doha 2025", font=small, fill=MUTED)
    elif kind == "rps":
        for i, label in enumerate(["ROCK", "PAPER", "SCISSORS"]):
            x = 62 + 183 * i
            d.rounded_rectangle((x, 146, x + 146, 270), radius=10, fill=(37, 39, 41), outline=(83, 83, 84))
            d.text((x + 22, 164), label, font=small, fill=CREAM)
            for j in range(5):
                height = 20 + int(42 * abs(sin(phase * 2 * pi + i + j * .4)))
                d.rectangle((x + 20 + j * 22, 248 - height, x + 31 + j * 22, 248), fill=RED if i == int(phase * 3) % 3 else (109, 111, 111))
        d.text((42, 305), "Siamese ResNet-34  /  image comparison", font=small, fill=MUTED)
    elif kind == "smarttrace":
        for row in range(8):
            for col in range(25):
                x, y = 46 + col * 22, 145 + row * 19
                shade = 47 + (row * 6 + col * 3) % 25
                d.rectangle((x, y, x + 19, y + 16), fill=(shade, shade + 1, shade + 1))
        points = []
        for col in range(25):
            x = 56 + col * 22
            y = 203 + int(30 * sin(col * .32 + phase * 2 * pi))
            points.append((x, y))
        d.line(points, fill=RED, width=4, joint="curve")
        d.ellipse((points[-1][0] - 6, points[-1][1] - 6, points[-1][0] + 6, points[-1][1] + 6), fill=CREAM)
        d.text((42, 305), "Weighted pixel graph  /  Dijkstra selection", font=small, fill=MUTED)
    elif kind == "walmart":
        values = [56, 87, 74, 116, 99, 132, 121, 151, 130, 162]
        for i, base in enumerate(values):
            x = 59 + i * 53
            h = base + int(9 * sin(phase * 2 * pi + i))
            d.rounded_rectangle((x, 278 - h, x + 32, 278), radius=4, fill=RED if i in (3, 7, 9) else (99, 104, 105))
        d.line((50, 279, 597, 279), fill=(139, 140, 140), width=1)
        d.text((42, 305), "Retail data cleaning  /  visual analysis", font=small, fill=MUTED)
    return image


for slug, name, kind in [
    ("maternal", "Maternal", "maternal"),
]:
    target = OUT / f"{slug}-preview.mp4"
    process = Popen(["ffmpeg", "-loglevel", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", "640x360", "-r", "16", "-i", "-", "-an", "-c:v", "libx264", "-preset", "veryfast", "-crf", "25", "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(target)], stdin=-1)
    for n in range(64):
        process.stdin.write(frame(name, kind, n / 64).tobytes())
    process.stdin.close()
    if process.wait() != 0:
        raise RuntimeError(f"ffmpeg failed for {target}")
    print(target.name, target.stat().st_size)
