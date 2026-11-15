"""Optional: cache the owner's latest public SiBapak screenshot locally at full resolution.
Run with: python sync_sibapak_image.py
Only replaces assets/sibapak-original.png. Requires internet. No GitHub write access.
"""
from pathlib import Path
from urllib.request import Request, urlopen
import os
import struct

URL = "https://raw.githubusercontent.com/nadilaerianiafsri-nea/nadila-portfolio/main/assets/sibapak-original.png"
DEST = Path(__file__).resolve().parent / "assets" / "sibapak-original.png"


def main():
    req = Request(URL, headers={"User-Agent": "Nadila-Portfolio-Screenshot-Sync/1.0"})
    with urlopen(req, timeout=20) as response:
        image = response.read(8_000_001)
    if len(image) > 8_000_000 or not image.startswith(b"\x89PNG\r\n\x1a\n"):
        raise ValueError("Downloaded screenshot is not a valid PNG or is too large")
    width, height = struct.unpack(">II", image[16:24])
    if width < 1280 or height < 720:
        raise ValueError(f"Screenshot too small ({width}x{height}); existing file kept")
    temp = DEST.with_suffix(".tmp")
    temp.write_bytes(image)
    os.replace(temp, DEST)
    print(f"Saved {DEST.name}: {width}x{height}, {len(image)} bytes")


if __name__ == "__main__":
    main()
