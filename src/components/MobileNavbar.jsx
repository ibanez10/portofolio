"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  CloudSun,
  Home,
  User,
  PenTool,
  FolderGit2,
  Map,
  ClipboardList,
  MessageCircle,
  Send,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import profile from "@/app/profile.jpeg";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/About", icon: User },
  { name: "Blog", href: "/blog", icon: PenTool },
  { name: "Projects", href: "/Project", icon: FolderGit2 },
  { name: "Roadmap", href: "/Roadmap", icon: Map },
  { name: "Task Board", href: "/task-board", icon: ClipboardList },
  { name: "Chat Room", href: "/chat-room", icon: MessageCircle },
  { name: "Contact", href: "/Contact", icon: Send },
];

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll saat menu terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <div className="md:hidden">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-[640px] mx-auto px-5 py-4 flex items-center justify-between">
          {/* Profile */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image src={profile} alt="Profile" fill className="object-cover" />
            </div>
            <span className="font-bold text-lg text-gray-900">
              Ardhananta Ibanez
            </span>
          </Link>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <a className="text-gray-700 transition">
              <CloudSun size={27} strokeWidth={2} />
            </a>

            <a
              onClick={() => setOpen(!open)}
              className="text-gray-900"
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.4, opacity: 0 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </a>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-white/80 backdrop-blur-xl z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* MENU DRAWER */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[72px] bottom-0 z-50 overflow-y-auto"
          >
            <div className="max-w-[640px] mx-auto px-6 py-8 flex flex-col gap-6">
              {menuItems.map((item, i) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-5 py-4 ${
                        active
                          ? "text-blue-600 font-bold"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      <Icon size={22} strokeWidth={active ? 2 : 1.4} />
                      <span className="text-xl tracking-tight">
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
