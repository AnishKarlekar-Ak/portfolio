import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, MapPin, Code,Globe, Server, Database, Cloud, Award, Briefcase, GraduationCap, User, ChevronDown, ExternalLink, Calendar, Star } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const fullText = "Full Stack Developer & Data Science Enthusiast";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const skills = {
    "Programming Languages": ["JavaScript", "Python", "C/C++", "PHP", "Java"],
    "Frontend": ["React", "HTML/CSS", "Bootstrap", "Tailwind CSS", "WordPress"],
    "Backend": ["Node.js", "Express.js", "REST APIs", "PHP"],
    "Database": ["MySQL", "MongoDB"],
    "Cloud & Tools": ["AWS EC2", "AWS S3", "Azure", "Git/GitHub", "Jira"]
  };

  const projects = [
    {
      title: "Temperature Forecast Model",
      category: "Data Science",
      description: "Machine learning model achieving MAPE of 2.95% for accurate temperature predictions",
      tech: ["Python", "Data Science", "ML"],
      highlight: "MAPE 2.95%"
    },
    {
      title: "E-commerce REST APIs",
      category: "Backend",
      description: "Custom RESTful APIs for e-commerce platform with authentication and data management",
      tech: ["Node.js", "Express.js", "MongoDB"],
      highlight: "Production Ready"
    },
    {
      title: "React Admin Dashboard",
      category: "Frontend",
      description: "Dynamic admin dashboard with data visualization and export functionality",
      tech: ["React", "JavaScript", "REST APIs"],
      highlight: "Interactive UI"
    },
    {
      title: "2FA Authentication System",
      category: "Security",
      description: "OTP-based two-factor authentication system with SMS integration",
      tech: ["Node.js", "SMTP", "Security"],
      highlight: "Secure"
    }
  ];

  const certifications = [
    { name: "Advanced SQL", provider: "HackerRank", icon: Database },
    { name: "Problem Solving", provider: "HackerRank", icon: Code },
    { name: "AWS S3 Basics", provider: "Coursera", icon: Cloud },
    { name: "AWS EC2 Instance", provider: "Coursera", icon: Cloud },
    { name: "Azure Virtual Machine", provider: "Coursera", icon: Cloud }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Anish Karlekar
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === item ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-7">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="mb-8 mt-8">
            <div className="w-48 h-48 mx-auto mb-8 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <User size={80} className="text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Anish Karlekar
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
            {typedText}<span className="animate-blink">|</span>
          </div>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Computer Science Engineering student passionate about full-stack development and data science. 
            Building innovative solutions with modern technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:work.anishkarlekar@gmail.com" className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Mail size={20} />
              Get In Touch
            </a>
            <a href="https://github.com/AnishKarlekar-Ak" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-gray-500 hover:border-cyan-400 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Github size={20} />
              View GitHub
            </a>
          </div>
          
          <div className="animate-bounce">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am an enthusiastic and eager learner, committed to applying theoretical knowledge to real-world situations. 
                My education in Computer Engineering and ongoing studies in Computer Science Engineering have equipped me 
                with a strong foundation in programming languages and software development.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I thrive in collaborative environments and am passionate about solving practical challenges through technology. 
                My experience ranges from developing REST APIs to creating machine learning models and building modern web applications.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-24">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <MapPin className="text-cyan-400 mb-2" size={24} />
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Ahmedabad, India</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <Phone className="text-cyan-400 mb-2" size={24} />
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+91 8401358608</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <GraduationCap className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                
                <div className="space-y-4">
                  <div className="border-l-2 border-cyan-400 pl-4">
                    <h4 className="font-semibold text-cyan-400">Bachelor of Engineering</h4>
                    <p className="text-gray-300">Computer Science Engineering</p>
                    <p className="text-gray-400 text-sm">SAL Institute of Technology • 2023 - Present</p>
                  </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-pink-400 pl-4">
                    <h4 className="font-semibold text-pink-400">Post Graduation Diploma In Computer Application</h4>
                    <p className="text-gray-400 text-sm">C-Dac,GOI • 2023 - 2024</p>
                  </div>
                </div>
                  
                  <div className="border-l-2 border-purple-400 pl-4">
                    <h4 className="font-semibold text-purple-400">Diploma</h4>
                    <p className="text-gray-300">Computer Engineering</p>
                    <p className="text-gray-400 text-sm">Apollo Institute • 2020 - 2023</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['English', 'Hindi', 'Gujarati', 'Marathi'].map((lang) => (
                    <span key={lang} className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-3 py-1 rounded-full text-sm border border-cyan-400/30">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
      Technical Skills
    </h2>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Object.entries(skills).map(([category, skillList]) => {
        const getIcon = (cat) => {
          switch(cat) {
            case 'Programming Languages': return Code;
            case 'Frontend': return Globe;
            case 'Backend': return Server;
            case 'Database': return Database;
            case 'Cloud & Tools': return Cloud;
            default: return Code;
          }
        };
        
        const getColors = (cat) => {
          switch(cat) {
            case 'Programming Languages': return { gradient: 'from-blue-500 to-purple-500', bg: 'bg-blue-500/20' };
            case 'Frontend': return { gradient: 'from-cyan-500 to-teal-500', bg: 'bg-cyan-500/20' };
            case 'Backend': return { gradient: 'from-green-500 to-emerald-500', bg: 'bg-green-500/20' };
            case 'Database': return { gradient: 'from-orange-500 to-red-500', bg: 'bg-orange-500/20' };
            case 'Cloud & Tools': return { gradient: 'from-purple-500 to-pink-500', bg: 'bg-purple-500/20' };
            default: return { gradient: 'from-gray-500 to-gray-600', bg: 'bg-gray-500/20' };
          }
        };
        
        const IconComponent = getIcon(category);
        const colors = getColors(category);
        
        return (
          <div 
            key={category} 
            className="group relative bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 cursor-pointer overflow-hidden h-64"
          >
            {/* Background gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            
            {/* Default state - show category and icon */}
            <div className="transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4 flex flex-col items-center justify-center h-full absolute inset-0">
              <div className={`p-4 rounded-full ${colors.bg} mb-4`}>
                <IconComponent size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-center text-white">{category}</h3>
              <p className="text-gray-400 text-center mt-2">Hover to see skills</p>
            </div>
            
            {/* Hover state - show skills list */}
            <div className="transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 absolute inset-0 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-full ${colors.bg}`}>
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-400">{category}</h3>
              </div>
              
              <div className="space-y-3 max-h-32 overflow-y-auto">
                {skillList.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 group/skill">
                    <Star size={12} className="text-purple-400 group-hover/skill:text-yellow-400 transition-colors duration-300" />
                    <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
    
    <div className="mt-16">
      <h3 className="text-2xl font-semibold text-center mb-8">Certifications</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-center gap-4 hover:border-cyan-400/50 transition-all duration-300">
            <cert.icon className="text-cyan-400 flex-shrink-0" size={24} />
            <div>
              <h4 className="font-semibold text-white">{cert.name}</h4>
              <p className="text-gray-400 text-sm">{cert.provider}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <span className="text-cyan-400 text-sm bg-cyan-400/20 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 rounded-full text-xs font-semibold">
                    {project.highlight}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm border border-purple-400/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="bg-white/5 p-8 rounded-xl border border-white/10">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-full">
                <Briefcase className="text-white" size={24} />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Intern</h3>
                    <p className="text-cyan-400 text-lg">I-Hub, Government Of Gujarat</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    <span>April 2025 - July 2025</span>
                  </div>
                </div>
                
                <div className="space-y-3 text-gray-300">
                  <p>• Worked on legacy code of i-hub's website to update it frequently to meet arising needs</p>
                  <p>• Created RESTful APIs for improved functionality and data management</p>
                  <p>• Developed Admin Dashboard's UI with dynamic data export capabilities</p>
                  <p>• Collaborated with team members using Jira for project management</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {['JavaScript', 'REST APIs', 'Admin Dashboard', 'Team Collaboration'].map((skill) => (
                    <span key={skill} className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-sm border border-cyan-400/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and build something amazing together!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a href="mailto:work.anishkarlekar@gmail.com" className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group">
              <Mail className="text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">work.anishkarlekar@gmail.com</p>
            </a>
            
            <a href="tel:+918401358608" className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group">
              <Phone className="text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+91 8401358608</p>
            </a>
            
            <a href="https://github.com/AnishKarlekar-Ak" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group">
              <Github className="text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">AnishKarlekar-Ak</p>
            </a>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-1 rounded-xl max-w-md mx-auto">
            <div className="bg-slate-900 p-6 rounded-lg">
              <p className="text-lg mb-4">Ready to start a project?</p>
              <a href="mailto:work.anishkarlekar@gmail.com" className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3 rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300">
                <Mail size={20} />
                Send Message
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
             <a href='https://www.instagram.com/ak_rxign'>© 2025 Anish Karlekar.</a>
          </p>
          
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;