"""Verify original demo bytes and assemble only public site files (stdlib only)."""
from pathlib import Path
import hashlib
import json
import shutil

ROOT = Path(__file__).resolve().parent.parent
manifest = json.loads((ROOT / "rounds/checksums.json").read_text())
actual = {str(path.relative_to(ROOT)) for path in (ROOT / "rounds").rglob("*") if path.is_file() and path.name != "checksums.json"}
if actual != set(manifest):
    raise SystemExit("Demo files differ from checksum inventory; review rounds/checksums.json.")
for name, expected in manifest.items():
    if hashlib.sha256((ROOT / name).read_bytes()).hexdigest() != expected:
        raise SystemExit(f"Preserved demo changed: {name}")
output = ROOT / "_site"
if output.exists():
    shutil.rmtree(output)
output.mkdir()
for name in ("index.html", "demo.html", ".nojekyll"):
    shutil.copy2(ROOT / name, output / name)
for name in ("assets", "rounds"):
    shutil.copytree(ROOT / name, output / name)
print(f"Verified {len(manifest)} original demo files. Site assembled in {output}")
