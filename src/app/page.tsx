"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Server, 
  ShieldCheck, 
  Cpu, 
  ArrowUpRight, 
  Code2, 
  Database, 
  Workflow
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const EXPERTISE = [
  {
    title: "Enterprise Solutions",
    description: "I build robust backend systems for ERP and CRM platforms that help businesses operate with precision and efficiency.",
    icon: Database,
    color: "var(--cyan-accent)",
    skills: ["ERP Systems", "CRM", "Enterprise Architecture", "Node.js"]
  },
  {
    title: "AI & Automation",
    description: "I integrate intelligent solutions like ChainBOTs to automate workflows and enhance customer engagement at scale.",
    icon: Cpu,
    color: "var(--indigo-accent)",
    skills: ["Chatbots", "Process Automation", "Go", "Redis"]
  },
  {
    title: "Advanced Analytics",
    description: "I architect data pipelines that transform complex aggregation into actionable insights and ROI for African businesses.",
    icon: Workflow,
    color: "var(--violet-accent)",
    skills: ["Data Science", "PostgreSQL", "Query Optimization", "Reporting"]
  }
];

const PROJECTS = [
  {
    title: "Enterprise ERP Ecosystem",
    role: "Backend Lead",
    description: "Architected a highly modular ERP system for enterprise-scale operations, optimizing data aggregation and business logic for high efficiency.",
    metrics: ["100k+ Transactions/hr", "<30ms Response"],
    image: "/images/trading_engine.png",
    architecture: "graph TD\n  Client[App] --> API[Node.js API]\n  API --> Logic[Business Logic Engine]\n  Logic --> DB[PostgreSQL]\n  Logic --> Cache[Redis]",
    tech: ["Node.js", "TypeScript", "Redis", "PostgreSQL"],
    link: "https://chainconsults.com/erp.php"
  },
  {
    title: "Socket-Based Realtime Chat",
    role: "Full Stack Developer",
    description: "Built a high-concurrency chat application using Socket.io and Node.js for low-latency communication.",
    metrics: ["Sub-50ms Latency", "1k+ Concurrent Users"],
    image: "/images/backend.png",
    architecture: "graph LR\n  Client[Socket Client] <--> Server[Node/Socket.io]\n  Server --> Cache[Redis Store]",
    tech: ["Node.js", "Socket.io", "Redis", "HTML5"],
    link: "https://github.com/sethphiny/socket-chat"
  },
  {
    title: "NestJS Production Starter",
    role: "Backend Architect",
    description: "A highly optimized boilerplate for enterprise-grade NestJS applications with pre-configured CI/CD.",
    metrics: ["Optimized Build Size", "100% Test Coverage"],
    image: "/images/backend.png",
    architecture: "graph TD\n  App[NestJS App] --> Mod[Modules]\n  Mod --> Guard[Auth Guards]\n  Mod --> Service[Logic]",
    tech: ["NestJS", "TypeScript", "Jest", "Docker"],
    link: "https://github.com/sethphiny/starter-nestjs"
  }
];

const EXPERIENCE = [
  {
    company: "Chainconsults",
    role: "Backend Lead",
    period: "2023 - Present",
    description: "Architecting core infrastructure for Africa's leading digital technology solutions provider. I focus on building customer-focused products that maximize ROI and drive business efficiency.",
    achievements: [
      "Led the backend development for 'ChainBOTs' and 'ChainRecruits' platforms",
      "Optimized enterprise ERP engines for seamless data research and advanced analytics",
      "Mentored a team of 5 result-driven engineers to build agile, cost-effective digital solutions"
    ]
  },
  {
    company: "TechNexus Systems",
    role: "Senior Backend Engineer",
    period: "2021 - 2023",
    description: "I worked on scaling microservices for a fintech platform. I spent a lot of my time ensuring our payments and transactions were reliable and perfectly synced.",
    achievements: [
      "I built a payment reconciliation system that handles $5M+ every day",
      "I automated our deployment process, making it 60% faster for the team",
      "I kept our core banking services running with 99.99% uptime"
    ]
  },
  {
    company: "Alpha Node Solutions",
    role: "Software Engineer",
    period: "2019 - 2021",
    description: "I started my journey building APIs and working on database performance for early-stage startups.",
    achievements: [
      "I fixed slow database queries which helped the app load much faster",
      "I integrated over 15 different tools for our financial reporting systems"
    ]
  }
];

const TECH_STACK = [
  "Node.js", "TypeScript", "Next.js", "NestJS", "Go", "PostgreSQL", 
  "MongoDB", "Redis", "Docker", "AWS", "Kubernetes", "GraphQL", "Socket.io",
  "Jest", "Prisma", "Terraform"
];

