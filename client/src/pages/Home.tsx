import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Code2, Brain, Zap, Cpu, Info, Phone } from "lucide-react";
import React, { useState } from "react";

/**
 * Professional Portfolio - Dark Futuristic Design
 * 
 * Design Philosophy: Bold, tech-forward aesthetic with cyan/purple accents
 * Typography: Space Grotesk (display) + Inter (body) + JetBrains Mono (code)
 * Color Palette: Deep charcoal bg, cyan/purple accents, bright white text
 */

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [hovered3dProject, setHovered3dProject] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects: Array<{
    id: number;
    title: string;
    category: string;
    description: string;
    tech: string[];
    image: string;
    liveLink: string;
    githubLink: string;
    detailedContent?: React.ReactNode;
  }> = [
    {
      id: 0,
      title: "Deflekt — AI Support Deflection Engine",
      category: "Full-Stack AI SaaS",
      description: "Enterprise-grade multi-tenant RAG engine that connects to company help centers to automatically answer repetitive customer questions with cited, grounded replies and automated human handoff.",
      tech: ["Next.js 14", "TypeScript", "FastAPI (Python)", "PostgreSQL (pgvector)", "Redis", "Celery", "AWS EC2", "AWS RDS", "Docker", "GitHub Actions"],
      image: "/manus-storage/ai-ml-showcase_78553193.png", // Placeholder image, ready for video replacement
      liveLink: "http://54.208.178.218/",
      githubLink: "https://github.com/SShayanHussain/deflekt",
      detailedContent: (
        <div className="space-y-4 text-sm text-gray-300 mt-4">
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Product Overview</h4>
            <p>Deflekt addresses a primary pain point for modern SaaS teams: support engineers spending 70% of their time answering identical, pre-documented questions. Deflekt ingests company documentation and delivers instant, cited answers with zero cross-tenant data leakage.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Architecture & Engineering Highlights</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-cyan-400">Frameworks:</strong> Next.js 14 App Router (Frontend/App API) & Python FastAPI (AI Microservice).</li>
              <li><strong className="text-cyan-400">Multi-Tenant Datastore:</strong> PostgreSQL with pgvector extension for single-datastore simplicity, with index-backed tenant_id scoping across all tables and vector embeddings.</li>
              <li><strong className="text-cyan-400">Caching & Async Workflows:</strong> Redis for sub-18ms semantic query caching; Celery background workers for non-blocking document ingestion pipelines.</li>
              <li><strong className="text-cyan-400">Production Infrastructure:</strong> AWS EC2 compute, AWS RDS Postgres database, Nginx reverse proxy, Docker Compose, and GitHub Actions CI/CD with GHCR.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Quality Control & CI/CD Ethic</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-cyan-400">Fail-Loud Architecture:</strong> No placeholder text or fake embeddings; unresolvable documents or invalid keys fail loudly and trigger alerts.</li>
              <li><strong className="text-cyan-400">Zero-Downtime Migration Pipeline:</strong> Pre-deploy container runner (Dockerfile.migrate) baselines existing schemas and applies migrations before app container restart.</li>
              <li><strong className="text-cyan-400">Automated AI Evals:</strong> CI gate runs an LLM-as-a-Judge evaluation set testing Faithfulness, Recall@3, and Citation Accuracy on every pull request.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "RAG System for Stellar LMS",
      category: "AI/ML",
      description: "Production-grade Retrieval-Augmented Generation system with PDF content extraction and LLM integration",
      tech: ["Python", "LLMs", "FastAPI", "RAG"],
      image: "/manus-storage/ai-ml-showcase_78553193.png",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "MERN Stack Notes Application",
      category: "Full-Stack",
      description: "Scalable production-ready Notes app with robust CRUD functionality and real-time collaboration",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "/manus-storage/fullstack-showcase_29041b91.png",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "RoboComm Campus Robot",
      category: "Robotics",
      description: "Autonomous campus assistant robot with voice interaction, YOLO detection, and real-time navigation",
      tech: ["ROS", "YOLO", "ESP32", "Python"],
      image: "/manus-storage/robotics-showcase_4ded3c03.png",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Voice-Enabled Booking Automation",
      category: "AI/ML",
      description: "Zero-shot conversational agent with Make.com workflows for Calendly, Google Calendar, and OpenAI APIs",
      tech: ["LLMs", "Make.com", "Voice AI", "Automation"],
      image: "/manus-storage/ai-ml-showcase_78553193.png",
      liveLink: "#",
      githubLink: "#",
    },
  ];

  const expertise = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "End-to-end web applications with Next.js 14, React, and FastAPI. Scalable architectures using PostgreSQL and Redis.",
      skills: ["Next.js 14", "React", "TypeScript", "FastAPI", "PostgreSQL", "Redis"],
    },
    {
      icon: Brain,
      title: "Applied AI & LLMs",
      description: "Production-grade AI systems including RAG engines, semantic caching, LLM-as-a-Judge evals, and agentic workflows.",
      skills: ["LLMs", "RAG", "pgvector", "Semantic Caching", "AI Evals", "NLP"],
    },
    {
      icon: Zap,
      title: "SaaS & Cloud Infrastructure",
      description: "Architecting multi-tenant SaaS platforms with robust CI/CD, asynchronous workers, and AWS cloud deployments.",
      skills: ["SaaS Architecture", "AWS (EC2/RDS)", "Docker", "Celery", "GitHub Actions", "CI/CD"],
    },
    {
      icon: Cpu,
      title: "Robotics & Embedded AI",
      description: "Autonomous systems, sensor fusion, real-time processing, and embedded AI on edge devices.",
      skills: ["ROS", "YOLO", "ESP32", "Arduino", "Sensor Fusion", "Real-time Processing"],
    },
  ];

  const skills = {
    "Languages": ["Python", "TypeScript", "JavaScript", "SQL", "Java", "HTML/CSS"],
    "Frontend": ["Next.js 14", "React", "Tailwind CSS", "Shadcn/UI", "Framer Motion"],
    "Backend": ["FastAPI", "Node.js", "Express", "Celery", "REST APIs"],
    "AI/ML": ["LLMs", "RAG", "pgvector", "Semantic Search", "TensorFlow", "PyTorch", "YOLO"],
    "Databases & Cache": ["PostgreSQL", "Redis", "MongoDB", "Supabase"],
    "DevOps & Cloud": ["AWS (EC2/RDS)", "Docker", "GitHub Actions", "CI/CD", "Git", "Vercel"],
  };

  const experience = [
    {
      company: "Shispare",
      role: "AI Engineer",
      period: "January 2025 - May 2025",
      highlights: [
        "Designed and deployed production-grade RAG system for Stellar LMS",
        "Engineered operational Model Context Protocol (MCP) server for Prospective CRM",
        "Architected agentic coding assistant via VS Code extension",
      ],
    },
    {
      company: "DIProjects",
      role: "MERN Stack Intern",
      period: "September 2025 - November 2025",
      highlights: [
        "Built scalable, production-ready Notes Application with robust CRUD",
        "Partnered with senior engineer on asynchronous development cycles",
      ],
    },
    {
      company: "Softech Digital Group",
      role: "Software Development Intern",
      period: "September 2025 - November 2025",
      highlights: [
        "Contributed to React and FastAPI-based Art DRM Marketplace",
        "Prototyped AI-based virtual Try-On technology integration",
      ],
    },
  ];

  const frontendProjects = [
    {
      id: 1,
      title: "Clearwater Dental",
      category: "Dental Clinic",
      description: "A modern, welcoming dental clinic website featuring easy appointment scheduling, service details, and patient testimonials.",
      tech: ["3D", "Frontend", "UI/UX"],
      video: "/videos/clearwater-dental.mp4",
      liveLink: "https://cleanwater-dental.vercel.app/",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Brightpath",
      category: "EdTech",
      description: "An interactive educational platform designed for seamless online learning, course management, and student engagement.",
      tech: ["3D", "Frontend", "UI/UX"],
      video: "/videos/brightpath.mp4",
      liveLink: "https://bright-path-edtech.vercel.app/",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Solene",
      category: "Fashion",
      description: "A sleek and stylish e-commerce storefront showcasing the latest fashion trends with an intuitive, premium shopping experience.",
      tech: ["3D", "Frontend", "UI/UX"],
      video: "/videos/solene.mp4",
      liveLink: "https://solene-fashion.vercel.app/",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Forge Fitness",
      category: "Gym Fitness",
      description: "A high-energy fitness center website complete with class schedules, trainer profiles, and quick membership sign-ups.",
      tech: ["3D", "Frontend", "UI/UX"],
      video: "/videos/forge-fitness.mp4",
      liveLink: "https://forge-fitness-theta-five.vercel.app/",
      githubLink: "#",
    },
    {
      id: 5,
      title: "Sterling Home Co.",
      category: "Home Services",
      description: "A reliable booking platform for home maintenance and repair services, featuring customer reviews and instant quoting.",
      tech: ["3D", "Frontend", "UI/UX"],
      video: "/videos/sterling-home.mp4",
      liveLink: "https://sterling-home.vercel.app/",
      githubLink: "#",
    },
    {
      id: 6,
      title: "Hartwell & Cole",
      category: "Law Firm",
      description: "A professional and trustworthy legal practice website detailing practice areas, attorney profiles, and easy consultation booking.",
      tech: ["3D", "Frontend", "UI/UX"],
      video: "/videos/hartwell-cole.mp4",
      liveLink: "https://hartwell-and-co.vercel.app/",
      githubLink: "#",
    },
    {
      id: 7,
      title: "Vantage Freight",
      category: "Logistics",
      description: "A robust logistics and freight forwarding site highlighting shipment tracking, core service offerings, and global reach.",
      tech: ["3D", "Frontend", "UI/UX"],
      video: "/videos/vantage-freight.mp4",
      liveLink: "https://vantage-freight-logistics.vercel.app/",
      githubLink: "#",
    },
    {
      id: 8,
      title: "Wren Hale",
      category: "Photographer",
      description: "A visually stunning photography portfolio showcasing high-resolution galleries, service packages, and a contact portal.",
      tech: ["3D", "Frontend", "UI/UX"],
      video: "/videos/wren-hale.mp4",
      liveLink: "https://wren-hale.vercel.app/",
      githubLink: "#",
    },
    {
      id: 9,
      title: "Meridian Properties",
      category: "Real Estate",
      description: "A comprehensive real estate portal for beautiful property listings, agent directories, and seamless neighborhood exploration.",
      tech: ["3D", "Frontend", "UI/UX"],
      video: "/videos/meridian-properties.mp4",
      liveLink: "https://meridian-props.vercel.app/",
      githubLink: "#",
    },
    {
      id: 10,
      title: "Ember & Salt",
      category: "Restaurant",
      description: "An appetizing restaurant website featuring dynamic digital menus, integrated online reservations, and vibrant food imagery.",
      tech: ["3D", "Frontend", "UI/UX"],
      video: "/videos/ember-salt.mp4",
      liveLink: "https://ember-salt-bistro.vercel.app/",
      githubLink: "#",
    },
    {
      id: 11,
      title: "Pulse",
      category: "SaaS Startup",
      description: "A clean, conversion-focused landing page for a software-as-a-service product highlighting key features and pricing tiers.",
      tech: ["3D", "Frontend", "UI/UX"],
      video: "/videos/pulse.mp4",
      liveLink: "https://pulse-saas-startup.vercel.app/",
      githubLink: "#",
    },
    {
      id: 12,
      title: "Lumen Studio",
      category: "Salon Spa",
      description: "A relaxing and elegant spa website offering detailed service menus, wellness packages, and direct online booking.",
      tech: ["3D", "Frontend", "UI/UX"],
      video: "/videos/lumen-studio.mp4",
      liveLink: "https://lumen-studio-ten.vercel.app/",
      githubLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-cyan-500/10">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img src="/logo.webp" alt="Logo" className="w-8 h-8" />
            <span className="font-display text-xl font-bold text-white">Shayan</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('expertise')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Expertise</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Projects</button>
            <button onClick={() => scrollToSection('frontend-projects')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">3D UI</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Contact</button>
          </div>
          <Button onClick={() => scrollToSection('contact')} className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">Get in Touch</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('/manus-storage/hero-bg_138d603d.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
        
        {/* Diagonal Accent Stripe */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              <span className="text-cyan-400 text-sm font-mono">Welcome to my portfolio</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Building AI Systems <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">That Think</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Full-stack developer specializing in AI/ML, robotics, and scalable SaaS products. I transform complex problems into elegant, production-grade solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection('projects')} className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-6 text-lg">
                Explore My Work <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <a href="/Shayan_Hussain_Resume.pdf" download="Shayan_Hussain_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-cyan-500/30 text-white hover:bg-cyan-500/10 px-8 py-6 text-lg">
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-background">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">Areas of Expertise</h2>
            <p className="text-gray-400 text-lg">Specialized in cutting-edge technologies and modern development practices</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="glow-border bg-card p-6 hover-lift">
                  <Icon className="w-10 h-10 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.slice(0, 3).map((skill, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 bg-background">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg">Showcase of production-grade applications and solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group glow-border bg-card overflow-hidden hover-lift cursor-pointer"
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    {project.detailedContent && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                          >
                            <Info className="w-4 h-4 mr-2" /> Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl bg-gray-900 border-cyan-500/30 max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl text-white">{project.title}</DialogTitle>
                            <DialogDescription className="text-cyan-400">
                              {project.category}
                            </DialogDescription>
                          </DialogHeader>
                          {project.detailedContent}
                          <div className="flex gap-4 mt-6 pt-4 border-t border-gray-800">
                            {project.liveLink !== "#" && (
                              <Button 
                                onClick={() => window.open(project.liveLink, '_blank')}
                                className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                              </Button>
                            )}
                            {project.githubLink !== "#" && (
                              <Button 
                                variant="outline"
                                onClick={() => window.open(project.githubLink, '_blank')}
                                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                              >
                                <Github className="w-4 h-4 mr-2" /> Source Code
                              </Button>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </Button>
                    {project.githubLink !== "#" && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" /> GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Frontend Portfolio */}
      <section id="frontend-projects" className="py-20 bg-background border-t border-cyan-500/10">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-4">3D Frontend Portfolio</h2>
            <p className="text-gray-400 text-lg">A collection of visually stunning, interactive 3D landing pages and frontend designs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frontendProjects.map((project, idx) => (
              <div
                key={idx}
                className="group glow-border bg-card overflow-hidden hover-lift cursor-pointer flex flex-col h-full"
                onMouseEnter={() => setHovered3dProject(idx)}
                onMouseLeave={() => setHovered3dProject(null)}
              >
                {/* Project Video */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-cyan-500/10 to-purple-500/10 bg-black">
                  <video
                    src={project.video}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                </div>
                
                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-5xl font-bold mb-16">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="glow-border bg-card p-6">
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-gray-900 text-gray-300 text-sm border border-gray-700 hover:border-cyan-500/30 smooth-transition">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-5xl font-bold mb-16">Professional Experience</h2>
          
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={idx} className="glow-border bg-card p-8 hover-lift">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-cyan-400 font-mono text-sm">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-300 flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background border-t border-cyan-500/10">
        <div className="container text-center">
          <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm available for freelancing projects, contract work, corporate roles, and innovative collaborations. Let's build something great.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:shayanhussain28@gmail.com">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-6 text-lg">
                <Mail className="w-5 h-5 mr-2" /> Send Email
              </Button>
            </a>
            <a href="tel:+923242123466">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" /> Call Me
              </Button>
            </a>
            <a href="https://linkedin.com/in/sshayanhussain" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg">
                <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
              </Button>
            </a>
            <a href="https://github.com/SShayanHussain" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg">
                <Github className="w-5 h-5 mr-2" /> GitHub
              </Button>
            </a>
          </div>
          
          <div className="text-gray-500 text-sm">
            <p>📧 shayanhussain28@gmail.com | 📱 +92 324 2123466 | 🔗 linkedin.com/in/sshayanhussain | 💻 github.com/SShayanHussain</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-cyan-500/10 py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img src="/logo.webp" alt="Logo" className="w-6 h-6" />
            <span className="font-display font-bold">Shayan Hussain</span>
          </div>
          <p className="text-gray-500 text-sm">© 2025 Shayan Hussain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
