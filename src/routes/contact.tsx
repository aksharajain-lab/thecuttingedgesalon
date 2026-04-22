import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — Cutting Edge Salon, Shahdara, Delhi" },
      {
        name: "description",
        content:
          "Visit Cutting Edge Salon at M-137, Panchsheel Garden, Navin Shahdara, Subhash Park, Delhi - 110032. Open daily 9:30 AM – 9:30 PM. Book your appointment today.",
      },
      { property: "og:title", content: "Contact Cutting Edge Salon — Shahdara, Delhi" },
      { property: "og:description", content: "Book your appointment at our luxury salon in Panchsheel Garden, Shahdara." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="relative py-24 lg:py-32 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-radial-gold opacity-60" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4 animate-fade-up">Get In Touch</p>
          <h1 className="animate-fade-up-delay-1 font-display text-5xl sm:text-6xl lg:text-7xl text-balance">
            Book Your <span className="italic text-gold">Visit</span>
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 text-muted-foreground max-w-2xl mx-auto">
            Drop in, call ahead or send us a message — we'd love to welcome you
            to Cutting Edge Salon.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid lg:grid-cols-5 gap-12">
        {/* INFO */}
        <div className="lg:col-span-2 space-y-6">
          {[
            { icon: MapPin, title: "Visit Us", body: "M-137, Panchsheel Garden,\nNavin Shahdara, Subhash Park,\nDelhi - 110032" },
            { icon: Clock, title: "Hours", body: "Open Daily\n9:30 AM – 9:30 PM" },
            { icon: Phone, title: "Call", body: "+91 98XXX XXXXX" },
            { icon: Mail, title: "Email", body: "hello@cuttingedgesalon.in" },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card p-6 flex gap-4 hover:border-gold/40 transition-smooth"
            >
              <div className="h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <c.icon className="h-5 w-5 text-gold" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gold">{c.title}</p>
                <p className="mt-1 font-display text-lg whitespace-pre-line">{c.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FORM */}
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
            <h2 className="font-display text-3xl sm:text-4xl mb-2">
              Request an <span className="italic text-gold">Appointment</span>
            </h2>
            <p className="text-muted-foreground text-sm mb-8">
              Share a few details and we'll confirm your slot within the day.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <Send className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-display text-2xl text-gold">Thank you!</h3>
                <p className="mt-2 text-muted-foreground">
                  Your request has been received. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" name="name" type="text" required />
                  <Field label="Phone Number" name="phone" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" />
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Service
                  </label>
                  <select
                    name="service"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors"
                  >
                    <option>Haircut & Styling</option>
                    <option>Color & Highlights</option>
                    <option>Hair Spa & Treatment</option>
                    <option>Men's Grooming</option>
                    <option>Bridal / Special Occasion</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Message (optional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Preferred date, stylist, or any notes…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-gradient-gold text-gold-foreground font-medium shadow-gold hover:scale-[1.01] transition-smooth"
                >
                  Send Request <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="rounded-2xl overflow-hidden border border-border shadow-elegant">
          <iframe
            title="Cutting Edge Salon location map"
            src="https://www.google.com/maps?q=Panchsheel+Garden+Subhash+Park+Shahdara+Delhi+110032&output=embed"
            className="w-full h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
