import { site } from "@/site.config";
import { Img } from "@/components/shared/Img";
import { Reveal } from "@/components/shared/Reveal";

export function About() {
  const { about } = site;
  return (
    <section id="about" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
      <Reveal>
        <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius-card)]">
          <Img src={about.image} alt={about.imageAlt} sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      </Reveal>

      <Reveal delay={100}>
        <p className="text-sm font-medium tracking-wide text-brand uppercase">About the maker</p>
        <h2 className="mt-3 text-4xl md:text-5xl">{about.title}</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-8">
          {about.stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-3xl md:text-4xl">{s.value}</dd>
              <dd className="mt-1 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
