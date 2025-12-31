"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import profile from "@/app/profile.jpeg";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, User, PenTool, FolderGit2, Map, ClipboardList, 
  MessageCircle, Send, Heart, BadgeCheck 
} from "lucide-react";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "About", icon: User, href: "/About" },
    { name: "Blog", icon: PenTool, href: "/blog" },
    { name: "Projects", icon: FolderGit2, href: "/projects" },
    { name: "Roadmap", icon: Map, href: "/roadmap" },
    { name: "Task Board", icon: ClipboardList, href: "/task-board" },
    { name: "Chat Room", icon: MessageCircle, href: "/chat-room" },
    { name: "Contact", icon: Send, href: "/contact" },
  ];

  return (
    <motion.aside 
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
      initial={false}
      animate={{ width: isCollapsed ? 96 : 256 }} 
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed left-0 shadow-2xl rounded-r-3xl top-0 h-screen border-r border-gray-200 bg-white flex flex-col z-50 hidden md:flex overflow-y-auto scrollbar-hide font-sans"
    >
      {/* Profil Section */}
      <div className="relative flex flex-col items-center pt-12 pb-6">
        
        {/* Badge Hire Me - Muncul saat Expand */}
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ 
                x: 0, 
                opacity: 1,
                scale: [1, 1.05, 1], 
              }}
              exit={{ x: -20, opacity: 0 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: {
                  duration: 1.5,      
                  repeat: Infinity,  
                  ease: "easeInOut"   
                }
              }}
              className="absolute top-4 left-4 flex items-center gap-1.5 bg-white border border-green-100 px-2.5 py-1 rounded-full shadow-sm cursor-pointer z-20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold text-green-700 whitespace-nowrap">Hire me.</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Background Banner */}
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 128 }} 
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-0 left-0 w-full bg-gradient-to-br from-gray-200 to-gray-50 rounded-br-[80px] -z-10"
            />
          )}
        </AnimatePresence>

        {/* Avatar & Info */}
        <motion.div 
          key={isCollapsed ? "collapsed" : "expanded"}
          initial={{ filter: "blur(4px)", opacity: 0.8 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center"
        >
          <motion.div 
            layout 
            className={`relative mb-3 ${isCollapsed ? "w-12 h-12 mt-0" : "w-24 h-24 mt-2"}`}
          >
            <Image
              src={profile}
              alt="Profile"
              fill
              className="rounded-full object-cover border-2 border-white shadow-md"
            />
          </motion.div>

          {!isCollapsed && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center px-4"
            >
              <h2 className="text-lg font-bold text-gray-900 flex items-center justify-center gap-1">
                Ardhananta Ibanez <BadgeCheck size={16} className="text-blue-500 fill-blue-500/10" />
              </h2>
              <p className="text-sm text-gray-400 font-medium">@neezcode</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Navigasi */}
      <nav className={`flex-1 px-4 space-y-2 ${isCollapsed ? "mt-4" : "mt-2"}`}>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link key={item.name} href={item.href} className="block">
              <motion.div
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-4 px-4 py-3 text-sm font-medium rounded-2xl transition-all duration-200 ${
                  isActive 
                  ? "bg-gray-100 text-gray-950 shadow-sm" 
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 hover:shadow-sm"
                } ${isCollapsed ? "justify-center px-0" : ""}`}
              >
                <div className="flex-shrink-0">
                  <Icon size={isCollapsed ? 24 : 20} strokeWidth={isActive ? 2 : 1.5} />
                </div>
                
                {!isCollapsed && (
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="whitespace-nowrap overflow-hidden"
                  >
                    {item.name}
                  </motion.span>
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <motion.div layout className="mt-auto p-8 flex justify-center">
        {isCollapsed ? (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <Heart size={20} className="text-red-400 fill-red-400" />
          </motion.div>
        ) : (
          <p className="text-[10px] text-gray-400 font-medium italic">© 2025 with ❤️ by neezcode</p>
        )}
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;