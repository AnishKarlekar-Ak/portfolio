import React from 'react';
import { Mail, Phone, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const contactItems = [
  {
    title: "Email",
    value: "work.anishkarlekar@gmail.com",
    href: "mailto:work.anishkarlekar@gmail.com",
    icon: Mail
  },
  {
    title: "Phone",
    value: "+91 8401358608",
    href: "tel:+918401358608",
    icon: Phone
  },
  {
    title: "GitHub",
    value: "AnishKarlekar-Ak",
    href: "https://github.com/AnishKarlekar-Ak",
    icon: Github
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's Work Together
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="text-xl text-gray-300 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm always interested in new opportunities and exciting projects. 
          Let's connect and build something amazing together!
        </motion.p>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <item.icon className="text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" size={32} />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500 to-purple-500 p-1 rounded-xl max-w-md mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-900 p-6 rounded-lg">
            <p className="text-lg mb-4 text-white">Ready to start a project?</p>
            <a
              href="mailto:work.anishkarlekar@gmail.com"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3 rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <Mail size={20} />
              Send Message
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
