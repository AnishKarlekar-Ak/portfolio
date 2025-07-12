import React, { useState, useEffect } from 'react';
import { Code, Globe, Server, Database, Cloud, Star } from 'lucide-react';

const skills = {
  "Programming Languages": ["JavaScript", "Python", "C/C++", "PHP", "Java"],
  "Frontend": ["React", "HTML/CSS", "Bootstrap", "Tailwind CSS", "WordPress"],
  "Backend": ["Node.js", "Express.js", "REST APIs", "PHP"],
  "Database": ["MySQL", "MongoDB"],
  "Cloud & Tools": ["AWS EC2", "AWS S3", "Azure", "Git/GitHub", "Jira"]
};

const certifications = [
  { name: "Advanced SQL", provider: "HackerRank", icon: Database },
  { name: "Problem Solving", provider: "HackerRank", icon: Code },
  { name: "AWS S3 Basics", provider: "Coursera", icon: Cloud },
  { name: "AWS EC2 Instance", provider: "Coursera", icon: Cloud },
  { name: "Azure Virtual Machine", provider: "Coursera", icon: Cloud }
];

const getIcon = (category) => {
  switch (category) {
    case "Programming Languages": return Code;
    case "Frontend": return Globe;
    case "Backend": return Server;
    case "Database": return Database;
    case "Cloud & Tools": return Cloud;
    default: return Code;
  }
};

const getColors = (category) => {
  switch (category) {
    case "Programming Languages": return { gradient: 'from-blue-500 to-purple-500', bg: 'bg-blue-500/20' };
    case "Frontend": return { gradient: 'from-cyan-500 to-teal-500', bg: 'bg-cyan-500/20' };
    case "Backend": return { gradient: 'from-green-500 to-emerald-500', bg: 'bg-green-500/20' };
    case "Database": return { gradient: 'from-orange-500 to-red-500', bg: 'bg-orange-500/20' };
    case "Cloud & Tools": return { gradient: 'from-purple-500 to-pink-500', bg: 'bg-purple-500/20' };
    default: return { gradient: 'from-gray-500 to-gray-600', bg: 'bg-gray-500/20' };
  }
};

const Skills = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleCard = (category) => {
    if (isMobile) {
      setFlippedCards((prev) => ({ ...prev, [category]: !prev[category] }));
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => {
            const IconComponent = getIcon(category);
            const colors = getColors(category);
            const flipped = flippedCards[category];

            return (
              <div
                key={category}
                className={`relative h-64 perspective group cursor-pointer`}
                onClick={() => toggleCard(category)}
              >
                <div className={`transition-transform duration-700 transform-style-preserve-3d h-full w-full ${flipped ? "rotate-y-180" : ""} ${!isMobile ? "group-hover:rotate-y-180" : ""}`}>
                  {/* Front */}
                  <div className="absolute w-full h-full backface-hidden bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center justify-center">
                    <div className={`p-4 rounded-full ${colors.bg} mb-4`}>
                      <IconComponent size={48} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category}</h3>
                    <p className="text-gray-400 text-center mt-2">Hover to see skills</p>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white/5 p-6 rounded-xl border border-white/10 overflow-y-auto">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-2 rounded-full ${colors.bg}`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-cyan-400">{category}</h3>
                    </div>
                    <div className="space-y-2">
                      {skillList.map((skill) => (
                        <div key={skill} className="flex items-center gap-3 group/skill">
                          <Star size={12} className="text-purple-400 group-hover/skill:text-yellow-400 transition-colors duration-300" />
                          <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
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
  );
};

export default Skills;
