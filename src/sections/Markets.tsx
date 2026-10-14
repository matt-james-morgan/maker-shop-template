import { MapPin } from "lucide-react";
import { site } from "@/site.config";
import { SectionHeading } from "./SectionHeading";

export function Markets() {
  if (site.markets.length === 0) return null;
  return (
    <section id="markets" className="bg-sage/60">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="Find me in person" title="Upcoming markets" text="Come say hi, feel the fabrics, and pick up an order without shipping." />
        <ul className="mt-10 divide-y divide-sage-ink/15 border-y border-sage-ink/15">
          {site.markets.map((m) => (
            <li key={m.name + m.date} className="flex items-center gap-5 py-5">
              <span className="w-20 shrink-0 font-display text-xl whitespace-nowrap text-sage-ink md:w-24 md:text-2xl">{m.date}</span>
              <div className="min-w-0">
                <p className="text-lg font-semibold">{m.name}</p>
                <p className="mt-1 flex items-center gap-1.5 text-muted">
                  <MapPin className="size-4 shrink-0" />
                  {m.place}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
