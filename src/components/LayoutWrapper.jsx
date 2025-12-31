// components/LayoutWrapper.jsx
"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MobileNavbar from "./MobileNavbar";
import MeteorEffect from "./MeteorEffect";

export default function LayoutWrapper({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    // Penambahan 'overflow-hidden' dan 'h-screen' (opsional) untuk kontrol scroll yang lebih ketat
    <div className="relative flex flex-col md:flex-row min-h-screen font-sans overflow-hidden">
      {/* Meteor di layer paling belakang */}
      <MeteorEffect />

      {/* Navbar khusus Mobile - Dibuat Fixed di atas */}
      <header className="fixed top-0 left-0 w-full z-[60] md:hidden">
        <MobileNavbar />
      </header>

      {/* Sidebar khusus Desktop */}
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      
      {/* Konten Utama */}
      <main 
        className={`relative z-10 flex-1 transition-all duration-300 h-screen overflow-y-auto
          ${isCollapsed ? "md:ml-20" : "md:ml-64"} 
          pt-20 md:pt-8 bg-transparent scrollbar-hide`} 
      >
        <div className="px-6 md:px-12 max-w-6xl mx-auto pb-20 md:pb-10">
            {children}
        </div>
      </main>
    </div>
  );
}