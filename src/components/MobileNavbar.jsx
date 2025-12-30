// components/MobileNavbar.jsx
"use client";

import React, { useState } from "react";
import { Menu, X, Sun } from "lucide-react"; // Menggunakan Lucide icons
import Link from "next/link";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="md:hidden fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-[100] px-4 py-3 flex items-center justify-between">
      {/* Profil Kiri */}
      <div className="flex items-center gap-3">
        <img 
          src="https://github.com/shadcn.png" 
          alt="Profile" 
          className="w-8 h-8 rounded-full border"
        />
        <h1 className="font-semibold text-lg flex items-center gap-1 text-gray-900">
          Ardhananta Ibanez <span className="text-blue-500 text-[10px]"></span>
        </h1>
      </div>

      {/* Kontrol Kanan */}
      <div className="flex items-center gap-4">
        <button className="text-gray-500 hover:text-gray-900">
          <Sun size={20} />
        </button>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown Menu Mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 shadow-lg animate-in slide-in-from-top duration-300">
            {/* Isi menu navigasi mobile di sini */}
            <nav className="flex flex-col gap-2">
                <Link href="/" onClick={() => setIsOpen(false)} className="py-2 text-sm font-medium border-b border-gray-50">Home</Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="py-2 text-sm font-medium border-b border-gray-50">About</Link>
                <Link href="/blog" onClick={() => setIsOpen(false)} className="py-2 text-sm font-medium border-b border-gray-50">Blog</Link>
            </nav>
        </div>
      )}
    </header>
  );
};

export default MobileNavbar;