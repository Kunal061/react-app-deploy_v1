

# Color Palette Generator (Vite + React)

Tiny color palette generator for deployment practice. Click a swatch to copy its hex code. Lock a color to keep it while regenerating the rest.

Quick start

1. Install dependencies: npm install
2. Run dev server: npm run dev
3. Build for production: npm run build
4. Serve the built site: npm run preview

Deploy notes

- Works with static hosting providers (Netlify, Vercel, Cloudflare Pages). Set build command to `npm run build` and publish `dist/`.
- The repo includes a GitHub Actions workflow to publish `dist/` to GitHub Pages using `peaceiris/actions-gh-pages`.


