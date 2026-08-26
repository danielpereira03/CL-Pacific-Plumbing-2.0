import { useState } from "react";
import { Phone, Globe, MapPin, Building, MapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Paste your Web3Forms access key here
    formData.append("access_key", "2c9044ff-cd86-48d7-89e2-f3913c2ec0e9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        form.reset();
        toast.success("Bid request received. We'll respond within one business day.");
      } else {
        toast.error("Failed to send bid request. Please try again.");
      }
    } catch {
      toast.error("An error occurred. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-accent font-semibold">Contact & Bid Requests</div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Send Us Your Plans</h2>
          <p className="mt-4 text-muted-foreground">Submit project documents, RFPs, or general inquiries below. Our estimating team responds to all bid invitations within one business day.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          <form onSubmit={onSubmit} className="lg:col-span-2 bg-card border border-border rounded-lg p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" required placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" name="company" required placeholder="ABC General Contractors" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="estimating@abcgc.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" required placeholder="(404) 555-0100" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="project">Project Details / Bid Specs</Label>
              <Textarea id="project" name="project_details" required rows={6} placeholder="Project name, location, square footage, bid due date, link to plans, scope of work needed..." />
            </div>
            <Button type="submit" disabled={submitting} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
              {submitting ? "Sending..." : "Submit Bid Request"}
            </Button>
          </form>

          <div className="space-y-4">
            <div className="bg-primary text-primary-foreground rounded-lg p-6 space-y-5">
              <h3 className="font-bold text-lg">Office Contact</h3>
              <InfoRow icon={Phone} label="Phone" value="(470) 315-2072" href="tel:4703152072" />
              <InfoRow icon={Globe} label="Website" value="cl-pacific.com" href="https://cl-pacific.com" />
              <InfoRow icon={Building} label="Legal Name" value="CL PACIFIC, LLC" />
              <InfoRow icon={MapPin} label="Address" value={<>6825 Jimmy Carter Blvd<br />Ste 1700-C<br />Norcross, GA 30071</>} />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden border border-border bg-card">
              <div className="absolute inset-0 opacity-40" style={{
                backgroundImage: "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <div className="h-12 w-12 rounded-full bg-accent text-accent-foreground grid place-items-center shadow-lg">
                  <MapIcon className="h-6 w-6" />
                </div>
                <div className="mt-3 text-sm font-semibold text-primary">CL Pacific HQ</div>
                <div className="text-xs text-muted-foreground">Norcross, GA · Map Placeholder</div>
                <a href="https://maps.google.com/?q=6825+Jimmy+Carter+Blvd+Norcross+GA+30071" target="_blank" rel="noreferrer" className="mt-3 text-xs font-semibold text-accent hover:underline">
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, label, value, href }: { icon: any; label: string; value: React.ReactNode; href?: string }) {
  const content = (
    <div className="flex gap-3">
      <div className="h-9 w-9 rounded-md bg-primary-foreground/10 grid place-items-center flex-shrink-0">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-wider text-primary-foreground/60">{label}</div>
        <div className="text-sm font-medium mt-0.5">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:text-accent transition-colors">{content}</a> : content;
}