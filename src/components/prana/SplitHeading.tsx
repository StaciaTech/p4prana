import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

interface SplitHeadingProps {
  first: ReactNode;
  second: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stack the two words on separate lines (default true — brochure pattern). */
  stacked?: boolean;
}

/**
 * SplitHeading — the brand's strongest typographic signature.
 * Word 1 renders in --prana-ink; word 2 renders in the gradient.
 * "SCIENTIFIC / PROGRAMME OVERVIEW".
 */
export function SplitHeading({
  first,
  second,
  as: Tag = "h2",
  className,
  stacked = true,
}: SplitHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display font-bold uppercase tracking-tight leading-[1.05]",
        "text-[clamp(2rem,5vw,3.5rem)]",
        className,
      )}
    >
      <span className="text-ink dark:text-paper">{first}</span>
      {stacked ? <br /> : " "}
      <span className="text-gradient">{second}</span>
    </Tag>
  );
}
