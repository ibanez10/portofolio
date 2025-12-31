"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Impor komponen Image
import { Github, Linkedin, Send, Globe } from "lucide-react";

const ContactPage = () => {
  const contactCards = [
    {
      title: "Explore the code",
      description: "Explore the source code for all my projects on GitHub.",
      buttonText: "Go to GitHub",
      link: "https://github.com/ibanez10",
      icon: <Github size={40} />,
      bgColor: "bg-slate-100",
      buttonColor: "bg-slate-900",
      iconColor: "text-slate-900",
    },
    {
      title: "Let's connect",
      description: "Connect for collaboration or explore my professional experience.",
      buttonText: "Go to Linkedin",
      link: "https://linkedin.com/in/ardhananta",
      icon: <Linkedin size={40} />,
      bgColor: "bg-blue-50",
      buttonColor: "bg-blue-600",
      iconColor: "text-blue-600",
    },
    {
      title: "My Life and Journey",
      description: "Install and contribute to my open-source projects.",
      buttonText: "Go to Instagram",
      link: "https://www.npmjs.com/~username",
      imageUrl: "https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-icon-png-full-colour.png",
      bgColor: "bg-red-50",
      buttonColor: "bg-red-600",
      iconColor: "text-red-600",
    },
    {
      title: "Chat with my community",
      description: "Join over 100+ others developers on SnapanDev Discord.",
      buttonText: "Go to Discord",
      link: "https://discord.gg/invite",
      imageUrl: "https://freelogopng.com/images/all_img/1691730767discord-logo-transparent.png", 
      bgColor: "bg-purple-50",
      buttonColor: "bg-purple-600",
      iconColor: "text-purple-600",
    },
  ];

  return (
    <section className="py-10 max-w-5xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Contact</h1>
        <p className="text-gray-500 text-lg mb-6">Let's get in touch</p>
        <div className="border-t border-dashed border-gray-300 w-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <h2 className="col-span-full text-lg font-semibold text-gray-800 -mb-2">Find me on</h2>
        {contactCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`${card.bgColor} p-8 rounded-2xl flex justify-between items-center group relative overflow-hidden`}
          >
            <div className="z-10 flex flex-col items-start gap-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                <p className="text-sm text-gray-600 max-w-[200px] leading-relaxed">
                  {card.description}
                </p>
              </div>
              <a 
                href={card.link}
                target="_blank"
                className={`${card.buttonColor} text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:opacity-90 transition-all`}
              >
                {card.buttonText} <span>↗</span>
              </a>
            </div>
            
            {/* LOGIKA UNTUK MENAMPILKAN ICON ATAU IMAGE */}
            <div className={`${card.iconColor} opacity-20 group-hover:opacity-100 transition-opacity duration-300`}>
              {card.imageUrl ? (
                <div className="relative w-12 h-12">
                   <Image 
                    src={card.imageUrl} 
                    alt={card.title}
                    fill
                    unoptimized // Melewati konfigurasi next.config.js untuk testing cepat
                    className="object-contain"
                   />
                </div>
              ) : (
                card.icon
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Form Section Tetap Sama */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-lg font-semibold text-gray-800">Or send me a message</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white/50" />
          <input type="email" placeholder="Email" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white/50" />
          <textarea placeholder="Message" rows="5" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none bg-white/50 md:col-span-2"></textarea>
          <button className="md:col-span-2 bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-lg active:scale-[0.98]">
            <Send size={18} /> Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactPage;