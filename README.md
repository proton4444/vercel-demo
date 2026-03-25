# Vercel Checklist Demo

A minimal Next.js 14 app that displays a list of names with checkboxes. Persistence is handled via `localStorage`. Deployed on Vercel to verify a simple deployment pipeline.

## Features

- Next.js 14 App Router + Tailwind CSS
- Single-page checklist (10 names)
- Checkbox state persists across reloads (per device)
- Vercel environment banner

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Deploy to Vercel

1. Push this branch to GitHub.
2. Import the repository into Vercel (https://vercel.com/new).
3. Vercel auto-detects Next.js; no extra configuration needed.
4. Deploy; share the generated URL.

## Acceptance Criteria

- [ ] Deployed on Vercel with a reachable URL
- [ ] Page loads without console errors
- [ ] At least 5 checkable names are visible
- [ ] Checkboxes persist across page reloads (localStorage)
- [ ] Vercel environment banner is displayed
- [ ] Layout is mobile-friendly
- [ ] Central GitHub issue linked via Vibe Kanban contract is closed
