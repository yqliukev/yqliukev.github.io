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
          Work in progress for a future expansion of this site. Stay tuned!
        </p>
      </section>
    </main>
  );
}