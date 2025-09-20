
# Tru Flavors — Deploy & Run

**Canonical domain:** https://truflavors.org

## Prereqs
- Node 18+ (or 20+)
- npm 9+

## 1) Install
```bash
npm ci
```

## 2) Configure (optional but recommended)
Copy `.env.example` → `.env.local` and set:
```
NEXT_PUBLIC_BOOK_URL=https://cal.com/your-handle
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

## 3) Dev
```bash
npm run dev
```
Open http://localhost:3000

## 4) Build & Start (production)
```bash
npm run build
npm start
```

### Notes
- We aligned SEO base URLs to **truflavors.org** and added image remote patterns for both `tru-flavors.com` and `truflavors.org`.
- React typings pinned to **18.x** to match React 18.
- A screen-reader-only H1 was added to the homepage for A11y/SEO.
