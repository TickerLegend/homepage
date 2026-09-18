import { ArrowRight, ChevronDown } from "lucide-react";

import type { MatchupSide, TickerPair } from "@/content/landing";

export type HeroSectionProps = Readonly<{
  matchup: Readonly<{ you: MatchupSide; opp: MatchupSide }>;
  ticker: readonly TickerPair[];
}>;

export function HeroSection({ matchup, ticker }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="ticker-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_35%,black,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="label-mono">Draft · Predict · Compete</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-7xl">
            Fantasy football,
            <br />
            <span className="text-gold">for markets.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Draft a roster of eligible cryptocurrencies and score your predictions against relative
            price performance over a set window. Compete in paired weekly matchups or full-season
            standings, and play free for bragging rights or stake money for prize pools.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#cta"
              className="gold-glow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Create your league <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              How it works <ChevronDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-2xl">
          <div className="card-surface p-6 sm:p-8">
            <p className="label-mono text-center">Your matchup · Week 3</p>
            <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-start gap-4">
              <div>
                <p className="font-display text-lg leading-tight sm:text-2xl">{matchup.you.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{matchup.you.owner}</p>
                <p className="mt-3 font-mono text-2xl font-bold text-gain sm:text-4xl">
                  {matchup.you.score}
                </p>
              </div>
              <p className="pt-8 font-mono text-xs tracking-widest text-muted-foreground">VS</p>
              <div className="text-right">
                <p className="font-display text-lg leading-tight sm:text-2xl">{matchup.opp.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{matchup.opp.owner}</p>
                <p className="mt-3 font-mono text-2xl font-bold text-muted-foreground sm:text-4xl">
                  {matchup.opp.score}
                </p>
              </div>
            </div>
            <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-[62%] rounded-full bg-gold" />
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Prediction accuracy scored live against 24/7 crypto price action.
            </p>
          </div>
        </div>
      </div>

      <div className="relative border-y border-border bg-card/60 py-3">
        <div className="flex animate-[ticker_28s_linear_infinite] gap-10 whitespace-nowrap will-change-transform">
          {[...ticker, ...ticker].map(([sym, chg], i) => (
            <span key={`${sym}-${i}`} className="flex items-center gap-2 font-mono text-sm">
              <span className="font-bold">{sym}</span>
              <span className={chg.startsWith("-") ? "text-loss" : "text-gain"}>{chg}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
