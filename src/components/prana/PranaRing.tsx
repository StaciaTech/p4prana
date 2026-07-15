import { cn } from "@/lib/utils";

interface PranaRingProps {
  size?: number;
  animated?: boolean;
  className?: string;
  strokeWidth?: number;
}

/**
 * PranaRing — the gradient ring from the PRANA logo, isolated.
 * Used for loading states, markers, and hero artwork.
 */
export function PranaRing({
  size = 240,
  animated = false,
  className,
  strokeWidth = 8,
}: PranaRingProps) {
  const id = `prana-ring-grad-${size}`;
  const r = 50 - strokeWidth / 2;
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn(animated && "breath-a", className)}
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#206CDC" />
          <stop offset="52%" stopColor="#9457C1" />
          <stop offset="100%" stopColor="#F42287" />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
