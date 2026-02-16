import React, { useState, useEffect } from "react";
import { Github, ArrowRight, ChevronDown } from "lucide-react";

const typingText =
  "AI & Full Stack Engineer • MERN • MEAN • Intelligent Systems";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < typingText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typingText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-32 bg-[#0B1120] text-[#F8FAFC]"
    >
      {/* Subtle Radial AI Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_70%)]"></div>

      <div className="text-center z-10 max-w-5xl mx-auto">

        {/* Profile Image */}
        <div className="relative mb-12 mt-8">
          <div className="w-60 h-60 mx-auto relative z-10">

            {/* Electric Blue Ring */}
            <div className="w-full h-full rounded-full border border-[#2563EB] p-[3px] relative">

              {/* Cyan Glow Behind */}
              <div className="absolute inset-0 rounded-full bg-[#06B6D4]/10 blur-2xl -z-10"></div>

              {/* Inner Circle */}
              <div className="w-full h-full rounded-full bg-[#111827] flex items-center justify-center overflow-visible relative">

                <img
                  src="/myImage.png"
                  alt="Anish Karlekar"
                  className="w-[108%] h-[120%] object-cover rounded-b-full -mt-10"
                />

              </div>
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 relative z-20">
          Anish Karlekar
        </h1>

        {/* Typing Tagline */}
        <div className="text-xl md:text-2xl text-[#94A3B8] mb-8 h-8 font-medium">
          {displayedText}
          <span className="text-[#2563EB] animate-pulse">|</span>
        </div>

        {/* Strategic Bio */}
        <p className="text-lg text-[#94A3B8] mb-12 max-w-3xl mx-auto leading-relaxed">
          I build scalable AI-powered web applications and high-performance backend
          systems using Node.js, React, Angular, and modern API architectures.
          Focused on designing production-ready solutions for startups and growing tech teams.
        </p>

        {/* Authority Tags */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#94A3B8] mb-12">
          <span className="border border-[#1F2937] px-4 py-2 rounded-lg bg-[#111827] hover:border-[#2563EB] transition">
            Scalable API Architecture
          </span>
          <span className="border border-[#1F2937] px-4 py-2 rounded-lg bg-[#111827] hover:border-[#2563EB] transition">
            Agentic AI Integration
          </span>
          <span className="border border-[#1F2937] px-4 py-2 rounded-lg bg-[#111827] hover:border-[#2563EB] transition">
            Performance Optimization
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">

          <a
            href="#contact"
            className="flex items-center gap-2 bg-[#2563EB] text-white px-8 py-3 rounded-lg font-medium hover:translate-y-[-2px] hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-300"
          >
            Let’s Build Something
            <ArrowRight size={18} />
          </a>

          <a
            href="https://github.com/AnishKarlekar-Ak"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#2563EB] text-[#F8FAFC] px-8 py-3 rounded-lg font-medium hover:bg-[#111827] hover:border-[#06B6D4] transition-all duration-300"
          >
            View GitHub
            <Github size={18} />
          </a>

        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown size={28} className="mx-auto text-[#94A3B8]" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
