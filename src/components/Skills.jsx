import React, { useState, useEffect } from "react";
import { Code, Globe, Server, Database, Cloud, Brain, Star } from "lucide-react";

const skills = {
  "AI & Intelligent Systems": [
    "OpenAI API (LLM Integration)",
    "Agentic AI Workflows",
    "HuggingFace Models",
    "NLP Projects",
    "Scikit-learn",
    "Prompt Engineering"
  ],
  "Programming Languages": ["JavaScript", "Python", "C/C++", "PHP", "Java"],
  "Frontend Engineering": ["React", "Angular", "HTML/CSS", "Tailwind CSS"],
  "Backend Architecture": ["Node.js", "Express.js", "REST API Design", "Authentication Systems"],
  "Databases": ["MongoDB", "MySQL"],
  "Cloud & DevOps": ["AWS EC2", "AWS S3", "Azure VM", "Git/GitHub"]
};

const certifications = [
  { name: "JavaScript (Advanced)", provider: "HackerRank", icon: Code },
  { name: "Advanced SQL", provider: "HackerRank", icon: Database },
  { name: "Problem Solving", provider: "HackerRank", icon: Code },
  { name: "AWS S3 Basics", provider: "Coursera", icon: Cloud },
  { name: "AWS EC2 Instance", provider: "Coursera", icon: Cloud },
  { name: "Azure Virtual Machine", provider: "Coursera", icon: Cloud }
];

const getIcon = (category) => {
  switch (category) {
    case "AI & Intelligent Systems": return Brain;
    case "Programming Languages": return Code;
    case "Frontend Engineering": return Globe;
    case "Backend Architecture": return Server;
    case "Databases": return Database;
    case "Cloud & DevOps": return Cloud;
    default: return Code;
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
    <section id="skills" className="py-24 px-6 bg-[#111827] text-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Technical Expertise
          </h2>
          <div className="w-24 h-[2px] bg-[#2563EB] mx-auto mt-4"></div>
          <p className="mt-6 text-[#94A3B8]">
            AI Systems • MERN / MEAN • Scalable Backend Architecture • Cloud Deployment
          </p>
        </div>

        {/* Skill Flip Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => {
            const IconComponent = getIcon(category);
            const flipped = flippedCards[category];

            return (
              <div
                key={category}
                className="relative h-64 perspective group cursor-pointer"
                onClick={() => toggleCard(category)}
              >
                <div
                  className={`transition-transform duration-700 transform-style-preserve-3d h-full w-full 
                  ${flipped ? "rotate-y-180" : ""} 
                  ${!isMobile ? "group-hover:rotate-y-180" : ""}`}
                >
                  {/* Front */}
                  <div className="absolute w-full h-full backface-hidden bg-[#0B1120] p-6 rounded-xl border border-[#1F2937] flex flex-col items-center justify-center
                                  hover:border-[#2563EB]
                                  hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]
                                  transition-all duration-300">
                    <div className="p-4 rounded-lg bg-[#111827] border border-[#2563EB]/30 mb-4">
                      <IconComponent size={40} className="text-[#2563EB]" />
                    </div>
                    <h3 className="text-xl font-semibold text-center">
                      {category}
                    </h3>
                    <p className="text-[#94A3B8] text-sm mt-2">
                      {isMobile ? "Tap to view skills" : "Hover to view skills"}
                    </p>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#0B1120] p-6 rounded-xl border border-[#2563EB] overflow-y-auto">
                    <div className="flex items-center gap-3 mb-6">
                      <IconComponent size={20} className="text-[#2563EB]" />
                      <h3 className="text-lg font-semibold">
                        {category}
                      </h3>
                    </div>

                    <div className="space-y-2">
                      {skillList.map((skill) => (
                        <div key={skill} className="flex items-center gap-3">
                          <Star size={12} className="text-[#06B6D4]" />
                          <span className="text-[#94A3B8]">
                            {skill}
                          </span>
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
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-10">
            Certifications
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-[#0B1120] border border-[#1F2937] p-5 rounded-lg 
                           flex items-center gap-4 
                           hover:border-[#2563EB] 
                           hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] 
                           transition-all duration-300"
              >
                <cert.icon className="text-[#2563EB]" size={22} />
                <div>
                  <h4 className="font-semibold text-[#F8FAFC]">
                    {cert.name}
                  </h4>
                  <p className="text-[#94A3B8] text-sm">
                    {cert.provider}
                  </p>
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