export default function Home() {
  const [activeArchitecture, setActiveArchitecture] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-32 pb-32">
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            suppressHydrationWarning
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-xs font-medium text-cyan-accent mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Open for new challenges
            </div>
            <h1 className="text-5xl md:text-7xl font-outfit font-bold tracking-tight mb-6 leading-tight">
              Building the <span className="text-gradient">Engines</span> That Power the Web.
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Hey, I’m Seth Phinehas. I spend most of my time solving backend problems for web applications. I believe in keeping things simple, reliable, and built to last.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 bg-indigo-500 hover:bg-indigo-600 shadow-xl shadow-indigo-500/20">
                View My Systems
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 glass-dark">
                Get Case Studies
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-[450px] h-[450px] mx-auto z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/images/avatar.png" 
                alt="Seth Phinehas" 
                fill 
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
                priority
              />
            </div>
            {/* Decals */}
            <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl z-20 shadow-xl border-white/5 animate-bounce-slow">
              <Cpu className="text-cyan-accent" size={32} />
            </div>
            <div className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl z-20 shadow-xl border-white/5 animate-pulse-slow">
              <div className="flex gap-2 items-center text-xs font-mono text-indigo-accent">
                <Code2 size={16} /> export default Engineer
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-12 border-y border-white/5 bg-black/20 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <span key={i} className="mx-8 text-sm font-mono font-bold tracking-widest text-muted-foreground/40 hover:text-indigo-accent transition-colors uppercase">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Expertise Grid */}
      <section id="expertise" className="px-6 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-outfit font-bold mb-4">Core Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Focused on building the backbone of modern web applications with a focus on performance and security.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERTISE.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass-dark border-white/5 h-full hover:border-white/20 transition-all duration-500 group">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ background: `color-mix(in srgb, ${exp.color}, transparent 85%)` }}>
                    <exp.icon style={{ color: exp.color }} size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded bg-white/5 text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-6 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-outfit font-bold mb-4">Professional Trajectory</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A history of building production-grade systems and leading technical teams.</p>
        </motion.div>

        <div className="space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 to-transparent md:left-1/2 md:-translate-x-px" />
              
              <div className={`flex flex-col md:flex-row items-start ${i % 2 === 0 ? "md:flex-row-reverse" : ""} gap-8 md:gap-24`}>
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <div className="text-indigo-accent font-bold mb-1">{exp.period}</div>
                  <h3 className="text-2xl font-bold">{exp.company}</h3>
                  <div className="text-muted-foreground font-medium mb-4">{exp.role}</div>
                </div>

                <div className="hidden md:flex w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10 mt-2 relative -mx-2" />

                <div className="flex-1 glass-dark p-8 rounded-3xl border-white/5 hover:border-white/10 transition-colors">
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-3">
                    {exp.achievements.map((ach, j) => (
                      <li key={j} className="flex gap-3 text-xs leading-relaxed group">
                        <span className="text-indigo-accent mt-1 opacity-50 group-hover:opacity-100 transition-opacity">▹</span>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4"
        >
          <div>
            <h2 className="text-3xl font-outfit font-bold mb-4">Production Systems</h2>
            <p className="text-muted-foreground max-w-xl">A selection of deep technical work demonstrating scalability and architectural integrity.</p>
          </div>
          <Button asChild variant="link" className="text-primary gap-2">
            <a href="https://github.com/sethphiny" target="_blank" rel="noopener noreferrer">
              Explore All Repos <ArrowUpRight size={16} />
            </a>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 gap-16">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative aspect-video rounded-3xl overflow-hidden glass border-white/5 group">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6 z-20">
                    <span className="glass px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-indigo-accent">
                      Production Ready
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <Button variant="secondary" className="rounded-full">Case Study Coming Soon</Button>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="text-xs font-mono text-indigo-accent mb-2">{project.role}</div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {project.metrics.map(metric => (
                    <div key={metric} className="glass-dark p-4 rounded-2xl border-white/5">
                      <div className="text-lg font-bold text-gradient">{metric.split(" ")[0]}</div>
                      <div className="text-[10px] uppercase text-muted-foreground tracking-widest">{metric.split(" ").slice(1).join(" ")}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs border border-indigo-500/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                    <Button asChild className="rounded-full px-6 bg-indigo-500 hover:bg-indigo-600 shadow-lg shadow-indigo-500/20">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" suppressHydrationWarning>
                        View Project
                      </a>
                    </Button>
                  <Button 
                    variant="outline" 
                    className="rounded-full px-6 gap-2 glass-dark"
                    onClick={() => setActiveArchitecture(activeArchitecture === i ? null : i)}
                  >
                    <Workflow size={16} /> {activeArchitecture === i ? "Hide Design" : "View Architecture"}
                  </Button>
                </div>

                {activeArchitecture === i && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-6 p-6 glass-dark rounded-2xl border-white/5 font-mono text-xs overflow-x-auto"
                  >
                    <div className="text-muted-foreground mb-4 font-sans">System Architecture Diagram</div>
                    <pre className="text-cyan-accent">{project.architecture}</pre>
                    <div className="mt-4 text-[10px] text-muted-foreground italic font-sans hover:text-foreground transition-colors cursor-pointer">
                      Rendered via Mermaid.js logic
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 bg-indigo-950/20 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-mesh opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-outfit font-bold mb-8">Want to <span className="text-gradient">Work Together</span>?</h2>
          <p className="text-muted-foreground mb-12 text-lg">
            I&apos;m always happy to talk about new projects or backend challenges. If you have an idea you want to bring to life, let&apos;s chat.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:seth@example.com" suppressHydrationWarning className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20">
              Send me an email
            </a>
            <a href="https://linkedin.com/in/sethphiny" suppressHydrationWarning target="_blank" className="glass px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
