import { createFileRoute } from "@tanstack/react-router";
import vrAsset from "@/assets/acet-vr.jpg.asset.json";
import chartAsset from "@/assets/acet-chart.jpg.asset.json";
import techAsset from "@/assets/acet-tech.jpg.asset.json";
import dashboardAsset from "@/assets/acet-dashboard.jpg.asset.json";
import workspaceAsset from "@/assets/acet-workspace.jpg.asset.json";
import matrixAsset from "@/assets/acet-matrix.jpg.asset.json";
import { useRevealRoot } from "@/components/acet/useReveal";
import { Waitlist } from "@/components/acet/Waitlist";
import { Countdown } from "@/components/acet/Countdown";

const TITLE = "ACET Consults — Opportunity is Everywhere. Trust Shouldn't Be.";
const DESC =
  "ACET Consults is building a smarter platform for discovering opportunities, connecting professionals and businesses, and deciding better with AI assistance and verification. Launching October 2026.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function StatusDot({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden
        className="h-1.5 w-1.5 shrink-0 rounded-full bg-mint animate-[mintPulse_2.6s_ease-in-out_infinite]"
      />
      <span className="eyebrow text-mint/90">{label}</span>
    </span>
  );
}

const STAGES = [
  { k: "Discover", d: "Find opportunities relevant to your goals." },
  { k: "Understand", d: "Get better context before making decisions." },
  { k: "Verify", d: "Use trust signals to understand who you're dealing with." },
  { k: "Connect", d: "Build meaningful professional relationships." },
  { k: "Grow", d: "Use intelligent tools to keep moving forward." },
];

