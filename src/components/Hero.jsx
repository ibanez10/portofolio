"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="py-10">
      <div className="flex justify-between items-start">
        <div className="space-y-4">
          {/* Judul dengan Efek Mengetik */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
            Hi, I'm 
            <span className="text-gray-900">
              <Typewriter
                options={{
                  strings: ["Ardhananta Ibanez", "Software Engineer","Tech Enthusiast"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h1>

          {/* Badge Status */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-500 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              Freelance worker
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              Based in Semarang <span className="text-[10px] font-bold border border-gray-300 px-1 rounded">ID</span>
            </div>
          </div>

          {/* Deskripsi */}
          <p className="max-w-5xl text-gray-700 leading-relaxed text-base md:text-lg pt-4">
            Passionate and seasoned Software Engineer with a strong focus on frontend development. 
            Proficient in TypeScript and well-versed in all aspects of web technologies. 
            Collaborative team player dedicated to delivering efficient, scalable, and visually appealing web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;