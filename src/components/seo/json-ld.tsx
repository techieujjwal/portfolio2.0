import { SITE_CONFIG } from "@/lib/constants";
import { educationData, achievementsData } from "@/data/achievements";
import { experienceData } from "@/data/experience";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ujjwal shukla",
    alternateName: "NK",
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.links.email,
    telephone: SITE_CONFIG.links.phone,
    jobTitle: "Computer Science Graduate Student",
    description: SITE_CONFIG.description,
    sameAs: [
      SITE_CONFIG.links.github,
      SITE_CONFIG.links.linkedin,
    ],
    alumniOf: educationData.map(edu => ({
      "@type": "EducationalOrganization",
      name: edu.institution,
      address: {
        "@type": "PostalAddress",
        addressLocality: edu.location.split(", ")[0],
        addressCountry: edu.location.split(", ")[1],
      },
    })),
    worksFor: experienceData.map(exp => ({
      "@type": "Organization",
      name: exp.company,
      address: {
        "@type": "PostalAddress",
        addressLocality: exp.location,
      },
    })),
    knowsAbout: [
      "Cloud Computing",
      "Full Stack Development",
      "Machine Learning",
      "Blockchain",
      "AWS",
      "Azure",
      "React",
      "Node.js",
      "Python",
      "TypeScript",
    ],
    memberOf: achievementsData.map(achievement => ({
      "@type": "Organization",
      name: achievement.organization,
      description: achievement.description,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}