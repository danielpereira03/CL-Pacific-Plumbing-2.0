import { CheckCircle2 } from "lucide-react";
import teamImg from "@/assets/job-stack.jpg";

const points = [
  "Dedicated commercial-only focus — no residential distractions",
  "Direct ownership involvement on every estimate and project",
  "In-house BIM coordination and detailed shop drawings",
  "Self-performed labor force with low subcontracting risk",
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-widest text-accent font-semibold">About CL Pacific</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Built for Commercial. Backed by Experience.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            CL Pacific, LLC is a dedicated commercial plumbing contractor headquartered in Norcross, Georgia. Founded to fill the gap between oversized national contractors and undersized residential outfits, we exist to be the responsive, well-priced subcontractor that general contractors and developers can rely on for serious commercial work.
          </p>
          
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-foreground">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-border">
            <img src={teamImg} alt="CL Pacific commercial plumbing project — interior risers" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-4">
              <div className="text-[10px] uppercase tracking-wider text-primary-foreground/70">On-site</div>
              <div className="text-sm font-semibold text-primary-foreground"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}