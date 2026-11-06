# RllCH Trading

A Mytheresa-inspired personal shopping and sourcing site built with **Next.js**, ready for **GitHub** and **Vercel**.

## Features

- Editorial homepage with hero, category grid, and featured products
- Six product categories plus **Personal Shopping** concierge flow
- Category pages with brand lists and example products (EUR “from” pricing)
- Mobile navigation and luxury-minimal typography
- Contact via configurable email, Instagram, and WhatsApp

## Local development

```bash
npm install
cp .env.example .env.local   # then edit your contact details
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize branding

Edit `src/lib/site.ts` for site name, tagline, and description.  
Edit `src/lib/categories.ts` for categories, brands, products, and starting prices.

## Deploy to Vercel (from GitHub)

1. Push this folder to a GitHub repository.
2. Sign in at [vercel.com](https://vercel.com) → **Add New Project** → import your repo.
3. Framework preset: **Next.js** (defaults are fine).
4. Add environment variables from `.env.example` in the Vercel project settings.
5. Deploy. Vercel will rebuild on every push to `main`.

## Deploy checklist

- [ ] Set `NEXT_PUBLIC_CONTACT_EMAIL` to your real inbox
- [ ] Add Instagram / WhatsApp if you use them
- [ ] Replace placeholder products in `categories.ts` with your own edits
- [ ] Optional: connect a form backend (Formspree, Resend, etc.) instead of `mailto`

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Images from [Unsplash](https://unsplash.com) (replace with your own assets in production)

## Legal note

Brand names in this project are used to describe sourcing categories only. Update footer copy and product content to match your business model and local regulations.
