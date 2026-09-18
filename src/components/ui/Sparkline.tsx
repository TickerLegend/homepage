export type SparklineProps = Readonly<{ up: boolean }>;

export function Sparkline({ up }: SparklineProps) {
  const d = up
    ? "M0 14 L8 11 L16 13 L24 8 L32 10 L40 5 L48 7 L56 2"
    : "M0 3 L8 6 L16 4 L24 9 L32 7 L40 12 L48 10 L56 14";
  return (
    <svg width="56" height="16" viewBox="0 0 56 16" fill="none" aria-hidden="true">
      <path
        d={d}
        stroke={up ? "var(--color-gain)" : "var(--color-loss)"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
