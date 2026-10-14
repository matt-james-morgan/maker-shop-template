import { cn } from "@/lib/cn";

export function SectionHeading({ eyebrow, title, text, className }: { eyebrow: string; title: string; text?: string; className?: string }) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="text-sm font-medium tracking-wide text-brand uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-4xl leading-tight md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-relaxed text-muted">{text}</p>}
    </div>
  );
}
