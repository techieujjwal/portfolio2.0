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
      "SyncVerse is an edtech platform designed to help students and developers map out their goals. It allows users to input their current status and generates learning roadmaps, resources, and plans. Built with React and TypeScript and using AI models under the hood, SyncVerse focuses on a clean UI and practical guidance for each person's needs.",
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
  }
];
