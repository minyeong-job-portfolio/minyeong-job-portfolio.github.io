#!/usr/bin/env python3
"""로컬 미리보기 서버. 브라우저 캐시를 끄고 항상 최신 파일을 내줍니다.
사용법:  python3 serve.py        (기본 8000번 포트)
         python3 serve.py 8080   (다른 포트)
"""
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()
    def log_message(self, fmt, *args):
        pass  # 요청 로그 끄기

port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
print(f"미리보기: http://localhost:{port}   (끄려면 Ctrl + C)")
ThreadingHTTPServer(("", port), NoCacheHandler).serve_forever()
