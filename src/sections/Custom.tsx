import { site } from "@/site.config";
import { ContactForm, type Field } from "@/components/shared/ContactForm";
import { Img } from "@/components/shared/Img";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "./SectionHeading";

const fields: Field[] = [
  { name: "name", label: "Your name", required: true, autoComplete: "name", half: true },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
  { name: "idea", label: "What would you like made?", type: "textarea", required: true, placeholder: "e.g. a tote bag with an inside zip pocket, in mustard linen" },
  { name: "size", label: "Size or measurements", placeholder: "e.g. 40 × 35 cm", half: true },
  { name: "fabric", label: "Fabric & colours", placeholder: "Any you love or want to avoid", half: true },
  { name: "neededBy", label: "Needed by", type: "date", half: true },
  { name: "budget", label: "Budget", type: "select", options: ["Under $50", "$50–$150", "$150–$300", "$300+", "Not sure yet"], half: true },
];

export function Custom() {
  const { custom } = site;
  return (
    <section id="custom" className="bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Custom orders" title={custom.title} text={custom.text} />

          <ol className="mt-10 space-y-6">
            {custom.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <li className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sage font-display text-lg text-sage-ink">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-sans text-lg font-semibold">{step.title}</h3>
                    <p className="mt-1 text-muted">{step.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <div className="mt-10 hidden aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] lg:block">
            <Img src={custom.image} alt={custom.imageAlt} sizes="45vw" />
          </div>
        </div>

        <div className="rounded-[var(--radius-card)] border border-line bg-bg p-5 sm:p-8">
          <h3 className="text-2xl">Tell me about your idea</h3>
          <p className="mt-2 mb-6 text-muted">No commitment — I'll reply with a quote.</p>
          <ContactForm
            fields={fields}
            endpoint={site.formEndpoint}
            email={site.email}
            subject="Custom order request"
            submitLabel="Send request"
            note="I usually reply within 2 days."
          />
        </div>
      </div>
    </section>
  );
}
