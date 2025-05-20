"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sunrise, Menu, X } from "lucide-react";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-white/90 backdrop-blur-sm py-4 px-6 md:px-12 flex justify-between items-center shadow-sm"
    >
      <div className="flex items-center">
        <motion.div whileHover={{ rotate: 20 }} transition={{ duration: 0.2 }}>
          <Sunrise size={32} className="text-amber-500 mr-2" />
        </motion.div>
        <motion.h1
          className="text-2xl font-bold text-amber-800"
          whileHover={{ scale: 1.05 }}
        >
          Udi Eggs
        </motion.h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {["About", "Products", "Benefits", "Sustainability", "Contact"].map(
          (item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-amber-900 font-medium hover:text-amber-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          )
        )}
      </div>

      {/* Mobile Menu Button */}
      <motion.div
        className="md:hidden flex items-center"
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X size={24} className="text-amber-800" />
          ) : (
            <Menu size={24} className="text-amber-800" />
          )}
        </button>
      </motion.div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col py-4">
            {["About", "Products", "Benefits", "Sustainability", "Contact"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-amber-900 font-medium hover:text-amber-500 px-6 py-3 transition-colors"
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};
