import React, { useState, useEffect } from 'react';
import { Calendar, Briefcase } from 'lucide-react';

const projects = [
  {
    title: "Intel AI for Manufacturing",
    category: "Internship Project",
    description: "Built a classification model for SOP compliance in dairy HTST pasteurization. Used simulated data with multiple process parameters and quality indicators for effective SOP validation.",
    tech: ["Python", "Pandas", "Scikit-learn", "ML Classification"],
    highlight: "SOP Compliance AI",
    weight: 9
  },
  {
    title: "DeepCourier Web App",
    category: "Full Stack",
    description: "A logistics tracking platform with gesture-based RPS game and secure backend.",
    tech: ["React", "Express.js", "MongoDB", "JWT"],
    highlight: "Deployed on AWS",
    weight: 8
  },
  {
    title: "Temperature Forecast Model",
    category: "Data Science",
    description: "Machine learning model achieving MAPE of 2.95% for accurate temperature predictions.",
    tech: ["Python", "Data Science", "ML"],
    highlight: "MAPE 2.95%",
    weight: 7
  },
  {
    title: "React Admin Dashboard",
    category: "Frontend",
    description: "Dynamic admin dashboard with data visualization and export functionality.",
    tech: ["React", "JavaScript", "REST APIs"],
    highlight: "Interactive UI",
    weight: 6
  },
  {
    title: "E-commerce REST APIs",
    category: "Backend",
    description: "Custom RESTful APIs for e-commerce platform with authentication and data management.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    highlight: "Production Ready",
    weight: 5
  },
  {
    title: "2FA Authentication System",
    category: "Security",
    description: "OTP-based two-factor authentication system with SMS integration.",
    tech: ["Node.js", "SMTP", "Security"],
    highlight: "Secure",
    weight: 4
  },
  {
    title: "Mann Enterprise Website",
    category: "Freelance",
    description: "WordPress-based business site for industrial flooring services.",
    tech: ["WordPress", "HTML", "CSS"],
    highlight: "Business Portfolio",
    weight: 3
  },
  {
    title: "Cambodian Consulate India",
    category: "Freelance",
    description: "Official consulate website built with WordPress featuring accessible consular information.",
    tech: ["WordPress", "Responsive Design"],
    highlight: "Government Site",
    weight: 2
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const sortedProjects = [...projects].sort((a, b) => b.weight - a.weight);
  const displayedProjects = showAll ? sortedProjects : sortedProjects.slice(0, 4);

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 150}ms`;
    });
  }, [showAll]);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="fade-in-up bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group"
            >
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
                  <span
                    key={tech}
                    className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm border border-purple-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 text-white bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:scale-105 transition-transform duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
