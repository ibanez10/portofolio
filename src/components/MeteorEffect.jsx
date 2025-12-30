// components/MeteorEffect.jsx
"use client";

import React, { useEffect, useState } from "react";

const MeteorEffect = () => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    // 15 meteor untuk kepadatan yang pas
    setMeteors(new Array(15).fill(true));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {meteors.map((_, i) => (
        <span
          key={i}
          className="absolute h-[2px] w-[2px] rounded-full animate-meteor-professional"
          style={{
            top: "-100px",
            // Memastikan meteor lebih banyak muncul dari sisi kanan atas
            left: `${Math.floor(Math.random() * 90 + 10)}%`, 
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${Math.random() * 6 + 4}s`,
            // Membuat beberapa meteor lebih kecil/besar untuk efek kedalaman
            transform: `scale(${Math.random() * 1.5})`,
          }}
        />
      ))}
    </div>
  );
};

export default MeteorEffect;