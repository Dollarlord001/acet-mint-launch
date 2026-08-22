import { useEffect, useState } from "react";

const TARGET = new Date("2026-10-31T23:59:59Z").getTime();

function getRemaining() {
  const now = Date.now();
  const diff = Math.max(0, TARGET - now);
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);
  return { days, hours, minutes, seconds, done: diff === 0 };
}

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
] as const;

export function Countdown() {
  const [remaining, setRemaining] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setRemaining(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  if (remaining.done) {
    return (
      <p className="reveal display mt-8 text-[clamp(2rem,6vw,3.5rem)] text-mint">
        ACET Consults is live.
      </p>
    );
  }

  return (
    <div className="reveal mt-10" role="timer" aria-label="Time remaining until launch">
      <div className="grid grid-cols-4 gap-px overflow-hidden border border-border bg-border">
        {UNITS.map((u) => {
          const value = remaining[u.key];
          const digits = u.key === "days" ? 3 : 2;
          return (
            <div key={u.key} className="bg-ink px-2 py-7 text-center sm:py-9">
              <div
                className="display tabular-nums leading-none text-mint text-[clamp(2.2rem,9vw,4.5rem)]"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {String(value).padStart(digits, "0")}
              </div>
              <div className="eyebrow mt-3 text-muted-foreground">{u.label}</div>
            </div>
          );
        })}
      </div>
      <p className="mt-5 text-xs tracking-[0.18em] uppercase text-muted-foreground">
        Launching October 31, 2026 — the clock is ticking.
      </p>
    </div>
  );
}
