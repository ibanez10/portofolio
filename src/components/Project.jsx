"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Roccia from "@/app/Assets/rociaa.jpeg";
import Vidart from "@/app/Assets/vidartt.jpeg";

const ProjectPage = () => {
  const projects = [
    {
      title: "Roccia",
      description: "Roccia is a custom project designed with modern aesthetics and high performance in mind.",
      // Menggunakan variabel import langsung
      image: Roccia, 
      tags: [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
        "https://tse1.mm.bing.net/th/id/OIP.s7ZEqkmVrugV-4MdcVxMaAHaHa?pid=Api&P=0&h=220",
        "https://tse2.mm.bing.net/th/id/OIP.hXxpU_nj2fRbceaHmLuilwHaHa?pid=Api&P=0&h=220"
      ],
      isFeatured: true,
      link: "#"
    },
    {
      title: "Vidart",
      description: "Project Sekolah membuat aplikasi Video downloader",
      // Menggunakan URL string
      image: Vidart, 
      tags: [
        "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3254005/kotlin-icon-md.png", 
      ],
      isFeatured: true,
      link: "#"
    }
  ];

  return (
    <section className="py-10 max-w-5xl mx-auto px-6">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
        <p className="text-gray-500 text-lg mb-6">
          Showcasing my passion for technology, design, and problem-solving through code.
        </p>
        <div className="border-t border-dashed border-gray-300 w-full"></div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* Project Image Container */}
            <div className="relative h-56 w-full overflow-hidden bg-gray-100">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized={typeof project.image === "string"} // Optimasi otomatis jika lokal, unoptimized jika URL luar
              />
              {project.isFeatured && (
                <div className="absolute top-3 right-3 bg-emerald-400 text-emerald-950 text-[10px] font-bold px-3 py-1 rounded-full z-10">
                  Featured
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>
              
              {/* Technology Tags */}
              <div className="flex items-center gap-3 pt-2">
                {project.tags.map((tagIcon, idx) => (
                  <div key={idx} className="relative w-5 h-5 opacity-70 hover:opacity-100 transition-opacity">
                    <Image 
                      src={tagIcon} 
                      alt="tech-stack" 
                      fill 
                      className="object-contain"
                      unoptimized 
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;