#!/usr/bin/env python3
"""Build a handoff-ready crop task pack from the reference-map preview."""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


TASKS = [
    {
        "id": "01-jingjiang-fenhongqu",
        "name": "荆江分洪区",
        "zoneIds": ["长江-25"],
        "crop": [235, 370, 420, 735],
        "status": "approved-reference",
        "note": "已使用用户确认的 #A64F61 无标签图完成一次验收。",
    },
    {
        "id": "02-renmin-dayuan",
        "name": "人民大垸",
        "crop": [355, 455, 565, 705],
        "status": "ready-for-image-work",
        "note": "保留标签、相邻河道和完整可见色块。",
    },
    {
        "id": "03-honghu-fenhongqu",
        "name": "洪湖分洪区",
        "zoneIds": ["长江-28"],
        "crop": [550, 420, 945, 810],
        "status": "ready-for-image-work",
        "parts": ["洪湖（西块）", "洪湖（中块）", "洪湖（东块）"],
        "note": "三个分块属于同一洪湖分洪区，合并为一个处理任务。",
    },
    {
        "id": "04-qianlianghu",
        "name": "钱粮湖",
        "crop": [420, 650, 590, 870],
        "status": "ready-for-image-work",
        "note": "保留洞庭湖岸线作为后续对齐参照。",
    },
    {
        "id": "05-gongshuangcha",
        "name": "共双茶",
        "crop": [365, 800, 625, 1015],
        "status": "ready-for-image-work",
        "note": "保留标签、色块及洞庭湖岸线。",
    },
    {
        "id": "06-dujiatai",
        "name": "杜家台",
        "zoneIds": ["长江-30"],
        "crop": [700, 295, 1025, 500],
        "status": "approved-reference",
        "note": "已使用用户确认的 #C57C5B 无标签图完成一次验收。",
    },
    {
        "id": "07-xilianghu",
        "name": "西凉湖",
        "crop": [890, 380, 1075, 645],
        "status": "ready-for-image-work",
        "note": "保留标签、湖泊和完整可见色块。",
    },
    {
        "id": "08-huayanghe",
        "name": "华阳河",
        "crop": [1570, 315, 1885, 605],
        "status": "ready-for-image-work",
        "note": "保留龙感湖及长江水系作为对齐参照。",
    },
    {
        "id": "09-kangshanwei",
        "name": "康山圩",
        "zoneIds": ["长江-36"],
        "crop": [1680, 820, 1890, 1035],
        "status": "approved-reference",
        "note": "已使用用户确认的橙褐色扫描图完成一次验收。",
    },
]


def font(size: int):
    for path in (
        "/System/Library/Fonts/PingFang.ttc",
        "/System/Library/Fonts/STHeiti Medium.ttc",
    ):
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def fit_thumbnail(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    copy = image.copy()
    copy.thumbnail(size, Image.Resampling.LANCZOS)
    canvas = Image.new("RGB", size, "#eef2ed")
    x = (size[0] - copy.width) // 2
    y = (size[1] - copy.height) // 2
    canvas.paste(copy, (x, y))
    return canvas


def build_readme(tasks: list[dict], source: Path) -> str:
    rows = []
    for task in tasks:
        check = "x" if task["status"] == "approved-reference" else " "
        rows.append(
            f'- [{check}] **{task["name"]}** — `input/{task["id"]}.png` → '
            f'`processed/{task["id"]}.png`  \n  {task["note"]}'
        )
    return f"""# 参考地图图片处理任务包

源图：`{source.as_posix()}`  
裁切原则：保留目标色块、名称标签，以及后续配准需要的相邻河道或湖岸。

## 使用方式

1. 从 `input/` 取图处理，不要改变画布尺寸或裁掉边缘参照物。
2. 去除文字遮挡、补全色块时，保持河道和湖岸位置不变。
3. 完成后以相同文件名保存到 `processed/`，建议 PNG、RGB 或 RGBA。
4. 不确定的边缘不要猜测，可在任务清单里备注后留待验收。

## 任务清单

{chr(10).join(rows)}

## 状态含义

- `approved-reference`：已有一版用户确认参考图，保留作为做法示例；仍生成裁切任务便于统一归档。
- `ready-for-image-work`：等待人工处理。

`manifest.json` 记录每张裁切图在 2048×1152 源图中的 `[左, 上, 右, 下]` 像素坐标，后续可把处理结果映射回总图。
"""


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()

    source = Image.open(args.source).convert("RGB")
    if source.size != (2048, 1152):
        raise SystemExit(f"Expected a 2048x1152 source image, received {source.size}")

    input_dir = args.output / "input"
    processed_dir = args.output / "processed"
    input_dir.mkdir(parents=True, exist_ok=True)
    processed_dir.mkdir(parents=True, exist_ok=True)
    (processed_dir / ".gitkeep").touch()

    manifest_tasks = []
    crops = []
    for task in TASKS:
        left, top, right, bottom = task["crop"]
        crop = source.crop((left, top, right, bottom))
        filename = f'{task["id"]}.png'
        crop.save(input_dir / filename, optimize=True)
        crops.append((task, crop))
        manifest_tasks.append({
            **task,
            "input": f"input/{filename}",
            "processed": f"processed/{filename}",
            "sourceSize": [2048, 1152],
            "cropSize": [crop.width, crop.height],
        })

    source_hash = hashlib.sha256(args.source.read_bytes()).hexdigest()
    manifest = {
        "schemaVersion": 1,
        "source": args.source.as_posix(),
        "sourceSize": [2048, 1152],
        "sourceSha256": source_hash,
        "taskCount": len(manifest_tasks),
        "tasks": manifest_tasks,
    }
    (args.output / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    (args.output / "README.md").write_text(
        build_readme(manifest_tasks, args.source), encoding="utf-8"
    )

    tile_size = (420, 280)
    label_height = 52
    columns = 3
    rows = (len(crops) + columns - 1) // columns
    sheet = Image.new("RGB", (columns * tile_size[0], rows * (tile_size[1] + label_height)), "#f6f4ed")
    draw = ImageDraw.Draw(sheet)
    title_font = font(24)
    meta_font = font(16)
    for index, (task, crop) in enumerate(crops):
        column = index % columns
        row = index // columns
        x = column * tile_size[0]
        y = row * (tile_size[1] + label_height)
        sheet.paste(fit_thumbnail(crop, tile_size), (x, y))
        draw.rectangle((x, y + tile_size[1], x + tile_size[0], y + tile_size[1] + label_height), fill="#172c43")
        draw.text((x + 12, y + tile_size[1] + 5), task["name"], fill="white", font=title_font)
        draw.text((x + 190, y + tile_size[1] + 14), task["status"], fill="#d9c99a", font=meta_font)
    sheet.save(args.output / "contact-sheet.jpg", quality=92, subsampling=0)


if __name__ == "__main__":
    main()
