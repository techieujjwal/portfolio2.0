// App constants

export const SITE_CONFIG = {
  name: "Ujjwal Shukla",
  description:
    "B.Tech Computer Science Engineering Student at Lloyd Institute of Engineering & Technology | Full-stack Developer | Community Builder | AI & Web Enthusiast",
  url: "https://ujjwalshukla.com", 
  ogImage: "/images/ujjwal/og-image.png",
  links: {
    email: "ujjwalshukla291@gmail.com",
    github: "https://github.com/techieujjwal",
    linkedin: "https://linkedin.com/in/ujjwal-shukla88821",
    phone: "+91 8882194557"
  }
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Achievements", href: "/#achievements" }
];

export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};
