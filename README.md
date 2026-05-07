# YunQi (Kevin) Liu - Personal Portfolio

A modern, minimal, and fully responsive personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. The portfolio showcases my work experience, projects, skills, and contact information.

## Preview
- Overview page with hero, contact details, timeline, and shield-only skill badges.
- Projects page with placeholder GitHub cards.
- Dashboard page with a lightweight placeholder layout.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Icons:** Lucide React

## Local Development

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd personal-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Publishing to GitHub Pages

This repository is configured as a static export, so GitHub Actions can deploy the generated `out/` folder directly to GitHub Pages.

1. In the repository settings, open **Pages** and set **Source** to **GitHub Actions**.
2. Push changes to the `main` branch.
3. The workflow runs `npm ci`, builds the site with `npm run build`, and publishes the static export to Pages.
4. For this repository name (`yqliukev.github.io`), the site is published at the root URL for the GitHub Pages account site.

If you turn this into a project page later, the existing `basePath` logic in `next.config.ts` will automatically prefix asset and route paths with the repository name.
