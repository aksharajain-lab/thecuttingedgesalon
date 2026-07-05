import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight, Check } from "lucide-react";
import haircutImg from "@/assets/service-haircut.jpg";
import colorImg from "@/assets/service-color.jpg";
import spaImg from "@/assets/service-spa.jpg";
import groomingImg from "@/assets/service-grooming.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Cutting Edge Salon, Shahdara" },
      {
        name: "description",
        content:
          "Explore haircuts, coloring, hair spa, keratin treatments and men's grooming at Cutting Edge Salon in Panchsheel Garden, Shahdara, Delhi.",
      },
      { property: "og:title", content: "Services & Pricing — Cutting Edge Salon" },
      { property: "og:description", content: "Premium haircare, coloring, spa and grooming services in Shahdara." },
      { property: "og:image", content: colorImg },
      { name: "twitter:image", content: colorImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const categories = [
  {
    title: "Hair Cutting & Styling",
    img: haircutImg,
    items: [
      { name: "Women's Signature Cut", price: "₹ 250+" },
      { name: "Men's Haircut", price: "₹ 250+" },
      { name: "Kids' Haircut", price: "₹ 200" },
      { name: "Blow Dry & Styling", price: "₹ 200+" },
      { name: "Hair Wash & Conditioning", price: "₹ 200" },
    ],
  },
  {
    title: "Color & Highlights",
    img: colorImg,
    items: [
      { name: "Global Hair Color", price: "₹ 1,500+" },
      { name: "Root Touch-Up", price: "₹ 800+" },
      { name: "Highlights / Lowlights", price: "₹ 2,500+" },
      { name: "Balayage / Ombre", price: "₹ 4,000+" },
      { name: "Beard Color", price: "₹ 300" },
    ],
  },
  {
    title: "Hair Spa & Treatments",
    img: spaImg,
    items: [
      { name: "Classic Hair Spa", price: "₹ 800+" },
      { name: "Deep Nourishing Spa", price: "₹ 1,200+" },
      { name: "Keratin Smoothening", price: "₹ 4,500+" },
      { name: "Hair Botox", price: "₹ 5,500+" },
      { name: "Scalp Therapy", price: "₹ 1,000" },
    ],
  },
  {
    title: "Men's Grooming",
    img: groomingImg,
    items: [
      { name: "Beard Trim & Shape", price: "₹ 200" },
      { name: "Royal Shave Ritual", price: "₹ 350" },
      { name: "Skin Fade", price: "₹ 350+" },
      { name: "Hair + Beard Combo", price: "₹ 500" },
      { name: "Face Clean-Up", price: "₹ 600+" },
    ],
  },
] as const;

function ServicesPage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative py-24 lg:py-32 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold opacity-60" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 animate-fade-up">Our Menu</p>
          <h1 className="animate-fade-up-delay-1 font-display text-5xl sm:text-6xl lg:text-7xl text-balance">
            Services & <span className="italic text-gold">Pricing</span>
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Indulge in a curated menu of grooming rituals — designed to refresh,
            transform and bring out the very best in you.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 space-y-24">
        {categories.map((cat, idx) => (
          <div
            key={cat.title}
            className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="relative">
              <img
                src={cat.img}
                alt={cat.title}
                loading="lazy"
                width={900}
                height={1100}
                className="rounded-2xl shadow-elegant w-full object-cover aspect-[4/5]"
              />
            </div>

            <div>
              <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">
                Category {String(idx + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-balance">{cat.title}</h2>
              <div className="gold-divider w-24 my-8" />

              <ul className="space-y-4">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-center pb-3 border-b border-border/60"
                  >
                    <span className="flex items-center gap-3 text-foreground">
                      <Check className="h-4 w-4 text-gold shrink-0" />
                      {item.name}
                    </span>
                    <span className="font-display text-lg text-gold">{item.price}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs text-muted-foreground italic">
                * Prices vary based on hair length, density and stylist. Final
                quote is shared during consultation.
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="rounded-3xl border border-gold/30 bg-card p-12 lg:p-16 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-balance">
            Not sure what to <span className="italic text-gold">choose?</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Walk in for a complimentary consultation — our stylists will help
            you pick the perfect service.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-gold-foreground font-medium shadow-gold hover:scale-[1.03] transition-smooth"
          >
            Book Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
