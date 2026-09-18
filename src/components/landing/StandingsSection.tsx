import type { StandingRow } from "@/content/landing";
import { Avatar } from "@/components/ui/Avatar";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type StandingsSectionProps = Readonly<{ standings: readonly StandingRow[] }>;

function initialsFromTeam(team: string): string {
  return team
    .split(" ")
    .map((w) => w[0])
    .join("");
}

export function StandingsSection({ standings }: StandingsSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading kicker="League table" title="A season, not a screenshot">
        Rank your six crypto picks each week, then face head-to-head matchups and climb the table
        across the season, and settle it in the playoff bracket. Multiple teams. One trophy.
      </SectionHeading>
      <div className="mx-auto mt-12 max-w-2xl">
        <div className="card-surface divide-y divide-border overflow-hidden">
          {standings.map((s) => (
            <div
              key={s.rank}
              className={`flex items-center gap-4 px-6 py-4 ${
                s.you ? "border-l-2 border-l-gold bg-gold/10" : ""
              }`}
            >
              <span
                className={`w-5 font-mono text-sm ${s.you ? "font-bold text-gold" : "text-muted-foreground"}`}
              >
                {s.rank}
              </span>
              <Avatar initials={initialsFromTeam(s.team)} gold={s.you} />
              <div className="min-w-0">
                <p className={`font-display text-lg leading-tight ${s.you ? "text-gold" : ""}`}>
                  {s.team}
                </p>
                <p className="text-xs text-muted-foreground">{s.owner}</p>
              </div>
              <span className="ml-auto font-mono text-sm font-bold text-gain">▲ {s.pts}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
