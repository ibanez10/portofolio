// app/about/page.js
import AboutPage from "@/components/AboutPage";
import SkillsMarquee from "@/components/SkillsMarquee";

export const metadata = {
  title: "About | Ardhananta Ibanez",
  description: "A short story of my professional career and passion.",
};

export default function Page() {
  return (
    <>
      <AboutPage />
      <SkillsMarquee />
    </>
  );
}