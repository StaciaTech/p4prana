import { cn } from "@/lib/utils";

export type GroupCode = "I" | "II" | "III" | "IV";

const groupClass: Record<GroupCode, string> = {
  I: "group-i",
  II: "group-ii",
  III: "group-iii",
  IV: "group-iv",
};

interface GroupChipProps {
  group: GroupCode;
  children?: React.ReactNode;
  className?: string;
}

/** Group colour coding — I=blue · II=violet · III=magenta · IV=teal. Flat fills. */
export function GroupChip({ group, children, className }: GroupChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-sm px-2 py-0.5",
        "font-mono text-[11px] font-semibold uppercase tracking-[0.08em]",
        groupClass[group],
        className,
      )}
    >
      G-{group}
      {children ? <span className="opacity-90">· {children}</span> : null}
    </span>
  );
}
