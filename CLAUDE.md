# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Marketing/landing page for **Cartographer** — a subscription service ($7/mo) that delivers Utah parcel data into Google Earth Pro. Single-page site with Stripe Checkout integration, deployed to Vercel.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint (flat config with next/core-web-vitals + next/typescript)
- No test framework is configured

## Environment Setup

Copy `.env.example` to `.env.local` and fill in Stripe keys. Required vars: `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_ID`, `NEXT_PUBLIC_APP_URL`.

## Architecture

**Single-page app** — `src/app/page.tsx` composes all sections in order. Two additional pages: `/success` and `/cancel` for post-checkout redirects.

**Server vs Client components** — Almost everything is a server component. Only three components use `"use client"`: `Navbar` (mobile menu toggle), `FAQ > Accordion` (expand/collapse), and `CheckoutButton` (fetch + redirect to Stripe).

**Content is centralized** — All copy, pricing, features, FAQ items, nav links live in `src/lib/constants.ts`. Section components import from there. Types are in `src/types/index.ts`.

**Stripe integration** — Uses Stripe hosted Checkout (no embedded payment form). Flow: `CheckoutButton` POSTs to `/api/checkout` → creates a Stripe checkout session → redirects user to Stripe. Webhook at `/api/webhooks/stripe` handles subscription lifecycle events. Stripe client is lazy-initialized via `getStripe()` in `src/lib/stripe.ts`. Both API routes use `force-dynamic`.

## Styling

**Tailwind CSS v4** — No `tailwind.config.ts`. All theme tokens (colors, fonts) are defined as CSS variables inside `@theme inline { }` in `src/app/globals.css`.

- Brand colors: `navy` (#0C1E3A), `blue` (#2563EB), `blue-light` (#EFF6FF), `emerald` (#10B981)
- Fonts: Instrument Serif (headlines via `font-serif`), Inter (body via `font-sans`)
- Use these tokens directly in Tailwind classes: `bg-navy`, `text-blue`, `font-serif`, etc.

## Path Aliases

`@/*` maps to `./src/*` (configured in tsconfig.json).
