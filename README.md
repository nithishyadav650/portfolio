# Personal Portfolio (HTML/CSS/JS)

This is a small single-page portfolio built with plain HTML, CSS and JavaScript. It is intentionally lightweight and dependency-free so you can open it in any browser.

Files:

- `index.html` — main page
- `styles.css` — site styles (light/dark theme via `data-theme`)
- `script.js` — small JS for nav, theme toggle, copy email and smooth scroll
- `resume.pdf` — (not included) drop your resume PDF in the project root and the Resume links will download it.

How to use

1. Put your resume PDF at `d:\my projects\portifolio\resume.pdf` (or rename accordingly).
2. Open `index.html` in a browser. You can double-click the file or run a simple static server.

Optional: run a quick local server (PowerShell):

```powershell
# from the project folder
cd "d:\my projects\portifolio"
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

Customization tips

- Replace text in `index.html` with your own name, summary, and project links.
- Update `youremail@example.com` in `index.html` and `script.js`.
- Add project screenshots by replacing the `.thumb` blocks with `img` tags.

License

Free to use and modify.
