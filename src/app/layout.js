import LayoutWrapper from "@/components/LayoutWrapper"; // Sesuaikan path
import "./globals.css";

export const metadata = {
  title: "Ardhananta Ibanez Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-900 antialiased">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}