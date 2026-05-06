import Link from "next/link";
import type { Metadata } from "next";

import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Placeholder project cards for YunQi (Kevin) Liu's GitHub-connected portfolio.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 pb-20 pt-10 sm:px-10 lg:px-14 xl:px-20">
      <section className="max-w-3xl space-y-4">
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          My Projects
        </h1>
        <p className="max-w-2xl text-[0.95rem] leading-8 text-muted">
          Planning on decorating this page a bit more, lightweight for now for a quick launch.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex min-h-[18rem] flex-col justify-between rounded-[1.5rem] border border-border bg-surface p-5 shadow-[0_16px_42px_rgba(84,58,39,0.05)] transition-transform hover:-translate-y-0.5"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[0.66rem] uppercase tracking-[0.3em] text-muted">
                  {project.label}
                </p>
                <span className="rounded-full border border-border px-3 py-1 text-[0.65rem] tracking-[0.22em] text-muted">
                  GitHub-ready
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="text-[1.05rem] font-medium text-foreground">
                  {project.title}
                </h2>
                <p className="text-[0.88rem] leading-7 text-muted">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1 text-[0.68rem] tracking-[0.14em] text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[0.78rem] tracking-[0.22em] text-foreground transition-colors hover:text-accent"
              >
                Browse repo
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}