"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiHome, FiInfo, FiGrid, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { icon: FiHome, label: "Home", href: "/", isExternal: false },
    { icon: FiInfo, label: "About", href: "/about", isExternal: false },
    { icon: FiGrid, label: "Features", href: "/features", isExternal: false },
    { icon: FiArrowRight, label: "Get Started", href: "/get-started", isExternal: false },
  ];

  const handleLinkClick = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="fixed top-0 left-0 h-full z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover Area */}
      <div className="w-12 h-full bg-transparent" />

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isHovered ? 0 : "-100%" }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 40, 
          mass: 1 
        }}
        className="absolute top-0 left-0 h-full w-56 bg-white dark:bg-gray-900 shadow-2xl"
      >
        <div className="p-8 h-full flex flex-col">
          <h2 className="text-xl font-bold mb-12 text-gray-800 dark:text-gray-200">
            Rollout.ai
          </h2>
          <nav className="flex-1 flex flex-col justify-center space-y-8">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group cursor-pointer"
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <Icon className="text-xl group-hover:scale-105 transition-transform duration-200" />
                  <span className="text-base font-medium">{item.label}</span>
                </motion.div>
              );

              return item.isExternal ? (
                <a
                  key={index}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block"
                >
                  {content}
                </Link>
              );
            })}
          </nav>
          <div className="pt-8 pb-4">
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Press ESC to close
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 