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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 flex flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-amber-800 leading-tight"
            variants={fadeIn}
          >
            Farm Fresh <br />
            <span className="text-amber-500">Organic Eggs</span>
          </motion.h2>

          <motion.p
            className="mt-6 text-xl md:text-2xl text-amber-900/80 max-w-lg"
            variants={fadeIn}
          >
            Straight from our free-range hens to your breakfast table.
            Nutritious, delicious, and ethically produced.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.button
              variants={scaleUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-amber-600 transition-colors"
            >
              Order Now
            </motion.button>

            <motion.a
              variants={scaleUp}
              whileHover={{ scale: 1.05 }}
              href="#about"
              className="bg-white text-amber-800 border-2 border-amber-800 px-8 py-4 rounded-full text-lg font-medium shadow-md hover:bg-amber-50 transition-colors flex items-center justify-center"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 mt-16 md:mt-0 z-10"
          initial={{ opacity: 0, rotate: -10 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-full">
            <div className="bg-amber-200 rounded-full w-64 h-64 md:w-96 md:h-96 mx-auto relative overflow-hidden shadow-2xl">
              <img
                src="/images/egg.png"
                alt="Fresh organic eggs"
                className="object-cover w-full h-full"
              />
            </div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 md:right-12 bg-white p-4 rounded-xl shadow-xl"
            >
              <div className="text-amber-900 font-bold">100% Organic</div>
              <div className="text-amber-500 text-sm">No antibiotics ever</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -top-4 -left-4 md:left-12 bg-white p-4 rounded-xl shadow-xl"
            >
              <div className="text-amber-900 font-bold">Farm Fresh</div>
              <div className="text-amber-500 text-sm">Daily collection</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 w-full flex justify-center"
      >
        <motion.a
          href="#products"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-amber-800 flex flex-col items-center cursor-pointer"
        >
          <span className="mb-2">Scroll to discover</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>

      {/* Background decorative elements */}
      <div className="absolute top-1/3 left-10 w-32 h-32 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </section>
  );
};
