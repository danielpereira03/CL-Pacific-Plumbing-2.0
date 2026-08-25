import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Team } from "@/components/site/Team";
import { Work } from "@/components/site/Work";
import { Showreel } from "@/components/site/Showreel";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CL Pacific Commercial Plumbing | Norcross, GA" },
      { name: "description", content: "CL Pacific, LLC — licensed commercial plumbing subcontractor based in Norcross, GA. Bidding, new construction, industrial piping, and tenant build-outs." },
      { property: "og:title", content: "CL Pacific Commercial Plumbing" },
      { property: "og:description", content: "Dedicated commercial plumbing subcontractor for large-scale projects across the Southeast." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <Work />
        <Showreel />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
