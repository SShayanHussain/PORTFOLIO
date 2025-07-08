import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Download,
  ArrowRight,
  Code
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [contact, setContact] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleContactChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = contact;
    const mailto = `mailto:shayanhussain268@gmail.com?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
      name
    )}&body=Name%3A%20${encodeURIComponent(name)}%0D%0AEmail%3A%20${encodeURIComponent(
      email
    )}%0D%0AMessage%3A%20${encodeURIComponent(message)}`;
    window.location.href = mailto;
  };

  // === Data from your CV ===
  const projects = [
    {
      title: 'Weather Prediction Using Machine Learning',
      description:
        'Built and benchmarked KNN, Logistic Regression, and MLP models, achieving an 18% accuracy improvement; visualized results with Matplotlib.',
      image: '/images/weather-prediction.png',
      tags: ['Python', 'Scikit-learn', 'Matplotlib'],
      github: '#', // replace with your repo URL
      live: '#'    // replace with your live demo URL
    },
    {
      title: 'AI-Based Car Maintenance Predictor',
      description:
        'Developed a maintenance-prediction classifier with 85% accuracy using robust preprocessing and stratified sampling.',
      image: '/images/car-maintenance.png',
      tags: ['Python', 'MLP', 'Scikit-learn'],
      github: '#',
      live: '#'
    },
    {
      title: 'IoT Weather Monitoring System',
      description:
        'Programmed a live-data weather tracker (3 sensors) with a Django frontend; achieved 95% accuracy and real-time firmware updates.',
      image: '/images/iot-weather.png',
      tags: ['ESP32', 'Django', 'JavaScript'],
      github: '#',
      live: '#'
    },
    {
      title: 'RFID-Based Door Lock System',
      description:
        'Deployed in 10+ environments; cut unauthorized access by 70% via LED/buzzer feedback and secure lock logic.',
      image: '/images/rfid-doorlock.png',
      tags: ['Arduino', 'RC522', 'Servo'],
      github: '#',
      live: '#'
    },
    {
      title: 'Smash Car Marketplace (Full-Stack App)',
      description:
        'Built a CRUD car-listing platform; improved input validation to reduce invalid submissions by 30%.',
      image: '/images/car-marketplace.png',
      tags: ['Django', 'Java', 'SQL'],
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Forecasting System (CLI)',
      description:
        'Created a CLI app for fetching/logging weather data with email alerts; used offline by 20+ users.',
      image: '/images/weather-cli.png',
      tags: ['C', 'JSON API', 'File I/O'],
      github: '#',
      live: '#'
    }
  ];

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Django', level: 80 },
    { name: 'TensorFlow', level: 75 },
    { name: 'React', level: 80 },
    { name: 'MERN Stack', level: 70 },
    { name: 'Tailwind CSS', level: 75 },
    { name: 'Bootstrap', level: 70 },
    { name: 'Git/GitHub', level: 85 },
    { name: 'Arduino', level: 65 }
  ];

   const experiences = [
    {
      title: 'IT Solutions Intern',
      company: 'Karachi Development Authority – IT Dept',
      period: 'Jul 2025 – Present',
      description:
        'Supporting IT operations and developing software solutions for department-wide projects at KDA.'
    },
    {
      title: 'Python Developer Intern',
      company: 'CodSoft (Remote)',
      period: 'Mar 2024 – Apr 2024',
      description:
        'Delivered 5 Python CLI tools for automation, contact management, and security—deployed to 100+ testers; optimized architecture reducing runtime errors by 40%; used Git/GitHub for version control.'
    }
  ];


  return (
    <div className="bg-primary text-white min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Shayan Hussain
            </h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((sec) => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className="capitalize hover:text-yellow-400 transition-colors duration-200 relative group"
                >
                  {sec}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-200 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-primary border-t border-primary/50">
              <div className="px-4 pt-2 pb-4 space-y-2">
                {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((sec) => (
                  <button
                    key={sec}
                    onClick={() => scrollToSection(sec)}
                    className="w-full text-left capitalize px-3 py-2 hover:bg-primary/50 rounded transition"
                  >
                    {sec}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
      >
        <div className="relative z-10 text-center max-w-2xl">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 p-1">
              <div className="w-full h-full rounded-full bg-primary flex items-center justify-center">
                <Code size={48} className="text-yellow-400" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Shayan Hussain
          </h1>
          <p className="text-xl md:text-2xl text-yellow-300 mb-6">
            AI & ML Engineer | Full-Stack Developer | Curious about Cybersecurity | NED ’26
          </p>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Hi, I’m Shayan — a Full-Stack Developer + AI/ML enthusiast from NED University (’26). I build
            smart systems using Python, Django, TensorFlow, JavaScript, and even mess around with
            Arduino when I want to wire the real world.
            <br />
            I love solving problems—whether it’s building a clean UI, training a model, or diving into
            cybersecurity. I learn fast, build faster, and enjoy the chaos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition transform hover:scale-105 flex items-center gap-2"
            >
              View My Work <ArrowRight size={20} />
            </button>
            <a
              href="/Shayan_Hussain_Resume.pdf"
              download
              className="px-8 py-3 border-2 border-yellow-500 text-yellow-500 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition transform hover:scale-105 flex items-center gap-2"
            >
              <Download size={20} /> Download CV
            </a>
          </div>
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="https://github.com/SShayanHussain"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/sshayanhussain"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:shayanhussain268@gmail.com"
              className="text-gray-300 hover:text-yellow-400 transition transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I build smart systems using Python, Django, TensorFlow, JavaScript, and even wire the real
            world with Arduino. I thrive on solving problems—clean UIs, accurate models, or
            cybersecurity puzzles—and bringing them to life.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-4 bg-primary/90">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((s) => (
              <div key={s.name} className="bg-primary rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{s.name}</span>
                  <span className="text-yellow-400">{s.level}%</span>
                </div>
                <div className="w-full bg-primary/70 h-2 rounded-full">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-primary rounded-2xl overflow-hidden hover:scale-105 transition"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-300 mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-yellow-400"
                    >
                      <Github size={18} /> Code
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-yellow-400"
                    >
                      <ExternalLink size={18} /> Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-4 bg-primary/90">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="bg-primary rounded-lg p-6">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-yellow-400">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4">  
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-300 mb-6">
              I’m open to remote roles in AI/ML, Full-Stack Dev & Cybersecurity. Let’s build something great!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-yellow-400" size={20} />
                <a href="mailto:shayanhussain268@gmail.com" className="text-gray-300 hover:text-yellow-400">
                  shayanhussain268@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="text-yellow-400" size={20} />
                <a href="https://github.com/SShayanHussain" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-yellow-400">
                  github.com/SShayanHussain
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="text-yellow-400" size={20} />
                <a href="https://linkedin.com/in/sshayanhussain" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-yellow-400">
                  linkedin.com/in/sshayanhussain
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleContactSubmit} className="space-y-4 bg-primary/90 p-6 rounded-lg">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={contact.name}
              onChange={handleContactChange}
              className="w-full px-4 py-2 bg-primary/70 border border-yellow-500 rounded focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={contact.email}
              onChange={handleContactChange}
              className="w-full px-4 py-2 bg-primary/70 border border-yellow-500 rounded focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              value={contact.message}
              onChange={handleContactChange}
              className="w-full px-4 py-2 bg-primary/70 border border-yellow-500 rounded focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-yellow-500 text-black rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/90 py-6 text-center text-gray-400">
        © {new Date().getFullYear()} Shayan Hussain. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
};

export default Portfolio;
