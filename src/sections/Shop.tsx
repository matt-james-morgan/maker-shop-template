import { useState } from "react";
import { cn } from "@/lib/cn";
import { site, type Product } from "@/site.config";
import { Img } from "@/components/shared/Img";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "./SectionHeading";

const statusLabel: Record<string, string> = {
  "in-stock": "In stock",
  "made-to-order": "Made to order",
  "sold-out": "Sold out",
};

function ProductCard({ product }: { product: Product }) {
  const soldOut = product.status === "sold-out";
  const href = product.buyUrl || `mailto:${site.email}?subject=${encodeURIComponent(`Question about: ${product.name}`)}`;

  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-line">
        <Img
          src={product.image}
          alt={product.name}
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className={cn("transition duration-500 group-hover:scale-105", soldOut && "opacity-60 grayscale")}
        />
        <span
          className={cn(
            "absolute top-2.5 left-2.5 rounded-full px-2.5 py-1 text-xs font-medium",
            soldOut ? "bg-ink text-bg" : product.status === "made-to-order" ? "bg-sage text-sage-ink" : "bg-surface/90 text-ink"
          )}
        >
          {statusLabel[product.status]}
        </span>
      </div>
      <h3 className="mt-3 font-sans text-[0.95rem] leading-snug font-medium sm:text-base">{product.name}</h3>
      <p className="mt-1 mb-3 text-muted">{product.price}</p>
      {/* mt-auto keeps buttons aligned when product names wrap */}
      <a
        href={soldOut ? `#custom` : href}
        target={product.buyUrl && !soldOut ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="mt-auto inline-flex min-h-11 items-center justify-center rounded-full border border-line text-sm font-semibold transition hover:border-ink"
      >
        {soldOut ? "Request one" : product.buyUrl ? "Buy" : "Ask about this"}
      </a>
    </article>
  );
}

export function Shop() {
  const [category, setCategory] = useState("All");
  const filters = ["All", ...site.categories];
  const products = category === "All" ? site.products : site.products.filter((p) => p.category === category);

  return (
    <section id="shop" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading eyebrow="The shop" title="Fresh off the machine" />
        {site.shopUrl && (
          <a href={site.shopUrl} target="_blank" rel="noopener noreferrer" className="inline-block py-3 text-sm font-semibold underline underline-offset-4">
            See everything in my online shop →
          </a>
        )}
      </div>

      {/* Filter chips scroll sideways on phones instead of wrapping into a tall block */}
      <div className="snap-row mt-8" role="group" aria-label="Filter by category">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setCategory(f)}
            aria-pressed={category === f}
            className={cn(
              "min-h-11 rounded-full border px-5 text-sm font-medium transition",
              category === f ? "border-ink bg-ink text-bg" : "border-line bg-surface hover:border-ink/40"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Two columns on phones, like every shop app people already know */}
      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:gap-x-8">
        {products.map((p, i) => (
          <Reveal key={p.name} delay={(i % 4) * 60} className="h-full">
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
