import { Scissors, ShoppingBag } from "lucide-react";
import { site } from "@/site.config";
import { StickyBar } from "@/components/shared/StickyBar";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Shop } from "@/sections/Shop";
import { Custom } from "@/sections/Custom";
import { About } from "@/sections/About";
import { Markets } from "@/sections/Markets";
import { Reviews } from "@/sections/Reviews";
import { FaqSection } from "@/sections/FaqSection";
import { Footer } from "@/sections/Footer";

// Helps Google show the shop in local search results
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: site.name,
  description: site.tagline,
  email: site.email,
  address: { "@type": "PostalAddress", addressLocality: site.location },
  sameAs: [site.instagram, site.facebook, site.shopUrl].filter(Boolean),
};

export default function App() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <div id="top" />
      <Header />
      <main>
        <Hero />
        <Shop />
        <Custom />
        <About />
        <Markets />
        <Reviews />
        <FaqSection />
      </main>
      <Footer />
      <StickyBar
        actions={[
          { label: "Shop", href: "#shop", icon: <ShoppingBag className="size-5" /> },
          { label: "Custom order", href: "#custom", icon: <Scissors className="size-5" />, primary: true },
        ]}
      />
    </>
  );
}
