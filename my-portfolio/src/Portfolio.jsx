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

  const handleContactSubmit = async (e) => {
  e.preventDefault();
  const { name, email, message } = contact;

  try {
    const res = await fetch('https://formspree.io/f/mnnvkzwo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });

    if (res.ok) {
      alert('✅ Thanks! Your message has been sent.');
      setContact({ name: '', email: '', message: '' });
    } else {
      const data = await res.json();
      alert('❌ Oops! ' + (data.error || 'Something went wrong.'));
    }
  } catch (err) {
    console.error(err);
    alert('❌ Network error. Please try again later.');
  }
};


  // === Data from your CV ===
  const projects = [
    {
      title: 'Weather Prediction Using Machine Learning',
      description:
        'Built and benchmarked KNN, Logistic Regression, and MLP models, achieving an 18% accuracy improvement; visualized results with Matplotlib.',
      image: '/images/weather-prediction.png', // Ensure this path is correct
      tags: ['Python', 'Scikit-learn', 'Matplotlib'],
      github: '#', // Replace with actual GitHub link
      live: '#' // Replace with actual live link
    },
    {
      title: 'AI-Based Car Maintenance Predictor',
      description:
        'Developed a maintenance-prediction classifier with 85% accuracy using robust preprocessing and stratified sampling.',
      image: '/images/car-maintenance.png', // Ensure this path is correct
      tags: ['Python', 'MLP', 'Scikit-learn'],
      github: '#',
      live: '#'
    },
    {
      title: 'IoT Weather Monitoring System',
      description:
        'Programmed a live-data weather tracker (3 sensors) with a Django frontend; achieved 95% accuracy and real-time firmware updates.',
      image: '/images/iot-weather.png', // Ensure this path is correct
      tags: ['ESP32', 'Django', 'JavaScript'],
      github: '#',
      live: '#'
    },
    {
      title: 'RFID-Based Door Lock System',
      description:
        'Deployed in 10+ environments; cut unauthorized access by 70% via LED/buzzer feedback and secure lock logic.',
      image: '/images/rfid-doorlock.png', // Ensure this path is correct
      tags: ['Arduino', 'RC522', 'Servo'],
      github: '#',
      live: '#'
    },
    {
      title: 'Smash Car Marketplace (Full-Stack App)',
      description:
        'Built a CRUD car-listing platform; improved input validation to reduce invalid submissions by 30%.',
      image: '/images/car-marketplace.png', // Ensure this path is correct
      tags: ['Django', 'Java', 'SQL'],
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Forecasting System (CLI)',
      description:
        'Created a CLI app for fetching/logging weather data with email alerts; used offline by 20+ users.',
      image: '/images/weather-cli.png', // Ensure this path is correct
      tags: ['C', 'JSON API', 'File I/O'],
      github: '#',
      live: '#'
    }
  ];

const skills = [
  {
    name: 'Python',
    level: 90,
    icon:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  {
    name: 'JavaScript',
    level: 85,
    icon:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'Django',
    level: 80,
    icon:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
  },
  {
    name: 'TensorFlow',
    level: 75,
    icon:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
  },
  {
    name: 'React',
    level: 80,
    icon:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'MERN Stack',
    level: 70,
    icon: null    // fallback to Code icon
  },
  {
    name: 'Tailwind CSS',
    level: 75,
    icon:
      'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg'
  },
  {
    name: 'Bootstrap',
    level: 70,
    icon:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg'
  },
  {
    name: 'Git/GitHub',
    level: 85,
    icon:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  },
  {
    name: 'Arduino',
    level: 65,
    icon:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg'
  }
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
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? 'bg-dark-gray/95 backdrop-blur-sm shadow-xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary-orange to-primary-red bg-clip-text text-transparent animate-gradientShift bg-[length:200%_auto]">
              Shayan Hussain
            </h1>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((sec) => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className="capitalize text-lg font-medium text-gray-300 hover:text-primary-orange transition-colors duration-300 relative group"
                >
                  {sec}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-red transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-primary-orange hover:text-white p-2 transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden bg-dark-gray border-t border-dark-gray/50 animate-fadeInUp">
              <div className="px-4 pt-2 pb-4 space-y-2">
                {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((sec) => (
                  <button
                    key={sec}
                    onClick={() => scrollToSection(sec)}
                    className="w-full text-left capitalize px-3 py-2 text-gray-200 hover:bg-black/50 rounded transition-colors"
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
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-16"
      >
        {/* Background Gradients/Blobs */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-red/10 via-primary-orange/10 to-primary-red/15 animate-[pulseGlow_4s_infinite_alternate] opacity-70"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-red/10 rounded-full blur-3xl animate-pulse delay-1500"></div>

        <div className="relative z-10 text-center max-w-3xl animate-fadeInUp">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-orange to-primary-red p-2 animate-pulseGlow">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center border-4 border-black">
                <Code size={64} className="text-primary-orange animate-bounce" />
              </div>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-primary-orange to-primary-red bg-clip-text text-transparent leading-tight">
            Shayan Hussain
          </h1>
          <p className="text-2xl md:text-3xl text-accent-yellow mb-8 font-light">
            AI & ML Engineer | Full-Stack Developer | Curious about Cybersecurity | NED ’26
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
            Hi, I’m Shayan — a Full-Stack Developer + AI/ML enthusiast from NED University (’26). I build
            smart systems using Python, Django, TensorFlow, JavaScript, and even mess around with
            Arduino when I want to wire the real world.
            <br />
            I love solving problems—whether it’s building a clean UI, training a model, or diving into
            cybersecurity. I learn fast, build faster, and enjoy the chaos.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-10 py-4 bg-gradient-to-r from-primary-orange to-primary-red text-black rounded-full font-bold text-lg hover:shadow-lg hover:shadow-primary-red/50 transition transform hover:scale-105 flex items-center gap-3 animate-scaleIn delay-300"
            >
              View My Work <ArrowRight size={24} />
            </button>
            <a
              href="/Shayan's_Resume.pdf"
              download
              className="px-10 py-4 border-2 border-primary-orange text-primary-orange rounded-full font-bold text-lg hover:bg-primary-orange hover:text-black transition transform hover:scale-105 flex items-center gap-3 animate-scaleIn delay-500"
            >
              <Download size={24} /> Download CV
            </a>
          </div>
          <div className="mt-16 flex justify-center space-x-8">
            <a
              href="https://github.com/SShayanHussain"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-primary-orange transition transform hover:scale-125 animate-scaleIn delay-700"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com/in/sshayanhussain"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-primary-red transition transform hover:scale-125 animate-scaleIn delay-800"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:shayanhussain268@gmail.com"
              className="text-gray-300 hover:text-accent-yellow transition transform hover:scale-125 animate-scaleIn delay-900"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={40} className="text-primary-orange" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-4 bg-dark-gray">
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-primary-orange to-primary-red bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            I build smart systems using Python, Django, TensorFlow, JavaScript, and even wire the real
            world with Arduino. I thrive on solving problems—clean UIs, accurate models, or
            cybersecurity puzzles—and bringing them to life.
          </p>
        </div>
      </section>

{/* Skills Section */}
<section id="skills" className="py-24 px-4 bg-black">
  <div className="max-w-4xl mx-auto text-center mb-12 animate-fadeInUp">
    <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary-orange to-primary-red bg-clip-text text-transparent">
      Skills & Technologies
    </h2>
  </div>

  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {skills.map((s, index) => (
      <div
        key={s.name}
        className="p-6 bg-dark-gray rounded-xl shadow-lg hover:shadow-primary-red/30 hover:scale-105 transition-all duration-300 relative overflow-hidden group border-2 border-transparent hover:border-primary-orange animate-scaleIn"
        style={{ animationDelay: `${0.1 * index}s` }}
      >
        {/* Background glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-orange/10 via-transparent to-primary-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

        {/* icon + name */}
        <div className="flex items-center gap-5 mb-4 relative z-10">
          {s.icon ? (
            <img
              src={s.icon}
              alt={s.name}
              className="w-10 h-10 object-contain filter drop-shadow-lg"
            />
          ) : (
            <Code size={32} className="text-primary-orange" />
          )}
          <span className="font-semibold text-xl text-gray-100">{s.name}</span>
        </div>
        {/* progress bar */}
        <div className="w-full h-2.5 bg-gray-700 rounded-full mb-3 relative z-10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary-orange to-primary-red"
            style={{ width: `${s.level}%` }}
          />
        </div>
        <div className="text-right text-sm font-medium text-gray-400 relative z-10">
          {s.level}%
        </div>
      </div>
    ))}
  </div>
</section>



      {/* Projects */}
      <section id="projects" className="py-24 px-4 bg-dark-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-primary-orange to-primary-red bg-clip-text text-transparent animate-fadeInUp">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((p, i) => (
              <div
                key={i}
                className="bg-black rounded-2xl overflow-hidden shadow-xl hover:shadow-primary-orange/40 transition-all duration-300 hover:scale-102 group relative animate-fadeInUp"
                style={{ animationDelay: `${0.15 * i}s` }}
              >
                {/* Image Overlay */}
                <div className="relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-orange transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 pt-4">
                  <p className="text-gray-300 mb-5 text-sm">{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-red/20 text-primary-orange rounded-full text-xs font-medium border border-primary-red/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-primary-orange transition-colors duration-200"
                    >
                      <Github size={20} /> Code
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-primary-red transition-colors duration-200"
                    >
                      <ExternalLink size={20} /> Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-primary-orange to-primary-red bg-clip-text text-transparent animate-fadeInUp">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="bg-dark-gray rounded-lg p-7 shadow-lg hover:shadow-primary-orange/20 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <h3 className="text-2xl font-bold text-gray-100 mb-1">{exp.title}</h3>
                <p className="text-primary-orange text-lg mb-1">{exp.company}</p>
                <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4 bg-dark-gray">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 animate-fadeInUp">
          {/* Info */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary-orange to-primary-red bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md md:max-w-none mx-auto md:mx-0">
              I’m open to remote roles in AI/ML, Full-Stack Dev & Cybersecurity. Let’s build something great!
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Mail className="text-primary-orange" size={24} />
                <a href="mailto:shayanhussain268@gmail.com" className="text-gray-300 hover:text-primary-orange transition-colors text-lg">
                  shayanhussain268@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Github className="text-primary-red" size={24} />
                <a href="https://github.com/SShayanHussain" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-primary-red transition-colors text-lg">
                  github.com/SShayanHussain
                </a>
              </div>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <Linkedin className="text-accent-yellow" size={24} />
                <a href="https://linkedin.com/in/sshayanhussain" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-accent-yellow transition-colors text-lg">
                  linkedin.com/in/sshayanhussain
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleContactSubmit} className="space-y-6 bg-black p-8 rounded-lg shadow-xl border-2 border-transparent animate-borderPulse">
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={contact.name}
              onChange={handleContactChange}
              className="w-full px-5 py-3 bg-dark-gray border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange transition-all placeholder-gray-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={contact.email}
              onChange={handleContactChange}
              className="w-full px-5 py-3 bg-dark-gray border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange transition-all placeholder-gray-400"
              required
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              value={contact.message}
              onChange={handleContactChange}
              className="w-full px-5 py-3 bg-dark-gray border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange transition-all placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-primary-orange to-primary-red text-black rounded-lg font-bold text-xl hover:shadow-lg hover:shadow-primary-red/40 transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Shayan Hussain. Crafted with <span className="text-primary-red">&hearts;</span> and React & Tailwind CSS.
      </footer>
    </div>
  );
};

export default Portfolio;