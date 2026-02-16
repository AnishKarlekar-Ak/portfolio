import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] border-t border-[#1F2937] py-12 px-6 text-[#94A3B8]">
      <div className="max-w-6xl mx-auto text-center space-y-4">

        {/* Brand Name */}
        <p className="text-[#F8FAFC] font-semibold tracking-wide">
          Anish <span className="text-[#2563EB]">Karlekar</span>
        </p>

        {/* Positioning Line */}
        <p className="text-sm max-w-xl mx-auto">
          AI & Full Stack Engineer specializing in scalable systems,
          LLM integrations, and intelligent automation architectures.
        </p>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-[#2563EB] mx-auto mt-4"></div>

        {/* Copyright */}
        <p className="text-xs mt-6">
          © 2025 Anish Karlekar. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
