
# React Vite Todo App

Small Vite + React task manager (Todo) for deployment practice. Tasks are stored in localStorage so they persist in your browser.

Quick start

1. Install dependencies: npm install
2. Run dev server: npm run dev
3. Build for production: npm run build
4. Serve the built site: npm run preview

Deploy notes

- To deploy to static hosts (Netlify, Vercel, Cloudflare Pages) just connect the repo and set the build command to `npm run build` and publish `dist/`.
- The repository includes a GitHub Actions workflow to publish `dist/` to GitHub Pages using `peaceiris/actions-gh-pages` (it will push to `gh-pages`). Ensure `GITHUB_TOKEN` is available (default) in Actions.

