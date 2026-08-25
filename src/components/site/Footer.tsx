import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Logo invert />
          <p className="mt-5 text-sm text-background/70 max-w-md">
            Dedicated commercial plumbing subcontractor serving general contractors and developers across the Southeastern United States.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-background/60 font-semibold">Office</div>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            <li>(470) 315-2072</li>
            <li>cl-pacific.com</li>
            <li>6825 Jimmy Carter Blvd<br />Ste 1700-C<br />Norcross, GA 30071</li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-background/60 font-semibold">Business Hours</div>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            <li>Mon – Fri · 7:00 AM – 5:00 PM</li>
            <li>Saturday · By Appointment</li>
            <li>Sunday · Closed</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-4 items-center justify-between text-xs text-background/60">
          <div>© 2026 CL PACIFIC, LLC. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-accent">Services</a>
            <a href="#work" className="hover:text-accent">Our Work</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
            <a href="#" className="hover:text-accent">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}