import Image from "next/image";
import type { Metadata } from "next";

import { ArrowUpRight, Mail, MapPin, PhoneCall } from "lucide-react";

import { contactLinks, experience, introduction, profile, skillBadges } from "@/content/site";

export const metadata: Metadata = {
  title: "Overview",
  description:
    "Overview of YunQi (Kevin) Liu's experience, contact details, and skills.",
};

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 pb-20 pt-10 sm:px-10 lg:px-14 xl:px-20">
      <section className="grid gap-10 lg:grid-cols-[minmax(230px,280px)_1fr] lg:items-end lg:gap-12">
        <div className="flex items-end justify-start">
          <div className="relative h-[20rem] w-full max-w-[18rem] overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[0_20px_60px_rgba(84,58,39,0.12)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(147,112,85,0.22),transparent_28%),radial-gradient(circle_at_70%_75%,rgba(147,112,85,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.8),rgba(236,223,211,0.88))]" />
            <Image
              src="/avatar-placeholder.svg"
              alt="Portrait placeholder for YunQi Kevin Liu"
              width={960}
              height={1200}
              priority
              className="relative h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-[0.68rem] uppercase tracking-[0.4em] text-muted">
              Overview
            </p>
            <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="max-w-2xl text-balance text-[0.92rem] leading-7 text-muted sm:text-[1rem]">
              {profile.title}. {profile.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-[0.74rem] tracking-[0.16em] text-muted">
            <span className="rounded-full border border-border bg-surface px-4 py-2">
              Toronto based
            </span>
            <span className="rounded-full border border-border bg-surface px-4 py-2">
              Open to product-minded roles
            </span>
            <span className="rounded-full border border-border bg-surface px-4 py-2">
              Static export ready
            </span>
          </div>
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 lg:grid-cols-[minmax(180px,220px)_1fr] lg:gap-10">
        <div className="space-y-2">
          <p className="text-[0.68rem] uppercase tracking-[0.35em] text-muted">
            Contact
          </p>
          <h2 className="text-lg font-medium tracking-tight text-foreground">
            Reach me here
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {contactLinks.map((contact) => {
            const icon =
              contact.label === "Email"
                ? Mail
                : contact.label === "Phone"
                  ? PhoneCall
                  : contact.label === "LinkedIn"
                    ? ArrowUpRight
                    : MapPin;

            const Icon = icon;

            return (
              <a
                key={contact.label}
                href={contact.href}
                className="group flex items-center justify-between gap-4 rounded-[1.3rem] border border-border bg-surface px-4 py-4 transition-transform hover:-translate-y-0.5 hover:border-accent/35"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.28em] text-muted">
                    <Icon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    {contact.label}
                  </div>
                  <p className="text-[0.9rem] text-foreground">{contact.value}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 lg:grid-cols-[minmax(180px,220px)_1fr] lg:gap-10">
        <div className="space-y-2">
          <p className="text-[0.68rem] uppercase tracking-[0.35em] text-muted">
            Introduction
          </p>
          <h2 className="text-lg font-medium tracking-tight text-foreground">
            Short introduction
          </h2>
        </div>

        <p className="max-w-3xl text-balance text-[0.95rem] leading-8 text-muted sm:text-[1.02rem]">
          {introduction}
        </p>
      </section>

      <section className="grid gap-6 border-t border-border pt-8 lg:grid-cols-[minmax(180px,220px)_1fr] lg:gap-10">
        <div className="space-y-2">
          <p className="text-[0.68rem] uppercase tracking-[0.35em] text-muted">
            Work history
          </p>
          <h2 className="text-lg font-medium tracking-tight text-foreground">
            Vertical timeline
          </h2>
        </div>

        <div className="relative pl-6">
          <span
            aria-hidden="true"
            className="absolute left-2 top-1 h-[calc(100%-0.5rem)] w-px bg-border/70"
          />
          <div className="space-y-8">
            {experience.map((job) => (
              <article key={`${job.company}-${job.period}`} className="relative pl-6">
                <span
                  aria-hidden="true"
                  className="absolute left-[-0.375rem] top-2 h-3 w-3 rounded-full border border-accent/35 bg-background/90"
                />
                <div className="space-y-3 rounded-[1.4rem] border border-border/55 bg-surface/58 p-5 shadow-[0_6px_20px_rgba(84,58,39,0.035)] backdrop-blur-[2px]">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-[0.72rem] uppercase tracking-[0.28em] text-muted">
                        {job.company}
                      </p>
                      <h3 className="mt-1 text-[1rem] font-medium text-foreground">
                        {job.role}
                      </h3>
                    </div>
                    <p className="text-[0.72rem] tracking-[0.22em] text-muted">
                      {job.period}
                    </p>
                  </div>
                  <p className="text-[0.86rem] leading-7 text-muted">
                    {job.location} · {job.summary}
                  </p>
                  <ul className="space-y-2 text-[0.84rem] leading-7 text-foreground">
                    {job.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border pt-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <p className="text-[0.68rem] uppercase tracking-[0.35em] text-muted">
              Skills
            </p>
            <h2 className="text-lg font-medium tracking-tight text-foreground">
              Languages and stack logos only
            </h2>
          </div>

          <p className="max-w-2xl text-[0.82rem] leading-7 text-muted">
            The footer stays visual and compact: only shield badges, no unverified skill chips.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {skillBadges.map((badge) => (
            <Image
              key={badge.label}
              src={`https://img.shields.io/badge/${encodeURIComponent(badge.label)}-${badge.color}?style=flat-square&logo=${encodeURIComponent(badge.logo)}&logoColor=white`}
              alt={`${badge.label} badge`}
              width={badge.width}
              height={badge.height}
              unoptimized
              className="h-6 w-auto rounded-[0.35rem]"
              loading="lazy"
            />
          ))}
        </div>
      </footer>
    </main>
  );
}