function Index() {
  const root = useRevealRoot<HTMLDivElement>();

  return (
    <div ref={root} className="min-h-screen bg-ink text-foreground">
      {/* ---------- HERO ---------- */}
      <header className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
        {/* living chart environment */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <img
            src={chartAsset.url}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-[0.38] will-change-transform animate-[driftX_60s_ease-in-out_infinite_alternate]"
          />
          <img
            src={chartAsset.url}
            alt=""
            className="absolute inset-0 h-full w-full scale-125 object-cover mix-blend-screen opacity-25 blur-[2px] will-change-transform animate-[driftY_42s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_10%,transparent,var(--ink)_72%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
        </div>

        {/* VR subject */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[105%] max-w-3xl overflow-hidden sm:w-[72%] lg:w-[55%]"
        >
          <img
            src={vrAsset.url}
            alt=""
            className="h-full w-full origin-top-right scale-[1.12] object-cover object-[62%_18%] opacity-32 mix-blend-screen animate-[rise_1.4s_cubic-bezier(0.16,1,0.3,1)_both] sm:scale-[1.18] sm:opacity-60"
            style={{
              maskImage: "radial-gradient(75% 70% at 62% 38%, #000 40%, transparent 86%)",
              WebkitMaskImage: "radial-gradient(75% 70% at 62% 38%, #000 40%, transparent 86%)",
            }}
          />
        </div>

        {/* legibility scrim above imagery */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_top,var(--ink)_38%,color-mix(in_oklab,var(--ink)_82%,transparent)_62%,transparent_100%)] sm:bg-[linear-gradient(to_right,var(--ink)_10%,color-mix(in_oklab,var(--ink)_70%,transparent)_55%,transparent_100%)]"
        />


        <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-10">
          <span className="display text-2xl tracking-[0.18em]">ACET</span>
          <StatusDot label="System status · Building" />
        </nav>

        <div className="relative z-10 mx-auto mt-auto w-full max-w-7xl px-5 pb-16 sm:px-10 sm:pb-24">
          <p className="eyebrow animate-[rise_0.7s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]">
            ACET Consults / Launching October 2026
          </p>
          <h1 className="display mt-6 max-w-4xl text-[clamp(3.1rem,15vw,9rem)]">
            <span className="block animate-[rise_0.8s_cubic-bezier(0.16,1,0.3,1)_0.25s_both]">
              Opportunity is
            </span>
            <span className="block animate-[rise_0.8s_cubic-bezier(0.16,1,0.3,1)_0.4s_both]">
              everywhere.
            </span>
            <span className="block text-mint animate-[rise_0.8s_cubic-bezier(0.16,1,0.3,1)_0.55s_both]">
              Trust shouldn't be.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground animate-[rise_0.8s_cubic-bezier(0.16,1,0.3,1)_0.7s_both] sm:text-base">
            We're building a smarter platform for discovering opportunities, connecting professionals
            and businesses, and making better decisions with AI-powered assistance and verification.
          </p>
          <div className="mt-10 flex flex-col gap-3 animate-[rise_0.8s_cubic-bezier(0.16,1,0.3,1)_0.85s_both] sm:flex-row sm:items-center">
            <a
              href="#waitlist"
              className="bg-mint px-8 py-4 text-center text-xs font-medium tracking-[0.22em] text-primary-foreground uppercase transition-opacity hover:opacity-85"
            >
              Join the waitlist →
            </a>
            <a
              href="#building"
              className="border border-border px-8 py-4 text-center text-xs font-medium tracking-[0.22em] uppercase transition-colors hover:border-mint hover:text-mint"
            >
              Discover ACET
            </a>
          </div>
        </div>
      </header>

      {/* ---------- PROBLEM ---------- */}
      <section className="border-t border-border bg-ink-2/40 px-5 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-7xl">
          <h2 className="reveal display max-w-4xl text-[clamp(2.2rem,7vw,4.5rem)]">
            The internet created more opportunities.
            <span className="block text-mint">It didn't make them easier to trust.</span>
          </h2>
          <div className="reveal mt-10 grid max-w-3xl gap-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>Opportunities are scattered across countless platforms.</p>
            <p>People often have limited context about who is behind an opportunity.</p>
            <p>Businesses and professionals need better signals before investing their time.</p>
          </div>

          <div className="mt-20 grid gap-px bg-border sm:grid-cols-3">
            {[
              ["Noise", "Too many opportunities. Too little signal."],
              ["Uncertainty", "Not enough context about who you're dealing with."],
              ["Trust", "The missing layer between discovery and action."],
            ].map(([k, d], i) => (
              <div
                key={k}
                className="reveal bg-ink p-8 sm:p-10"
                style={{ transitionDelay: `${i * 110}ms` }}
              >
                <span className="eyebrow">0{i + 1}</span>
                <h3 className="display mt-6 text-5xl text-mint sm:text-6xl">{k}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHAT WE'RE BUILDING ---------- */}
      <section id="building" className="px-5 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="reveal eyebrow">What ACET is building</p>
          <h2 className="reveal display mt-5 text-[clamp(2.6rem,9vw,6rem)]">A smarter way forward.</h2>

          <ol className="mt-16 space-y-0">
            {STAGES.map((s, i) => (
              <li
                key={s.k}
                className="reveal relative grid grid-cols-[auto_minmax(0,1fr)] items-start gap-5 border-t border-border py-8 sm:grid-cols-[6rem_10rem_minmax(0,1fr)] sm:items-center sm:gap-8"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="eyebrow pt-2 sm:pt-0">0{i + 1}</span>
                <h3 className="display text-4xl sm:text-5xl">{s.k}</h3>
                <p className="col-span-2 text-sm leading-relaxed text-muted-foreground sm:col-span-1">
                  {s.d}
                </p>
                <span
                  aria-hidden
                  className="absolute left-[0.4rem] top-8 h-full w-px bg-gradient-to-b from-mint/60 to-transparent sm:left-6"
                />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- TRUST ---------- */}
      <section className="relative isolate flex min-h-[90svh] items-center overflow-hidden border-y border-border px-5 sm:px-10">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <img
            src={matrixAsset.url}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-20 will-change-transform animate-[driftY_50s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,transparent,var(--ink)_80%)]" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-mint/20 to-transparent animate-[scan_7s_linear_infinite]" />
        </div>
        <div className="mx-auto w-full max-w-7xl py-28 text-center">
          <div className="reveal mx-auto mb-10 h-px w-40 mint-rule" />
          <h2 className="reveal display text-[clamp(2.8rem,12vw,8rem)]">
            Trust isn't a feature.
            <span className="block text-mint">It's the foundation.</span>
          </h2>
          <p className="reveal mx-auto mt-10 max-w-lg text-sm leading-relaxed text-muted-foreground">
            ACET is being designed around better signals and better context — so people can understand
            who they're dealing with before they act.
          </p>
          <div className="reveal mt-12 flex justify-center">
            <StatusDot label="Verification layer · In design" />
          </div>
        </div>
      </section>

      {/* ---------- VR / PERSPECTIVE ---------- */}
      <section className="px-5 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal relative aspect-4/5 overflow-hidden sm:aspect-16/10 lg:aspect-4/5">
            <img
              src={vrAsset.url}
              alt="A person wearing a VR headset, lit in mint green, looking beyond the frame"
              loading="lazy"
              className="h-full w-full object-cover object-[55%_30%] transition-transform duration-[1200ms] ease-out hover:scale-105"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
          </div>
          <div>
            <p className="reveal eyebrow">A new perspective</p>
            <h2 className="reveal display mt-5 text-[clamp(2.4rem,8vw,5rem)]">
              See opportunity <span className="text-mint">differently.</span>
            </h2>
            <p className="reveal mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              The professional world is getting more complex, not less. ACET is being designed to help
              people navigate it with intelligent tools and better information — so decisions are made
              with context, not guesswork.
            </p>
            <div className="reveal mt-12 flex flex-wrap items-center gap-x-4 gap-y-3">
              {["Discover", "Understand", "Verify", "Connect"].map((s, i, arr) => (
                <span key={s} className="flex items-center gap-4">
                  <span className="display text-2xl text-mint sm:text-3xl">{s}</span>
                  {i < arr.length - 1 && <span aria-hidden className="h-px w-8 bg-mint/50" />}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- AI ---------- */}
      <section className="border-y border-border bg-ink-2/40 px-5 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="reveal eyebrow">Artificial intelligence</p>
            <h2 className="reveal display mt-5 text-[clamp(2.4rem,8vw,5rem)]">
              Intelligence, built into the experience.
            </h2>
            <div className="reveal mt-8 max-w-lg space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>AI should not simply generate answers.</p>
              <p>
                It should help users understand opportunities, navigate information, and make better
                decisions.
              </p>
            </div>
          </div>
          <div className="reveal relative aspect-square w-full max-w-md justify-self-center">
            <div aria-hidden className="absolute inset-0">
              {[0, 1, 2].map((r) => (
                <span
                  key={r}
                  className="absolute inset-0 m-auto rounded-full border border-mint/25"
                  style={{
                    width: `${40 + r * 28}%`,
                    height: `${40 + r * 28}%`,
                    animation: `mintPulse ${4 + r}s ease-in-out ${r * 0.4}s infinite`,
                  }}
                />
              ))}
              <span className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-mint" />
              <span className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-mint/40 to-transparent" />
              <span className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-mint/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SHOWCASE ---------- */}
      <section className="px-5 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="reveal eyebrow">Visual index</p>
          <h2 className="reveal display mt-5 text-[clamp(2.2rem,7vw,4.5rem)]">
            The environment we're designing for.
          </h2>

          <div className="mt-14 grid gap-4 sm:grid-cols-6">
            <figure className="reveal group relative col-span-full overflow-hidden sm:col-span-4 sm:row-span-2">
              <img
                src={dashboardAsset.url}
                alt="A laptop displaying a mint-green analytics dashboard in a dark room"
                loading="lazy"
                className="h-72 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 sm:h-[34rem]"
              />
              <figcaption className="eyebrow absolute bottom-4 left-4 text-foreground/80">
                Concept visual · Decision surfaces
              </figcaption>
            </figure>
            <figure className="reveal group relative col-span-full overflow-hidden sm:col-span-2">
              <img
                src={techAsset.url}
                alt="Dark workspace with devices glowing in green light"
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 sm:h-64"
              />
            </figure>
            <figure className="reveal group relative col-span-full overflow-hidden sm:col-span-2">
              <img
                src={workspaceAsset.url}
                alt="A developer workspace with dual monitors lit in green"
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 sm:h-64"
              />
            </figure>
            <figure className="reveal group relative col-span-full overflow-hidden sm:col-span-3">
              <img
                src={chartAsset.url}
                alt="Abstract green bar chart rising against a dark background"
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
            </figure>
            <figure className="reveal group relative col-span-full overflow-hidden sm:col-span-3">
              <img
                src={matrixAsset.url}
                alt="Streams of green data falling across a dark grid"
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
            </figure>
          </div>
          <p className="reveal eyebrow mt-6">All imagery shown is concept direction, not product.</p>
        </div>
      </section>

      {/* ---------- LAUNCH STATUS ---------- */}
      <section className="border-y border-border px-5 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-7xl">
          <h2 className="reveal display text-[clamp(3.5rem,18vw,12rem)] text-mint">October 2026.</h2>
          <p className="reveal mt-6 text-sm text-muted-foreground sm:text-base">
            The next chapter is being built.
          </p>
          <div className="reveal mt-12 grid gap-px bg-border sm:grid-cols-3">
            {[
              ["Brand & identity", "Complete"],
              ["Platform architecture", "In progress"],
              ["Waitlist & launch", "Open"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-4 bg-ink px-6 py-5">
                <span className="text-sm text-muted-foreground">{k}</span>
                <span className="eyebrow text-mint">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WAITLIST ---------- */}
      <section id="waitlist" className="px-5 py-24 sm:px-10 sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <StatusDot label="Waitlist · Open" />
            <h2 className="reveal display mt-6 text-[clamp(3.5rem,16vw,10rem)]">
              Be <span className="text-mint">first</span> in.
            </h2>
            <p className="reveal mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Join the ACET waitlist and be among the first people to experience what we're building.
            </p>
          </div>
          <div className="reveal lg:pt-10">
            <Waitlist />
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-border px-5 py-14 sm:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div className="min-w-0">
            <span className="display text-3xl tracking-[0.18em]">ACET Consults</span>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Building smarter connections between people, businesses and opportunity.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {["About", "What We're Building", "Contact", "Privacy"].map((l) => (
              <a
                key={l}
                href="#building"
                className="text-sm text-muted-foreground transition-colors hover:text-mint"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <p className="eyebrow">© 2026 ACET Consults</p>
          <StatusDot label="Building" />
        </div>
      </footer>
    </div>
  );
}
