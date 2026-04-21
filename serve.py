import http.server
import socketserver
import os
from pathlib import Path

PORT = 3000
os.chdir(Path(__file__).parent)

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    ".mjs": "application/javascript",
    ".woff2": "font/woff2",
})

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Server running at http://localhost:{PORT}")
    httpd.serve_forever()
