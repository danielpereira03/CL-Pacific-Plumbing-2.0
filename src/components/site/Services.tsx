import { Building2, Wrench, FileText, Factory, HardHat } from "lucide-react";

const services = [
  { icon: Building2, title: "New Construction Plumbing & Remodel", desc: "Full-scope rough-in and finish plumbing for commercial ground-up builds — from underground sanitary and storm to fixture trim-out and final inspection coordination." },
  { icon: Factory, title: "Natural Gas & Compressed Air Piping", desc: "Compressed air, natural gas, and high-pressure water systems for warehouses, manufacturing facilities, office buildings, and distribution centers." },
  { icon: FileText, title: "Design Build, Plan & Spec Bidding", desc: "Competitive hard-bid and design-assist pricing on commercial plumbing scopes. Detailed take-offs, value engineering, and prompt turnaround on RFPs." },
  { icon: HardHat, title: "Tenant Improvement & Build-Out", desc: "Office tenant fit-outs delivered on accelerated schedules with minimal disruption to occupied buildings." },
  { icon: Wrench, title: "Warranty Support", desc: "Post-construction warranty service and punch-list resolution for our completed projects." },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-accent font-semibold">What We Do</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Commercial Plumbing Capabilities</h2>
          <p className="mt-4 text-muted-foreground">From underground to final fixture trim, CL Pacific is structured to bid, manage, and self-perform every phase of the commercial plumbing scope.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors">
              <div className="h-12 w-12 rounded-md bg-primary text-primary-foreground grid place-items-center group-hover:bg-accent transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-primary">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}