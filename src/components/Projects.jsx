import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Agentic AI Instagram Content Engine",
    category: "AI / Intelligent Automation",
    description:
      "Built an Agentic AI system leveraging LLM APIs to intelligently research trending topics, align them with user profiles, generate engaging captions, rewrite content with psychological hooks and keyword optimization, and deliver highly detailed prompts for AI image generation.",
    tech: [
      "OpenAI API",
      "LLM Integration",
      "Prompt Engineering",
      "NLP",
      "Automation Logic",
      "Node.js"
    ],
    highlight: "Autonomous AI Workflow",
    weight: 10
  },
  {
    title: "Orbital Data Simulation Center",
    category: "3D Simulation / Visualization",
    description:
      "Interactive orbital data visualization platform built using Three.js and React Three Fiber for rendering dynamic space simulations, backed by Node.js and MongoDB for real-time data handling and simulation state management.",
    tech: [
      "Three.js",
      "React Three Fiber",
      "Node.js",
      "Express.js",
      "MongoDB"
    ],
    highlight: "3D Simulation Engine",
    weight: 9
  },
  {
    title: "Tailo360 SaaS Platform",
    category: "SaaS / MEAN Stack",
    description:
      "Full-scale SaaS platform for tailoring businesses built using the MEAN stack. Features customer management, order tracking, measurement records, workflow automation, and scalable API architecture for production deployment.",
    tech: [
      "MongoDB",
      "Express.js",
      "Angular",
      "Node.js",
      "REST APIs"
    ],
    highlight: "Production SaaS",
    weight: 8.5
  },
  {
    title: "Intel AI for Manufacturing",
    category: "AI / Machine Learning",
    description:
      "Developed a classification model for SOP compliance validation in dairy HTST pasteurization processes using simulated operational parameters and ML-based decision logic.",
    tech: ["Python", "Pandas", "Scikit-learn", "ML Classification"],
    highlight: "SOP Compliance AI",
    weight: 8
  },
  {
    title: "DeepCourier Web App",
    category: "Full Stack Application",
    description:
      "Scalable logistics tracking platform with JWT authentication, secure backend architecture, and AWS production deployment.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "AWS"
    ],
    highlight: "Live Production App",
    liveUrl: "https://deepcourier.net",
    weight: 7
  },
  {
    title: "Temperature Forecast Model",
    category: "Data Science",
    description:
      "Machine learning regression model achieving 2.95% MAPE for temperature prediction using optimized feature engineering.",
    tech: ["Python", "Machine Learning", "Data Modeling"],
    highlight: "MAPE 2.95%",
    weight: 6
  },
  {
    title: "React Admin Dashboard",
    category: "Frontend Engineering",
    description:
      "Interactive admin dashboard with REST integration, analytics visualization, and export functionality.",
    tech: ["React", "JavaScript", "REST APIs"],
    highlight: "Interactive UI",
    weight: 5
  },
  {
    title: "E-commerce REST APIs",
    category: "Backend Architecture",
    description:
      "Production-ready RESTful APIs with authentication, role-based access control, and scalable database design.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    highlight: "Production Ready",
    weight: 4
  },
  {
    title: "2FA Authentication System",
    category: "Security Engineering",
    description:
      "OTP-based two-factor authentication system with secure token validation and email/SMS integration.",
    tech: ["Node.js", "Authentication", "Security"],
    highlight: "Secure Auth",
    weight: 3
  },
  {
    title: "Mann Enterprise Website",
    category: "Freelance Project",
    description:
      "Business portfolio website built for industrial flooring services with responsive layout and optimized performance.",
    tech: ["WordPress", "HTML", "CSS"],
    highlight: "Client Project",
    weight: 2
  }
];


const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const sortedProjects = [...projects].sort((a, b) => b.weight - a.weight);
  const displayedProjects = showAll ? sortedProjects : sortedProjects.slice(0, 4);

  return (
    <section id="projects" className="py-24 px-6 bg-[#0B1120] text-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <div className="w-24 h-[2px] bg-[#2563EB] mx-auto mt-4"></div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111827] p-6 rounded-xl border border-[#1F2937]
                         hover:border-[#2563EB]
                         hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]
                         transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <span className="text-[#2563EB] text-sm bg-[#2563EB]/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <div className="text-xs font-semibold bg-[#06B6D4]/15 text-[#06B6D4] px-3 py-1 rounded-full">
                  {project.highlight}
                </div>
              </div>

              <p className="text-[#94A3B8] mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#0B1120] text-[#94A3B8] px-2 py-1 rounded text-sm border border-[#1F2937]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#2563EB] hover:text-[#06B6D4] transition"
                >
                  View Live
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Load More */}
        {!showAll && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-[#2563EB] text-white rounded-lg
                         hover:translate-y-[-2px]
                         hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]
                         transition-all duration-300"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
