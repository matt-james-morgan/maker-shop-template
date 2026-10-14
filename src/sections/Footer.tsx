import type { ReactNode } from "react";
import { Mail } from "lucide-react";
import { site } from "@/site.config";
import { FacebookIcon, InstagramIcon } from "@/components/shared/SocialIcons";

const year = new Date().getFullYear();

export function Footer() {
  const links = [
    { href: `mailto:${site.email}`, label: "Email", icon: <Mail className="size-5" /> },
    site.instagram && { href: site.instagram, label: "Instagram", icon: <InstagramIcon className="size-5" /> },
    site.facebook && { href: site.facebook, label: "Facebook", icon: <FacebookIcon className="size-5" /> },
  ].filter(Boolean) as { href: string; label: string; icon: ReactNode }[];

  return (
    <footer className="bg-ink text-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-3xl">{site.name}</p>
          <p className="mt-2 text-bg/60">
            {site.tagline} · {site.location}
          </p>
          <a href={`mailto:${site.email}`} className="mt-4 inline-block py-2 break-all text-lg underline underline-offset-4">
            {site.email}
          </a>
        </div>
        <div className="flex gap-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              aria-label={l.label}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex size-12 items-center justify-center rounded-full border border-bg/20 transition hover:bg-bg hover:text-ink"
            >
              {l.icon}
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-8 text-sm text-bg/50 md:px-8">
        © {year} {site.name}. Handmade with care.
      </p>
    </footer>
  );
}
