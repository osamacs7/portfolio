"use client";

import { motion } from "framer-motion";

const certs = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    color: "#e53e3e",
    icon: "🛡️",
  },
  {
    name: "Cisco CCNA",
    issuer: "Cisco",
    color: "#1ba0d7",
    icon: "🌐",
  },
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    color: "#ff9900",
    icon: "☁️",
  },
  {
    name: "eWPT",
    issuer: "INE Security",
    color: "#6366f1",
    icon: "🕸️",
  },
  {
    name: "eJPT",
    issuer: "INE Security",
    color: "#a855f7",
    icon: "🔓",
  },
  {
    name: "Fortinet NSE 1–5",
    issuer: "Fortinet",
    color: "#ee3124",
    icon: "🔥",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
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
              whileHover={{ scale: 1.03 }}
              className="glass rounded-2xl p-6 text-center group hover:bg-white/[0.07] transition-all cursor-default"
            >
              <span className="text-3xl mb-3 block">{cert.icon}</span>
              <h3 className="font-semibold text-white text-sm md:text-base mb-1">
                {cert.name}
              </h3>
              <p className="text-xs text-gray-500">{cert.issuer}</p>
              <div
                className="h-0.5 w-8 mx-auto mt-3 rounded-full opacity-60 group-hover:w-12 transition-all"
                style={{ backgroundColor: cert.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
