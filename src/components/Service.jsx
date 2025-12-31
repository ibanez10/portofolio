// components/home/Services.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Smartphone, BarChart3, Search } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description: "Create stunning, user-friendly fullstack web applications using modern technologies.",
    icon: <Layout className="text-gray-600" size={40} />,
    tag: "coding"
  },
  {
    title: "Mobile Development",
    description: "Create smooth and cross-platform mobile applications using React Native.",
    icon: <Smartphone className="text-gray-600" size={40} />,
    tag: "coding"
  },
  {
    title: "Analytic Integration",
    description: "Implement Google Tag Manager, Google Analytics, and Mixpanel for data-driven insights.",
    icon: <BarChart3 className="text-gray-600" size={40} />,
    tag: "marketing"
  },
  {
    title: "Search Engine Optimization",
    description: "Improvement Search Engine Optimization and web performance.",
    icon: <Search className="text-gray-600" size={40} />,
    tag: "marketing"
  }
];

// Varian animasi untuk container (parent)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Muncul bergantian satu per satu
    }
  }
};

// Varian animasi untuk item (child/card)
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 }
  }
};

const Services = () => {
  return (
    <section className="py-12">
      {/* Header dengan animasi fade-in */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🚀</span>
          <h2 className="text-xl font-semibold text-gray-900">Services</h2>
        </div>
        <p className="text-gray-500 text-lg">I can deliver the following services</p>
      </motion.div>

      {/* Grid Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02, 
              translateY: -5,
              transition: { duration: 0.2 } 
            }}
            className="group relative bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-shadow duration-300"
          >
            {/* Tag Kategori */}
            <span className="absolute top-6 right-8 text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-2 py-1 rounded">
              {service.tag}
            </span>

            {/* Area Icon dengan Border Dashed Dinamis */}
            <div className="bg-gray-50 rounded-2xl w-full aspect-[2/1] mb-6 flex items-center justify-center border border-dashed border-gray-200 group-hover:border-blue-400 group-hover:bg-blue-50/30 transition-all duration-300">
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
            </div>

            {/* Konten Teks */}
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;