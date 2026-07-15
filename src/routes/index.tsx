import { createFileRoute, Link } from "@tanstack/react-router";
import { PranaRing } from "@/components/prana/PranaRing";
import { Button } from "@/components/prana/Button";
import { SplitHeading } from "@/components/prana/SplitHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PRANA 2026 — National Policy Conclave on Pulmonary Health" },
      {
        name: "description",
        content:
          "PRANA 2026: Pulmonary Research, Advancement & National Alignment. Chennai, 20–21 November 2026.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <main className="min-h-screen bg-paper text-ink flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl text-center">
        <div className="flex justify-center">
          <PranaRing size={160} animated />
        </div>
        <p className="eyebrow mt-10">PRANA 2026 · design system in progress</p>
        <SplitHeading
          first="Design"
          second="System first"
          className="mt-4"
        />
        <span className="rule-gradient mx-auto mt-6" />
        <p className="prose-body mx-auto mt-6">
          The site is being built in stages. Step one — the design tokens,
          typography, motion, and component library — is available for review.
          Pages will be assembled on top of this system.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button variant="primary" asChild>
            <Link to="/styleguide">Open the style guide</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
