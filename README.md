# Avindu & Yavishka — Wedding Venue Website

A responsive, white-and-gold wedding invitation and venue-sharing website built with Next.js, TypeScript, Tailwind CSS, and the supplied hotel photos. Configured for static export and Vercel deployment.

## Before publishing
- The wedding date/time were not included in the request, so the site currently says **Coming soon** and does not invent a date.
- The Milkshake profile exposed the hotel location and Facebook page, but did not expose a readable phone number in the page content. The site links to the profile for current hotel/contact details.
- Confirm the final wedding date/time and optionally add a couple's contact number before publishing.

## Local preview
Requires Node.js 18.17 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel
1. Extract this ZIP.
2. Upload the project to a new GitHub repository.
3. In Vercel, select **Add New → Project** and import the repository.
4. Framework preset: **Next.js**. Build command: `npm run build`. Output directory: `out` (static export is enabled in `next.config.mjs`).
5. Deploy. No environment variables are required.

You can also run `npm run build` locally to check the production build before deploying.

## Quick edits
- Main page and wedding copy: `src/app/page.tsx`
- Styling: `src/app/globals.css`
- Hotel images: `public/images/`
- Google Maps destination and profile links: constants near the top of `src/app/page.tsx`
