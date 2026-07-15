import { cn } from "@/lib/utils";

type Variant = "hero" | "divider" | "footer";

interface PranaWaveProps {
  variant?: Variant;
  animated?: boolean;
  className?: string;
  strokes?: number;
}

/**
 * PranaWave — the breath motif.
 * Parallel flowing strokes echoing the logo's wave, gradient-stroked.
 * Strokes drift out of phase on the --breath cycle.
 */
export function PranaWave({
  variant = "divider",
  animated = false,
  className,
  strokes = 6,
}: PranaWaveProps) {
  const gradientId = `prana-wave-grad-${variant}`;
  const height = variant === "hero" ? 320 : variant === "footer" ? 140 : 80;
  const opacityBase =
    variant === "hero" ? 0.9 : variant === "footer" ? 0.5 : 0.75;

  // Base sine path — reused, translated per stroke
  const width = 1200;
  const amp = variant === "hero" ? 42 : 22;
  const cy = height / 2;
  const path = `M0 ${cy} C ${width * 0.18} ${cy - amp}, ${width * 0.32} ${cy + amp}, ${width * 0.5} ${cy} S ${width * 0.82} ${cy - amp}, ${width} ${cy}`;

  const rows = Array.from({ length: strokes });

  return (
    <svg
      className={cn("w-full", className)}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#206CDC" />
          <stop offset="52%" stopColor="#9457C1" />
          <stop offset="100%" stopColor="#F42287" />
        </linearGradient>
      </defs>
      <g>
        {rows.map((_, i) => {
          const spread = (i - (strokes - 1) / 2) * (variant === "hero" ? 14 : 8);
          const opacity = opacityBase * (1 - Math.abs(i - (strokes - 1) / 2) * 0.08);
          const alt = i % 2 === 0;
          return (
            <g
              key={i}
              className={animated ? (alt ? "breath-a" : "breath-b") : undefined}
              style={{ animationDelay: `${(i * -0.35).toFixed(2)}s` }}
              transform={`translate(0 ${spread})`}
            >
              <path
                d={path}
                fill="none"
                stroke={`url(#${gradientId})`}
                strokeWidth={variant === "hero" ? 2 : 1.25}
                strokeLinecap="round"
                opacity={opacity}
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
