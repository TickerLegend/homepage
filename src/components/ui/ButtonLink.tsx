import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type ButtonLinkVariant = "primary" | "secondary" | "outline";

const variantClasses: Record<ButtonLinkVariant, string> = {
  primary:
    "rounded-full bg-primary text-primary-foreground transition-transform hover:scale-[1.03]",
  secondary:
    "rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary",
  outline:
    "rounded-full border border-border bg-secondary text-foreground transition-colors hover:bg-muted",
};

export type ButtonLinkProps = Readonly<{
  variant: ButtonLinkVariant;
  href?: string;
  inert?: boolean;
  className?: string;
  icon?: LucideIcon;
  iconClassName?: string;
  children: ReactNode;
}>;

export function ButtonLink({
  variant,
  href = "#",
  inert = false,
  className = "",
  icon: Icon,
  iconClassName = "size-4",
  children,
}: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold ${variantClasses[variant]} ${className}`;

  if (inert) {
    return (
      <button type="button" className={classes} onClick={(e) => e.preventDefault()}>
        {children}
        {Icon ? <Icon className={iconClassName} aria-hidden="true" /> : null}
      </button>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
      {Icon ? <Icon className={iconClassName} aria-hidden="true" /> : null}
    </a>
  );
}
