import type { ReactNode } from "react";

export type SectionHeadingProps = Readonly<{
  kicker: string;
  title: ReactNode;
  children?: ReactNode;
}>;

export function SectionHeading({ kicker, title, children }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="label-mono">{kicker}</p>
      <h2 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-5xl">{title}</h2>
      {children ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{children}</p>
      ) : null}
    </div>
  );
}
