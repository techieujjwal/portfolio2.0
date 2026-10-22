export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: string;
};

export const experienceData: Experience[] = [
  {
    id: "google-student-ambassador",
    company: "Google",
    role: "Student Ambassador",
    duration: "Nov 2025 - Feb 2026",
    location: "Delhi, India · Remote",
    description:
      "Working as a Student Ambassador helping students explore AI tools, providing technical guidance, and building student-focused learning initiatives.",
    achievements: [
      "Hosted AI workshops and student learning sessions",
      "Guided students in using Gemini and Google AI tools",
      "Built strong networking and mentorship environment",
      "Enhanced communication and leadership capabilities",
      "Helped students gain knowledge about ai and its usage in daily life "
    ],
    technologies: [
      "Public Speaking",
      "Community Engagement",
      "AI Tools",
      "Leadership"
    ],
    type: "part-time"
  },

  {
    id: "ibm-ai-intern",
    company: "IBM",
    role: "Artificial Intelligence Intern",
    duration: "Aug 2025 - Sep 2025",
    location: "Delhi, India · Remote",
    description:
      "Completed a 6-week Virtual Internship in Artificial Intelligence under IBM's Future Skills Program (PBEL), focused on AI fundamentals and real-world applications.",
    achievements: [
      "Gained hands-on experience in Artificial Intelligence fundamentals",
      "Worked on Machine Learning workflows and data preprocessing",
      "Applied AI concepts to solve real-world problem statements",
      "Built strong foundations in AI and analytics"
      
    ],
    technologies: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Preprocessing",
      "Data Analytics"
    ],
    type: "internship"
  },
  {
    id: "makeintern-app-intern",
    company: "MakeIntern",
    role: "App Development Intern",
    duration: "Jul 2025",
    location: "West Delhi, Delhi, India · Remote",
    description:
      "Worked as an App Development Intern focusing on UI/UX design and mobile application user flow for real-world projects.",
    achievements: [
      "Designed and improved UI/UX for mobile application prototypes",
      "Worked on app structure and user flow under live project environment",
      "Collaborated with SkillUpgrad, MakeIntern, and NSDC on design tasks",
      "Delivered a functional prototype within a one-month internship program"
    ],
    technologies: [
      "UI/UX Design",
      "App Prototyping",
      "Mobile App Design",
      "Figma"
    ],
    type: "internship"
  },

  
  
];
