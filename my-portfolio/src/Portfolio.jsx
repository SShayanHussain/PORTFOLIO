import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Palette, Zap, Users, Download, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tags: ["React", "Firebase", "Material-UI"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tags: ["React", "OpenWeather API", "Charts.js"],
      github: "#",
      live: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tags: ["React", "D3.js", "REST API"],
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { name: "React", level: 95, color: "bg-yellow-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", level: 90, color: "bg-yellow-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", level: 85, color: "bg-yellow-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", level: 80, color: "bg-yellow-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", level: 85, color: "bg-yellow-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "MongoDB", level: 75, color: "bg-yellow-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "HTML5", level: 95, color: "bg-yellow-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", level: 90, color: "bg-yellow-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Git", level: 85, color: "bg-yellow-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", level: 75, color: "bg-yellow-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "GraphQL", level: 70, color: "bg-yellow-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    { name: "Next.js", level: 85, color: "bg-yellow-500", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Leading frontend development team, architecting scalable React applications"
    },
    {
      title: "Full Stack Developer",
      company: "Startup Hub",
      period: "2020 - 2022",
      description: "Developed end-to-end web applications using modern JavaScript frameworks"
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      description: "Built responsive websites and learned modern development practices"
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Portfolio
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize hover:text-yellow-400 transition-colors duration-200 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 group-hover:w-full"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize block px-3 py-2 hover:bg-gray-700 rounded-md transition-colors duration-200 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-yellow-800/20 to-yellow-700/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <Code size={48} className="text-yellow-400" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-pulse">
            John Doe
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            I create beautiful, functional, and user-centered digital experiences that solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              View My Work <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-yellow-500 text-yellow-500 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} /> Download CV
            </button>
          </div>
          
          <div className="mt-16 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that matter. 
                My journey began with a curiosity for how things work and evolved into a love for building applications that make a difference.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in modern web technologies and have a keen eye for user experience. When I'm not coding, 
                you can find me exploring new technologies, contributing to open source projects, or sharing knowledge with the developer community.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full h-full p-8">
                  <div className="bg-gray-800/50 rounded-lg flex items-center justify-center">
                    <Code className="text-yellow-400" size={48} />
                  </div>
                  <div className="bg-gray-800/50 rounded-lg flex items-center justify-center">
                    <Palette className="text-yellow-400" size={48} />
                  </div>
                  <div className="bg-gray-800/50 rounded-lg flex items-center justify-center">
                    <Zap className="text-yellow-400" size={48} />
                  </div>
                  <div className="bg-gray-800/50 rounded-lg flex items-center justify-center">
                    <Users className="text-yellow-400" size={48} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-gray-800 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center p-2">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-8 h-8 object-contain filter"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="text-yellow-400 font-bold text-sm hidden">
                      {skill.name.substring(0, 2)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    <span className="text-yellow-400 text-sm">{skill.level}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                    >
                      <Github size={20} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-yellow-500"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:mb-16">
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-8 h-8 bg-yellow-500 rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10"></div>
                  
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-yellow-400 mb-2">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
                <p className="text-gray-400 text-lg">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-yellow-400" size={24} />
                  <span className="text-gray-300">john.doe@email.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="text-yellow-400" size={24} />
                  <span className="text-gray-300">github.com/johndoe</span>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="text-yellow-400" size={24} />
                  <span className="text-gray-300">linkedin.com/in/johndoe</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-2xl">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-200 resize-none"
                  ></textarea>
                </div>
                <button
                  onClick={() => alert('Message sent! (This is a demo)')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 John Doe. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;