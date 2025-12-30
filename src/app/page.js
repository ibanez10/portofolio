// app/page.js
import Hero from "@/components/Hero";
import LatestArticles from "@/components/LatestArticles";
import Services from "@/components/Service";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <LatestArticles />
      <Services />
    </div>
  );
}