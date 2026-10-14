// ─────────────────────────────────────────────
//  Maker Shop Template — everything you need to edit lives here.
//  Page title & link-preview text are in index.html.
//  Photos go in /public/images as name-640.webp + name-1200.webp
//  (see README for a one-line command to make them).
// ─────────────────────────────────────────────

export const site = {
  name: "Willow Stitch Studio",
  tagline: "Handmade bags, quilts & little things",
  location: "Guelph, Ontario",
  email: "hello@willowstitch.example",
  instagram: "https://instagram.com/",
  facebook: "", // leave "" to hide
  // Where your full shop lives (Etsy, Shopify, Square…). Leave "" to hide the button.
  shopUrl: "https://www.etsy.com/",

  // Form service endpoint (e.g. https://formspree.io/f/xxxx). Leave "" and forms open the visitor's email app.
  formEndpoint: "",

  hero: {
    eyebrow: "Small-batch · Sewn by hand",
    title: "Handmade pieces, sewn slowly and made to last.",
    text: "Bags, quilts and little gifts in natural cotton and linen — made one at a time in my home studio.",
    image: "/images/hero",
    imageAlt: "Hands guiding teal fabric through a sewing machine",
    badges: ["Local pickup & shipping", "Custom orders open"],
  },

  nav: [
    { label: "Shop", href: "#shop" },
    { label: "Custom orders", href: "#custom" },
    { label: "About", href: "#about" },
    { label: "Markets", href: "#markets" },
    { label: "FAQ", href: "#faq" },
  ],

  categories: ["Bags", "Home", "Accessories"],

  // status: "in-stock" | "made-to-order" | "sold-out"
  // buyUrl: a link to the product on Etsy/Shopify/Square, or a Stripe payment link. Leave "" to show "Ask about this".
  products: [
    { name: "Everyday Linen Tote", price: "$48", category: "Bags", status: "in-stock", image: "/images/tote", buyUrl: "https://www.etsy.com/" },
    { name: "Patchwork Throw Quilt", price: "$320", category: "Home", status: "made-to-order", image: "/images/quilt", buyUrl: "" },
    { name: "Liberty Print Scrunchies (set of 3)", price: "$22", category: "Accessories", status: "in-stock", image: "/images/scrunchies", buyUrl: "https://www.etsy.com/" },
    { name: "Washed Linen Cushions", price: "$65", category: "Home", status: "in-stock", image: "/images/cushions", buyUrl: "https://www.etsy.com/" },
    { name: "Indigo Cushion Covers", price: "$40", category: "Home", status: "sold-out", image: "/images/cushion-covers", buyUrl: "" },
    { name: "Crochet Pincushion", price: "$18", category: "Accessories", status: "in-stock", image: "/images/pincushion", buyUrl: "https://www.etsy.com/" },
  ],

  custom: {
    title: "Something made just for you",
    text: "Have an idea for a bag, quilt or gift? Tell me about it and I'll send a quote within a couple of days.",
    image: "/images/custom",
    imageAlt: "Close-up of hands hand-stitching white fabric",
    steps: [
      { title: "Tell me your idea", text: "Size, colours, fabric, and when you need it by." },
      { title: "Quote & deposit", text: "I'll send a price and timeline. A 50% deposit books your spot." },
      { title: "Sewn & delivered", text: "Progress photos along the way, then local pickup or shipping." },
    ],
  },

  about: {
    title: "Hi, I'm Willow.",
    paragraphs: [
      "I learned to sew at my grandmother's kitchen table and never stopped. Every piece in the shop is cut, pieced and stitched by me in my home studio.",
      "I use natural fibres, French seams and reinforced handles — the boring details that mean your bag will still look good in ten years.",
    ],
    image: "/images/maker",
    imageAlt: "The maker at work at a sewing table in a bright studio",
    stats: [
      { value: "12", label: "years sewing" },
      { value: "900+", label: "pieces made" },
      { value: "100%", label: "natural fibres" },
    ],
  },

  // Craft fairs and pop-ups. Remove all entries to hide the section.
  markets: [
    { date: "Nov 8", name: "Holiday Craft Fair", place: "Downtown Community Hall" },
    { date: "Nov 22", name: "Makers' Market", place: "Riverside Arts Centre" },
    { date: "Dec 6", name: "Winter Artisan Show", place: "Farmers' Market Pavilion" },
  ],

  reviews: [
    { quote: "The tote is beautifully made — I use it every single day and it still looks new.", name: "Priya S." },
    { quote: "Willow made a quilt from my dad's old shirts. I cried when I opened it.", name: "Megan T." },
    { quote: "Fast shipping, gorgeous fabric, and a handwritten note. Will be back.", name: "Daniel R." },
  ],

  faq: [
    { q: "How long does shipping take?", a: "In-stock items ship within 2 business days. Canada-wide delivery usually takes 3–7 days. Free local pickup in Guelph." },
    { q: "How long do custom orders take?", a: "Most custom pieces take 2–4 weeks depending on size. Quilts can take 6–8 weeks. I'll confirm a date with your quote." },
    { q: "How do I care for my piece?", a: "Machine wash cold on gentle and hang to dry. Linen softens beautifully with every wash." },
    { q: "Can I return an item?", a: "Unused in-stock items can be returned within 14 days. Custom pieces are final sale, but I'll always fix any issue with my workmanship." },
  ],
};

export type Product = (typeof site.products)[number];
