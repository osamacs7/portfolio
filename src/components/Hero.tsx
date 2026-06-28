"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass inline-block rounded-full px-4 py-1.5 mb-8">
            <span className="text-sm text-indigo-400">
              Security Engineer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Osama</span>
            <br />
            <span className="gradient-text">Alkarnawi</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Securing infrastructure from OT systems to the cloud. Hands-on
            experience in SIEM, penetration testing, and building DevSecOps
            tools — backed by industry certifications and a passion for
            breaking (and fixing) things.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors font-medium"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-xl glass hover:bg-white/10 transition-colors font-medium"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-gray-500"
        >
          {[
            "CompTIA Security+",
            "CCNA",
            "AWS SA",
            "eWPT",
            "eJPT",
            "Fortinet NSE",
          ].map((cert) => (
            <span key={cert} className="glass rounded-lg px-3 py-1.5">
              {cert}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
