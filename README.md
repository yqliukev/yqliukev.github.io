# YunQi (Kevin) Liu - Personal Portfolio

A modern, minimal, and fully responsive personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. The portfolio showcases my work experience, projects, skills, and contact information.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (v4)
- **Icons:** Lucide React

## Setup & Local Development

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

## Editing Content

The content of the website is organized into separate component files within the `src/components` directory. To update your information, simply edit the corresponding file:

- **Header / Navigation:** `src/components/Header.tsx`
- **Hero Section:** `src/components/Hero.tsx`
- **About Me:** `src/components/About.tsx`
- **Work Experience:** `src/components/Work.tsx` - edit the `experiences` array.
- **Projects:** `src/components/Projects.tsx` - edit the `projects` array.
- **Contact Info:** `src/components/Contact.tsx`
- **Skills & Footer:** `src/components/SkillsFooter.tsx` - edit the `skills` array to update the badges.

## Build and Deploy (GitHub Pages)

The project is configured to be deployed as a static site. The `next.config.ts` includes `output: 'export'` which creates a static build in the `out` directory.

1. **Build the static site:**
   ```bash
   npm run build
   ```
   This will generate an `out` folder containing all the static HTML/CSS/JS files.

2. **Deploying to GitHub Pages:**
   To deploy to GitHub Pages, you can use a GitHub Actions workflow. Create a file at `.github/workflows/deploy.yml` with a Next.js static deployment configuration, or simply push the `out` directory to the `gh-pages` branch of your repository.
