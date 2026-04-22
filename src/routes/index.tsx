import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Scissors, Sparkles, Heart, Award, MapPin, Clock, ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/hero-salon.jpg";
import haircutImg from "@/assets/service-haircut.jpg";
import colorImg from "@/assets/service-color.jpg";
import spaImg from "@/assets/service-spa.jpg";
import groomingImg from "@/assets/service-grooming.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cutting Edge Salon — Luxury Hair & Beauty in Shahdara, Delhi" },
      {
        name: "description",
        content:
          "Cutting Edge Salon in Subhash Park, Shahdara offers luxury haircuts, coloring, hair spa and grooming. Friendly environment, expert stylists. Open daily 9:30 AM – 9:30 PM.",
      },
      { property: "og:title", content: "Cutting Edge Salon — Luxury Hair & Beauty in Shahdara" },
      { property: "og:description", content: "Reasonable luxury salon with a friendly environment in Panchsheel Garden, Shahdara, Delhi." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const services = [
  { title: "Signature Haircuts", desc: "Precision cuts tailored to your face shape and lifestyle.", img: haircutImg, href: "/services" },
  { title: "Color & Highlights", desc: "Global color, balayage and dimensional highlights.", img: colorImg, href: "/services" },
  { title: "Hair Spa & Treatments", desc: "Deep nourishment, keratin and scalp therapy rituals.", img: spaImg, href: "/services" },
  { title: "Men's Grooming", desc: "Sharp fades, classic cuts and beard sculpting.", img: groomingImg, href: "/services" },
] as const;

const testimonials = [
  { name: "Priya S.", text: "Hands down the best salon in Shahdara. The stylists actually listen and the ambience feels like a 5-star spa.", rating: 5 },
  { name: "Rahul K.", text: "Reasonable luxury — exactly that. Got a fade and beard trim, walked out feeling brand new.", rating: 5 },
  { name: "Anjali M.", text: "My balayage turned out gorgeous. Friendly team, super clean place. Already booked my next visit.", rating: 5 },
] as const;

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <img
          src={heroImg}
          alt="Luxury interior of Cutting Edge Salon in Shahdara"
          className="absolute inset-0 w-full h-full object-cover"
          width={1600}
          height={1100}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-radial-gold" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="animate-fade-up text-gold uppercase tracking-[0.4em] text-xs sm:text-sm mb-6">
            Subhash Park · Shahdara · Delhi
          </p>
          <h1 className="animate-fade-up-delay-1 font-display text-5xl sm:text-7xl lg:text-8xl leading-[1.05] text-balance">
            Where Style Meets <span className="text-gold italic">Sophistication</span>
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A reasonable luxury salon with a friendly environment — crafting
            beautiful hair and confident smiles, every single day.
          </p>
          <div className="animate-fade-up-delay-3 mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-gold-foreground font-medium tracking-wide shadow-gold hover:scale-[1.03] transition-smooth"
            >
              Book an Appointment <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-gold/40 text-foreground hover:border-gold hover:bg-gold/5 transition-smooth"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK INFO STRIP */}
      <section className="border-y border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Clock className="h-6 w-6 text-gold" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Open Daily</p>
              <p className="font-display text-lg">9:30 AM – 9:30 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <MapPin className="h-6 w-6 text-gold" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Find Us</p>
              <p className="font-display text-lg">Panchsheel Garden, Shahdara</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <Award className="h-6 w-6 text-gold" />
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Recognized</p>
              <p className="font-display text-lg">Reasonable Luxury Salon</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Our Craft</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-balance">
            Signature <span className="italic text-gold">Services</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mt-8" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Link
              to="/services"
              key={s.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-gold/50 transition-smooth"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{s.desc}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  Discover <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT BLOCK */}
      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={haircutImg}
              alt="Stylist at Cutting Edge Salon"
              loading="lazy"
              width={900}
              height={1100}
              className="rounded-2xl shadow-elegant w-full object-cover aspect-[4/5]"
            />
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-background border border-gold/40 rounded-2xl p-6 shadow-gold">
              <p className="font-display text-4xl text-gold">10+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Years of Craft</p>
            </div>
          </div>

          <div>
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">About Us</p>
            <h2 className="font-display text-4xl sm:text-5xl text-balance">
              A neighbourhood salon with a <span className="italic text-gold">luxury soul</span>.
            </h2>
            <div className="gold-divider w-24 my-8" />
            <p className="text-muted-foreground leading-relaxed">
              Tucked into Panchsheel Garden, Cutting Edge Salon was built on a
              simple belief: world-class grooming shouldn't feel out of reach.
              Our stylists blend technical precision with a warm, friendly
              touch — so every visit feels less like an appointment and more
              like a small ritual of self-care.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <Sparkles className="h-6 w-6 text-gold mb-2" />
                <p className="font-display text-lg">Premium</p>
                <p className="text-xs text-muted-foreground">Products</p>
              </div>
              <div>
                <Heart className="h-6 w-6 text-gold mb-2" />
                <p className="font-display text-lg">Friendly</p>
                <p className="text-xs text-muted-foreground">Atmosphere</p>
              </div>
              <div>
                <Scissors className="h-6 w-6 text-gold mb-2" />
                <p className="font-display text-lg">Expert</p>
                <p className="text-xs text-muted-foreground">Stylists</p>
              </div>
            </div>

            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 text-gold hover:gap-3 transition-all"
            >
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">Kind Words</p>
          <h2 className="font-display text-4xl sm:text-5xl text-balance">
            Loved by Shahdara
          </h2>
          <div className="gold-divider w-24 mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-card p-8 hover:border-gold/40 transition-smooth"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground italic leading-relaxed">"{t.text}"</p>
              <p className="mt-6 font-display text-lg text-gold">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-32">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-card p-12 lg:p-20 text-center">
          <div className="absolute inset-0 bg-radial-gold opacity-60" />
          <div className="relative">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-balance">
              Ready for your <span className="italic text-gold">cutting edge</span> moment?
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              Book your appointment today and experience grooming the way it
              should be — refined, relaxing and remarkably you.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-gold-foreground font-medium tracking-wide shadow-gold hover:scale-[1.03] transition-smooth"
            >
              Book Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
