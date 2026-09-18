import { CircleDollarSign, TrendingUp, Trophy, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { HowItWorksStep } from "@/content/landing";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: Record<HowItWorksStep["id"], LucideIcon> = {
  draft: Users,
  score: TrendingUp,
  compete: Trophy,
  stakes: CircleDollarSign,
};

export type HowItWorksSectionProps = Readonly<{ steps: readonly HowItWorksStep[] }>;

export function HowItWorksSection({ steps }: HowItWorksSectionProps) {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading kicker="How it works" title="Draft. Score. Compete. Repeat.">
        The mechanic borrows directly from fantasy football: a draft, a roster, a scoring window,
        and a league table. The market never closes.
      </SectionHeading>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => {
          const Icon = icons[s.id];
          return (
            <div key={s.n} className="card-surface group p-6 transition-colors hover:border-gold/50">
              <div className="flex items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded-full bg-secondary text-gold">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
              </div>
              <h3 className="mt-5 font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
