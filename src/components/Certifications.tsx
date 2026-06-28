"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TiltCard from "./TiltCard";

const certs = [
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    color: "#c8202f",
    logo: "/logos/comptia.png",
  },
  {
    name: "Cisco CCNA",
    issuer: "Cisco",
    color: "#1ba0d7",
    logo: "/logos/cisco.svg",
  },
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    color: "#ff9900",
    logo: "/logos/aws.svg",
  },
  {
    name: "eWPT",
    issuer: "INE Security",
    color: "#6366f1",
    logo: "/logos/ine.png",
  },
  {
    name: "eJPT",
    issuer: "INE Security",
    color: "#a855f7",
    logo: "/logos/ine.png",
  },
  {
    name: "Fortinet NSE 1–5",
    issuer: "Fortinet",
    color: "#ee3124",
    logo: "/logos/fortinet.png",
  },
];

export default function Certifications() {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

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
                  <div className="w-14 h-14 mx-auto mb-3 rounded-xl glass flex items-center justify-center p-2 bg-white/5">
                    <Image
                      src={`${basePath}${cert.logo}`}
                      alt={cert.issuer}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
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
