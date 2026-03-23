# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run lint         # ESLint
npx playwright test  # E2E tests against production (https://good-film-ai.vercel.app)
npx playwright test tests/e2e/homepage.spec.ts  # Single E2E test file
```

## Environment Variables

Copy `.env.example` to `.env.local`. Required:
- `RESEND_API_KEY` — Resend email service for contact form (`/api/contact`)
- `NEXT_PUBLIC_MAPBOX_TOKEN` — Mapbox for studio map component

## Architecture

**Next.js 14 App Router** with `next-intl` for EN/ZH bilingual support. Deployed on Vercel.

### Routing & i18n

- Root `/` redirects to `/en` (`src/app/page.tsx`)
- All pages live under `src/app/[locale]/` — locale is `"en" | "zh"` defined in `src/i18n/routing.ts`
- `middleware.ts` handles locale detection/redirect via `next-intl/middleware`
- Translation files: `src/messages/en.json` and `src/messages/zh.json` — namespaced by section (nav, hero, about, services, etc.)
- Messages are loaded dynamically in `src/app/[locale]/layout.tsx` and provided via `NextIntlClientProvider`

### Page Structure

The homepage (`src/app/[locale]/page.tsx`) assembles 8 sections in order:
Hero → ClientsStrip → About → Team → Services → Portfolio → AIFilm → Contact

Case study pages exist as sub-routes: `/trae`, `/tether`, `/river-of-life`, `/kah` — each with a `page.tsx` (server) + `*Content.tsx` (client component) pattern.

### Component Organization

- `src/components/sections/` — Full-page sections (HeroSection, AboutSection, etc.)
- `src/components/layout/` — Header (sticky nav with dropdown menus, mobile hamburger, language switcher) and Footer
- `src/components/ui/` — Shared primitives: Button, Card, SectionHeading, ScrollReveal (Framer Motion), CalendlyEmbed, StudioMap (Mapbox)
- `src/components/forms/` — ContactForm (React Hook Form + Zod validation)

### Data & Types

- `src/lib/constants.ts` — Navigation items, nav dropdowns, services, portfolio items, video IDs, social links, Calendly URL. All data is defined here as readonly arrays/objects.
- `src/types/index.ts` — TypeScript interfaces (NavItem, ServiceItem, PortfolioItem, ContactFormData)
- `src/lib/validators.ts` — Zod schemas for contact form

### Tailwind Theme

Custom cinema theme in `tailwind.config.ts`:
- Colors: `cinema-*` (dark tones), `gold-*` (accent), `accent-*` (blue CTAs)
- Fonts: `font-sans` (Inter + Noto Sans SC), `font-display` (Playfair Display)
- Custom animations: `fade-in`, `slide-up`, `glow`

### E2E Tests

Playwright tests in `tests/e2e/` run against production URL. Three test files: homepage, case-studies, navigation.
