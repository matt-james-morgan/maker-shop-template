import { useCallback, useEffect, useState } from "react";
import { Menu, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/cn";
import { site } from "@/site.config";
import { MobileMenu } from "@/components/shared/MobileMenu";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-colors duration-300",
          scrolled ? "border-b border-line bg-bg/85 backdrop-blur-lg" : "border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
          <a href="#top" className="py-2 font-display text-xl tracking-tight md:text-2xl">
            {site.name}
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} className="py-2 text-sm font-medium text-muted transition-colors hover:text-ink">
                {item.label}
              </a>
            ))}
            <a href="#shop" className="btn btn-primary min-h-11 px-5 text-sm">
              <ShoppingBag className="size-4" />
              Shop
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="-mr-2 flex size-12 items-center justify-center md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="size-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        open={open}
        onClose={close}
        items={site.nav}
        footer={
          <a href="#custom" className="btn btn-primary w-full">
            Request a custom piece
          </a>
        }
      />
    </>
  );
}
