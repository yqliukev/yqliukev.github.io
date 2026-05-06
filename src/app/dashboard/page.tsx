import type { Metadata } from "next";

import { dashboardCards } from "@/content/site";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Placeholder dashboard page for YunQi (Kevin) Liu's portfolio.",
};

export default function DashboardPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 pb-20 pt-10 sm:px-10 lg:px-14 xl:px-20">
      <section className="max-w-3xl space-y-4">
        <p className="text-[0.68rem] uppercase tracking-[0.4em] text-muted">
          Dashboard
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Placeholder status page.
        </h1>
        <p className="max-w-2xl text-[0.95rem] leading-8 text-muted">
          This page gives the portfolio a future-facing spot for updates, metrics, and quick notes without adding unnecessary complexity now.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {dashboardCards.map((card) => (
          <article
            key={card.title}
            className="rounded-[1.4rem] border border-border bg-surface p-5 shadow-[0_14px_36px_rgba(84,58,39,0.05)]"
          >
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted">
              {card.title}
            </p>
            <h2 className="mt-3 text-[1.1rem] font-medium text-foreground">
              {card.value}
            </h2>
            <p className="mt-3 text-[0.88rem] leading-7 text-muted">
              {card.note}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-[1.6rem] border border-border bg-[linear-gradient(135deg,rgba(147,112,85,0.14),rgba(255,255,255,0.6))] p-6 sm:p-8">
        <p className="text-[0.68rem] uppercase tracking-[0.35em] text-muted">
          Placeholder panel
        </p>
        <div className="mt-3 grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              A quiet place for future analytics or deployment notes.
            </h2>
            <p className="mt-3 max-w-2xl text-[0.92rem] leading-7 text-muted">
              The dashboard can later hold project health, recently shipped work, or a compact changelog. For now it stays intentionally empty and easy to read.
            </p>
          </div>
          <div className="rounded-[1.25rem] border border-border bg-background/80 p-4 text-[0.82rem] leading-7 text-muted">
            <p>Current mode: static export</p>
            <p>Hosting target: GitHub Pages</p>
            <p>Theme: #937055</p>
          </div>
        </div>
      </section>
    </main>
  );
}