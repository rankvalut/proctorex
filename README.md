# PROCTOREX — Ajutor natural. Zi de zi.

Landing page for **PROCTOREX**, a natural cream for the care of the sensitive
area during haemorrhoid discomfort. A faithful recreation of the product's
advertisement page — same copy, green + cream palette, botanical imagery and
layout.

Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Motion**,
using the design guidance from the downloaded skill repos (see
[`skills/`](#reference-skills)).

## Stack

| Concern   | Choice                                                        |
| --------- | ------------------------------------------------------------- |
| Framework | Next.js 16 (App Router, React Server Components)              |
| Styling   | Tailwind CSS v4 (design tokens in `src/app/globals.css`)      |
| Animation | `motion` (Framer Motion) — restrained scroll reveals          |
| Icons     | `@phosphor-icons/react`                                       |
| Toasts    | `sonner` (add-to-cart + form feedback)                        |
| Fonts     | `Outfit` (display) + `Nunito Sans` (body), self-hosted        |
| Language  | Romanian (`ro`), latin-ext subsets for diacritics             |

## Design tokens

- **Cream** `#fbf6ec` (page background) — warm paper family
- **Forest** `#1e5b3e` (brand, CTAs) with `#2f7a54` hover
- **Leaf** `#84ac90` / `#5f8d70` (accents)
- **Gold** `#c9a24b` (badges, highlights)
- **Ink** `#1b2b22` (body text)

## Pages / sections

1. **Hero** — product visual (SVG jar on stone slab with calendula, lavender
   and softgel capsules), headline, CTA and trust chips
2. **Beneficii** — "Disconfortul nu ar trebui să îți controleze viața."
3. **Ingrediente** — plant-based ingredient list
4. **Prețuri** — 3 packages (50 g / 100 g / 2 × 100 g) with add-to-cart
5. **Comandă** — order form (name, phone, e-mail, delivery address)
6. **Footer** — privacy / terms + ISO 22000:2018 line

> **Note on the product image:** the hero visual is a hand-drawn SVG
> illustration of the jar + botanicals. If you have the original product photo,
> drop it in `public/` and swap `<ProductVisual/>` in
> `src/components/landing/hero.tsx` for `<Image/>`.

> **Note on the order form:** submission is a front-end demo (validates, shows a
> success state + toast). Wire `src/components/landing/order-form.tsx` to an API
> route / backend to actually receive orders.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Deploy on Vercel (free tier)

1. Push this repo to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new) → **Import** the GitHub repo.
3. Vercel auto-detects **Next.js** (a `vercel.json` with `"framework": "nextjs"`
   is already included). Leave build settings as defaults.
4. Click **Deploy**. Vercel's Hobby (free) tier is enough for a static landing
   page — no custom plan required.

### CLI alternative

```bash
npm i -g vercel
vercel           # link + first deploy (prompts for project name, scope)
vercel --prod    # promote to production
```

Environment variables: none required for this site.

## Reference skills

The agent tooling used while building this page is downloaded locally under
`skills/` (gitignored, not part of the deployed site):

- [`emilkowalski/skills`](https://github.com/emilkowalski/skills) — design
  engineering & animation craft
- [`Leonxlnx/taste-skill`](https://github.com/Leonxlnx/taste-skill) — anti-slop
  frontend rules
- [`facebook/astryx`](https://github.com/facebook/astryx) — design-system
  principles (referenced, not depended on)
- [`nextlevelbuilder/ui-ux-pro-max-skill`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
  — curated palettes & typography

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
