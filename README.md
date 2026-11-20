# Maker Shop Template

A mobile-first website template for people who make and sell things — sewing, quilting, ceramics, candles, jewellery, knitting.

**Sections:** Hero · Shop grid with category filters · Custom-order request form (size, fabric, deadline, budget) · About the maker · Upcoming markets · Reviews · FAQ

**Setting up a new client? Start with [SETUP.md](SETUP.md):** what to ask the client for.

## Quick start

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```

## Make it yours

1. **Text, prices, links:** everything is in [`src/site.config.ts`](src/site.config.ts). You shouldn't need to touch the components.
2. **Page title & link previews:** edit the `<title>` and `<meta>` tags in [`index.html`](index.html) (these are what Google and iMessage/WhatsApp previews show).
3. **Photos:** drop the client's photos into `/photos`, run `npm run images`, then use the printed path (e.g. `/images/front-door`) in the config. Each photo gets a 640px version for phones and a 1200px version for desktops, as WebP.
4. **Colours & fonts:** the `@theme` block at the top of [`src/index.css`](src/index.css). Change a handful of colour values and the whole site follows.

## Forms

Forms work with no backend: by default they open the visitor's email app with their message filled in.
For forms that send directly (recommended), create a free form at [Formspree](https://formspree.io) (or Basin/Getform), and paste the endpoint into `formEndpoint` in the config.

## Built mobile-first

Most visitors will be on a phone, so every section starts from the phone layout and scales up:

- Sticky bottom action bar on phones (thumb-reach zone) that appears after the hero
- 44–48px tap targets, 16px+ form text (stops iOS zooming into fields), no sideways scrolling
- Full-screen phone menu with the main action pinned at the bottom
- Swipeable rows for reviews/filters instead of tall stacked blocks
- Responsive WebP images, lazy-loaded below the fold
- Respects "reduce motion", visible keyboard focus, semantic HTML, schema.org data for local search

## Deploy

It's a static site: deploy `/dist` to Vercel, Netlify or Cloudflare Pages (build command `npm run build`, output `dist`).

## Stack

Vite · React · TypeScript · Tailwind CSS v4 · lucide icons. Shared building blocks live in `src/components/shared` (same in all of the small-business templates); page sections are in `src/sections`.

## Selling

Each product's `buyUrl` can point at the item on Etsy, Shopify, Square, or a [Stripe payment link](https://stripe.com/payments/payment-links). Leave it empty and the button becomes "Ask about this" (pre-filled email). Sold-out items link to the custom-order form.

## Photo credits

Demo photos are from [Unsplash](https://unsplash.com) (free to use under the [Unsplash License](https://unsplash.com/license)). Replace them with the client's own photos before launch.

- Volha Flaxeco (hero)
- Giorgio Trovato (tote)
- Matt Benson (quilt)
- Sincerely Media (scrunchies)
- Koa'link (cushions)
- Silvana Alejandra Tejera (cushion covers)
- Lisa Woakes (pincushion)
- Elio Santos (hand sewing)
- lucas Favre (maker portrait)
- Darling Arias (threads)
- Ashley Diane Worsham (machine)
