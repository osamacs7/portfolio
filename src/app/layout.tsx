import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import ParticleBackground from "@/components/ParticleBackground";
import BackToTop from "@/components/BackToTop";
import MouseGlow from "@/components/MouseGlow";
import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"] });

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export const metadata: Metadata = {
  title: "Osama Alkarnawi | Security Engineer",
  description:
    "Security Engineer specializing in OT Security, Cloud Security, and Penetration Testing. KFUPM CS graduate with CompTIA Security+, CCNA, eWPT, and AWS SA certifications.",
  keywords: [
    "cybersecurity",
    "security engineer",
    "penetration testing",
    "cloud security",
    "SIEM",
    "DevSecOps",
    "KFUPM",
  ],
  authors: [{ name: "Osama Alkarnawi" }],
  openGraph: {
    title: "Osama Alkarnawi | Security Engineer",
    description:
      "Security Engineer — OT Security, Cloud Security, Penetration Testing. CompTIA Security+, CCNA, AWS SA, eWPT certified.",
    url: "https://osamacs7.github.io/portfolio",
    siteName: "Osama Alkarnawi",
    images: [
      {
        url: `https://osamacs7.github.io${basePath}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Osama Alkarnawi — Security Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osama Alkarnawi | Security Engineer",
    description:
      "Security Engineer — OT Security, Cloud Security, Penetration Testing.",
    images: [`https://osamacs7.github.io${basePath}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body className="min-h-screen relative overflow-x-hidden">
        <Preloader />
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
          <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/15 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[30%] w-[450px] h-[450px] rounded-full bg-pink-600/10 blur-[120px]" />
        </div>
        <ParticleBackground />
        <MouseGlow />
        <ScrollProgress />
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
