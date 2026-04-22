import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Award, Heart, Sparkles, Users, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import haircutImg from "@/assets/service-haircut.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Cutting Edge Salon, Shahdara, Delhi" },
      {
        name: "description",
        content:
          "Learn the story of Cutting Edge Salon — a friendly, reasonable luxury salon in Panchsheel Garden, Subhash Park, Shahdara, Delhi.",
      },
      { property: "og:title", content: "About Cutting Edge Salon — Shahdara, Delhi" },
      { property: "og:description", content: "A neighbourhood salon with a luxury soul, serving Shahdara with passion since day one." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Sparkles, title: "Excellence", desc: "Trained stylists, premium products and meticulous attention to every detail." },
  { icon: Heart, title: "Warmth", desc: "A friendly, welcoming environment where every guest feels at home." },
  { icon: Award, title: "Trust", desc: "Honest consultations, transparent pricing and consistent results." },
  { icon: Users, title: "Community", desc: "Proudly serving the families of Shahdara and Subhash Park since day one." },
] as const;

function AboutPage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <img
          src={heroImg}
          alt="Cutting Edge Salon interior"
          className="absolute inset-0 w-full h-full object-cover"
          width={1600}
          height={1100}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative text-center px-6">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 animate-fade-up">Our Story</p>
          <h1 className="animate-fade-up-delay-1 font-display text-5xl sm:text-6xl lg:text-7xl text-balance">
            Crafting confidence, <span className="italic text-gold">one cut at a time</span>
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-4xl px-6 lg:px-10 py-24 lg:py-32 text-center">
        <div className="gold-divider w-24 mx-auto mb-10" />
        <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
          Cutting Edge Salon was born from a simple idea — that everyone in
          Shahdara deserves a salon experience that feels luxurious, but never
          intimidating. Tucked into Panchsheel Garden, our doors open daily to
          a community we know by name.
        </p>
        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground">
          From the first wash to the final blow-dry, every service is delivered
          with care, craftsmanship and a genuine smile. Whether it's a quick
          trim before work or a full transformation for a wedding, we treat
          every chair like a stage for your best self.
        </p>
      </section>

      {/* VALUES */}
      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">What We Stand For</p>
            <h2 className="font-display text-4xl sm:text-5xl text-balance">
              Our <span className="italic text-gold">Values</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-background p-8 hover:border-gold/50 hover:-translate-y-1 transition-smooth"
              >
                <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center mb-5">
                  <v.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-display text-xl mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <img
          src={haircutImg}
          alt="Stylist working at Cutting Edge Salon"
          loading="lazy"
          width={900}
          height={1100}
          className="rounded-2xl shadow-elegant w-full object-cover aspect-[4/5]"
        />
        <div>
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">The Team</p>
          <h2 className="font-display text-4xl sm:text-5xl text-balance">
            Skilled hands, <span className="italic text-gold">friendly hearts</span>
          </h2>
          <div className="gold-divider w-24 my-8" />
          <p className="text-muted-foreground leading-relaxed">
            Our team is the soul of Cutting Edge. Every stylist is trained in
            the latest cutting and coloring techniques and refreshed regularly
            with international trend workshops. But what truly sets them apart?
            They listen. Patiently. Carefully. Until your vision becomes
            unmistakably theirs to bring to life.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-gold text-gold-foreground font-medium shadow-gold hover:scale-[1.03] transition-smooth"
          >
            Meet us in person <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
