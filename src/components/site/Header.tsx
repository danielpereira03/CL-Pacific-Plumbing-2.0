import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Our Work" },
  { href: "#gallery", label: "Gallery" },
  { href: "#team", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Logo />
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-base font-semibold text-foreground/80 hover:text-accent transition-colors tracking-wide">
              {l.label}
            </a>
          ))}
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold px-6">
            <a href="#contact">Request a Bid</a>
          </Button>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-foreground">
                {l.label}
              </a>
            ))}
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
              <a href="#contact" onClick={() => setOpen(false)}>Request a Bid</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}