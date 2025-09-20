# Tru Flavors — Gut‑friendly v2 (fixed)

This build fixes TSX syntax issues and updates Next.js to 14.2.7.

## Run
```bash
npm install
npm run dev
```

If you see a one-time TypeScript notice about `incremental`, it's normal.


## vNEXT highlights
- Warm orange theme to match The Curry Club vibe
- Streamlined navbar (Products, Science, Protocols, Recipes, FAQ, Subscribe, Book a Call)
- Booking page (`/book`) with Cal.com/Calendly embed via `NEXT_PUBLIC_BOOK_URL`
- Subscribe page uses `NEXT_PUBLIC_FORMSPREE_ID` (falls back to mailto)
- Culture Box section on Home
- Product detail pages with Ingredients/Nutrition/Allergens + Product JSON-LD
- Local product images under `public/images` + OG image `/images/og.png`
- SEO: `app/sitemap.ts`, `app/robots.ts`
