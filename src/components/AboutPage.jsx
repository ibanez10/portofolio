"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Download, MapPin, Calendar, Building2 } from "lucide-react";

const AboutPage = () => {
  const careerData = [
    {
      title: "Senior Frontend Developer",
      company: "Richer Media",
      location: "Jakarta",
      period: "Jul 2025 - Present",
      duration: "~ 5 Months",
      logo: "RM", // Anda bisa mengganti dengan <Image /> jika ada file logo
    },
    {
      title: "Frontend Developer",
      company: "Richer Media",
      location: "Jakarta",
      period: "Apr 2024 - Jul 2025",
      duration: "~ 1 Year 2 Months",
      logo: "RM",
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 sm:px-10 bg-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, size: '20px 20px', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[750px] mx-auto relative z-10">
        {/* Header Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">About</h1>
          <p className="text-gray-500 text-lg mb-8">A short story of me</p>
          
          <div className="border-t border-dashed border-gray-200 w-full mb-10"></div>
        </motion.section>

        {/* Biography Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 text-gray-700 leading-relaxed text-[15px] sm:text-base"
        >
          <p>
            Hi! I am <span className="font-semibold text-gray-900">Bayu Setiawan</span>, a seasoned software engineer with a deep passion for creating elegant and efficient solutions through code. With a strong foundation in JavaScript and TypeScript, along with a comprehensive understanding of various frontend libraries and frameworks, I have been navigating the ever-evolving landscape of web development with enthusiasm and dedication. Currently, I reside in Jakarta, Indonesia ID.
          </p>
          <p>
            As a fast learner and adaptive thinker, I thrive in dynamic environments where innovation is the driving force. My collaborative nature allows me to seamlessly integrate with teams, contributing not only my technical prowess but also a humble attitude that values every members input.
          </p>
          <p>
            This blog is my platform to share insights, experiences, and discoveries from my journey as a software engineer. Join me as we delve into the ever-exciting realm of technology, where each line of code has the potential to shape the digital landscape in remarkable ways.
          </p>
          <p>
            Thank you for visiting, and I look forward to embarking on this knowledge-sharing adventure.
          </p>
        </motion.section>

        {/* Career Section Header */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <div className="border-t border-gray-100 w-full mb-10"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-900">
              <Briefcase size={22} />
              <h2 className="text-2xl font-bold">Career</h2>
            </div>
            
            <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all active:scale-95 w-fit">
              <Download size={16} />
              Download Resume
            </button>
          </div>
          <p className="text-gray-500 mb-8">My professional career journey</p>

          {/* Career Cards List */}
          <div className="grid grid-cols-1 gap-4">
            {careerData.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl border border-gray-100 bg-white hover:border-blue-100 hover:shadow-sm transition-all"
              >
                {/* Company Logo Placeholder */}
                <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-inner">
                  {job.logo}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{job.title}</h3>
                  
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-sm text-gray-500 font-medium">
                    <span className="flex items-center gap-1.5 text-gray-700">
                      <Building2 size={14} />
                      {job.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-sm">
                  <span className="flex items-center gap-1.5 text-gray-700 font-medium">
                    <Calendar size={14} />
                    {job.period}
                  </span>
                  <span className="text-gray-400 text-xs">{job.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default AboutPage;