// Leadership and achievements data

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  impact: string[];
  
}

export const achievementsData: Achievement[] = [
  {
    id: "coders-circle",
    title: "Co-Founder",
    organization: "Coders Circle",
    description: "Built and scaled a growing tech community focused on coding culture, collaboration, and peer learning.",
    impact: [
      "Created a tech community of 1500+ students and developers",
      "Organized tech sessions, networking events, and collaborative coding spaces",
      "Encouraged open-source contributions and project-based learning",
      "Built leadership and community engagement initiatives"
    ],
    
  }
];

// Education data
export interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  
}

export const educationData: Education[] = [
  {
    id: "lloyd",
    institution: "Lloyd Institute of Engineering and Technology",
    degree: "B.Tech in Computer Science Engineering",
    duration: "2024 - 2028",
    location: "Delhi, India",
   
  }
];
