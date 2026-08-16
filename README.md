# Zelda Cavanaugh

Personal artist website for Zelda Cavanaugh — studies in translation between the DSM-5, generative systems, and hand-stitched canvas.

```bash
npm install
npm run dev -- --port 3001 --hostname 127.0.0.1
```

Open [http://127.0.0.1:3001](http://127.0.0.1:3001).

## Selling on this site (Stripe)

Buyers stay on this domain: **Add to cart → cart → embedded Stripe Checkout**, with billing + shipping address collected for original canvases. Prices come from `src/data/works.ts` (charged in cents). Sold works cannot be added. A paid or in-progress Checkout Session also blocks a second buyer of the same original.

### Env vars (never commit `.env.local`)

| Name | Where it lives |
| --- | --- |
| `STRIPE_SECRET_KEY` | server only (`sk_test_...` then `sk_live_...`) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | browser (`pk_test_...` then `pk_live_...`) |
| `STRIPE_WEBHOOK_SECRET` | server only (`whsec_...`) |
| `NEXT_PUBLIC_SITE_URL` | return URL, e.g. `http://127.0.0.1:3001` or `https://www.zeldacavanaugh.com` |
| `STRIPE_TAX_ENABLED` | optional; set `true` only after Stripe Tax registrations are done |

Copy `.env.local.example` to `.env.local`, paste **test** keys (`sk_test_` / `pk_test_`), **restart** `next dev`. Never put `sk_live_` in `.env.local` until you are ready to take real payments.

### Stripe Dashboard (sandbox first)

1. Open [API keys for Zelda Cavanaugh, LLC sandbox](https://dashboard.stripe.com/acct_1U5AAFRTRS9mkhxW/apikeys) with **Test mode** on.
2. Copy the Secret key (`sk_test_...`) and Publishable key (`pk_test_...`) into `.env.local`.
3. Restart the site: `npm run dev -- --port 3001 --hostname 127.0.0.1`
4. Add a work to cart and open `/checkout` (embedded Checkout on this site). Pay with card `4242 4242 4242 4242`, any future expiry, any CVC.
5. Webhooks (local): `stripe listen --forward-to http://127.0.0.1:3001/api/stripe/webhook` and put the `whsec_...` into `STRIPE_WEBHOOK_SECRET`. Listen for `checkout.session.completed`, `checkout.session.async_payment_succeeded`, and `checkout.session.async_payment_failed`.
6. After a real sale later, set `soldOut: true` on that work in `src/data/works.ts`.
7. Optional tax: complete [Stripe Tax registrations](https://dashboard.stripe.com/settings/tax), then set `STRIPE_TAX_ENABLED=true`.
8. When a test order looks right: turn Test mode off, paste **live** keys, set `NEXT_PUBLIC_SITE_URL` to `https://www.zeldacavanaugh.com`, and complete payouts setup.

Without keys, the cart still works. Checkout explains that payment is not live yet — it does not crash, and it does not send anyone to Squarespace.
