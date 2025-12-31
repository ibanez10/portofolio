"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Tailwind from "@/app/Assets/Tailwind.png";
import { Megaphone } from "lucide-react";

const RoadmapPage = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend Developer");

  const categories = ["Frontend Developer", "Backend Developer", "Mobile Developer"];

  // Data dikelompokkan berdasarkan kategori untuk mendukung fitur filter
  const courses = {
    "Frontend Developer": [
      { title: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", lang: "ID" },
      { title: "CSS Dasar", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", lang: "ID" },
      { title: "CSS Layouting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", lang: "ID" },
      { title: "CSS 3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", lang: "ID" },
      { title: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", lang: "ID" },
      { title: "Flexbox CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", lang: "ID" },
      { title: "SASS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", lang: "ID" },
      { title: "Tailwind", icon: Tailwind, lang: "ID" },
      { title: "JS Dasar", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", lang: "ID" },
      { title: "JS DOM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", lang: "ID" },
      { title: "JS Lanjutan", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", lang: "ID" },
      { title: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", lang: "ID" },
      { title: "React Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", lang: "ID" },
      { title: "React Render", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", lang: "ID" },
      { title: "React Router", icon: "https://reactrouter.com/_brand/React%20Router%20Brand%20Assets/React%20Router%20Logo/Light.png", lang: "ID" },
      { title: "TypeScript", icon: "https://w7.pngwing.com/pngs/74/362/png-transparent-typescript-plain-logo-icon.png", lang: "ID" },
      { title: "React TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", lang: "ID" },
      { title: "ViteJS", icon: "https://tse3.mm.bing.net/th/id/OIP.-clCRotMTDkkIpeLClXBsAHaHa?pid=Api&P=0&h=220", lang: "ID" },
      { title: "NextJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", lang: "ID" },
    ],
    "Backend Developer": [
      { title: "Node JS Dasar", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", lang: "ID" },
      { title: "PHP Dasar", icon: "https://cdn.icon-icons.com/icons2/2415/PNG/512/php_plain_logo_icon_146397.png", lang: "ID" },
      { title: "PHP CRUD", icon: "https://cdn.icon-icons.com/icons2/2415/PNG/512/php_plain_logo_icon_146397.png", lang: "ID" },
      { title: "PHP MVC", icon: "https://cdn.icon-icons.com/icons2/2415/PNG/512/php_plain_logo_icon_146397.png", lang: "ID" },
      { title: "PHP Lanjut", icon: "https://cdn.icon-icons.com/icons2/2415/PNG/512/php_plain_logo_icon_146397.png", lang: "ID" },
      { title: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", lang: "ID" },
      { title: "SQLite", icon: "https://tse2.mm.bing.net/th/id/OIP.hXxpU_nj2fRbceaHmLuilwHaHa?pid=Api&P=0&h=220", lang: "ID" },
      { title: "Laravel Dasar", icon: "https://tse1.mm.bing.net/th/id/OIP.s7ZEqkmVrugV-4MdcVxMaAHaHa?pid=Api&P=0&h=220", lang: "ID" },
      { title: "Laravel MVC", icon: "https://tse1.mm.bing.net/th/id/OIP.s7ZEqkmVrugV-4MdcVxMaAHaHa?pid=Api&P=0&h=220", lang: "ID" },
      { title: "Laravel Lanjut", icon: "https://tse1.mm.bing.net/th/id/OIP.s7ZEqkmVrugV-4MdcVxMaAHaHa?pid=Api&P=0&h=220", lang: "ID" },
      { title: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", lang: "ID" },
    ],
    "Mobile Developer": [
      { title: "Kotlin Dasar", icon: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3254005/kotlin-icon-md.png", lang: "ID" },
      { title: "Kotlin Layouting", icon: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3254005/kotlin-icon-md.png", lang: "ID" },
      { title: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", lang: "ID" },
    ]
  };

  return (
    <section className="py-10 max-w-5xl mx-auto px-6">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Roadmap</h1>
        <p className="text-gray-500 text-lg mb-6">Learning path recomendation and free course playlist</p>
        <div className="border-t border-dashed border-gray-300 w-full"></div>
      </motion.div>

      {/* Categories & Promotion Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="flex gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                ? "bg-neutral-800 text-white shadow-md" 
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Roadmap List dengan AnimatePresence agar transisi kategori halus */}
      <div className="space-y-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {courses[activeCategory].map((course, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.005, backgroundColor: "#f9fafb" }}
                className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-2xl mb-3 cursor-pointer transition-all shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 relative">
                    <Image 
                      src={course.icon} 
                      alt={course.title} 
                      fill 
                      className="object-contain"
                      unoptimized 
                    />
                  </div>
                  <span className="font-semibold text-gray-800">{course.title}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100 uppercase">
                    {course.lang}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RoadmapPage;