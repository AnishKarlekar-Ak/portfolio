import React from "react";

const Navbar = ({ activeSection, setActiveSection, isMenuOpen, setIsMenuOpen }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = ["home", "about", "skills", "projects", "experience", "contact"];

  return (
    <nav className="fixed top-0 w-full bg-[#0B1120]/80 backdrop-blur-xl z-50 border-b border-[#1F2937]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-5">

          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold tracking-tight text-[#F8FAFC]">
            Anish <span className="text-[#2563EB]">Karlekar</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`relative capitalize text-sm tracking-wide transition-all duration-300 ${
                  activeSection === item
                    ? "text-[#F8FAFC]"
                    : "text-[#94A3B8] hover:text-[#F8FAFC]"
                }`}
              >
                {item}

                {/* Active underline */}
                {activeSection === item && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#2563EB] rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-[#F8FAFC] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-[#F8FAFC] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-[#F8FAFC] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </div>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0B1120]/95 backdrop-blur-xl border-t border-[#1F2937]">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize block w-full text-left text-lg transition-all duration-300 ${
                  activeSection === item
                    ? "text-[#2563EB]"
                    : "text-[#94A3B8] hover:text-[#F8FAFC]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
