// app/about/page.js
import Roadmap from "@/components/Roadmap";

export const metadata = {
  title: "Roadmap | Ardhananta Ibanez",
  description: "A short story of my professional career and passion.",
};

export default function Page() {
  return (
    <>
      <Roadmap/>
    </> 
  );
}