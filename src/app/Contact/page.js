// app/about/page.js
import ContactPage from "@/components/ContactPage";

export const metadata = {
  title: "Contact | Ardhananta Ibanez",
  description: "A short story of my professional career and passion.",
};

export default function Page() {
  return (
    <>
      <ContactPage />
    </>
  );
}