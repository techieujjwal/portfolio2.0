import { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Achievements } from "@/components/sections/achievements";

export const metadata: Metadata = {
  title: "About | Ujjwal shukla",
  description: "Learn more about Ujjwal shukla  - Bachelor in Computer Science student at AKTU University",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-20">
        <About />
        <Skills />
        <Achievements />
      </div>
    </>
  );
}