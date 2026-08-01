<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# PROCTOREX landing page — conventions

- **Stack:** Next.js 16 App Router (RSC) + TypeScript + Tailwind CSS v4 + `motion` + `@phosphor-icons/react` + `sonner` + `next-intl`.
- **Design tokens** live in `src/app/globals.css` (`@theme`): cream `#fbf6ec`, forest `#1e5b3e`, leaf `#84ac90`, gold `#c9a24b`, ink `#1b2b22`. Use tokens, never hardcoded hex, in components.
- **Fonts:** `Outfit` (display) + `Nunito Sans` (body) via `next/font`, self-hosted; keep the `font-display` class on headings.
- **Sections** are composed in `src/app/page.tsx` from `src/components/landing/*`; site chrome is `src/components/site/*`.
- **Client components** are only where interactivity lives (header cart, pricing add-to-cart, order form, Reveal wrapper). Keep everything else a server component.
- **Motion:** subtle scroll reveals via `src/components/ui/reveal.tsx`; always respect `prefers-reduced-motion`.
- **Copy is localized** via `next-intl` with locale-prefixed routes (`/ro /en /uk /ru /es`). All strings live in `messages/*.json`; `src/i18n/*` holds routing/request config, `src/proxy.ts` is the locale middleware. Keep every locale's JSON in sync when changing copy.
- **Source copy is Romanian (`ro`)** and comes from the product ad — do not rewrite or invent new marketing claims; translate them faithfully to the other locales.
- Reference skill repos are downloaded under `skills/` (gitignored) — consult them for design/animation guidance before changing UI.
- `skills/`, `.next/`, `node_modules/` are excluded from the TS build and git.
