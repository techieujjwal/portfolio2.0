// Projects data from Ujjwal's portfolio

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
    id: "syncverse",
    title: "SyncVerse | AI-Powered Roadmap & Career Navigator",
    description:
      "Web platform that helps students and developers generate personalized tech roadmaps and guidance.",
    longDescription:
      "SyncVerse is a next-generation edtech and career navigation platform designed to help students and developers move from confusion to clarity. It allows users to describe their goals or current status and generates structured learning roadmaps, curated resources, and milestone-based plans. Built with a modern React + TypeScript stack and powered by AI for roadmap generation, SyncVerse focuses on clean UI, interactive flows, and practical guidance tailored to each learner’s journey.",
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Aceternity UI",
      "Supabase",
      "REST APIs",
      "Prompt Engineering",
      "OpenAI (LLM-powered Roadmaps)"
    ],
    features: [
      "Goal-based roadmap generation for different tech stacks (web, AI, DSA, etc.)",
      "Step-by-step structured paths with milestones and checkpoints",
      "Clean, modern UI using shadcn/ui and Aceternity components",
      "Forms and inputs to capture user background and preferences",
      "Potential integration with Supabase for auth and persistence",
      "Responsive layout optimized for both desktop and mobile"
    ],
    image: "",
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
      "This is Ujjwal Shukla’s first personal portfolio website, built entirely with core web technologies and no frontend frameworks. The site showcases projects, skills, and journey as a computer science student, with a focus on smooth scrolling, theme toggling, and subtle animations. It includes a working contact form powered by Formspree, dual-theme support (light/dark), and interactive elements like a pixel grid that lights up on hover, delivering a polished but framework-free portfolio experience.",
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
      "Typing effect in the hero section for dynamic introduction",
      "Functional contact form integrated via Formspree",
      "Interactive pixel grid and clean single-page navigation"
    ],
    image: "/images/projects/portfolio-v1/portfolio-v1.webp",
    demoUrl: "https://techieujjwal.github.io",
    githubUrl: "https://github.com/techieujjwal/portfolio",
    category: "web"
  },
  {
    id: "community-dashboard",
    title: "Coders Circle Community Dashboard & Analytics Portal",
    description:
      "Full-stack dashboard to monitor, analyze, and engage Coders Circle community members.",
    longDescription:
      "A full-stack Community Dashboard & Analytics Portal built for Coders Circle, designed to track member activity, engagement, and growth. The dashboard surfaces key metrics like total members, active users, new joins, and interaction counts, along with charts for engagement trends, retention, and activity heatmaps. It also includes leaderboards for top contributors, an announcements panel for events and updates, and real-time data updates using Supabase, making it a practical tool for managing a growing student-led tech community.",
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
      "Scalable architecture suitable for clubs, communities, and online forums"
    ],
    image: "/images/projects/community-dashboard/community-dashboard.webp",
    githubUrl: "https://github.com/techieujjwal/community-dashboard",
    category: "web"
  },
  {
    id: "student-result-analyzer",
    title: "Student Result Analyzer | Python Marks Analysis Tool",
    description:
      "Beginner-friendly Python tool to manage and analyze student marks using CSV and pandas.",
    longDescription:
      "Student Result Analyzer is a Python-based mini-project that manages and analyzes student marks stored in CSV files. It provides utilities to add and view student records, compute statistics like averages, toppers, and lowest scorers, and visualize marks using bar charts. Built using pandas and matplotlib, the project is designed as a beginner-friendly step into data analysis and Python scripting, with clear structure and potential extensions like PDF export or GUI.",
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
    image: "/images/projects/student-result-analyzer/student-result-analyzer.webp",
    githubUrl: "https://github.com/techieujjwal/Student-result-analyzer",
    category: "ai"
  }
];
