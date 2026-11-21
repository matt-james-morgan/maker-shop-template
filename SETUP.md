# Setting up your shop website

This is the list of things we need from you to get your site live. Most of it is sending us your words and photos, and one short account sign-up for the contact form.

## 1. Send us your content

- [ ] **Shop name** and a short tagline (e.g. "Handmade bags, quilts & little things")
- [ ] **Your town**, **email**, and Instagram/Facebook links
- [ ] **Where you sell online**, if anywhere (Etsy, Shopify, Square…): the link to your shop
- [ ] **Products**: for each one, a name, price, category, and whether it's in stock, made to order, or sold out. If it's on Etsy/Shopify, include its link and the site's "Buy" button will go there. No link and the button says "Ask about this"
- [ ] **Custom orders**: what you'll make to order, typical turnaround time and price range
- [ ] **About you**: a paragraph about you and how you make things
- [ ] **Markets and pop-ups** you're doing: name, date, place
- [ ] **3–6 reviews** from customers (ask permission first), and **common questions** with your answers
- [ ] **Photos**: one photo per product on a plain background, plus a few of you or your workspace. Send the original files (full size, not screenshots or photos sent over WhatsApp/Facebook). Photos taken in daylight, with your phone held sideways, work best.

## 2. Get messages from your form (5 minutes)

So that messages from your website land straight in your inbox:

1. Sign up for a free account at [formspree.io](https://formspree.io) **using the email address where you want to receive messages**.
2. Click **+ New Form**, name it "Website", and click **Create Form**.
3. Copy the form's endpoint (it looks like `https://formspree.io/f/abcd1234`) and **send it to us**.
4. After launch, send yourself a test message from the site. The first one asks you to confirm your email.

Skip this and the form still works: it opens the visitor's own email app with the message filled in. That's fine to start with, but some visitors won't finish sending it.

## 3. Taking payment (optional)

The site doesn't run a checkout itself. For each product, pick one:
- **Link to it on Etsy, Shopify or Square**, where people already buy from you.
- **A Stripe payment link**: in [Stripe](https://stripe.com), go to **Payment Links → New**, add the product and price, and send us the link.
- **Neither**: the button says "Ask about this" and people message you.

## 4. Your web address

- [ ] **Already have a domain** (like `yourbusiness.ca`)? Tell us where you bought it (GoDaddy, Namecheap, Squarespace, Google…). We'll send you two records to add, or you can add us as a user on the account.
- [ ] **Don't have one?** Tell us the name you'd like and we'll check it's available. Expect about $15–25 a year.

## 5. After launch

New products, sold-out items, new market dates? Send us the change and we'll update it.

---

## Developer steps

Everything above goes in [`src/site.config.ts`](src/site.config.ts): the endpoint in `formEndpoint`, products in `products`, and markets in `markets`. Photos: put the originals in `/photos`, run `npm run images`, and use the printed paths. Page title and link-preview text: [`index.html`](index.html). Details in [README.md](README.md).

**Before launch, and after every change:** run `npm run check:mobile` and look at the 360px screenshots. It must pass. See the "Phone-width check" section in the README.
