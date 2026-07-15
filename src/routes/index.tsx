import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Nav } from "@/components/prana/Nav";
import { Footer } from "@/components/prana/Footer";
import { Button } from "@/components/prana/Button";
import { PranaRing } from "@/components/prana/PranaRing";
import { PranaWave } from "@/components/prana/PranaWave";
import { SplitHeading } from "@/components/prana/SplitHeading";
import { SectionDivider } from "@/components/prana/SectionDivider";
import { SpeakerCard } from "@/components/prana/SpeakerCard";
import { StatBlock } from "@/components/prana/StatBlock";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "PRANA 2026 — National Conclave on the Future of Pulmonary Health",
      },
      {
        name: "description",
        content:
          "PRANA 2026: a national policy conclave producing the Chennai Declaration on Pulmonary Health. 20–21 November 2026, Radisson by GRT, Meenambakkam, Chennai.",
      },
      {
        property: "og:title",
        content: "PRANA 2026 — Chennai Declaration on Pulmonary Health",
      },
      {
        property: "og:description",
        content:
          "One conclave. One signed output. 10 named, dated, measurable commitments handed to MoHFW, NHM, AYUSH, IRDAI, ICMR and state health departments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const REGISTRATION_OPENS = new Date("2026-08-01T00:00:00+05:30").getTime();

function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <Declaration />
        <LifeCourse />
        <P4Service />
        <Dignitaries />
        <StatsStrip />
        <CoHosts />
      </main>
      <Footer />
    </div>
  );
}

