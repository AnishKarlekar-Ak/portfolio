import React from "react";
import { MapPin, Briefcase, GraduationCap, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#0B1120] text-[#F8FAFC]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            About — AI & Full Stack Engineer
          </h2>
          <div className="w-24 h-[2px] bg-[#2563EB] mx-auto mt-4"></div>

          <p className="mt-6 text-[#94A3B8] text-sm uppercase tracking-widest">
            MERN • MEAN • Agentic AI • Machine Learning • API Architecture
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left Column */}
          <div className="space-y-8">

            <p className="text-lg leading-relaxed text-[#94A3B8]">
              I design and build scalable, production-ready software systems across
              the <span className="text-[#2563EB] font-semibold">MERN</span> and{" "}
              <span className="text-[#2563EB] font-semibold">MEAN stack</span>,
              with a strong focus on{" "}
              <span className="text-[#06B6D4] font-semibold">
                Agentic AI systems and intelligent automation.
              </span>
            </p>

            <p className="text-lg leading-relaxed text-[#94A3B8]">
              My expertise spans Full Stack Development, RESTful API Architecture,
              scalable Node.js backend systems, performance optimization, and
              AI model integration into modern web applications.
              I engineer systems that are reliable, scalable, and built for long-term growth.
            </p>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { value: "5+", label: "Deployed Projects" },
                { value: "3+", label: "Full Stack Systems" },
                { value: "AI", label: "Model Integrations" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#111827] border border-[#1F2937] p-6 rounded-xl text-center hover:border-[#2563EB] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-[#2563EB]">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-[#94A3B8] mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="#contact"
                className="bg-[#2563EB] text-white px-6 py-3 rounded-lg font-medium hover:translate-y-[-2px] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 flex items-center gap-2"
              >
                Discuss Your Project
                <ArrowRight size={18} />
              </a>

              <a
                href="#projects"
                className="border border-[#2563EB] text-[#F8FAFC] px-6 py-3 rounded-lg font-medium hover:bg-[#111827] hover:border-[#06B6D4] transition-all duration-300"
              >
                View Technical Projects
              </a>
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-8">

            {/* Location Card */}
            <div className="bg-[#111827] border border-[#1F2937] p-6 rounded-xl hover:border-[#2563EB] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 group">
              <MapPin className="text-[#06B6D4] mb-4 group-hover:scale-110 transition-transform duration-300" size={28} />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-[#94A3B8]">Ahmedabad, India</p>
            </div>

            {/* Education Card */}
            <div className="bg-[#111827] border border-[#1F2937] p-6 rounded-xl hover:border-[#2563EB] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 group">
              <GraduationCap className="text-[#06B6D4] mb-4 group-hover:scale-110 transition-transform duration-300" size={28} />
              <h3 className="text-lg font-semibold mb-6">
                Formal Training in Computer Science
              </h3>

              <div className="space-y-6">
                <div className="border-l-2 border-[#2563EB] pl-4">
                  <p className="font-semibold text-[#F8FAFC]">
                    Bachelor of Engineering — Computer Science
                  </p>
                  <p className="text-sm text-[#94A3B8]">
                    2023 – Present
                  </p>
                </div>

                <div className="border-l-2 border-[#2563EB] pl-4">
                  <p className="font-semibold text-[#F8FAFC]">
                    PG Diploma in Computer Applications
                  </p>
                  <p className="text-sm text-[#94A3B8]">
                    2023 – 2024
                  </p>
                </div>

                <div className="border-l-2 border-[#2563EB] pl-4">
                  <p className="font-semibold text-[#F8FAFC]">
                    Diploma in Computer Engineering
                  </p>
                  <p className="text-sm text-[#94A3B8]">
                    2020 – 2023
                  </p>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-[#111827] border border-[#1F2937] p-6 rounded-xl hover:border-[#2563EB] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 group">
              <Briefcase className="text-[#06B6D4] mb-4 group-hover:scale-110 transition-transform duration-300" size={28} />
              <h3 className="text-lg font-semibold mb-2">Availability</h3>
              <p className="text-[#94A3B8]">
                Open to freelance, contract, and full-time opportunities in AI-first
                startups and scalable tech teams.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
