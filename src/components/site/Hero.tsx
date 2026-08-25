import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/job-sitework.jpg";

export function Hero() {
  return (
    <section id="top" className="relative pt-16">
      <div className="relative h-[640px] md:h-[720px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Commercial plumbing site work in Georgia" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground leading-tight">
              Commercial Plumbing Contractor
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl">
              A dedicated new partner for large-scale commercial contracts. CL Pacific delivers competitive bidding, design build, precise plan & spec execution, and reliable on-site performance for general contractors and developers across the Southeast.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <a href="#work">View Our Jobs <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <a href="#contact">Contact Office</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 gap-6">
          {[
            { k: "Licensed", v: "GA Master Plumber" },
            { k: "Service Area", v: "Southeastern U.S." },
          ].map((s) => (
            <div key={s.k}>
              <div className="text-xs uppercase tracking-wider text-background/60">{s.k}</div>
              <div className="font-semibold mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}