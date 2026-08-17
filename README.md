# Zelda Cavanaugh

Artist site for Zelda Cavanaugh, the studio name of Michelle Cavanaugh. Original canvases sell on this domain. Live: [zeldacavanaugh.com](https://www.zeldacavanaugh.com).

```bash
npm install
npm run dev -- --port 3001 --hostname 127.0.0.1
```

Open [http://127.0.0.1:3001](http://127.0.0.1:3001).

## What the site does

- `/work` lists available originals. `/work?view=sold` lists sold work. Giclée prints of sold pieces are inquiry only.
- Cart and Stripe Embedded Checkout stay on this domain. Shipping is quoted at checkout.
- `/contact` sends mail to zeldacavanaugh@gmail.com through Resend.
- `/notes` holds Field Notes essays. `/privacy` is the short privacy note.
- `/brand` is unlisted. Invoice marks and the plus icon live there.

## Env vars (never commit `.env.local`)

Copy `.env.local.example` to `.env.local`. Restart `next dev` after changing keys.

| Name | Where it lives |
| --- | --- |
| `STRIPE_SECRET_KEY` | server (`sk_test_...` locally, `sk_live_...` on Vercel) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | browser |
| `STRIPE_WEBHOOK_SECRET` | server (`whsec_...`) |
| `NEXT_PUBLIC_SITE_URL` | `http://127.0.0.1:3001` locally, `https://www.zeldacavanaugh.com` in production |
| `STRIPE_TAX_ENABLED` | optional; `true` only after Stripe Tax registrations |
| `RESEND_API_KEY` | server; contact form and sale notices |
| `CONTACT_FROM_EMAIL` | optional. After the domain is verified in Resend: `Zelda Cavanaugh <studio@zeldacavanaugh.com>` |

Local Stripe testing uses the sandbox account in `.env.local.example`. Live catalog prices in `src/data/stripe-catalog.ts` belong to `acct_1U5AA1ElE4HX66r3`. Production Vercel keys must be from that live account.

## Stripe

1. Test mode: [sandbox API keys](https://dashboard.stripe.com/acct_1U5AAFRTRS9mkhxW/apikeys).
2. Paste `sk_test_` and `pk_test_` into `.env.local`. Restart the site.
3. Add a work, open `/checkout`, pay with `4242 4242 4242 4242`.
4. Local webhooks: `stripe listen --forward-to http://127.0.0.1:3001/api/stripe/webhook`. Put the `whsec_...` in `STRIPE_WEBHOOK_SECRET`. Listen for `checkout.session.completed`, `checkout.session.async_payment_succeeded`, and `checkout.session.async_payment_failed`.
5. After a real sale: mark `soldOut: true` on that work in `src/data/works.ts` and deploy. A paid webhook also emails the studio. It does not edit the catalog by itself.
6. Live webhook URL: `https://www.zeldacavanaugh.com/api/stripe/webhook`.

Without keys, the cart still works. Checkout says payment is not live.

## Contact

The form posts to `/api/contact`. Resend delivers to zeldacavanaugh@gmail.com. Reply goes to the visitor. Until the domain is verified, mail comes from `onboarding@resend.dev`.

## After a sale

1. Confirm the Stripe payment and the studio email.
2. Set `soldOut: true` on the slug in `src/data/works.ts`.
3. If a Giclée should be offered, set `print: true` in `src/data/product-copy.ts`.
4. Deploy.

## Deploy

Vercel is not git-connected. Production is:

```bash
npx vercel --prod --yes
```

Then commit and push so GitHub matches what is live. Do not commit `.env.local`.

## Content

- Works: `src/data/works.ts`, copy in `src/data/product-copy.ts`, heroes in `public/works/<slug>/hero.jpg`.
- Notes: `src/data/notes.ts`.
- Shows, FAQ, press: `src/data/site.ts`.
- Import helpers: `scripts/import-artworks.py`, `scripts/import-heroes.py`, `scripts/import-notes.py`.
