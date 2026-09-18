import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { ScoringSection } from "@/components/landing/ScoringSection";
import { StandingsSection } from "@/components/landing/StandingsSection";
import { LegendsSection } from "@/components/landing/LegendsSection";
import { StakesSection } from "@/components/landing/StakesSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { landingContent } from "@/content/landing";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader nav={landingContent.nav} />
      <main>
        <HeroSection matchup={landingContent.matchup} ticker={landingContent.ticker} />
        <HowItWorksSection steps={landingContent.howItWorksSteps} />
        <ScoringSection
          draftPool={landingContent.draftPool}
          rosterLimits={landingContent.rosterLimits}
        />
        <StandingsSection standings={landingContent.standings} />
        <LegendsSection legends={landingContent.legends} />
        <StakesSection
          freeFeatures={landingContent.freeLeagueFeatures}
          stakedFeatures={landingContent.stakedLeagueFeatures}
        />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
