import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Intern",
    company: "I-Hub, Government Of Gujarat",
    duration: "April 2025 - July 2025",
    points: [
      "Worked on legacy code of i-hub's website to update it frequently to meet arising needs",
      "Created RESTful APIs for improved functionality and data management",
      "Developed Admin Dashboard UI with dynamic data export capabilities",
      "Collaborated with team members using Jira for project management"
    ],
    tags: ["JavaScript", "REST APIs", "Admin Dashboard", "Team Collaboration"]
  },
  {
    title: "AI Intern",
    company: "Intel AI for Manufacturing",
    duration: "Summer 2025",
    points: [
      "Built classification model to ensure SOP compliance in HTST dairy processing",
      "Worked with real-time sensor simulations and hygiene quality indicators",
      "Improved compliance prediction using custom feature engineering",
      "Handled data collection, pre-processing, and modeling pipeline"
    ],
    tags: ["Python", "ML", "HTST", "Scikit-learn"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-cyan-400/40 transition duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-full">
                  <Briefcase className="text-white" size={24} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-cyan-400 text-lg">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-gray-300 list-disc list-inside">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-sm border border-cyan-400/30"
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
