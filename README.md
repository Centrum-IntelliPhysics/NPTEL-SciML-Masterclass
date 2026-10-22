# Scientific Machine Learning for Computational Mechanics — NPTEL Masterclass

Public website for the three-session NPTEL masterclass by Somdatta Goswami (Johns Hopkins University):
physics-informed neural networks and neural operators, built from scratch in PyTorch.

**Site:** https://centrum-intelliphysics.github.io/NPTEL-SciML-Masterclass/

This repository holds only the public page and a setup-check notebook. The participant kit (worksheets,
solutions, handouts, slides) is shared separately with registered participants.

## Contents

```
index.html                 the page (single file, no build step)
assets/js/config.js        dates, registration link, contact, kit link  ← edit this
assets/css/style.css       design tokens shared with the Centrum IntelliPhysics site
assets/js/site.js          tabs, menu, theme toggle, fills in config values
assets/img/                illustrations and figures made for the course
assets/video/trailer.mp4   course introduction (13 min, 17 MB, loads only on play)
setup/setup_check.ipynb    public Colab notebook: checks PyTorch, torch.func, autograd, plotting
.nojekyll                  serve files as they are (no Jekyll processing)
```

## Publish on GitHub Pages

1. Create a **public** repository `NPTEL-SciML-Masterclass` in the `Centrum-IntelliPhysics` organisation.
2. Push the contents of this folder to the `main` branch:
   ```bash
   git init && git add . && git commit -m "Workshop site" && git branch -M main
   git remote add origin https://github.com/Centrum-IntelliPhysics/NPTEL-SciML-Masterclass.git
   git push -u origin main
   ```
3. In the repository: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`**.
4. After a minute the site is live at the address above.

If you choose a different repository name, update `setupColabUrl` in `assets/js/config.js` and the two
`og:` URLs near the top of `index.html`.

## Updating the page

Everything that changes before the workshop lives in `assets/js/config.js`:

| Field | What it does |
|---|---|
| `registrationUrl` | Turns every "Registration opens soon" button into a live **Register on NPTEL** link |
| `sessions` | Dates and times shown on the schedule tabs (empty → "Date to be announced") |
| `timezone` | Shown under the schedule |
| `contactEmail` | Adds a contact link in the footer and setup section (empty → hidden) |
| `kitUrl` | Keep empty on the public site. If set, the kit section links to it |
| `setupColabUrl` | The Open-in-Colab link for the setup check |

To replace the local video with YouTube, swap the `<video>` element in the hero for a YouTube `<iframe>`
and delete `assets/video/trailer.mp4`.

## Preview locally

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765.

## Credits

Illustrations and results were produced for the course from the session notebooks.
Centrum IntelliPhysics · Johns Hopkins University · https://github.com/Centrum-IntelliPhysics
