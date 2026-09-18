import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/ButtonLink";

export function FinalCtaSection() {
  return (
    <section id="cta" className="relative overflow-hidden">
      <div className="ticker-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(60%_80%_at_50%_50%,black,transparent)]" />
      <div className="relative mx-auto max-w-3xl px-5 py-28 text-center">
        <p className="label-mono">Season 1 drafts open now</p>
        <h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">
          The market is open.
          <br />
          <span className="text-gold">Are you on the clock?</span>
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {/* TODO: campaign URL when off-the-shelf tool is chosen */}
          <ButtonLink
            variant="primary"
            inert
            className="gold-glow px-7 py-3.5 text-sm font-bold"
            icon={ArrowRight}
          >
            Ready to be a legend?
          </ButtonLink>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Free leagues forever · Money stakes optional
        </p>
      </div>
    </section>
  );
}
