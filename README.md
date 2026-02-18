# Midlands AutoCare (Cloudflare Pages demo)

Conversion-focused Vite + React + TypeScript website for a local Nottingham garage lead-generation landing page.

## How to run locally

1. `npm install`
2. `npm run dev`
3. Open `http://localhost:5173`

Quality commands:

- `npm run lint`
- `npm run test`
- `npm run build`
- `npm run preview`

## Cloudflare Pages deployment

- Framework preset: **Vite**
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: **20**

SPA fallback is included in `public/_redirects` for static deployments.

## Lead conversion features included

- Above-the-fold call + booking CTA
- Mobile sticky action bar (Call / Book)
- Service cards with pricing anchors
- Trust bullets + stats
- Local-style testimonials
- Nottingham service area coverage
- Contact details, opening hours and map link
- Booking form with front-end success state
