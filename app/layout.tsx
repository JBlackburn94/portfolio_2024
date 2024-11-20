import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const monaSans = localFont({
  src: "./fonts/MonaSans.woff2",
  variable: "--font-mona-sans",
});

export const metadata = {
  title: "Jason Blackburn - Frontend Developer Portfolio",
  description:
    "Explore the portfolio of Jason Blackburn, a skilled Frontend Developer specializing in Next.js, React, TypeScript, JavaScript, TailwindCSS, and GSAP. Discover cutting-edge web applications crafted with precision and creativity.",
  keywords: [
    "Jason Blackburn",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
    "GSAP",
    "web development portfolio",
    "modern web design",
    "interactive UI",
    "responsive design",
    "UK developer",
    "JasonBlackburn.co.uk",
  ],
  author: "Jason Blackburn",
  openGraph: {
    title: "Jason Blackburn - Frontend Developer Portfolio",
    description:
      "Showcasing innovative and dynamic web applications built with Next.js, React, TypeScript, JavaScript, TailwindCSS, and GSAP. Jason Blackburn is passionate about delivering seamless user experiences.",
    url: "https://jasonblackburn.co.uk",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monaSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
