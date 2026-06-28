"use client";

import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const certs = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    color: "#e53e3e",
    logo: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 16v8M16 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Cisco CCNA",
    issuer: "Cisco",
    color: "#1ba0d7",
    logo: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <path d="M8 28V16M14 28V12M20 28V8M26 28V12M32 28V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    color: "#ff9900",
    logo: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <path d="M8 24C8 24 14 28 20 28C26 28 32 24 32 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 16L20 10L28 16L20 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "eWPT",
    issuer: "INE Security",
    color: "#6366f1",
    logo: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 20L18 24L26 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "eJPT",
    issuer: "INE Security",
    color: "#a855f7",
    logo: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <rect x="8" y="8" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 16L24 24M24 16L16 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Fortinet NSE 1–5",
    issuer: "Fortinet",
    color: "#ee3124",
    logo: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
        <path d="M20 6L34 14V26L20 34L6 26V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M20 14L27 18V26L20 30L13 26V18Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" opacity="0.5"/>
      </svg>
    ),
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 gradient-text inline-block"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <TiltCard>
                <div className="glass rounded-2xl p-6 text-center group hover:bg-white/[0.07] transition-all cursor-default h-full">
                  <span
                    className="inline-block mb-3 transition-colors"
                    style={{ color: cert.color }}
                  >
                    {cert.logo}
                  </span>
                  <h3 className="font-semibold text-white text-sm md:text-base mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-gray-500">{cert.issuer}</p>
                  <div
                    className="h-0.5 w-8 mx-auto mt-3 rounded-full opacity-60 group-hover:w-12 transition-all"
                    style={{ backgroundColor: cert.color }}
                  />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
