import { Link } from "@tanstack/react-router";
import { Scissors, MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card mt-32">
      <div className="absolute inset-x-0 top-0 gold-divider" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <Scissors className="h-6 w-6 text-gold" />
            <span className="font-display text-xl">
              Cutting <span className="text-gold">Edge</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            A reasonable luxury salon in the heart of Shahdara — friendly
            environment, expert hands, lasting beauty.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-border hover:border-gold hover:text-gold transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-full border border-border hover:border-gold hover:text-gold transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.18em] text-gold mb-4">Visit Us</h4>
          <p className="text-sm text-muted-foreground flex gap-2">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
            M-137, Panchsheel Garden, Navin Shahdara, Subhash Park, Delhi - 110032
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.18em] text-gold mb-4">Hours</h4>
          <p className="text-sm text-muted-foreground flex gap-2">
            <Clock className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
            Open Daily<br />09:30 AM – 09:30 PM
          </p>
          <p className="text-sm text-muted-foreground flex gap-2 mt-3">
            <Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
            +91 98XXX XXXXX
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.18em] text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} Cutting Edge Salon. All rights reserved.</p>
          <p>Crafted with care in Shahdara, Delhi.</p>
        </div>
      </div>
    </footer>
  );
}
