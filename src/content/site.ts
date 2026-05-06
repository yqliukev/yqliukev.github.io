export type NavigationItem = {
  href: string;
  label: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type ProjectCard = {
  title: string;
  label: string;
  description: string;
  stack: string[];
  href: string;
};

export type Badge = {
  label: string;
  logo: string;
  color: string;
  width: number;
  height: number;
};

export type DashboardCard = {
  title: string;
  value: string;
  note: string;
};

export const profile = {
  name: "YunQi (Kevin) Liu",
  title: "Backend developer and data engineer",
  location: "Toronto, ON",
  email: "yqliukev@gmail.com",
  phone: "437.995.3877",
  linkedin: "https://www.linkedin.com/in/yqliukev/",
  github: "https://github.com/yqliukev",
  summary:
    "I build careful, readable systems that sit close to the product: admin tooling, data pipelines, dashboards, and the interfaces that connect them.",
};

export const navigation: NavigationItem[] = [
  { href: "/", label: "Overview" },
  { href: "/projects/", label: "Projects" },
  { href: "/dashboard/", label: "Dashboard" },
];

export const contactLinks: ContactLink[] = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\D/g, "")}` },
  { label: "LinkedIn", value: "/in/yqliukev", href: profile.linkedin },
  { label: "GitHub", value: "/yqliukev", href: profile.github },
];

export const introduction =
  "I like shipping interfaces that are quiet but deliberate. My background spans backend systems, data engineering, and front-end work in energy, finance, and internal tools, so I tend to think in workflows rather than isolated screens.";

export const experience: ExperienceItem[] = [
  {
    role: "Backend Developer",
    company: "Ground News",
    location: "Waterloo, ON",
    period: "Sep. - Dec. 2025",
    summary:
      "Built administrative security infrastructure and helped refine the systems that keep internal operations reliable.",
    highlights: [
      "Implemented granular access control for 50+ employees across admin workflows.",
      "Oversaw generated text refinement, news article clustering, and ingestion health checks.",
    ],
  },
  {
    role: "Software Developer",
    company: "Edgecom Energy",
    location: "Toronto, ON",
    period: "Sep. - Dec. 2024",
    summary:
      "Worked on energy prediction, arbitrage tooling, SCADA dashboards, and IoT data pipelines for industrial clients.",
    highlights: [
      "Tailored AI-driven saving strategies that delivered annual savings of over $12,000 per device.",
      "Designed mobile-friendly dashboards and managed systems serving 5 million+ daily API requests at 99% uptime.",
    ],
  },
  {
    role: "Backend Developer and Data Engineer",
    company: "ATS Corporation",
    location: "Cambridge, ON",
    period: "Jan. - Apr. 2024",
    summary:
      "Migrated sales data into Databricks and built reliable reporting and automation for the post-sales team.",
    highlights: [
      "Moved 50,000+ sales records into a cloud lakehouse with SQL and PySpark ingestion flows.",
      "Automated data access and built Tableau dashboards for thousands of sales records.",
    ],
  },
  {
    role: "Global Asset Liability Management",
    company: "Manulife Financial",
    location: "Toronto, ON",
    period: "Jan. - Apr. 2023",
    summary:
      "Improved valuation tooling and removed repetitive reporting work from daily finance analysis.",
    highlights: [
      "Built regression-based valuation support using Bloomberg market data, Pandas, and NumPy.",
      "Automated SQL retrieval and VBA formatting to free up roughly half of the daily manual workload.",
    ],
  },
  {
    role: "Front-end Developer",
    company: "Bicdroid Inc.",
    location: "Waterloo, ON",
    period: "Jun. - Dec. 2022",
    summary:
      "Shipped a cybersecurity web application and a Linux test harness with a focus on UI quality and automation.",
    highlights: [
      "Worked with Vue and MySQL to resolve product issues and improve the customer-facing interface.",
      "Built Pytest and ROBOT test flows with 100% code coverage across 10 unique scenarios.",
    ],
  },
];

export const projects: ProjectCard[] = [
  {
    title: "Image Recognition Transformer",
    label: "ML experiment",
    description:
      "A compact transformer-based image classifier trained on MNIST, highlighted as a clean proof of concept.",
    stack: ["Python", "PyTorch", "Google Colab"],
    href: profile.github,
  },
  {
    title: "VGG11 Image Classifier",
    label: "ML experiment",
    description:
      "A CNN image classification study based on the VGG11 architecture and MNIST data.",
    stack: ["Python", "TensorFlow", "Google Colab"],
    href: profile.github,
  },
  {
    title: "Personal Website",
    label: "Portfolio build",
    description:
      "The website scaffold itself, ready to expand into a fuller GitHub-connected portfolio.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    href: profile.github,
  },
  {
    title: "Bloomberg Global Trading Challenge",
    label: "Finance project",
    description:
      "A market-monitoring and portfolio management project that reached a 12.6% return.",
    stack: ["Bloomberg Terminal", "Research", "Portfolio analysis"],
    href: profile.github,
  },
  {
    title: "Fraudulent Transaction ML Algorithm",
    label: "ML experiment",
    description:
      "A k-nearest-neighbors model built to flag suspicious bank transactions.",
    stack: ["Python", "scikit-learn", "Data analysis"],
    href: profile.github,
  },
  {
    title: "Chess Coding Project",
    label: "Systems project",
    description:
      "A C++ chess engine experiment that connected a computer player model written in R.",
    stack: ["C++", "R", "Rcpp"],
    href: profile.github,
  },
];

export const dashboardCards: DashboardCard[] = [
  {
    title: "Current focus",
    value: "Polishing portfolio",
    note: "Placeholder dashboard content for future analytics and updates.",
  },
  {
    title: "Deployment mode",
    value: "GitHub Pages",
    note: "Static export keeps the site simple to host and easy to review.",
  },
  {
    title: "Experience mix",
    value: "Backend + data + UI",
    note: "The story behind the work spans finance, energy, and internal tools.",
  },
];

const shield = (label: string, logo: string, color: string): Badge => ({
  label,
  logo,
  color,
  width: Math.min(210, 74 + label.length * 11),
  height: 20,
});

export const skillBadges: Badge[] = [
  shield("C++", "cplusplus", "00599C"),
  shield("Python", "python", "3776AB"),
  shield("Java", "openjdk", "ED8B00"),
  shield("Go", "go", "00ADD8"),
  shield("C#", "csharp", "512BD4"),
  shield("R", "r", "276DC3"),
  shield("TypeScript", "typescript", "3178C6"),
  shield("JavaScript", "javascript", "F7DF1E"),
  shield("React", "react", "61DAFB"),
  shield("Next.js", "nextdotjs", "000000"),
  shield("Vue", "vue.js", "4FC08D"),
  shield("Tailwind", "tailwindcss", "06B6D4"),
  shield("Node.js", "nodedotjs", "339933"),
  shield("SQL", "mysql", "4479A1"),
  shield("AWS", "amazonaws", "232F3E"),
  shield("Azure", "microsoftazure", "0078D4"),
  shield("Databricks", "databricks", "FF3621"),
  shield("PyTorch", "pytorch", "EE4C2C"),
  shield("TensorFlow", "tensorflow", "FF6F00"),
  shield("Pandas", "pandas", "150458"),
  shield("NumPy", "numpy", "013243"),
  shield("scikit-learn", "scikitlearn", "F7931E"),
];