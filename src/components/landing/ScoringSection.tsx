import { Search } from "lucide-react";

import type { DraftAsset, RosterLimitBullet } from "@/content/landing";
import { Avatar } from "@/components/ui/Avatar";
import { Sparkline } from "@/components/ui/Sparkline";

export type ScoringSectionProps = Readonly<{
  draftPool: readonly DraftAsset[];
  rosterLimits: readonly RosterLimitBullet[];
}>;

export function ScoringSection({ draftPool, rosterLimits }: ScoringSectionProps) {
  return (
    <section id="scoring" className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 lg:grid-cols-2">
        <div className="card-surface overflow-hidden">
          <div className="border-b border-border px-6 py-4">
            <p className="label-mono">Draft room · Rd 3 of 6</p>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm font-semibold">
                <span className="mr-2 inline-block size-2 rounded-full bg-gold align-middle" />
                You&apos;re on the clock
              </p>
              <p className="font-mono text-lg font-bold text-gold">0:47</p>
            </div>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-[58%] rounded-full bg-gold" />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="rounded-full bg-gold px-3.5 py-1.5 text-xs font-bold text-gold-foreground">
                All
              </span>
              <span className="rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-muted-foreground">
                Majors
              </span>
              <span className="rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold text-muted-foreground">
                Alts
              </span>
              <span className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground">
                <Search className="size-3.5" aria-hidden="true" /> Search
              </span>
            </div>
          </div>
          <ul>
            {draftPool.map((a) => (
              <li
                key={a.sym}
                className="flex items-center gap-4 border-b border-border px-6 py-4 last:border-0"
              >
                <Avatar initials={a.sym.slice(0, 2)} />
                <div className="min-w-0">
                  <p className="font-mono font-bold">{a.sym}</p>
                  <p className="text-xs text-muted-foreground">{a.kind}</p>
                </div>
                <div className="ml-auto hidden sm:block">
                  <Sparkline up={a.up} />
                </div>
                <div className="w-20 text-right">
                  <p className="font-mono text-sm font-semibold">{a.price}</p>
                  <p className={`font-mono text-xs ${a.up ? "text-gain" : "text-loss"}`}>{a.chg}</p>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground transition-transform hover:scale-105"
                  onClick={(e) => e.preventDefault()}
                >
                  Draft
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-mono">Roster limits</p>
          <h2 className="mt-3 font-display text-3xl leading-tight sm:text-5xl">
            Six crypto slots. One lineup each week.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Every roster is now entirely crypto. Draft six coins from majors and altcoins, then set
            your lineup before the weekly lock. The scoring window runs 24/7, so the clock is always
            ticking.
          </p>
          <ul className="mt-8 space-y-4">
            {rosterLimits.map(([t, d]) => (
              <li key={t} className="flex gap-4">
                <span className="mt-1 size-2 shrink-0 rounded-full bg-gold" />
                <div>
                  <p className="font-semibold">{t}</p>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
