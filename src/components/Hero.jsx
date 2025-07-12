import React, { useState, useEffect } from 'react';
import { Mail, Github, ChevronDown } from 'lucide-react';

const typingText = "Full Stack Development and Data Science Enthusiast";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < typingText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typingText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 50); // typing speed
      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-32">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>

      <div className="text-center z-10 max-w-4xl mx-auto">
  {/* Profile Image */}
  <div className="relative mb-8 mt-8">
    <div className="w-60 h-60 mx-auto relative z-10">
      {/* Gradient Ring */}
      <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 animate-spin-slow">
        {/* Inner Circle with Image */}
        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-visible relative">
          <img
            src="/myImage.png"
            alt="Anish Karlekar"
            className="w-[110%] h-[125%] object-cover rounded-b-full -mt-14"
          />
        </div>
      </div>
    </div>
  </div>



        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Anish Karlekar
        </h1>

        {/* Typing Text */}
        <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
          {displayedText}
          <span className="animate-blink">|</span>
        </div>

        {/* Bio */}
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Computer Science Engineering student passionate about full-stack development and data science. 
          Building innovative solutions with modern technologies.
        </p>

        {/* Buttons */}
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

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown size={32} className="mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
