import { Video } from "lucide-react";
import { cn } from "@/lib/utils";
import { GroupChip, type GroupCode } from "./GroupChip";

interface SessionChip {
  group: GroupCode;
  code?: string;
}

interface SpeakerCardProps {
  name: string;
  designation?: string;
  institution?: string;
  photoUrl?: string;
  sessions?: SessionChip[];
  online?: boolean;
  className?: string;
}

function monogram(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export function SpeakerCard({
  name,
  designation,
  institution,
  photoUrl,
  sessions,
  online,
  className,
}: SpeakerCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-3 rounded-lg border border-line bg-card p-5",
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-md",
            "border border-line bg-tint-violet/40",
          )}
        >
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={name}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="font-display text-lg font-bold text-ink">
              {monogram(name)}
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-base font-bold uppercase leading-tight text-ink dark:text-paper">
            {name}
          </h3>
          {designation && (
            <p className="mt-1 text-sm text-slate">{designation}</p>
          )}
          {institution && (
            <p className="text-sm text-slate">{institution}</p>
          )}
        </div>
        {online && (
          <span className="mono inline-flex items-center gap-1 rounded-sm border border-line px-1.5 py-0.5 text-[10px] text-slate">
            <Video size={11} strokeWidth={2.25} />
            Online
          </span>
        )}
      </div>
      {sessions && sessions.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {sessions.map((s, i) => (
            <GroupChip key={i} group={s.group}>
              {s.code}
            </GroupChip>
          ))}
        </div>
      )}
    </article>
  );
}
