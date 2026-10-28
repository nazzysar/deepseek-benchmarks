# DeepSeek Benchmarks

A static, browsable archive of benchmark demos, organized by round and platform.

## Round 1

| Platform | Original demo | Preserved source |
| --- | --- | --- |
| CommandCode GOAT (CCG) | Vivarium Nº 7 | `rounds/round-1/ccg/index.html` |
| OpenCode Go (OCG) | Abyssal Vivarium | `rounds/round-1/ocg/index.html` |
| DeepSeek Platform (DSP) | A Closed Ecology | `rounds/round-1/dsp/index.html` |

## Round 2 — Cartographer’s Paradox

| Provider | Original demo | Preserved source |
| --- | --- | --- |
| DeepSeek API (DSP) | A Hand-Inked Atlas of Lies | `rounds/round-2/dsp/index.html` |
| OpenCode Go (OCG) | A Hand-Inked Atlas Mystery | `rounds/round-2/ocg/index.html` |
| OpenDesign (OD) | A Hand-Inked Atlas | `rounds/round-2/od/index.html` |
| Ollama API (OLL) | A Hand-Inked Atlas of Lies | `rounds/round-2/oll/index.html` |

Only the final standalone `index.html` from each provider’s `round 2/cartographers-paradox/` is archived. Development sources, QA files, and intermediate builds are excluded. Each original HTML is copied byte for byte; no demo code is edited. SHA-256 hashes in `rounds/checksums.json` guard all seven preserved files during every build. Original web font references are retained.

Both rounds have a compact **Prompt** button on the archive and each viewer. It opens the original task text in a scrollable dialog, dismissible with Close, Escape, or a click outside. The prompts are stored as plain text in `assets/round-1-prompt.txt` and `assets/round-2-prompt.txt`. A 15-second, labeled four-provider gameplay comparison is available below the round 2 cards.

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

1. Create a directory for each participating provider under `rounds/round-N/`.
2. Copy only each final standalone demo into its directory, without editing its bytes. Keep existing rounds unchanged.
3. Add the round and its demos to `assets/catalog.js`. Include the provider names, original titles, descriptions, paths, and visual tones. Optional `prompt` and `video` paths enable the shared controls.
4. Add SHA-256 hashes for new demos to `rounds/checksums.json`; preserve the existing hashes.
5. Update the direct links inside `index.html`’s `<noscript>` fallback, run `python3 scripts/build.py`, and preview the archive and viewers.

No routing or build-framework changes are required for new rounds.
