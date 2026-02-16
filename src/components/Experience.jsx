import React from "react";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "AI Intern",
    company: "Intel AI for Manufacturing",
    duration: "Summer 2025",
    points: [
      "Designed and implemented ML classification pipeline to validate SOP compliance in HTST dairy processing.",
      "Simulated real-time sensor data and hygiene quality indicators for model training.",
      "Engineered custom feature sets to improve compliance prediction accuracy.",
      "Built complete data preprocessing and modeling workflow using Scikit-learn."
    ],
    tags: ["Python", "Machine Learning", "Feature Engineering", "Scikit-learn", "Data Pipeline"]
  },
  {
    title: "Software Engineering Intern",
    company: "I-Hub, Government of Gujarat",
    duration: "April 2025 – July 2025",
    points: [
      "Maintained and refactored legacy web architecture to support evolving product requirements.",
      "Developed scalable RESTful APIs for improved system functionality and structured data management.",
      "Built dynamic Admin Dashboard with export-ready reporting capabilities.",
      "Collaborated cross-functionally using Jira within agile sprint cycles."
    ],
    tags: ["JavaScript", "REST API Design", "Admin Dashboard", "Agile Workflow", "System Maintenance"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#111827] text-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Professional Experience
          </h2>
          <div className="w-24 h-[2px] bg-[#2563EB] mx-auto mt-4"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#0B1120] p-8 rounded-xl border border-[#1F2937]
                         hover:border-[#2563EB]
                         hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]
                         transition-all duration-300"
            >
              <div className="flex items-start gap-6">

                {/* Icon */}
                <div className="bg-[#111827] border border-[#2563EB]/30 p-3 rounded-lg">
                  <Briefcase className="text-[#2563EB]" size={22} />
                </div>

                <div className="flex-1">

                  {/* Title + Company + Duration */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold">
                        {exp.title}
                      </h3>
                      <p className="text-[#2563EB] text-lg mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-[#94A3B8] mt-3 md:mt-0">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="space-y-3 text-[#94A3B8]">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 bg-[#06B6D4] rounded-full"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#111827] text-[#94A3B8] px-3 py-1 rounded-md text-sm border border-[#1F2937]
                                   hover:border-[#2563EB] transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
