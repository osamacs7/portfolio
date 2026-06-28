"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function Hero() {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-8 relative w-32 h-32"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden ring-2 ring-indigo-500/50 ring-offset-4 ring-offset-[#0a0a1a]">
              <Image
                src={`${basePath}/photo.svg`}
                alt="Osama Alkarnawi"
                width={128}
                height={128}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-[#0a0a1a] flex items-center justify-center">
              <span className="text-xs">✓</span>
            </div>
          </motion.div>

          <div className="glass inline-block rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm text-indigo-400">Open to Opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Osama</span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8 h-[40px]">
            <Typewriter
              options={{
                strings: [
                  "Security Engineer",
                  "Penetration Tester",
                  "Cloud Security Specialist",
                  "DevSecOps Builder",
                  "CTF Player",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 50,
              }}
            />
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Securing infrastructure from OT systems to the cloud. Hands-on
            experience in SIEM, penetration testing, and building DevSecOps
            tools — backed by industry certifications and a passion for
            breaking (and fixing) things.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-all font-medium hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-xl glass hover:bg-white/10 transition-all font-medium active:scale-95"
            >
              Get in Touch
            </a>
            <a
              href={`${basePath}/Osama_Alkarnawi_CV.pdf`}
              download
              className="px-8 py-3 rounded-xl glass hover:bg-white/10 transition-all font-medium flex items-center gap-2 active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-3 text-sm text-gray-500"
        >
          {[
            { name: "CompTIA Security+", color: "#e53e3e" },
            { name: "CCNA", color: "#1ba0d7" },
            { name: "AWS SA", color: "#ff9900" },
            { name: "eWPT", color: "#6366f1" },
            { name: "eJPT", color: "#a855f7" },
            { name: "Fortinet NSE", color: "#ee3124" },
          ].map((cert) => (
            <span
              key={cert.name}
              className="glass rounded-lg px-3 py-1.5 hover:bg-white/10 transition-colors cursor-default"
              style={{ borderColor: `${cert.color}33` }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: cert.color }}
              />
              {cert.name}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <a href="#about" className="inline-block animate-bounce text-gray-600 hover:text-gray-400 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
