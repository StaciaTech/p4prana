import { cn } from "@/lib/utils";
import { PranaWave } from "./PranaWave";
import pranaLogo from "@/assets/prana-logo.svg.asset.json";

interface FooterProps {
  className?: string;
  partners?: string[];
}

export function Footer({ className, partners }: FooterProps) {
  const partnerList = partners ?? [
    "Arogya Bharath Organisation",
    "Sathyabama Institute of Science and Technology",
    "Medway Institute of Pulmonology",
  ];

  return (
    <footer className={cn("mt-24 bg-ink text-paper", className)}>
      <PranaWave variant="footer" animated />
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={pranaLogo.url} alt="" className="h-10 w-10" aria-hidden />
              <span className="font-display text-lg font-bold uppercase tracking-tight">
                PRANA <span className="text-gradient">2026</span>
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm text-paper/75">
              National Conclave on Pulmonary Research, Advancement & National
              Alignment. Radisson by GRT, Meenambakkam, Chennai · 20–21 November
              2026.
            </p>
          </div>
          <div>
            <p className="eyebrow" style={{ color: "#7DA6F0" }}>
              Programme
            </p>
            <ul className="mt-4 space-y-2 text-sm text-paper/85">
              <li><a href="/declaration">Chennai Declaration</a></li>
              <li><a href="/programme">Programme</a></li>
              <li><a href="/faculty">Faculty</a></li>
              <li><a href="/committee">Committee</a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow" style={{ color: "#7DA6F0" }}>
              Attend
            </p>
            <ul className="mt-4 space-y-2 text-sm text-paper/85">
              <li><a href="/register">Registration</a></li>
              <li><a href="/venue">Venue & travel</a></li>
              <li><a href="/sponsors">Partner with us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="eyebrow" style={{ color: "#7DA6F0" }}>
            In association with
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper/80">
            {partnerList.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-3 text-xs text-paper/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Medway Institute of Pulmonology. All rights reserved.</p>
          <p>
            This site collects data in accordance with India's Digital Personal
            Data Protection Act, 2023. See our privacy notice.
          </p>
        </div>
      </div>
    </footer>
  );
}
