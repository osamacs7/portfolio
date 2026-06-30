"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TiltCard from "./TiltCard";

const projects = [
  {
    title: "Cloud Guard",
    subtitle: "Cloud Security Posture Management",
    description:
      "Enterprise CSPM platform with multi-cloud scanning (AWS, K8s), CIS compliance engine, JWT-authenticated REST API, automated remediation playbooks, and a full CI/CD security pipeline.",
    tags: ["Python", "FastAPI", "Terraform", "Docker", "GitHub Actions"],
    link: "https://github.com/osamacs7/cloud-guard",
    gradient: "from-indigo-500 to-purple-600",
    image: "/projects/cloud-guard.svg",
  },
  {
    title: "SSH Honeypot Threat Analysis",
    subtitle: "SIEM-Integrated Threat Detection",
    description:
      "SSH honeypots integrated with Splunk SIEM for real-time brute-force detection, attacker behavior analysis, and geographic dashboard visualization.",
    tags: ["Python", "Splunk", "Honeypot", "SIEM"],
    link: "https://github.com/osamacs7/senior-project-osama-code",
    gradient: "from-purple-500 to-pink-600",
    image: "/projects/honeypot.svg",
  },
  {
    title: "Offensive Security, Cyber Deception & SIEM",
    subtitle: "Compromise → Honeypot → SIEM Analysis",
    description:
      "Hands-on project chaining offensive security and defense: compromised a vulnerable service with Metasploit and MITRE Caldera (mapped to ATT&CK TTPs), deployed a honeypot to compare attacker behavior, then ingested logs into a SIEM for analysis and visualization.",
    tags: ["Metasploit", "MITRE ATT&CK", "Honeypot", "Splunk/Wazuh", "Kali Linux"],
    link: "https://github.com/osamacs7/offensive-security-cyber-deception-and-Security-Information-and-Event-Management-SIEM-",
    gradient: "from-rose-500 to-orange-600",
    image: "/projects/siem.svg",
  },
  {
    title: "Cyber Deception & SIEM Setup Guide",
    subtitle: "Course Lab Environment Guide",
    description:
      "Setup guides for a hands-on offensive security and SIEM course project, covering Metasploitable3 installation, Metasploit usage, and Splunk SIEM configuration for students.",
    tags: ["Metasploit", "Metasploitable3", "Splunk", "Documentation"],
    link: "https://github.com/osamacs7/Cyber-Deception-and-Security-Information-and-Event-Management",
    gradient: "from-amber-500 to-red-600",
    image: "/projects/siem.svg",
  },
  {
    title: "CloudTask",
    subtitle: "DevOps Learning Project",
    description:
      "Enterprise-style DevOps project built from scratch to learn Git, Docker, AWS, Terraform, and CI/CD — covering Flask, ECR, EC2, CloudWatch, and Nginx deployment patterns.",
    tags: ["Python", "Flask", "Docker", "Terraform", "AWS"],
    link: "https://github.com/osamacs7/cloudtask",
    gradient: "from-sky-500 to-blue-600",
    image: "/projects/cloud-guard.svg",
  },
];

export default function Projects() {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  return (
    <section id="projects" className="py-24 px-6">
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
            <TiltCard key={i}>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass rounded-2xl overflow-hidden group hover:bg-white/[0.07] transition-all block h-full"
              >
                <div
                  className={`h-40 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity relative flex items-center justify-center`}
                >
                  <Image
                    src={`${basePath}${project.image}`}
                    alt={project.title}
                    width={80}
                    height={80}
                    className="opacity-60 group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-indigo-400 text-sm mb-3">
                    {project.subtitle}
                  </p>
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
                </div>
              </motion.a>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
