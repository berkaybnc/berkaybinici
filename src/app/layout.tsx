import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Berkay Binici | Senior Full Stack Engineer & AI Advocate",
  description: "Senior Full Stack Engineer specializing in high-performance architectures, AI integration, and scalable systems. 5+ years of production experience.",
  keywords: ["Berkay Binici", "Full Stack Engineer", "Senior Developer", "AI Engineer", "Next.js 15", "React 19", "Docker", "Tesseract OCR"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body style={{ visibility: 'visible' }}>
        {children}
      </body>
    </html>
  );
}
