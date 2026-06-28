"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text inline-block">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8">
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

            <div className="space-y-4">
              {[
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
              ].map((item) => (
                <div key={item.title} className="glass rounded-xl p-5 flex gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                    <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
