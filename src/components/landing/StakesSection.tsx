import { CircleDollarSign, Trophy } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";

export type StakesSectionProps = Readonly<{
  freeFeatures: readonly string[];
  stakedFeatures: readonly string[];
}>;

export function StakesSection({ freeFeatures, stakedFeatures }: StakesSectionProps) {
  return (
    <section id="stakes" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <SectionHeading kicker="Stakes, optional" title="Bragging rights or the prize pool">
          Free leagues for bragging rights; paid leagues with a buy-in and a prize pool for players
          who want something on the line.
        </SectionHeading>
        <div className="mx-auto mt-14 grid max-w-4xl gap-5 md:grid-cols-2">
          <div className="card-surface p-8">
            <p className="label-mono">Free leagues</p>
            <p className="mt-4 font-display text-4xl">$0</p>
            <p className="mt-1 text-sm text-muted-foreground">Forever. No card required.</p>
            <ul className="mt-6 space-y-3 text-sm">
              {freeFeatures.map((f) => (
                <li key={f} className="flex gap-3">
                  <Trophy className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full border border-border bg-secondary px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
            >
              Start a free league
            </a>
          </div>
          <div className="card-surface gold-glow relative border-gold/60 p-8">
            <span className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-gold-foreground">
              STAKED
            </span>
            <p className="label-mono text-gold">Staked leagues</p>
            <p className="mt-4 font-display text-4xl">Buy-in</p>
            <p className="mt-1 text-sm text-muted-foreground">Set the stake. Winner takes the pool.</p>
            <ul className="mt-6 space-y-3 text-sm">
              {stakedFeatures.map((f) => (
                <li key={f} className="flex gap-3">
                  <CircleDollarSign className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Create a staked league
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
