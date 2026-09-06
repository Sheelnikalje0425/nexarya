import os
import subprocess
import time
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]
evidence_dir = PROJECT_ROOT / "public" / "projects" / "stemfusion" / "evidence"
evidence_dir.mkdir(parents=True, exist_ok=True)

edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

targets = [
    ("01-stemfusion-home-desktop.png", "https://stemfusion.in/", "1440,900"),
    ("01-stemfusion-home-mobile.png", "https://stemfusion.in/", "390,844"),
    ("02-stemfusion-project-library-desktop.png", "https://stemfusion.in/project-library", "1440,900"),
    ("02-stemfusion-project-library-mobile.png", "https://stemfusion.in/project-library", "390,844"),
    ("03-stemfusion-downloads-desktop.png", "https://stemfusion.in/downloads", "1440,900"),
    ("03-stemfusion-downloads-mobile.png", "https://stemfusion.in/downloads", "390,844"),
    ("04-stemfusion-curriculum-learning-desktop.png", "https://stemfusion.in/curriculum-mapped-learning", "1440,900"),
    ("04-stemfusion-curriculum-learning-mobile.png", "https://stemfusion.in/curriculum-mapped-learning", "390,844"),
    ("05-stemfusion-technology-domains-desktop.png", "https://stemfusion.in/technology-domains", "1440,900"),
    ("06-stemfusion-contact-inquiry-desktop.png", "https://stemfusion.in/contact", "1440,900"),
    ("06-stemfusion-contact-inquiry-mobile.png", "https://stemfusion.in/contact", "390,844"),
    ("07-stemfusion-about-desktop.png", "https://stemfusion.in/about", "1440,900"),
]

for filename, url, size in targets:
    dest = str(evidence_dir / filename)
    print(f"Capturing {filename} from {url} at {size}...")
    p = subprocess.Popen([
        edge_path,
        "--headless",
        "--disable-gpu",
        f"--window-size={size}",
        "--virtual-time-budget=7000",
        f"--screenshot={dest}",
        url
    ])
    try:
        p.wait(timeout=30)
        if os.path.exists(dest):
            print(f"  --> Saved {filename} ({os.path.getsize(dest)} bytes)")
        else:
            print(f"  --> Failed to write {filename}")
    except Exception as e:
        p.kill()
        print(f"  --> Timeout/Error: {e}")
    time.sleep(1)

print("\nCapture process finished.")
