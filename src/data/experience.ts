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
    duration: "Dec 2025 - Present",
    location: "Delhi, India · Remote",
    description:
      "Working as a Student Ambassador helping students explore AI tools, providing technical guidance, and building student-focused learning initiatives.",
    achievements: [
      "Hosted AI workshops and student learning sessions",
      "Guided students in using Gemini and Google AI tools",
      "Built strong networking and mentorship environment",
      "Enhanced communication and leadership capabilities"
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
      "Completed a 6-week Virtual Internship in Artificial Intelligence under IBM's Future Skills Program (FSP), focused on AI fundamentals and real-world applications.",
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
      "Flutter",
      "App Prototyping",
      "Mobile App Design",
      "Figma"
    ],
    type: "internship"
  },

  {
    id: "coders-circle-cofounder",
    company: "Coders Circle",
    role: "Co-Founder",
    duration: "Aug 2025 - Present",
    location: "Greater Noida, India · Remote",
    description:
      "Co-founded and actively managing Coders Circle, a fast-growing student-led tech community focused on improving technical skills and collaboration.",
    achievements: [
      "Scaled the community to 1400+ students within the first month",
      "Implemented effective community engagement strategies and learning initiatives",
      "Managed project curation and technical collaborations",
      "Built a strong peer-learning environment for developers and tech enthusiasts"
    ],
    technologies: ["Community Building", "Leadership", "Team Management", "Growth Strategy"],
    type: "full-time"
  },
  {
    id: "devsphere-event-manager",
    company: "DevSphereIndia",
    role: "Event Manager",
    duration: "Sep 2025 - Present",
    location: "Delhi, India · Hybrid",
    description:
      "Working as an Event Manager intern, planning and managing technical events, hackathons, and student-focused workshops to enhance engagement and participation.",
    achievements: [
      "Planned and managed multiple technical events, hackathons, and workshops for student communities",
      "Coordinated with speakers, mentors, and participants to ensure smooth execution",
      "Collaborated with the event team to improve outreach and participation strategies",
      "Built hands-on experience in hybrid (online + offline) community management"
    ],
    technologies: ["Event Management", "Stakeholder Coordination", "Community Building", "Public Speaking"],
    type: "internship"
  }
];
