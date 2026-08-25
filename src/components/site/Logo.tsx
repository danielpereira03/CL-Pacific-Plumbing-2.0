import logoMark from "@/assets/cl-pacific-logo.png";

export function Logo({ className = "", showText = true, invert = false }: { className?: string; showText?: boolean; invert?: boolean }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoMark}
        alt="CL Pacific — Commercial Plumbing"
        className="h-14 sm:h-16 md:h-20 w-auto drop-shadow-[0_4px_14px_rgba(245,149,99,0.45)]"
      />
      {showText && (
        <span className={`ml-3 hidden lg:inline-block text-[10px] uppercase tracking-[0.22em] border-l pl-3 ${invert ? "text-background/70 border-background/20" : "text-muted-foreground border-border"}`}>
          Commercial<br />Plumbing
        </span>
      )}
    </div>
  );
}