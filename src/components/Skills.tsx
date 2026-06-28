"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Security Operations",
    gradient: "from-indigo-500 to-blue-600",
    skills: [
      "SIEM (Splunk)",
      "Log Analysis",
      "Incident Investigation",
      "Threat Detection",
      "MITRE ATT&CK",
    ],
  },
  {
    title: "Offensive Security",
    gradient: "from-purple-500 to-pink-600",
    skills: [
      "Web Application Testing",
      "Vulnerability Assessment",
      "Network Penetration Testing",
      "Honeypot Deployment",
      "Burp Suite",
    ],
  },
  {
    title: "Systems & Cloud",
    gradient: "from-pink-500 to-rose-600",
    skills: [
      "Linux Administration",
      "Active Directory",
      "AWS (EC2, VPC, IAM)",
      "System Hardening",
      "Access Control",
    ],
  },
  {
    title: "DevSecOps & Tools",
    gradient: "from-emerald-500 to-teal-600",
    skills: [
      "Docker",
      "Terraform",
      "GitHub Actions",
      "CI/CD Pipelines",
      "Python",
      "Bash",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 gradient-text inline-block"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div
                className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.gradient} mb-4`}
              />
              <h3 className="text-lg font-semibold text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
