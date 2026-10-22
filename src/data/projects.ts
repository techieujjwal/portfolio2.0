export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: "mobile" | "web" | "blockchain" | "ai";
}

export const projects: Project[] = [
  {
    id: "drishti",
    title: "Drishti | AI-Powered Public Project Intelligence Platform",
    description:
      "AI-powered platform that surfaces anomalies, fraud indicators and inefficiencies in public project implementation.",
    longDescription:
      "Drishti is an AI-powered public-project intelligence platform built to make government spending observable. It ingests data on 56K+ public works and runs risk and anomaly analysis to flag fraud indicators and implementation inefficiencies. Every finding ships with an explainable analysis trail rather than a black-box score, and a citizen evidence workflow lets people report ground-truth issues directly. Role-based access control keeps official and citizen views separate, and the whole system is exposed through REST APIs on top of PostgreSQL-backed analytics with a production deployment.",
    technologies: [
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST APIs",
      "Role-Based Access",
      "Anomaly Detection"
    ],
    features: [
      "Risk and anomaly analysis across 56K+ public works records",
      "Explainable findings instead of opaque risk scores",
      "Citizen evidence workflow for reporting ground-truth issues",
      "Authentication with role-based access control",
      "PostgreSQL-backed analytics exposed via REST APIs",
      "Production deployment"
    ],
    image: "/images/projects/drishti/drishti.webp",
    category: "ai"
  },
  {
    id: "syncverse",
    title: "SyncVerse | AI-Powered Roadmap & Career Navigator",
    description:
      "Web platform that turns a student's current skills and goals into a personalized, milestone-based tech roadmap.",
    longDescription:
      "SyncVerse is an edtech platform that turns a student's current skills and goals into a concrete learning plan. Users describe their background and target role, and the app generates step-by-step roadmaps with milestones and checkpoints for tracks like web, AI, and DSA, pulling resources along the way. Roadmaps are produced through prompt-engineered LLM calls with a REST API layer, and forms capture each user's context. Built with React, TypeScript, and Tailwind with shadcn/ui and Aceternity components, and structured to plug into Supabase for auth and persistence.",
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "REST APIs",
      "Prompt Engineering",
      "Supabase"
    ],
    features: [
      "Goal-based roadmap generation for different tech stacks (web, AI, DSA, etc.)",
      "Step-by-step structured paths with milestones and checkpoints",
      "Prompt-engineered LLM integration behind a REST API layer",
      "Forms that capture user background and preferences",
      "Supabase-ready structure for auth and persistence",
      "Responsive layout optimized for both desktop and mobile"
    ],
    image: "/images/projects/syncverse/syncverse.webp",
    demoUrl: "https://sync-verse01.vercel.app",
    githubUrl: "https://github.com/techieujjwal/syncVerse01",
    category: "ai"
  },
  {
    id: "portfolio-v1",
    title: "Personal Portfolio v1 | HTML-CSS-JS Single Page Site",
    description:
      "A from-scratch personal portfolio website built with only HTML, CSS, and JavaScript.",
    longDescription:
      "This is my first personal portfolio website, built entirely with core web technologies. It showcases my work and skills as a computer science student, with a focus on smooth scrolling, theme toggling, and clean code. It includes a working contact form powered by Formspree, dark mode support, and interactive elements like a pixel grid that lights up on hover.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "CSS Variables",
      "Font Awesome",
      "Formspree"
    ],
    features: [
      "Dual-theme (light & dark) with preference saved in local storage",
      "Fully responsive layout for mobile, tablet, and desktop",
      "Smooth scroll-based animations and section transitions",
      "Typing effect in the hero section",
      "Functional contact form integrated via Formspree",
      "Interactive pixel grid and clean single-page navigation"
    ],
    image: "/images/projects/portfolio-v1/portfolio4.webp",
    demoUrl: "https://techieujjwal.github.io/portfolio/",
    githubUrl: "https://github.com/techieujjwal/portfolio",
    category: "web"
  },
  {
    id: "community-dashboard",
    title: "Coders Circle Community Dashboard & Analytics Portal",
    description:
      "Full-stack dashboard to monitor, analyze, and engage Coders Circle community members.",
    longDescription:
      "A dashboard built for Coders Circle to track member activity and growth. The dashboard surfaces key metrics like total members, active users, new joins, and interaction counts, along with charts for engagement trends and activity heatmaps. It also includes leaderboards for top contributors, an announcements panel, and real-time data updates using Supabase, making it a practical tool for managing a growing student community.",
    technologies: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "Supabase Realtime",
      "Chart.js / Recharts",
      "REST APIs"
    ],
    features: [
      "Dashboard overview with key community KPIs (members, activity, growth)",
      "Interactive charts for engagement trends, member growth, and retention",
      "Leaderboards highlighting most active and top-contributing members",
      "Announcements panel for hackathons, events, and important updates",
      "Real-time updates using Supabase Realtime without manual refresh",
      "Architecture built for clubs, communities, and online forums"
    ],
    image: "/images/projects/community-dashboard/community.webp",
    demoUrl: "https://community-dashboard-beige.vercel.app/",
    githubUrl: "https://github.com/techieujjwal/community-dashboard",
    category: "web"
  },
  {
    id: "student-result-analyzer",
    title: "Student Result Analyzer | Python Marks Analysis Tool",
    description:
      "Beginner-friendly Python tool to manage and analyze student marks using CSV and pandas.",
    longDescription:
      "Student Result Analyzer is a Python mini-project that manages and analyzes student marks using CSV files. It provides utilities to add and view student records, compute statistics like averages, top scorers, and lowest scorers, and visualize marks using bar charts. Built using pandas and matplotlib, the project is designed as a beginner-friendly tool for data analysis.",
    technologies: [
      "Python",
      "pandas",
      "matplotlib",
      "CSV (File-based Storage)"
    ],
    features: [
      "Add and manage student mark records via a simple interface",
      "View complete dataset directly from CSV",
      "Analyze averages, toppers, and lowest scorers per subject",
      "Plot subject-wise marks using bar charts with matplotlib",
      "Search functionality by roll number",
      "Extendable base for future features like GUI or PDF reports"
    ],
    image: "/images/student-result-analyzer/result.webp",
    githubUrl: "https://github.com/techieujjwal/Student-result-analyzer",
    category: "ai"
  },
  {
    id: "portfolio-v2",
    title: "Portfolio 2.0",
    description:
      "This website — a highly interactive, design-focused portfolio built with Next.js 15, Tailwind v4, and Framer Motion.",
    longDescription:
      "A complete overhaul of my first portfolio, shifting from a basic HTML/CSS design to a modern Next.js 15 stack. This project emphasizes performance, clean minimalism, complex asymmetric Bento Box grids, and seamless scroll-based animations powered by Framer Motion.",
    technologies: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS v4",
      "TypeScript",
      "Framer Motion",
      "Lenis Smooth Scroll"
    ],
    features: [
      "Dynamic alternating dark backgrounds on scroll",
      "Floating hover-revealed profile interactions",
      "Asymmetric Bento Grid for achievements",
      "Smooth infinite CSS marquee for skills",
      "100% Type-safe modern architecture"
    ],
    image: "/images/projects/portfolio-v2.png",
    demoUrl: "https://ujjwalshukla.com",
    githubUrl: "https://github.com/techieujjwal/portfolio2.0",
    category: "web"
  }
];
