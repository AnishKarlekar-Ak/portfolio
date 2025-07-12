import React from 'react';
import { MapPin, Phone, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am an enthusiastic and eager learner, committed to applying theoretical knowledge to real-world situations. 
              My education in Computer Engineering and ongoing studies in Computer Science Engineering have equipped me 
              with a strong foundation in programming languages and software development.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I thrive in collaborative environments and am passionate about solving practical challenges through technology. 
              My experience ranges from developing REST APIs to creating machine learning models and building modern web applications.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-24">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <MapPin className="text-cyan-400 mb-2" size={24} />
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white">Ahmedabad, India</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <Phone className="text-cyan-400 mb-2" size={24} />
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white">+91 8401358608</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <GraduationCap className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-4">Education</h3>

              <div className="space-y-4">
                <div className="border-l-2 border-cyan-400 pl-4">
                  <h4 className="font-semibold text-cyan-400">Bachelor of Engineering</h4>
                  <p className="text-gray-300">Computer Science Engineering</p>
                  <p className="text-gray-400 text-sm">SAL Institute of Technology • 2023 - Present</p>
                </div>
                <div className="border-l-2 border-pink-400 pl-4">
                  <h4 className="font-semibold text-pink-400">Post Graduation Diploma In Computer Application</h4>
                  <p className="text-gray-400 text-sm">C-Dac, GOI • 2023 - 2024</p>
                </div>
                <div className="border-l-2 border-purple-400 pl-4">
                  <h4 className="font-semibold text-purple-400">Diploma</h4>
                  <p className="text-gray-300">Computer Engineering</p>
                  <p className="text-gray-400 text-sm">Apollo Institute • 2020 - 2023</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['English', 'Hindi', 'Gujarati', 'Marathi'].map((lang) => (
                  <span
                    key={lang}
                    className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-3 py-1 rounded-full text-sm border border-cyan-400/30"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
