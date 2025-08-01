import "./globals.css";

export const metadata = {
  title: "KOSU",
  description: "Platform digital untuk manajemen kost",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
