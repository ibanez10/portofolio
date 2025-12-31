"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Building2 } from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  const careerData = [
    {
      title: "Accounting",
      company: "Hotel Horison Nindya",
      location: "Semarang",
      period: "Nov 2025 - Dec 2025",
      duration: "1 Months",
      logo: "https://restomart.com/wp-content/uploads/2021/09/Logo-Hotel-Horison-Nindya.jpg",
    },
    {
      title: "Freelance Fullstack Developer",
      company: "PT Craftture Indo Designs",
      location: "Semarang",
      period: "Jun 2025 - Nov 2025",
      duration: "6 Months",
      logo: "https://rocciastudio.com/cdn/shop/files/logo.png?v=1715392075&width=210",
    },
     {
      title: "Kelas Industri Digital (KiDi)",
      company: "Telkom Indonesia",
      location: "Semarang",
      period: "Aug 2024 - Jan 2025",
      duration: "6 Months",
      // Link logo Google (Placeholder)
      logo: "https://www.telkom.co.id/minio/show/data/image_upload/page/1594112895830_compress_PNG%20Icon%20Telkom.png",
    },
    {
      title: "Mobile Developer",
      company: "BPR Arto Moro",
      location: "Semarang",
      period: "Feb 2024 - Mei 2024",
      duration: "4 Months",
      logo: "https://bprartomoro.co.id/wp-content/uploads/2025/07/Logo-BPR-Arto-Moro.png",
    },
  ];

  return (
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
          <div className="border-t border-dashed border-gray-300 w-full"></div>
        </motion.section>

        {/* Biography Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl space-y-6 text-gray-700 leading-relaxed text-base md:text-lg"
        >
          <p>
            Hi! I am <span className="font-semibold text-gray-900">Ardhananta Ibanez</span>, a seasoned software engineer with a deep passion for creating elegant and efficient solutions through code. Currently, I reside in Semarang, Indonesia ID.
          </p>
          <p>
            As a fast learner and adaptive thinker, I thrive in dynamic environments where innovation is the driving force. My collaborative nature allows me to seamlessly integrate with teams.
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
            <div className="block items-center gap-2 text-gray-900">
              <Briefcase size={22} />
              <h2 className="text-2xl font-bold">Career</h2>
              <p className="text-lg font-semibold">My Internship and Job career journey</p>
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
                className="group shadow-sm relative flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl border border-gray-100 bg-white/80 backdrop-blur-sm hover:border-blue-100 hover:shadow-lg transition-all"
              >
                {/* Image Container */}
                <div className="relative w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden border border-gray-100">
                  <Image
                    src={job.logo}
                    alt={job.company}
                    width={40}
                    height={40}
                    unoptimized // Penting: Agar tidak perlu setting next.config.js untuk link Google
                    className="object-contain"
                  />
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