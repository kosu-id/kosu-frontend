import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "KOSU",
  description: "Platform digital untuk manajemen kost",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-50 font-sans text-gray-900">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
