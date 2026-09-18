import { useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "tl-staging-unlocked";

async function sha256Hex(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function gateEnabled(): boolean {
  return import.meta.env.VITE_STAGING_GATE === "true";
}

function expectedHash(): string {
  return (import.meta.env.VITE_STAGING_PASSWORD_HASH as string | undefined) ?? "";
}

export function StagingGate({ children }: { children: ReactNode }) {
  const enabled = gateEnabled();
  const [unlocked, setUnlocked] = useState(!enabled);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      setUnlocked(true);
    }
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const meta = document.querySelector('meta[name="robots"]');
    if (!meta) return;
    meta.setAttribute("content", unlocked ? "index, follow" : "noindex, nofollow");
  }, [enabled, unlocked]);

  if (!enabled || unlocked) {
    return <>{children}</>;
  }

  const hash = expectedHash();
  if (!hash) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-5">
        <p className="text-sm text-muted-foreground">Staging gate misconfigured (missing password hash).</p>
      </div>
    );
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const digest = await sha256Hex(password);
    if (digest === hash) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <form
        onSubmit={onSubmit}
        className="card-surface w-full max-w-sm p-8"
        aria-label="Staging access"
      >
        <p className="label-mono">Preview access</p>
        <h1 className="mt-2 font-display text-2xl text-foreground">Ticker Legend</h1>
        <p className="mt-2 text-sm text-muted-foreground">Enter the staging password to continue.</p>
        <label className="mt-6 block text-sm font-medium" htmlFor="staging-password">
          Password
        </label>
        <input
          id="staging-password"
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm outline-none ring-ring focus:ring-2"
        />
        {error ? <p className="mt-2 text-sm text-loss">Incorrect password.</p> : null}
        <button
          type="submit"
          className="mt-6 w-full rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
