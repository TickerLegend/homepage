# Ticker Legend — production homepage

Marketing landing page (Vite + React 19 + TypeScript + Tailwind CSS v4). Deployed to **GitHub Pages** at `https://tickerlegend.github.io/homepage/` (`base: '/homepage/'`).

## Development

```bash
npm ci
npm run dev
```

Copy brand logos from the monorepo when refreshing assets:

- Header: `assets/brand/logos/BlueBullHorizontalTL.png` → `public/logos/header.png`
- Footer: `assets/brand/logos/NoBullLONGTickerLegend.png` → `public/logos/wordmark.png`

## Staging gate (optional)

Set `VITE_STAGING_GATE=true` and `VITE_STAGING_PASSWORD_HASH` (SHA-256 hex of the password). See `.env.example`. The CI workflow passes GitHub vars/secrets on build.

## Scripts

| Command | Purpose |
| ------- | ------- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build to `dist/` |
| `npm run lint` | ESLint |
| `npm run preview` | Preview production build |

## Related repos

| Repo | Role |
| ---- | ---- |
| [TickerLegend/tickerlegend](https://github.com/TickerLegend/tickerlegend) | Monorepo SSOT (FRD, plans, brand assets) |
| [TickerLegend/stock-roster-quest](https://github.com/TickerLegend/stock-roster-quest) | Frozen Lovable reference |

Plan: [homepage-github-pages.plan.md](https://github.com/TickerLegend/tickerlegend/blob/main/docs/plans/homepage-github-pages.plan.md)
