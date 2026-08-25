import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import trench from "@/assets/job-trench.jpg";
import sitework from "@/assets/job-sitework.jpg";
import roughin from "@/assets/job-roughin.jpg";
import risers from "@/assets/job-risers.jpg";
import stack from "@/assets/job-stack.jpg";

const jobs = [
  { img: trench, title: "Underground Domestic Water Main" },
  { img: sitework, title: "Site Utilities — Phase 1" },
  { img: roughin, title: "Slab Rough-In" },
  { img: risers, title: "Tilt-Wall Storm Risers" },
  { img: stack, title: "Cast-Iron Storm Stack Install" },
];

export function Work() {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p - 1 + jobs.length) % jobs.length);
  const next = () => setI((p) => (p + 1) % jobs.length);
  const job = jobs[i];

  return (
    <section id="work" className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-accent font-semibold">Our Work</div>
          </div>
          <div className="text-sm text-primary-foreground/60">
            {String(i + 1).padStart(2, "0")} / {String(jobs.length).padStart(2, "0")}
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-3 relative aspect-[4/3] lg:aspect-[16/11] bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg overflow-hidden">
            <img src={job.img} alt={job.title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          </div>
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-accent font-semibold">Project {String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-3 text-2xl font-bold">{job.title}</h3>
            </div>
            <div className="mt-8 flex gap-3">
              <Button onClick={prev} size="icon" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground h-12 w-12">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button onClick={next} size="icon" className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 w-12">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-2">
          {jobs.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1 flex-1 rounded transition-colors ${idx === i ? "bg-accent" : "bg-primary-foreground/15"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}