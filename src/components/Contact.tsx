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
} from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-800">
            Get In Touch
          </motion.h2>
          <motion.p className="mt-4 text-base md:text-lg lg:text-xl text-amber-700/80 max-w-2xl mx-auto">
            Have questions about our products or want to place a bulk order?
            Reach out to us and we'll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="bg-amber-50 p-6 md:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-amber-800 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <motion.div className="flex items-center" whileHover={{ x: 10 }}>
                <div className="bg-amber-100 p-2 md:p-3 rounded-full mr-4">
                  <Phone size={20} className="text-amber-600" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-amber-500 text-xs md:text-sm mb-1">
                    Phone
                  </p>
                  <span className="text-base md:text-lg font-medium truncate block">
                    +234 (555) 123-4567
                  </span>
                </div>
              </motion.div>

              <motion.div className="flex items-center" whileHover={{ x: 10 }}>
                <div className="bg-amber-100 p-2 md:p-3 rounded-full mr-4">
                  <Mail size={20} className="text-amber-600" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-amber-500 text-xs md:text-sm mb-1">
                    Email
                  </p>
                  <span className="text-base md:text-lg font-medium truncate block">
                    hello@udisegg.com
                  </span>
                </div>
              </motion.div>

              <motion.div className="flex items-center" whileHover={{ x: 10 }}>
                <div className="bg-amber-100 p-2 md:p-3 rounded-full mr-4 flex-shrink-0">
                  <MapPin size={20} className="text-amber-600" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-amber-500 text-xs md:text-sm mb-1">
                    Address
                  </p>
                  <span className="text-base md:text-lg font-medium break-words">
                    123 Farm Road
                  </span>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 md:mt-10">
              <h4 className="font-bold text-lg md:text-xl text-amber-800 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-3 md:space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ y: -5 }}
                  className="bg-amber-100 p-2 md:p-3 rounded-full hover:bg-amber-200 transition-colors"
                >
                  <Instagram size={20} className="text-amber-600" />
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ y: -5 }}
                  className="bg-amber-100 p-2 md:p-3 rounded-full hover:bg-amber-200 transition-colors"
                >
                  <Facebook size={20} className="text-amber-600" />
                </motion.a>

                <motion.a
                  href="#"
                  whileHover={{ y: -5 }}
                  className="bg-amber-100 p-2 md:p-3 rounded-full hover:bg-amber-200 transition-colors"
                >
                  <Twitter size={20} className="text-amber-600" />
                </motion.a>
              </div>
            </div>
          </div>

          <motion.div
            className="bg-white border-2 border-amber-100 p-6 md:p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-amber-800 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-amber-800 mb-2 text-sm md:text-base">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 md:p-3 bg-amber-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm md:text-base"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-amber-800 mb-2 text-sm md:text-base">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 md:p-3 bg-amber-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm md:text-base"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-amber-800 mb-2 text-sm md:text-base">
                  Message
                </label>
                <textarea
                  className="w-full p-2 md:p-3 bg-amber-50 rounded-lg h-24 md:h-32 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm md:text-base"
                  placeholder="Your message"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-amber-500 text-white py-2 md:py-3 rounded-xl font-medium hover:bg-amber-600 transition-colors text-sm md:text-base"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
