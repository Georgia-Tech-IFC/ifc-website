# GT IFC Website

Source for [gatechifc.org](https://gatechifc.org), hosted for free on **GitHub Pages**.
Anything merged into `master` goes live automatically within a few minutes. There is no server to log into.

## How the site is organized

| Path | What it is |
|---|---|
| `index.html`, `rush.html`, `exec.html`, ... | One file per page. The file name is the URL (`rush.html` → gatechifc.org/rush). |
| `_includes/partials/` | Shared pieces used on several pages: nav bar, footer, head, contact info, president's welcome, etc. Edit once, it updates everywhere. |
| `_includes/svg/` | Icons. |
| `static/img/` | Images. Exec headshots are in `static/img/exec/`. |
| `static/pdf/` | PDFs (bylaws, Guide to Greek Life, grade reports). |
| `static/css/`, `static/js/` | Styles and scripts. |
| `CNAME` | Tells GitHub Pages the custom domain. Don't delete it. |

Each page starts with two `---` lines. Leave them in: they tell GitHub to process the page.
Lines like `{% include partials/nav.html %}` pull in a shared piece from `_includes/`.

## Making an update

1. Create a branch, or edit directly on GitHub with the pencil icon on any file.
2. Make your changes. Common ones:
   - **New exec board:** edit `exec.html` and add headshots to `static/img/exec/` (JPGs around 1000px tall keep the site fast).
   - **President's welcome:** edit `_includes/partials/president_welcome.html`.
   - **Rush dates and registration link:** edit `_includes/partials/recruitment.html` and `rush.html`.
   - **New PDF (Guide to Greek Life, grade report):** upload it to `static/pdf/` and update the link that points to it.
3. Open a pull request into `master` and merge it.
4. Check the **Actions** tab. When the "pages build and deployment" run turns green, the change is live.

### Previewing locally (optional)

With Ruby installed: `gem install jekyll`, then run `jekyll serve` in this folder and open http://localhost:4000.

## Hosting and domain

- **Hosting:** GitHub Pages (repo Settings → Pages). Source: `master` branch, root folder.
- **Domain:** gatechifc.org is registered at Namecheap. DNS points to GitHub Pages:
  - `A` records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
  - `CNAME` for `www`: georgia-tech-ifc.github.io
- Keep the Namecheap login with the IFC's account records (not in this repo), and pass it to the next tech director.
- **Never commit passwords, keys, or `.env` files.** This repo is public.
