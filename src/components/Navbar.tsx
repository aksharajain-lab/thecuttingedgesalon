import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Scissors } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Scissors className="h-6 w-6 text-gold transition-transform group-hover:rotate-12" />
          <span className="font-display text-xl tracking-wide">
            Cutting <span className="text-gold">Edge</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-gold text-gold-foreground text-sm font-medium tracking-wide shadow-gold hover:scale-[1.03] transition-smooth"
        >
          Book Now
        </Link>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-gold text-gold-foreground text-sm font-medium"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
