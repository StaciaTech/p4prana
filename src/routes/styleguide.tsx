import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { Button } from "@/components/prana/Button";
import { PranaWave } from "@/components/prana/PranaWave";
import { PranaRing } from "@/components/prana/PranaRing";
import { SplitHeading } from "@/components/prana/SplitHeading";
import { SessionCard } from "@/components/prana/SessionCard";
import { SpeakerCard } from "@/components/prana/SpeakerCard";
import { StatBlock } from "@/components/prana/StatBlock";
import { SectionDivider } from "@/components/prana/SectionDivider";
import { GroupChip } from "@/components/prana/GroupChip";
import { Nav } from "@/components/prana/Nav";
import { Footer } from "@/components/prana/Footer";
import pranaLogo from "@/assets/prana-logo.svg";

export const Route = createFileRoute("/styleguide")({
  head: () => ({
    meta: [
      { title: "Style guide — PRANA 2026" },
      { name: "robots", content: "noindex" },
      {
        name: "description",
        content: "PRANA 2026 design system: tokens, motion, and components.",
      },
    ],
  }),
  component: Styleguide,
});

function Styleguide() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const dark = mode === "dark";

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        <Nav />

        {/* Header */}
        <section className="mx-auto max-w-[1200px] px-6 pt-16 pb-10">
          <p className="eyebrow">PRANA 2026 · design system v0.1</p>
          <SplitHeading first="Design" second="System" className="mt-4" />
          <span className="rule-gradient mt-6" />
          <p className="prose-body mt-6">
            Colours extracted from the official PRANA logo. The gradient runs
            deoxygenated blue → oxygenated magenta — a physiological spectrum,
            not decoration. It appears in only five permitted places:
            <em> the logo</em>, the <em>"2026"</em> numerals, the 3px rule
            under H2s, group codes (as flat fills), and the primary CTA.
          </p>

          <div className="mt-8 inline-flex rounded-md border border-line p-1">
            {(["light", "dark"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={cn(
                  "mono min-h-11 px-4 text-[12px]",
                  mode === m
                    ? "bg-ink text-paper rounded-sm"
                    : "text-slate",
                )}
              >
                {m} surface
              </button>
            ))}
          </div>
        </section>

        {/* COLOUR */}
        <Section title="Colour" second="Tokens">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Swatch name="--prana-ink" hex="#061446" />
            <Swatch name="--prana-blue" hex="#206CDC" />
            <Swatch name="--prana-indigo" hex="#3F4DDA" />
            <Swatch name="--prana-violet" hex="#9457C1" />
            <Swatch name="--prana-magenta" hex="#F42287" note="Large text only — fails AA at 16px" />
            <Swatch name="--prana-teal" hex="#0F7B8A" />
            <Swatch name="--paper" hex="#F9F5FE" light />
            <Swatch name="--slate" hex="#5B6B7C" />
          </div>
          <p className="eyebrow mt-10">Tints — backgrounds only, never text</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <Swatch name="--tint-blue" hex="#C4D7F5" light />
            <Swatch name="--tint-violet" hex="#D8CBEE" light />
            <Swatch name="--tint-pink" hex="#FBDFF4" light />
          </div>

          <p className="eyebrow mt-10">Physiological gradient · permitted uses</p>
          <div
            className="mt-3 h-16 rounded-md"
            style={{ background: "var(--prana-gradient)" }}
            aria-label="PRANA gradient: blue to magenta"
          />
          <p className="mono mt-3 text-[12px] text-slate">
            linear-gradient(90deg, #206CDC → #9457C1 52% → #F42287)
          </p>
        </Section>

        {/* TYPOGRAPHY */}
        <Section title="Typography" second="Scale">
          <div className="space-y-8">
            <div>
              <p className="eyebrow">Eyebrow · Poppins 600 · 13px · 0.18em</p>
              <SplitHeading
                first="Scientific"
                second="Programme Overview"
                className="mt-3"
              />
              <span className="rule-gradient mt-4" />
            </div>
            <div className="border-t border-line pt-8">
              <p className="eyebrow mb-2">H1 · Display</p>
              <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase leading-[1.05]">
                PRANA <span className="text-gradient">2026</span>
              </h1>
            </div>
            <div className="border-t border-line pt-8">
              <p className="eyebrow mb-2">Body · Inter · 17 / 1.7</p>
              <p className="prose-body">
                A person with COPD lives with the condition for over four
                decades. A comparable cardiac patient, for roughly fifteen. The
                page must argue the life-course case in the reader's first
                minute — not bury it beneath sponsor logos.
              </p>
            </div>
            <div className="border-t border-line pt-8">
              <p className="eyebrow mb-2">Mono · JetBrains Mono · uppercase</p>
              <p className="mono text-sm">
                20–21 NOVEMBER 2026 · RADISSON BY GRT · MEENAMBAKKAM · CHENNAI
              </p>
            </div>
          </div>
        </Section>

        {/* MOTION */}
        <Section title="Motion" second="Breath">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-line p-6">
              <p className="eyebrow">PranaRing · animated</p>
              <div className="mt-6 flex items-center justify-center">
                <PranaRing size={180} animated />
              </div>
              <p className="mono mt-6 text-[12px] text-slate">
                --breath: 4s · cubic-bezier(0.37, 0, 0.63, 1)
              </p>
            </div>
            <div className="rounded-lg border border-line p-6">
              <p className="eyebrow">PranaWave · hero</p>
              <div className="mt-6">
                <PranaWave variant="hero" animated />
              </div>
              <p className="mono mt-6 text-[12px] text-slate">
                Strokes offset 60ms · out-of-phase drift
              </p>
            </div>
          </div>
          <p className="prose-body mt-8">
            Section reveals: fade + 12px rise, stagger 60ms. Reduced-motion
            preferences disable all breath animation.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.37, 0, 0.63, 1] }}
            className="mono mt-6 inline-block rounded-sm border border-line px-3 py-1 text-[12px] text-slate"
          >
            fade + 12px rise
          </motion.div>
        </Section>

        {/* LOGO / SIGNATURE */}
        <Section title="Signature" second="Graphic">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-line bg-card p-8">
              <p className="eyebrow">PRANA lockup</p>
              <div className="mt-6 flex items-center gap-4">
                <img src={pranaLogo} alt="" className="h-20 w-20" />
                <span className="font-display text-4xl font-bold uppercase leading-none">
                  PRANA <span className="text-gradient">2026</span>
                </span>
              </div>
            </div>
            <div className="rounded-lg border border-line bg-card p-8">
              <p className="eyebrow">Wave · divider</p>
              <div className="mt-6">
                <PranaWave variant="divider" animated />
              </div>
            </div>
          </div>
        </Section>

        {/* BUTTONS */}
        <Section title="Buttons" second="Variants">
          <p className="prose-body mb-6">
            Magenta primary is the <em>only</em> place brand pink is used as a
            solid fill. Secondary is outline ink. Ghost is text-only.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Registration opens 1 August</Button>
            <Button variant="secondary">Read the Declaration framework</Button>
            <Button variant="ghost">Download programme PDF</Button>
            <Button variant="primary" disabled>
              Released closer to the event
            </Button>
          </div>
        </Section>

        {/* GROUP CHIPS */}
        <Section title="Group" second="Coding">
          <p className="prose-body mb-6">
            Group codes are fixed and flat. Never gradient. Never invented.
          </p>
          <div className="flex flex-wrap gap-3">
            <GroupChip group="I">Science detects</GroupChip>
            <GroupChip group="II">Integrated practice</GroupChip>
            <GroupChip group="III">Research & innovation</GroupChip>
            <GroupChip group="IV">P4 · One Health</GroupChip>
          </div>
        </Section>

        {/* SESSION CARDS */}
        <Section title="Session" second="Cards">
          <div className="grid gap-4 md:grid-cols-2">
            <SessionCard
              time="09:40–10:45"
              variant="inaugural"
              code="S1"
              title="Inauguration & keynote — the case for a national pulmonary policy"
              speakers={[
                { name: "Shri J. P. Nadda", role: "Chief Guest, Union Minister of Health & Family Welfare" },
              ]}
            />
            <SessionCard
              time="11:00–12:30"
              group="I"
              code="S2"
              title="Detecting pulmonary disease across the life course"
              speakers={[
                { name: "Dr Placeholder", role: "Chair, MIP Chennai" },
                { name: "Dr Placeholder", role: "Discussant, ICMR" },
              ]}
            />
            <SessionCard
              time="14:00–15:30"
              group="III"
              code="S5"
              title="Research pipelines & innovation in India's pulmonary care"
              speakers={[{ name: "Dr Placeholder", role: "Moderator" }]}
            />
            <div className="md:col-span-2">
              <SessionCard
                time="17:30–18:30"
                variant="closing"
                code="Closing plenary"
                title="Chennai Declaration adoption & signing"
                speakers={[
                  { name: "Adopted by delegates · handed to MoHFW, NHM, AYUSH, IRDAI, ICMR, State Health Depts." },
                ]}
              />
            </div>
          </div>
        </Section>

        {/* SPEAKERS */}
        <Section title="Speaker" second="Cards">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <SpeakerCard
              name="Shri J. P. Nadda"
              designation="Hon'ble Union Minister"
              institution="Ministry of Health & Family Welfare, GoI"
              sessions={[{ group: "I", code: "Inaugural" }]}
            />
            <SpeakerCard
              name="Dr Supraja K"
              designation="Conference Chair"
              institution="Medway Institute of Pulmonology, Chennai"
              sessions={[{ group: "II", code: "S3" }, { group: "IV", code: "S8" }]}
            />
            <SpeakerCard
              name="International Faculty"
              designation="Placeholder — online participant"
              institution="American Thoracic Society"
              sessions={[{ group: "III", code: "S6" }]}
              online
            />
          </div>
        </Section>

        {/* STATS */}
        <Section title="Stat" second="Blocks">
          <div className="grid gap-8 border-t border-b border-line py-10 md:grid-cols-4">
            <StatBlock value="400" label="Delegates" source="Organising Committee" />
            <StatBlock value="50+" label="Speakers, confirmed to date" source="Faculty roster · updated" />
            <StatBlock value="8" label="Scientific sessions, single hall" source="Programme v2" />
            <StatBlock value="72" label="Life expectancy at birth (years)" source="SRS 2024" />
          </div>
        </Section>

        {/* DIVIDER */}
        <Section title="Section" second="Divider">
          <SectionDivider />
        </Section>

        <Footer />
      </div>
    </div>
  );
}

function Section({
  title,
  second,
  children,
}: {
  title: string;
  second: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-16 border-t border-line">
      <SplitHeading first={title} second={second} stacked={false} as="h2" className="text-3xl md:text-4xl" />
      <span className="rule-gradient mt-5 mb-10" />
      {children}
    </section>
  );
}

function Swatch({
  name,
  hex,
  note,
  light,
}: {
  name: string;
  hex: string;
  note?: string;
  light?: boolean;
}) {
  return (
    <div className="rounded-lg border border-line overflow-hidden bg-card">
      <div
        className="h-20 w-full"
        style={{ background: hex }}
        aria-label={`${name} swatch`}
      />
      <div className="p-3">
        <p className="mono text-[11px] text-slate">{hex.toUpperCase()}</p>
        <p className="mt-1 font-mono text-[12px] text-ink dark:text-paper">{name}</p>
        {note && <p className="mt-1 text-[11px] text-slate">{note}</p>}
        {light && <p className="mt-1 text-[11px] text-slate">Light surface</p>}
      </div>
    </div>
  );
}
