"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Cloud Guard",
    subtitle: "Cloud Security Posture Management",
    description:
      "Enterprise CSPM platform with multi-cloud scanning (AWS, K8s), CIS compliance engine, JWT-authenticated REST API, automated remediation playbooks, and a full CI/CD security pipeline with SAST, container scanning, and secret detection.",
    tags: ["Python", "FastAPI", "Terraform", "Docker", "GitHub Actions"],
    link: "https://github.com/osamacs7/cloud-guard",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "SSH Honeypot Threat Analysis",
    subtitle: "SIEM-Integrated Threat Detection",
    description:
      "Deployed SSH honeypots integrated with Splunk SIEM for real-time collection and analysis of malicious authentication attempts. Built dashboards to identify brute-force patterns and visualize attacker behavior across geographic regions.",
    tags: ["Python", "Splunk", "Honeypot", "SIEM", "Log Analysis"],
    link: "https://github.com/osamacs7/senior-project-osama-code",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Senior Project",
    subtitle: "Multi-Agentic Prosthetic Design",
    description:
      "Multi-agentic AI system for prosthetic limb design, combining machine learning with domain-specific automation to streamline the design and evaluation process.",
    tags: ["Python", "AI/ML", "Multi-Agent Systems"],
    link: "https://github.com/osamacs7/Senior-Project",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    title: "Hack The Box Writeups",
    subtitle: "CTF Challenges & Pentesting",
    description:
      "Collection of writeups and tools from HTB challenges covering privilege escalation, web exploitation, network attacks, and post-exploitation techniques.",
    tags: ["Shell", "Pentesting", "CTF", "Linux"],
    link: "https://github.com/osamacs7/Hack-The-Box",
    gradient: "from-emerald-500 to-teal-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 gradient-text inline-block"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 group hover:bg-white/[0.07] transition-all block"
            >
              <div
                className={`h-1 w-16 rounded-full bg-gradient-to-r ${project.gradient} mb-4 group-hover:w-24 transition-all`}
              />
              <h3 className="text-xl font-semibold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-indigo-400 text-sm mb-3">{project.subtitle}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-gray-400 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
