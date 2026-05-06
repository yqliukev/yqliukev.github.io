import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "YunQi Liu | Portfolio",
    template: "%s | YunQi Liu",
  },
  description:
    "YunQi (Kevin) Liu's Portfolio showcasing experience, projects, and contact details.",
  authors: [{ name: "YunQi (Kevin) Liu" }],
  creator: "YunQi (Kevin) Liu",
  category: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${plexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full overflow-x-hidden bg-background text-foreground">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(147,112,85,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(147,112,85,0.1),transparent_28%),radial-gradient(circle_at_75%_18%,rgba(255,255,255,0.8),transparent_36%),linear-gradient(180deg,#fbf7f2_0%,#f3e8dc_48%,#f8f3ed_100%)]"
        />
        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
