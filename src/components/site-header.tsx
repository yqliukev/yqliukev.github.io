"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation, profile } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-5 sm:px-10 lg:px-14 xl:px-20">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-[0.64rem] uppercase tracking-[0.35em] text-muted">
              {profile.location}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.22em] text-foreground transition-colors hover:text-accent"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
              YunQi Liu
            </Link>
          </div>

          <nav aria-label="Primary" className="flex flex-wrap gap-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "rounded-full border px-4 py-2 text-[0.78rem] tracking-[0.18em] transition-all",
                    isActive
                      ? "border-accent bg-accent text-white shadow-[0_8px_30px_rgba(147,112,85,0.22)]"
                      : "border-border bg-surface/80 text-muted hover:border-accent/40 hover:text-foreground",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <p className="max-w-2xl text-[0.72rem] leading-6 text-muted">
          Minimal portfolio scaffold focused on readability, enough structure to feel intentional, and no extra chrome.
        </p>
      </div>
    </header>
  );
}