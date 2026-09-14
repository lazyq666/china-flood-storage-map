#!/bin/zsh
set -eu
cd -- "${0:A:h}"
print '启动后，在浏览器打开 http://127.0.0.1:8000'
print '停止运行：在此窗口按 Control + C。'
exec python3 -m http.server 8000 --bind 127.0.0.1
