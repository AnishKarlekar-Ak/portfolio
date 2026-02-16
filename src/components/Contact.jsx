import React from "react";
import { Mail, Phone, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

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
    <section
      id="contact"
      className="py-24 px-6 bg-[#0B1120] text-[#F8FAFC]"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let’s Build Intelligent Systems
          </h2>
          <div className="w-24 h-[2px] bg-[#2563EB] mx-auto mt-4"></div>

          <p className="text-[#94A3B8] mt-6 text-lg max-w-2xl mx-auto">
            Open to AI-first startups, SaaS platforms, and engineering teams
            looking to build scalable full stack and LLM-powered systems.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="bg-[#111827] p-6 rounded-xl border border-[#1F2937]
                         hover:border-[#2563EB]
                         hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]
                         transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <item.icon
                className="text-[#2563EB] mx-auto mb-4"
                size={28}
              />
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-[#94A3B8] text-sm">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Final CTA Box */}
        <motion.div
          className="bg-[#111827] border border-[#1F2937] p-10 rounded-xl
                     hover:border-[#2563EB]
                     hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]
                     transition-all duration-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl mb-6">
            Ready to architect something scalable and intelligent?
          </p>

          <a
            href="mailto:work.anishkarlekar@gmail.com"
            className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-3 rounded-lg font-medium
                       hover:translate-y-[-2px]
                       hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]
                       transition-all duration-300"
          >
            Start a Conversation
            <ExternalLink size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
