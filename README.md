# DeepSeek Benchmarks

A static, browsable archive of benchmark demos, organized by round and platform.

## Round 1

| Platform | Original demo | Preserved source |
| --- | --- | --- |
| CommandCode GOAT (CCG) | Vivarium Nº 7 | `rounds/round-1/ccg/index.html` |
| OpenCode Go (OCG) | Abyssal Vivarium | `rounds/round-1/ocg/index.html` |
| DeepSeek Platform (DSP) | A Closed Ecology | `rounds/round-1/dsp/index.html` |

Each HTML file was copied byte-for-byte from its platform's `round 1/index.html`. No demo code was edited. Round 2 is not included. SHA-256 hashes in `rounds/checksums.json` guard the preserved files during every build.

The archive (`index.html`) links into a shared viewer (`demo.html?round=round-1&demo=ccg`). The viewer keeps round and platform navigation outside the original demo in an iframe. Switching platforms starts the selected demo fresh. **Open standalone** opens the original file in the same tab; browser Back returns to the viewer. Direct demo URLs also work independently. All paths are relative to support GitHub Pages project subdirectories.

## Preview locally

No dependencies to install. With Python 3:

```sh
python3 scripts/build.py
python3 -m http.server 8000 --directory _site
```

Open <http://localhost:8000>. To preview under a project subdirectory, serve the parent directory and visit `/deepseek-benchmarks/`.

## Publish on GitHub Pages

1. Commit and push this repository to `main`.
2. In the GitHub repository, go to **Settings → Pages → Build and deployment → Source**, and choose **GitHub Actions**.
3. Run **Deploy GitHub Pages** from the Actions tab, or push another commit to `main`.

The included workflow verifies the demo checksums, assembles `_site/`, uploads that folder, and deploys it. The expected URL for the configured remote is <https://nazzysar.github.io/deepseek-benchmarks/>. Deployment has not been performed by preparing these files.

Workflow follows [GitHub's custom Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Add a future round

1. Create `rounds/round-2/ccg/`, `rounds/round-2/ocg/`, and `rounds/round-2/dsp/` (or only the platforms available for that round).
2. Copy each original demo and any supporting assets as-is into its folder. Keep existing rounds unchanged.
3. Add an entry to `assets/catalog.js`, using `round-2` as the ID. Include its title, description, and demo objects with unique IDs, names, short names, titles, descriptions, paths, and a visual tone (`paper`, `aqua`, or `blue`). The archive and viewer round selector both use this catalog automatically.
4. Add the SHA-256 hash of every new demo file to `rounds/checksums.json`, using its repository-relative path as the key. Do not replace hashes for existing demos.
5. Run `python3 scripts/build.py` and preview the new round. Update the fallback links in `index.html` inside `<noscript>` for visitors with JavaScript disabled.

No routing or build-framework changes are required for new rounds.
