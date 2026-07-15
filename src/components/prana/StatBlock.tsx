import { cn } from "@/lib/utils";

interface StatBlockProps {
  value: string;
  label: string;
  source?: string;
  className?: string;
}

/** Large mono figure + label + 12px slate source citation. */
export function StatBlock({ value, label, source, className }: StatBlockProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div className="font-mono text-4xl font-semibold tracking-tight text-ink dark:text-paper md:text-5xl">
        {value}
      </div>
      <div className="text-sm text-ink/85 dark:text-paper/85">{label}</div>
      {source && (
        <div className="mono text-[12px] text-slate">Source: {source}</div>
      )}
    </div>
  );
}
