import { site } from "@/site.config";
import { Faq } from "@/components/shared/Faq";
import { SectionHeading } from "./SectionHeading";

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 md:grid-cols-[1fr_1.6fr] md:px-8 md:pb-24">
      <div>
        <SectionHeading eyebrow="FAQ" title="Good to know" />
        <p className="mt-4 text-lg text-muted">
          Anything else?{" "}
          <a href={`mailto:${site.email}`} className="text-ink underline underline-offset-4">
            Just email me
          </a>
          .
        </p>
      </div>
      <Faq items={site.faq} />
    </section>
  );
}
