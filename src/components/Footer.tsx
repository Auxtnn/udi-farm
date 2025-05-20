"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Sunrise,
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ShoppingBag,
  Check,
  Users,
  Leaf,
  MessageCircle,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-200 py-12 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Sunrise size={24} className="text-amber-500 mr-2" />
              <h3 className="text-xl font-bold">Udi Eggs</h3>
            </div>
            <p className="text-amber-300/80 mb-4">
              Providing farm-fresh, ethically-produced eggs.
            </p>
            <p className="text-amber-300/80">
              © {new Date().getFullYear()} Udi Eggs. All rights reserved.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "About",
                "Products",
                "Benefits",
                "Sustainability",
                "Contact",
              ].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-amber-300 transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Visit Us</h4>
            <p className="text-amber-300/80 mb-4">123 Farm Road</p>
            <p className="text-amber-300/80 mb-4">
              Monday - Saturday: 8am - 5pm
              <br />
              Sunday: 9am - 3pm
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="hover:text-amber-400 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="hover:text-amber-400 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="hover:text-amber-400 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-amber-800/50 text-center text-amber-400/60 text-sm">
          <p>Website designed with ❤️ for egg lovers everywhere</p>
        </div>
      </div>

      {/* WhatsApp floating chat button */}
      <motion.a
        href="https://wa.me/1234567890" // Replace with your actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 rounded-full p-4 shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-message-circle"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </motion.a>
    </footer>
  );
};

export default Footer;
