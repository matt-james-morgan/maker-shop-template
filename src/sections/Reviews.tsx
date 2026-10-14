import { Star } from "lucide-react";
import { site } from "@/site.config";
import { SectionHeading } from "./SectionHeading";

export function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <SectionHeading eyebrow="Kind words" title="From happy customers" />
      {/* Swipeable row on phones, three columns on desktop */}
      <div className="snap-row mt-10 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
        {site.reviews.map((r) => (
          <figure key={r.name} className="flex w-[82%] flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6 sm:w-[60%] md:w-auto">
            <div className="flex gap-0.5 text-brand" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 font-display text-xl leading-snug">“{r.quote}”</blockquote>
            <figcaption className="mt-6 text-sm font-medium text-muted">— {r.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
