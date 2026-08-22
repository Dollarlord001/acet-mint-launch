import { useState, type FormEvent } from "react";
import { submitWaitlist } from "@/lib/waitlist";

type Errors = { name?: string; email?: string };

export function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  function validate(): Errors {
    const next: Errors = {};
    const n = name.trim();
    const e = email.trim();
    if (!n) next.name = "Please enter your full name.";
    else if (n.length > 100) next.name = "Name must be under 100 characters.";
    if (!e) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e) || e.length > 255)
      next.email = "Please enter a valid email address.";
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("sending");
    await submitWaitlist({ name: name.trim(), email: email.trim() });
    setStatus("done");
  }

  const field =
    "w-full bg-transparent border-b border-border px-0 py-4 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-mint focus:outline-none";

  if (status === "done") {
    return (
      <div className="border border-mint/40 bg-ink-2/60 p-8 sm:p-12" role="status" aria-live="polite">
        <p className="display text-5xl text-mint sm:text-6xl">You're in. ✓</p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          We'll keep you updated as ACET gets closer to launch.
        </p>
        <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground/70">
          Note: the waitlist database isn't connected yet. Your details were not stored — this form is
          ready to be wired to the ACET backend before launch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      <div>
        <label htmlFor="wl-name" className="eyebrow block">
          Full Name
        </label>
        <input
          id="wl-name"
          name="name"
          autoComplete="name"
          maxLength={100}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "wl-name-err" : undefined}
          className={field}
        />
        {errors.name && (
          <p id="wl-name-err" className="mt-2 text-xs text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="wl-email" className="eyebrow block">
          Email Address
        </label>
        <input
          id="wl-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          maxLength={255}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "wl-email-err" : undefined}
          className={field}
        />
        {errors.email && (
          <p id="wl-email-err" className="mt-2 text-xs text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-mint px-8 py-5 text-sm font-medium tracking-[0.2em] text-primary-foreground uppercase transition-opacity hover:opacity-85 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Joining…" : "Join the waitlist →"}
      </button>
    </form>
  );
}
