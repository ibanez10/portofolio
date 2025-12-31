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
      logo: "RM",
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
    // Menggunakan py-10 agar sejajar dengan Hero
    <section className="py-5 relative">
      <div className="space-y-10">
        {/* Header Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">About</h1>
          <p className="text-gray-500 text-lg mb-6">A short story of me</p>
          <div className="border-t border-dashed border-gray-500 w-full"></div>
        </motion.section>

        {/* Biography Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          // Menggunakan max-w-5xl dan leading-relaxed agar sama dengan deskripsi Hero
          className="max-w-5xl space-y-6 text-gray-700 leading-relaxed text-base md:text-lg"
        >
          <p>
            Hi! I am <span className="font-semibold text-gray-900">Ardhananta Ibanez</span>, a seasoned software engineer with a deep passion for creating elegant and efficient solutions through code. With a strong foundation in JavaScript and TypeScript, along with a comprehensive understanding of various frontend libraries and frameworks. Currently, I reside in Semarang, Indonesia ID.
          </p>
          <p>
            As a fast learner and adaptive thinker, I thrive in dynamic environments where innovation is the driving force. My collaborative nature allows me to seamlessly integrate with teams, contributing not only my technical prowess but also a humble attitude.
          </p>
        </motion.section>

        {/* Career Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 text-gray-900">
              <Briefcase size={22} />
              <h2 className="text-2xl font-bold">Career</h2>
            </div>
            

          </div>

          {/* Career Cards List */}
          <div className="grid grid-cols-1 gap-4 max-w-5xl">
            {careerData.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm hover:border-blue-100 hover:shadow-sm transition-all"
              >
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
    </section>
  );
};

export default AboutPage;