"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    role: "OT Security & Industrial PI System Intern",
    company: "INTECH Automation & Intelligence",
    period: "Apr 2025 – Sep 2025",
    color: "#6366f1",
    logo: "/logos/intech.png",
    points: [
      "Hardened 20+ OT systems in a SABIC environment — Windows services, local policies, user access, endpoint protection",
      "Designed full OSIsoft PI System architecture: PI Data Archive, PI AF, PI Vision, interface node across multiple machines",
      "Configured Active Directory (Domain Controller) for secure authentication in the industrial environment",
    ],
  },
  {
    role: "Cybersecurity Intern",
    company: "Fortinet",
    period: "Jun 2024 – Dec 2024",
    color: "#ee3124",
    logo: "/logos/fortinet.png",
    points: [
      "Hands-on experience with FortiGate and FortiDeceptor security solutions",
      "Explored threat detection techniques to understand attacker behavior and improve visibility",
      "Applied log analysis and traffic inspection to identify suspicious patterns and misconfigurations",
    ],
  },
  {
    role: "Info Security & Networking Teaching Assistant",
    company: "KFUPM",
    period: "Aug 2024 – May 2026",
    color: "#ec4899",
    logo: "/logos/kfupm.png",
    points: [
      "Designed a large-scale enterprise network project for the Network Management & Security course",
      "Led hands-on cybersecurity project: SSH honeypot deployment and attack analysis",
    ],
  },
  {
    role: "Cybersecurity Committee Lead",
    company: "KFUPM",
    period: "May 2023 – Jan 2025",
    color: "#f59e0b",
    logo: "/logos/kfupm.png",
    points: [
      "Led and instructed a Web Penetration Testing Bootcamp with structured hands-on training",
      "Taught networking fundamentals for cybersecurity to 70+ students",
    ],
  },
  {
    role: "Lead Ambassador",
    company: "Oracle",
    period: "Mar 2025 – Jun 2025",
    color: "#f80000",
    logo: "/logos/oracle.svg",
    points: [
      "Promoted cloud computing courses and industry technologies within the university",
      "Supported peer learning — course enrollment, technical questions, platform navigation",
    ],
  },
];

export default function Experience() {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 gradient-text inline-block"
        >
          Experience
        </motion.h2>

        <div className="relative" ref={containerRef}>
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/5" />
          <motion.div
            className="absolute left-[19px] top-0 w-px origin-top"
            style={{
              height: lineHeight,
              background:
                "linear-gradient(180deg, #6366f1, #a855f7, #ec4899)",
            }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative pl-12"
              >
                <motion.div
                  className="absolute left-3 top-6 w-3 h-3 rounded-full"
                  style={{ backgroundColor: exp.color }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    delay: i * 0.12 + 0.2,
                  }}
                />
                <div
                  className="absolute left-[13px] top-[18px] w-[9px] h-[9px] rounded-full animate-ping opacity-30"
                  style={{ backgroundColor: exp.color }}
                />
                <div className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <div className="flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-lg glass flex items-center justify-center shrink-0 p-1.5 bg-white/5">
                        <Image
                          src={`${basePath}${exp.logo}`}
                          alt={exp.company}
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-indigo-400 text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 glass rounded-lg px-3 py-1">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-gray-400 flex gap-2">
                        <span className="text-indigo-500 mt-1 shrink-0">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
