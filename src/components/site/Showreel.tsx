import { useState } from "react";
import { Play } from "lucide-react";
import hero1 from "@/assets/hero-1.mp4";
import clip2 from "@/assets/field-2.mp4";
import clip3 from "@/assets/field-3.mp4";

const clips = [
  { src: hero1, label: "Underground main install" },
  { src: clip2, label: "Trench & bedding" },
  { src: clip3, label: "Overhead riser set" },
];


export function Showreel() {
  const [active, setActive] = useState(0);
  return (
    <section className="relative bg-foreground text-background overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div>
          <div className="relative aspect-video rounded-lg overflow-hidden border border-background/10 bg-background/5">
            <video
              key={clips[active].src}
              src={clips[active].src}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
              <div className="text-sm font-semibold">{clips[active].label}</div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {clips.map((c, idx) => (
              <button
                key={c.src}
                onClick={() => setActive(idx)}
                className={`group relative aspect-video overflow-hidden rounded-md border transition-colors ${idx === active ? "border-accent" : "border-background/15 hover:border-background/40"}`}
                aria-label={`Play ${c.label}`}
              >
                <video src={c.src} muted playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                <span className="absolute inset-0 grid place-items-center">
                  <Play className={`h-5 w-5 ${idx === active ? "text-accent" : "text-background/80"}`} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}