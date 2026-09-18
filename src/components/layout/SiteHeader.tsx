import { ArrowRight } from "lucide-react";

import type { NavItem } from "@/content/landing";
import { publicAsset } from "@/lib/assets";

export type SiteHeaderProps = Readonly<{ nav: readonly NavItem[] }>;

export function SiteHeader({ nav }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <img
          src={publicAsset("logos/header.png")}
          alt="Ticker Legend"
          className="h-9 w-auto sm:h-11"
        />
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Start a league <ArrowRight className="size-3.5" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
