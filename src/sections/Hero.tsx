import { ArrowRight, Check } from "lucide-react";
import { site } from "@/site.config";
import { Img } from "@/components/shared/Img";

export function Hero() {
  const { hero } = site;
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 pt-4 pb-16 md:grid-cols-2 md:gap-12 md:px-8 md:pt-10 md:pb-24">
      <div>
        <p className="text-sm font-medium tracking-wide text-brand uppercase">{hero.eyebrow}</p>
        <h1 className="mt-4 text-[2.6rem] leading-[1.05] sm:text-5xl lg:text-6xl">{hero.title}</h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">{hero.text}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#shop" className="btn btn-primary">
            Shop the collection
            <ArrowRight className="size-5" />
          </a>
          <a href="#custom" className="btn btn-secondary">
            Request a custom piece
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {hero.badges.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <Check className="size-4 text-sage-ink" />
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Image sits below the text on phones so the headline and buttons are seen first */}
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] md:aspect-[4/5]">
          <Img src={hero.image} alt={hero.imageAlt} priority sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
        <div className="absolute -bottom-5 left-5 rounded-2xl border border-line bg-surface px-4 py-3 shadow-lg shadow-ink/5 md:-left-6">
          <p className="font-display text-lg leading-none">Made in {site.location.split(",")[0]}</p>
          <p className="mt-1 text-xs text-muted">One piece at a time</p>
        </div>
      </div>
    </section>
  );
}
