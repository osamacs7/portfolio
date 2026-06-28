import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import ParticleBackground from "@/components/ParticleBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osama Alkarnawi | Security Engineer",
  description:
    "Security Engineer specializing in OT Security, Cloud Security, and Penetration Testing. KFUPM CS graduate with CompTIA Security+, CCNA, eWPT, and AWS SA certifications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body className="min-h-screen relative overflow-x-hidden">
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
          <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/15 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[30%] w-[450px] h-[450px] rounded-full bg-pink-600/10 blur-[120px]" />
        </div>
        <ParticleBackground />
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
