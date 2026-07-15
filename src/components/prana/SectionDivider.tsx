import { cn } from "@/lib/utils";
import { PranaWave } from "./PranaWave";

interface SectionDividerProps {
  className?: string;
  animated?: boolean;
}

/** SectionDivider — uses PranaWave variant="divider". The only ornament. */
export function SectionDivider({ className, animated = true }: SectionDividerProps) {
  return (
    <div
      className={cn("w-full py-8", className)}
      aria-hidden="true"
      role="presentation"
    >
      <PranaWave variant="divider" animated={animated} />
    </div>
  );
}
