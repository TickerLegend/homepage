import type { LegendRow } from "@/content/landing";
import { Avatar } from "@/components/ui/Avatar";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type LegendsSectionProps = Readonly<{ legends: readonly LegendRow[] }>;

function initialsFromName(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("");
}

export function LegendsSection({ legends }: LegendsSectionProps) {
  return (
    <section id="legends" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading kicker="All-time leaderboard" title="The Legends">
          Become a Ticker Legend — the ones whose predictions delivered the highest percentage gains,
          and the prize money they&apos;ve taken home.
        </SectionHeading>
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="card-surface overflow-hidden">
            <div className="grid grid-cols-[2.5rem_1fr_auto_auto] items-center gap-4 border-b border-border px-6 py-3">
              <span className="label-mono">#</span>
              <span className="label-mono">Owner</span>
              <span className="label-mono text-right">Season gain</span>
              <span className="label-mono w-28 text-right">Winnings</span>
            </div>
            <ul className="divide-y divide-border">
              {legends.map((l) => (
                <li
                  key={l.rank}
                  className={`grid grid-cols-[2.5rem_1fr_auto_auto] items-center gap-4 px-6 py-4 ${
                    l.you ? "border-l-2 border-l-gold bg-gold/10" : ""
                  }`}
                >
                  <span
                    className={`font-mono text-sm ${l.rank === 1 ? "font-bold text-gold" : l.you ? "font-bold text-gold" : "text-muted-foreground"}`}
                  >
                    {l.rank}
                  </span>
                  <div className="flex min-w-0 items-center gap-3">
                    <Avatar initials={initialsFromName(l.name)} gold={l.rank === 1 || l.you} />
                    <div className="min-w-0">
                      <p
                        className={`font-display text-lg leading-tight ${l.you || l.rank === 1 ? "text-gold" : ""}`}
                      >
                        {l.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{l.owner}</p>
                    </div>
                  </div>
                  <span className="font-mono text-sm font-bold text-gain">▲ {l.season}</span>
                  <span className="w-28 text-right font-mono text-sm font-semibold text-gold">
                    {l.winnings}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Ranked by total percentage gains across Season 1 · Winnings paid in dollars
          </p>
        </div>
      </div>
    </section>
  );
}
