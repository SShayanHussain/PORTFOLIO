import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Code2, Brain, Zap, Cpu } from "lucide-react";
import { useState } from "react";

/**
 * Professional Portfolio - Dark Futuristic Design
 * 
 * Design Philosophy: Bold, tech-forward aesthetic with cyan/purple accents
 * Typography: Space Grotesk (display) + Inter (body) + JetBrains Mono (code)
 * Color Palette: Deep charcoal bg, cyan/purple accents, bright white text
 */

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
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
      description: "End-to-end web applications with React, Next.js, Node.js, Django, and FastAPI. Scalable architectures for SaaS products.",
      skills: ["React", "Next.js", "Node.js", "Django", "FastAPI", "PostgreSQL"],
    },
    {
      icon: Brain,
      title: "AI/ML & LLMs",
      description: "Production-grade AI systems including RAG, computer vision, NLP, and agentic AI. LLM integrations and fine-tuning.",
      skills: ["TensorFlow", "PyTorch", "LLMs", "RAG", "Computer Vision", "NLP"],
    },
    {
      icon: Cpu,
      title: "Robotics & Embedded AI",
      description: "Autonomous systems, sensor fusion, real-time processing, and embedded AI on edge devices.",
      skills: ["ROS", "YOLO", "ESP32", "Arduino", "Sensor Fusion", "Real-time Processing"],
    },
    {
      icon: Zap,
      title: "SaaS & Automation",
      description: "Custom SaaS products, workflow automation, API integrations, and scalable backend systems.",
      skills: ["SaaS Architecture", "API Design", "Automation", "Webhooks", "Cloud Deployment"],
    },
  ];

  const skills = {
    "Languages": ["Python", "JavaScript", "TypeScript", "Java", "C", "Dart", "HTML", "CSS", "SQL"],
    "Frontend": ["React", "Next.js", "React Native", "Flutter", "Tailwind CSS", "Shadcn/UI"],
    "Backend": ["Django", "Flask", "FastAPI", "Node.js", "Express", "MERN Stack"],
    "AI/ML": ["TensorFlow", "PyTorch", "Scikit-learn", "LLMs", "Transformers", "OpenCV", "YOLO"],
    "Databases": ["PostgreSQL", "MySQL", "Supabase", "SQLite", "MongoDB"],
    "Tools & Platforms": ["Git", "Docker", "AWS", "GCP", "Make.com", "Vercel", "Railway"],
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
            <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">Contact</button>
          </div>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold">Get in Touch</Button>
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
              <Button variant="outline" className="border-cyan-500/30 text-white hover:bg-cyan-500/10 px-8 py-6 text-lg">
                Download Resume
              </Button>
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
                    <Button variant="outline" size="sm" className="flex-1 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10">
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10">
                      <Github className="w-4 h-4 mr-2" /> Code
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
            <a href="https://linkedin.com/in/shayanhussain" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg">
                <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
              </Button>
            </a>
            <a href="https://github.com/ShayaniHussain" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg">
                <Github className="w-5 h-5 mr-2" /> GitHub
              </Button>
            </a>
          </div>
          
          <div className="text-gray-500 text-sm">
            <p>📧 shayanhussain28@gmail.com | 🔗 linkedin.com/in/shayanhussain | 💻 github.com/ShayaniHussain</p>
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