/* ─────────────────────────── SECTION 1 · HERO ─────────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-paper">
      {/* Backdrop artwork — offset right, bleeding off-canvas at low opacity */}
      <div
        className="pointer-events-none absolute inset-0 -z-0"
        aria-hidden="true"
      >
        <div className="absolute -right-[18%] top-[8%] opacity-[0.55]">
          <PranaRing size={720} animated strokeWidth={4} />
        </div>
        <div className="absolute inset-x-0 bottom-0 opacity-40">
          <PranaWave variant="hero" animated />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1200px] flex-col justify-center px-6 py-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.37, 0, 0.63, 1] }}
          className="eyebrow"
        >
          National Conclave on the Future of Pulmonary Health
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.06,
            ease: [0.37, 0, 0.63, 1],
          }}
          className="mt-6 font-display text-[clamp(3.5rem,10vw,7.5rem)] font-bold uppercase leading-[0.95] tracking-tight"
        >
          PRANA <span className="text-gradient">2026</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.12,
            ease: [0.37, 0, 0.63, 1],
          }}
          className="mt-6 max-w-2xl font-display text-xl font-medium text-ink/85 md:text-2xl"
        >
          Pulmonary Research, Advancement &amp; National Alignment
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.18,
            ease: [0.37, 0, 0.63, 1],
          }}
          className="mono mt-8 text-[13px] text-slate"
        >
          20–21 November 2026 · Radisson by GRT · Meenambakkam · Chennai
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.24,
            ease: [0.37, 0, 0.63, 1],
          }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <RegistrationCta />
          <Button variant="ghost" asChild>
            <a href="/declaration">
              Read the Declaration framework
              <ArrowRight size={16} strokeWidth={2.25} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function RegistrationCta() {
  const [now, setNow] = useState<number>(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const open = now >= REGISTRATION_OPENS;
  if (open) {
    return (
      <Button variant="primary" asChild>
        <a href="/register">
          Register now
          <ArrowRight size={16} strokeWidth={2.25} />
        </a>
      </Button>
    );
  }

  const diff = REGISTRATION_OPENS - now;
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const mins = Math.floor((diff % 3_600_000) / 60_000);
  const secs = Math.floor((diff % 60_000) / 1000);

  return (
    <Button
      variant="primary"
      disabled
      aria-live="polite"
      aria-label={`Registration opens 1 August 2026. ${days} days, ${hours} hours, ${mins} minutes remaining.`}
      className="disabled:opacity-100"
    >
      <span>Registration opens 1 August</span>
      <span className="mono text-[11px] font-semibold opacity-90">
        {days}d {String(hours).padStart(2, "0")}h{" "}
        {String(mins).padStart(2, "0")}m {String(secs).padStart(2, "0")}s
      </span>
    </Button>
  );
}

/* ─────────────────────────── SECTION 2 · DECLARATION ─────────────────────────── */

function Declaration() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <p className="eyebrow">The Signed Output</p>
        <SplitHeading
          first="One conclave."
          second="One signed output."
          className="mt-4 text-4xl md:text-5xl"
        />
        <span className="rule-gradient mt-6" />

        <p className="prose-body mt-8">
          The <strong className="font-semibold">Chennai Declaration on
          Pulmonary Health</strong> — 10 named, dated, measurable commitments,
          signed at the closing plenary on 21 November and handed to MoHFW,
          NHM, the Ministry of AYUSH, IRDAI, ICMR, and state health
          departments.
        </p>

        <DeclarationTracker />

        <div className="mt-12">
          <Button variant="secondary" asChild>
            <a href="/declaration">
              Read the Declaration framework
              <ArrowRight size={16} strokeWidth={2.25} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function DeclarationTracker() {
  const states = [
    { key: "drafting", label: "Drafting", meta: "In progress · Jul–Nov 2026" },
    {
      key: "adopted",
      label: "Adopted",
      meta: "21 Nov 2026 · 17:30 · Closing plenary",
    },
    {
      key: "handed",
      label: "Handed to ministries",
      meta: "MoHFW · NHM · AYUSH · IRDAI · ICMR · States",
    },
  ] as const;
  const currentIndex = 0; // Drafting.

  return (
    <div className="mt-12 rounded-lg border border-line bg-white p-6 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:gap-0">
        {states.map((s, i) => {
          const active = i === currentIndex;
          const future = i > currentIndex;
          return (
            <div key={s.key} className="flex flex-1 items-stretch">
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold",
                      active &&
                        "bg-prana-magenta text-white shadow-[0_0_0_4px_rgba(244,34,135,0.15)]",
                      future && "border border-line text-slate",
                      !active && !future && "bg-ink text-paper",
                    )}
                  >
                    {i + 1}
                  </span>
                  <p
                    className={cn(
                      "mono text-[12px]",
                      active
                        ? "text-prana-magenta"
                        : future
                          ? "text-slate"
                          : "text-ink",
                    )}
                  >
                    {s.label}
                  </p>
                </div>
                <p className="mt-3 text-sm text-slate">{s.meta}</p>
              </div>
              {i < states.length - 1 && (
                <div
                  className={cn(
                    "mx-4 hidden h-px flex-1 self-center md:block",
                    i < currentIndex ? "bg-prana-magenta" : "bg-line",
                  )}
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────── SECTION 3 · LIFE-COURSE ─────────────────────────── */

function LifeCourse() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="dark bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <p className="eyebrow">The Intellectual Core</p>
        <SplitHeading
          first="A life-course"
          second="argument"
          className="mt-4 text-4xl md:text-5xl"
        />
        <span className="rule-gradient mt-6" />

        <p className="prose-body mt-8 text-paper/85">
          Chronic pulmonary disease is not a late-life event. It is a
          decades-long trajectory that begins at birth. Read the age axis
          across — every track is a lifetime of care.
        </p>

        <LifeCourseChart reducedMotion={!!prefersReduced} />

        <p className="mt-14 max-w-3xl font-display text-2xl font-bold uppercase leading-[1.15] text-paper md:text-4xl">
          A person with COPD lives with it for over four decades. A comparable
          cardiac patient, for roughly fifteen.
        </p>
      </div>
    </section>
  );
}

function LifeCourseChart({ reducedMotion }: { reducedMotion: boolean }) {
  // Axis: 0 → 72 years (life expectancy, SRS 2024)
  const W = 1200;
  const H = 360;
  const padL = 60;
  const padR = 40;
  const padT = 40;
  const padB = 60;
  const chartW = W - padL - padR;
  const yearToX = (y: number) => padL + (y / 72) * chartW;

  // Tracks (top → bottom)
  const trackY = {
    preterm: padT + 40,
    copd: padT + 130,
    acs: padT + 230,
  };

  const copdStart = 30;
  const copdEnd = 72; // ~42 years lived with disease
  const acsStart = 57.5;
  const acsEnd = 72; // ~15 years

  const anim = reducedMotion
    ? { initial: false, animate: { pathLength: 1, opacity: 1 } }
    : {
        initial: { pathLength: 0, opacity: 0 },
        whileInView: { pathLength: 1, opacity: 1 },
        viewport: { once: true, amount: 0.4 },
        transition: { duration: 1.4, ease: [0.37, 0, 0.63, 1] },
      };

  const ageTicks = [0, 10, 20, 30, 40, 50, 57.5, 60, 70, 72];

  return (
    <div className="mt-12 overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full min-w-[720px]"
        role="img"
        aria-label="Life-course chart: preterm survivors at age 0, COPD onset from 30 to 72, acute coronary syndrome from 57.5 to 72"
      >
        <defs>
          <linearGradient id="lc-copd" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#206CDC" />
            <stop offset="60%" stopColor="#9457C1" />
            <stop offset="100%" stopColor="#F42287" />
          </linearGradient>
          <linearGradient id="lc-acs" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9457C1" />
            <stop offset="100%" stopColor="#F42287" />
          </linearGradient>
        </defs>

        {/* Axis */}
        <line
          x1={padL}
          x2={W - padR}
          y1={H - padB}
          y2={H - padB}
          stroke="rgba(249,245,254,0.35)"
          strokeWidth="1"
        />
        {ageTicks.map((t) => (
          <g key={t}>
            <line
              x1={yearToX(t)}
              x2={yearToX(t)}
              y1={H - padB}
              y2={H - padB + 6}
              stroke="rgba(249,245,254,0.5)"
              strokeWidth="1"
            />
            <text
              x={yearToX(t)}
              y={H - padB + 22}
              textAnchor="middle"
              className="fill-paper/70"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.06em",
              }}
            >
              {t === 72 ? "72" : t}
            </text>
          </g>
        ))}
        <text
          x={W - padR}
          y={H - padB + 42}
          textAnchor="end"
          className="fill-paper/60"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Age (years) · life expectancy 72 · SRS 2024
        </text>

        {/* Preterm marker at age 0 */}
        <g>
          <circle
            cx={yearToX(0)}
            cy={trackY.preterm}
            r="7"
            fill="#F42287"
          />
          <line
            x1={yearToX(0) + 8}
            x2={yearToX(30) - 4}
            y1={trackY.preterm}
            y2={trackY.preterm}
            stroke="rgba(244,34,135,0.35)"
            strokeWidth="1.25"
            strokeDasharray="2 4"
          />
          <text
            x={yearToX(0) + 16}
            y={trackY.preterm - 12}
            className="fill-paper"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Preterm survivors — ~12% of newborns
          </text>
          <text
            x={yearToX(0) + 16}
            y={trackY.preterm + 22}
            className="fill-paper/60"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Permanently lower peak lung function · NFHS-5 (2019–21)
          </text>
        </g>

        {/* COPD track */}
        <motion.line
          x1={yearToX(copdStart)}
          x2={yearToX(copdEnd)}
          y1={trackY.copd}
          y2={trackY.copd}
          stroke="url(#lc-copd)"
          strokeWidth="6"
          strokeLinecap="round"
          {...anim}
        />
        <circle
          cx={yearToX(copdStart)}
          cy={trackY.copd}
          r="5"
          fill="#206CDC"
        />
        <text
          x={yearToX(copdStart)}
          y={trackY.copd - 16}
          className="fill-paper"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          COPD onset from age 30 → ~42 years lived with disease
        </text>
        <text
          x={yearToX(copdStart)}
          y={trackY.copd + 24}
          className="fill-paper/60"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Source: INSEARCH · ICMR
        </text>

        {/* ACS track */}
        <motion.line
          x1={yearToX(acsStart)}
          x2={yearToX(acsEnd)}
          y1={trackY.acs}
          y2={trackY.acs}
          stroke="url(#lc-acs)"
          strokeWidth="6"
          strokeLinecap="round"
          {...anim}
          transition={
            reducedMotion
              ? undefined
              : { duration: 1.0, ease: [0.37, 0, 0.63, 1], delay: 0.3 }
          }
        />
        <circle
          cx={yearToX(acsStart)}
          cy={trackY.acs}
          r="5"
          fill="#9457C1"
        />
        <text
          x={yearToX(acsStart)}
          y={trackY.acs - 16}
          className="fill-paper"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Acute coronary syndrome, mean age 57.5 → ~15 years
        </text>
        <text
          x={yearToX(acsStart)}
          y={trackY.acs + 24}
          className="fill-paper/60"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Source: CREATE registry
        </text>
      </svg>
    </div>
  );
}

/* ─────────────────────────── SECTION 4 · P4 ─────────────────────────── */

const P4 = [
  {
    key: "prevent",
    title: "Prevent",
    placeholder: "[P4_PREVENT_COPY]",
  },
  {
    key: "predictive",
    title: "Predictive",
    placeholder: "[P4_PREDICTIVE_COPY]",
  },
  {
    key: "participate",
    title: "Participate",
    placeholder: "[P4_PARTICIPATE_COPY]",
  },
  {
    key: "personalise",
    title: "Personalise",
    placeholder: "[P4_PERSONALISE_COPY]",
  },
];

function P4Service() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <p className="eyebrow">The Operating Model</p>
        <SplitHeading
          first="P4"
          second="as a service"
          stacked={false}
          className="mt-4 text-4xl md:text-5xl"
        />
        <span className="rule-gradient mt-6" />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {P4.map((p, i) => (
            <article
              key={p.key}
              className="flex flex-col gap-3 rounded-lg border border-line bg-white p-6"
            >
              <span className="mono text-[11px] text-slate">
                P{i + 1} · {p.title.toUpperCase()}
              </span>
              <h3 className="font-display text-2xl font-bold uppercase leading-tight text-ink">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate">
                {p.placeholder}
              </p>
            </article>
          ))}
        </div>

        <p className="mono mt-10 text-[12px] text-slate">
          Anchored to MoHFW programmes — NP-NCD · AB-HWC · NTEP · NACO · NLEP —
          and to ICMR's research base.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────── SECTION 5 · DIGNITARIES ─────────────────────────── */

function Dignitaries() {
  return (
    <section className="dark bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <p className="eyebrow">Presiding Dignitaries</p>
        <SplitHeading
          first="Under the presence of"
          second="the Government of India"
          className="mt-4 text-4xl md:text-5xl"
        />
        <span className="rule-gradient mt-6" />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <DignitaryCard
            role="Chief Guest"
            name="Shri J. P. Nadda"
            title="Hon'ble Union Minister of Health & Family Welfare"
            org="Government of India"
          />
          <DignitaryCard
            role="Guest of Honour"
            name="Shri Prataprao Jadhav"
            title="Hon'ble Minister of AYUSH"
            org="Government of India"
          />
        </div>
      </div>
    </section>
  );
}

function DignitaryCard({
  role,
  name,
  title,
  org,
}: {
  role: string;
  name: string;
  title: string;
  org: string;
}) {
  return (
    <article className="flex gap-6 rounded-lg border border-paper/15 bg-paper/[0.03] p-6 md:p-8">
      <div
        className="flex h-28 w-24 shrink-0 items-center justify-center rounded-md border border-paper/15 bg-paper/[0.04]"
        aria-hidden="true"
      >
        <span className="mono text-[10px] text-paper/50">Portrait</span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="mono text-[11px] text-prana-magenta">{role}</p>
        <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-tight text-paper">
          {name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-paper/80">{title}</p>
        <p className="mt-1 text-sm text-paper/60">{org}</p>
      </div>
    </article>
  );
}

/* ─────────────────────────── SECTION 6 · STATS STRIP ─────────────────────────── */

function StatsStrip() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid divide-y divide-line border-y border-line md:grid-cols-4 md:divide-x md:divide-y-0">
          <div className="px-2 py-8 md:px-6">
            <StatBlock value="400" label="Delegates" />
          </div>
          <div className="px-2 py-8 md:px-6">
            <StatBlock value="50+" label="Speakers" />
          </div>
          <div className="px-2 py-8 md:px-6">
            <StatBlock value="8" label="Sessions" />
          </div>
          <div className="px-2 py-8 md:px-6">
            <StatBlock
              value="1"
              label="Single hall, no parallel tracks"
            />
          </div>
        </div>
        <p className="mono mt-6 text-[12px] text-slate">
          A single hall is a deliberate feature — every delegate hears every
          session.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────── SECTION 7 · CO-HOSTS ─────────────────────────── */

const CONFIRMED = [
  "Arogya Bharath Organisation",
  "Sathyabama Institute of Science and Technology",
];

const ENGAGEMENT = [
  "MoHFW",
  "Ministry of AYUSH",
  "WHO / GARD",
  "ATS",
  "ERS",
  "ICMR",
  "IRDAI",
];

function CoHosts() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <p className="eyebrow">Institutional Partners</p>
        <SplitHeading
          first="Co-hosts"
          second="& engagement"
          stacked={false}
          className="mt-4 text-4xl md:text-5xl"
        />
        <span className="rule-gradient mt-6" />

        {/* Confirmed */}
        <div className="mt-12">
          <p className="mono text-[12px] text-ink">
            In association with — confirmed
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {CONFIRMED.map((c) => (
              <div
                key={c}
                className="flex items-center gap-4 rounded-lg border border-line bg-white p-5"
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-line bg-tint-violet/40"
                  aria-hidden="true"
                >
                  <span className="mono text-[10px] text-slate">Logo</span>
                </div>
                <p className="font-display text-base font-bold uppercase leading-snug text-ink">
                  {c}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement underway */}
        <div className="mt-12">
          <div className="flex items-baseline justify-between gap-4">
            <p className="mono text-[12px] text-slate">
              Engagement underway — no endorsement implied
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {ENGAGEMENT.map((e) => (
              <div
                key={e}
                className="flex flex-col items-center justify-center gap-2 rounded-md border border-dashed border-line bg-white p-4 text-center"
              >
                <div
                  className="h-10 w-10 rounded-sm border border-line bg-paper"
                  aria-hidden="true"
                />
                <p className="mono text-[10px] text-slate">{e}</p>
              </div>
            ))}
          </div>
        </div>

        <SectionDivider className="py-12" />

        {/* Social */}
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="mono text-[13px] text-prana-magenta">#PRANA2026</p>
            <p className="prose-body mt-3">
              Follow the build-up to the Chennai Declaration. Share the
              programme with colleagues, State health departments, and
              professional societies.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://x.com/"
                className="mono min-h-11 rounded-md border border-line px-4 py-2 text-[12px] text-ink hover:bg-ink hover:text-paper"
              >
                X / Twitter
              </a>
              <a
                href="https://linkedin.com/"
                className="mono min-h-11 rounded-md border border-line px-4 py-2 text-[12px] text-ink hover:bg-ink hover:text-paper"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/"
                className="mono min-h-11 rounded-md border border-line px-4 py-2 text-[12px] text-ink hover:bg-ink hover:text-paper"
              >
                Instagram
              </a>
            </div>
          </div>

          <Button variant="primary" asChild size="lg">
            <a
              href="https://wa.me/"
              aria-label="Join the PRANA 2026 WhatsApp channel"
            >
              <MessageCircle size={18} strokeWidth={2.25} />
              Join the WhatsApp channel
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
