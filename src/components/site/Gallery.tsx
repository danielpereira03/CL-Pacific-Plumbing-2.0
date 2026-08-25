import risers from "@/assets/job-risers.jpg";
import f2 from "@/assets/field-2.jpg";
import f3 from "@/assets/field-3.jpeg";
import f6 from "@/assets/field-6.jpg";
import f8 from "@/assets/field-8.jpeg";
import f9 from "@/assets/field-9.jpeg";

const shots = [
  { img: f2, label: "Under-slab sanitary rough-in", meta: "Distribution center · GA", span: "col-span-2 row-span-2" },
  { img: f3, label: "Interior trench excavation", meta: "Tilt-wall warehouse", span: "row-span-1" },
  { img: f6, label: "Bedded sanitary main", meta: "Interior trench · 180 LF", span: "row-span-1" },
  { img: f9, label: "Restroom group layout", meta: "Ground-up commercial", span: "col-span-2 row-span-1" },
  { img: f8, label: "Complete under-slab layout", meta: "Phase 1 · NE Georgia", span: "md:col-span-2" },
  { img: risers, label: "Overhead storm risers", meta: "Distribution facility", span: "md:col-span-2" },
];


export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold">Field Gallery</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Real Crews. Real Installs.</h2>
            <p className="mt-4 text-muted-foreground">
              Every photo below is our own work — underground utilities, slab rough-in, and overhead storm piping on active
              commercial sites across the Southeast.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[190px] lg:auto-rows-[230px] gap-4">
          {shots.map((s) => (
            <figure
              key={s.label}
              className={`group relative overflow-hidden rounded-lg border border-border bg-card ${s.span}`}
            >
              <img
                src={s.img}
                alt={`${s.label} — ${s.meta}`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <div className="text-[10px] uppercase tracking-widest text-accent font-semibold">{s.meta}</div>
                <div className="mt-1 text-sm md:text-base font-semibold text-primary-foreground">{s.label}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}