"use client";

import Image from "next/image";
import Tailwind from "@/app/Assets/Tailwind.png";

export default function TechInfiniteScroll() {
  const techs = [
    { name: "Framer Motion", logo: "https://web-creator.ru/technologies/framer_motion.png" },
    { name: "Kotlin", logo: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3254005/kotlin-icon-md.png" },
    { name: "PHP", logo: "https://cdn.icon-icons.com/icons2/2415/PNG/512/php_plain_logo_icon_146397.png" },
    { name: "SQLite", logo: "https://tse2.mm.bing.net/th/id/OIP.hXxpU_nj2fRbceaHmLuilwHaHa?pid=Api&P=0&h=220" },
    { name: "Laravel", logo: "https://tse1.mm.bing.net/th/id/OIP.s7ZEqkmVrugV-4MdcVxMaAHaHa?pid=Api&P=0&h=220" },
    { name: "SASS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { name: "Node JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "ReactJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React Router", logo: "https://reactrouter.com/_brand/React%20Router%20Brand%20Assets/React%20Router%20Logo/Light.png" },
    { name: "ViteJS", logo: "https://tse3.mm.bing.net/th/id/OIP.-clCRotMTDkkIpeLClXBsAHaHa?pid=Api&P=0&h=220" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Bootstrap", logo: "https://w7.pngwing.com/pngs/804/269/png-transparent-bootstrap-hd-logo.png" },
    { name: "TypeScript", logo: "https://w7.pngwing.com/pngs/74/362/png-transparent-typescript-plain-logo-icon.png" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind", logo: Tailwind },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  ];

  // Membagi data menjadi dua bagian agar atas dan bawah berbeda
  const half = Math.ceil(techs.length / 2);
  const topRow = techs.slice(0, half);
  const bottomRow = techs.slice(half);

  return (
    <section className="relative w-full overflow-hidden py-10">
      <div className="px-16 mb-6">
        <h1 className="text-2xl font-bold text-gray-900"> {'</> Skills'} </h1>
        <p className="font-semibold text-lg">My coding skills</p>
      </div>

      <div className="flex flex-col gap-6">
        
        {/* Baris 1: Kanan ke Kiri (Data bagian pertama) */}
        <div className="flex w-max animate-infinite-scroll items-center">
          {[...topRow, ...topRow].map((item, index) => (
            <div key={`top-${index}`} className="mx-2 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 shadow-sm">
              <Image 
                src={item.logo} 
                alt={item.name} 
                width={22} 
                height={22} 
                unoptimized 
                className="object-contain" 
              />
              <span className="whitespace-nowrap text-sm font-medium text-gray-700">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Baris 2: Kiri ke Kanan (Data bagian kedua) */}
        <div className="flex w-max animate-infinite-scroll-reverse items-center">
          {[...bottomRow, ...bottomRow].map((item, index) => (
            <div key={`bottom-${index}`} className="mx-2 flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 shadow-sm">
              <Image 
                src={item.logo} 
                alt={item.name} 
                width={22} 
                height={22} 
                unoptimized 
                className="object-contain" 
              />
              <span className="whitespace-nowrap text-sm font-medium text-gray-700">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gradasi Fade (Kiri & Kanan) */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />
    </section>
  );
}