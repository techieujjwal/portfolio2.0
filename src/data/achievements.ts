export interface Achievement {
  id: string;
  title: string;
  organization: string;
  description: string;
  impact: string[];
}

export const achievementsData: Achievement[] = [
  {
    id: "",
    title: "",
    organization: "",
    description: "",
    impact: [
      "",
      "",
      
    ],
  }
];

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
