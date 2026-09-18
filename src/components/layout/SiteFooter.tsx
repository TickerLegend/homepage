import { publicAsset } from "@/lib/assets";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
        <img src={publicAsset("logos/wordmark.png")} alt="Ticker Legend" className="h-4 w-auto" />
        <p className="font-mono text-xs">
          Crypto prediction game using live market data. Not investment advice.
        </p>
      </div>
    </footer>
  );
}
