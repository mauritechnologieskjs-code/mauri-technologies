import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mauri Technologies | Premier Software Engineering & IT Solutions Nepal",
  description:
    "Mauri Technologies is a premier software development and digital engineering firm based in Kathmandu, Nepal. Delivering full-stack web applications, mobile apps, UI/UX systems, and cloud architectures for global enterprises.",
  keywords: [
    "Mauri Technologies",
    "IT Company Nepal",
    "Software Development Kathmandu",
    "Full-Stack Web Development Nepal",
    "Mobile App Development Nepal",
    "Tech Outsourcing Nepal",
    "UI/UX Design Agency Nepal",
    "Cloud DevOps Solutions",
  ],
  authors: [{ name: "Mauri Technologies" }],
  openGraph: {
    title: "Mauri Technologies | Innovation Driven Software Engineering Nepal",
    description:
      "Turning complex business ideas into scalable digital solutions. Custom software, mobile apps, UI/UX, and cloud infrastructure.",
    url: "https://mauritech.com.np",
    siteName: "Mauri Technologies",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-[#1A1612] bg-[#FAF7F2] transition-colors duration-300 selection:bg-amber-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
