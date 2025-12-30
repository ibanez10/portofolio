// components/LayoutWrapper.jsx
"use client"; // Wajib ada untuk menggunakan Hooks

import React, { useState } from "react"; // Tambahkan baris ini!
import Sidebar from "./Sidebar";
import MobileNavbar from "./MobileNavbar";
import MeteorEffect from "./MeteorEffect";

export default function LayoutWrapper({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen font-sans overflow-x-hidden">
      {/* Meteor di layer paling belakang */}
      <MeteorEffect />

      {/* Navbar khusus Mobile */}
      <MobileNavbar />

      {/* Sidebar khusus Desktop */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      
      {/* Konten Utama */}
      <main 
        className={`relative z-10 flex-1 transition-all duration-300 min-h-screen
          ${isCollapsed ? "md:ml-20" : "md:ml-64"} 
          pt-20 md:pt-8 bg-transparent`} 
      >
        <div className="px-6 md:px-12 max-w-6xl mx-auto">
            {children}
        </div>
      </main>
    </div>
  );
}