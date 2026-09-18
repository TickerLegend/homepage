export type AvatarProps = Readonly<{ initials: string; gold?: boolean }>;

export function Avatar({ initials, gold }: AvatarProps) {
  return (
    <div
      className={`flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
        gold ? "bg-gold text-gold-foreground" : "bg-secondary text-muted-foreground"
      }`}
    >
      {initials}
    </div>
  );
}
