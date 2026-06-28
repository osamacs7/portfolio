"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: "3.6", label: "GPA / 4.0" },
  { value: "6", label: "Certifications" },
  { value: "20+", label: "OT Systems Hardened" },
  { value: "70+", label: "Students Trained" },
];

const details = [
  {
    icon: "🎓",
    title: "Education",
    desc: "BSc Computer Science — KFUPM",
    detail: "GPA 3.6/4.0 · Dean's List · Second Honor",
  },
  {
    icon: "📍",
    title: "Location",
    desc: "Saudi Arabia",
    detail: "Open to remote & on-site opportunities",
  },
  {
    icon: "📄",
    title: "Publication",
    desc: "Detection of DGA Domains",
    detail: "ISA Saudi Conference",
  },
  {
    icon: "🗣️",
    title: "Languages",
    desc: "Arabic (Native) · English (Fluent)",
    detail: "Bilingual professional proficiency",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text inline-block">
            About Me
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="glass rounded-2xl p-5 text-center group hover:bg-white/[0.07] transition-all">
                <p className="text-3xl font-bold gradient-text">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="glass rounded-2xl p-8 h-full">
              <p className="text-gray-300 leading-relaxed mb-4">
                Security engineer with a BSc in Computer Science from{" "}
                <span className="text-white font-medium">KFUPM</span>{" "}
                (3.6/4.0 GPA, Dean&apos;s List, Second Honor). I specialize in
                bridging the gap between offensive security and defensive
                operations.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                From hardening 20+ OT systems at{" "}
                <span className="text-white font-medium">SABIC</span> to
                deploying honeypots integrated with Splunk SIEM, I bring a
                hands-on approach to cybersecurity that spans both industrial
                and cloud environments.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Published researcher in DGA domain detection at the ISA Saudi
                Conference, and a former cybersecurity committee lead who
                trained 70+ students in web pentesting and network security.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {details.map((item, i) => (
              <AnimatedSection key={item.title} delay={0.2 + i * 0.1}>
                <div className="glass rounded-xl p-5 flex gap-4 hover:bg-white/[0.07] transition-all">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                    <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
