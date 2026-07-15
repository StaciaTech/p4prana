import { cn } from "@/lib/utils";
import { GroupChip, type GroupCode } from "./GroupChip";

interface Speaker {
  name: string;
  role?: string;
}

interface SessionCardProps {
  time: string; // e.g. "09:40–10:45"
  group?: GroupCode;
  code?: string; // e.g. "S3"
  title: string;
  speakers?: Speaker[];
  variant?: "default" | "inaugural" | "closing";
  className?: string;
}

export function SessionCard({
  time,
  group,
  code,
  title,
  speakers,
  variant = "default",
  className,
}: SessionCardProps) {
  const isClosing = variant === "closing";
  const isInaugural = variant === "inaugural";

  return (
    <article
      className={cn(
        "relative rounded-lg border border-line bg-card p-5 md:p-6",
        "transition-colors",
        isInaugural && "pl-6",
        isClosing && "border-transparent p-[1px]",
        className,
      )}
    >
      {isInaugural && (
        <span
          aria-hidden
          className="absolute inset-y-3 left-0 w-1 rounded-full"
          style={{ background: "var(--prana-gradient)" }}
        />
      )}
      {isClosing ? (
        <div
          className="rounded-[7px] p-[2px]"
          style={{ background: "var(--prana-gradient)" }}
        >
          <div className="rounded-md bg-card p-6 md:p-8">
            <SessionBody
              time={time}
              group={group}
              code={code}
              title={title}
              speakers={speakers}
              emphasise
            />
          </div>
        </div>
      ) : (
        <SessionBody
          time={time}
          group={group}
          code={code}
          title={title}
          speakers={speakers}
        />
      )}
    </article>
  );
}

function SessionBody({
  time,
  group,
  code,
  title,
  speakers,
  emphasise,
}: SessionCardProps & { emphasise?: boolean }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="mono text-[12px] text-slate">{time}</span>
        {group && <GroupChip group={group}>{code}</GroupChip>}
        {!group && code && (
          <span className="mono text-[11px] text-slate">{code}</span>
        )}
      </div>
      <h3
        className={cn(
          "font-display font-bold uppercase leading-[1.15]",
          emphasise ? "text-2xl md:text-3xl" : "text-lg md:text-xl",
        )}
      >
        {title}
      </h3>
      {speakers && speakers.length > 0 && (
        <ul className="flex flex-col gap-1 text-sm text-slate">
          {speakers.map((s) => (
            <li key={s.name}>
              <span className="text-ink dark:text-paper font-medium">
                {s.name}
              </span>
              {s.role && <span className="text-slate"> · {s.role}</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
