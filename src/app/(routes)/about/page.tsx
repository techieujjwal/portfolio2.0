import { Metadata } from "next";
import { About } from "@/components/sections/about";
import { SkillsShowcase} from "@/components/sections/skills";
import { Achievements } from "@/components/sections/achievements";

export const metadata: Metadata = {
  title: "About | Ujjwal Shukla",
  description: "Learn more about Ujjwal Shukla  - Bachelor in Computer Science student at AKTU University",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">
        <About />
        <SkillsShowcase />
        <Achievements />
      </div>
    </>
  );
}