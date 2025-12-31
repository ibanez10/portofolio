// components/home/LatestArticles.jsx
"use client";

import React from "react";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    title: "SawitDB database language as a from of protest",
    date: "Dec 28, 2025",
    image: "https://github.com/WowoEngine/SawitDB/blob/main/docs/sawitdb.jpg?raw=true",
    isNew: true
  },
  {
    title: "n8n workflow for your automation AI",
    date: "Dec 05, 2025",
    image: "https://n8n.io/n8n-og-image.png", 
  },
  {
    title: "Vibe Code to Learn new code🔥",
    date: "Okt 09, 2025",
    image: "https://www.prismetric.com/wp-content/uploads/2025/04/What-is-Vibe-Coding01-1.jpg",
  },
  {
    title: "How to learn Jaksel Script",
    date: "Aug 05, 2022",
    image: "https://i.ytimg.com/vi/_L3VP78A5bk/maxresdefault.jpg", 
  }
];

const LatestArticles = () => {
  return (
    <section className="py-2">
      <div className="flex items-center gap-2 mb-2">
        <BookOpen size={20} className="text-gray-700" />
        <h2 className="text-xl font-semibold text-gray-900">Latest Articles</h2>
      </div>
      <p className="text-gray-500 mb-8 text-lg">Latest articles from trending news</p>

      {/* Kontainer Scroll Horizontal */}
      <div className="relative group">
        <div className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory px-2 -mx-2">
          {articles.map((article, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[280px] md:min-w-[350px] group cursor-pointer snap-start"
            >
              {/* Image Container dengan Animasi Hover Scale */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 border border-gray-100 shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Badge New dengan Animasi Detak */}
                {article.isNew && (
                  <motion.span 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute top-0 right-0 bg-yellow-400 text-[10px] font-bold px-4 py-1.5 rounded-bl-2xl uppercase tracking-widest shadow-md"
                  >
                    New
                  </motion.span>
                )}
              </div>

              {/* Detail Teks */}
              <div className="space-y-1">
                <h3 className="font-bold text-[17px] text-gray-900 line-clamp-1">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-400 font-medium">{article.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Indikator Gradasi di Ujung Kanan (Opsional untuk estetika scroll) */}
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white/80 to-transparent pointer-events-none hidden md:block" />
      </div>
    </section>
  );
};

export default LatestArticles;