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

export const Sustainability = () => {
  const sustainabilityPractices = [
    {
      title: "Solar-Powered Farm",
      description:
        "Our farm runs on 100% renewable solar energy, reducing our carbon footprint significantly.",
      icon: "☀️",
    },
    {
      title: "Water Conservation",
      description:
        "Our advanced water recycling system reduces water usage by 70% compared to conventional farms.",
      icon: "💧",
    },
    {
      title: "Organic Feed",
      description:
        "We grow most of our feed organically on-site, eliminating transportation emissions.",
      icon: "🌾",
    },
    {
      title: "Zero Waste",
      description:
        "All organic waste is composted and used to fertilize our fields in a closed-loop system.",
      icon: "♻️",
    },
  ];

  return (
    <section
      className="py-10 bg-amber-50 relative overflow-hidden"
      id="sustainability"
    >
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-100 rounded-full opacity-50"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-100 rounded-full opacity-50"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <span className="text-amber-500 text-lg font-medium">
            Our Commitment
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mt-2">
            Farm to Table Journey
          </h2>
          <p className="mt-4 text-xl text-amber-700/80 max-w-2xl mx-auto">
            Discover how our eggs make their journey from our sustainable farm
            directly to your breakfast table.
          </p>
        </motion.div>

        <div className="relative">
          {/* Journey timeline */}
          <div className="hidden md:block absolute top-0 left-1/2 h-full w-1 bg-amber-200 transform -translate-x-1/2"></div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Step 1 */}
            <motion.div className="md:pr-12 md:text-right" variants={fadeIn}>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full text-white flex items-center justify-center font-bold text-lg">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                Happy Hens, Quality Eggs
              </h3>
              <p className="text-amber-700/80">
                Our free-range hens enjoy spacious barns and outdoor access,
                producing eggs with richer taste and nutrition.
              </p>
            </motion.div>

            <div className="md:col-span-1"></div>

            {/* Step 2 */}
            <div className="md:col-span-1"></div>

            <motion.div className="md:pl-12" variants={fadeIn}>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full text-white flex items-center justify-center font-bold text-lg">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                Daily Collection & Inspection
              </h3>
              <p className="text-amber-700/80">
                Eggs are collected daily and inspected for quality, ensuring
                only the freshest eggs make it to your table.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div className="md:pr-12 md:text-right" variants={fadeIn}>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full text-white flex items-center justify-center font-bold text-lg">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                Eco-Friendly Packaging
              </h3>
              <p className="text-amber-700/80">
                We use 100% biodegradable cartons made from recycled materials,
                minimizing our environmental impact.
              </p>
            </motion.div>

            <div className="md:col-span-1"></div>

            {/* Step 4 */}
            <div className="md:col-span-1"></div>

            <motion.div className="md:pl-12" variants={fadeIn}>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="w-12 h-12 bg-amber-500 rounded-full text-white flex items-center justify-center font-bold text-lg">
                  4
                </div>
              </div>
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                Direct Delivery
              </h3>
              <p className="text-amber-700/80">
                Our eggs travel the shortest possible distance to reach you,
                ensuring maximum freshness and minimal carbon footprint.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 bg-white p-10 rounded-2xl shadow"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-amber-800 mb-8 text-center">
            Our Sustainable Practices
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityPractices.map((practice, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-amber-50 p-6 rounded-xl text-center"
              >
                <div className="text-4xl mb-4">{practice.icon}</div>
                <h4 className="text-xl font-bold text-amber-800 mb-3">
                  {practice.title}
                </h4>
                <p className="text-amber-700/80">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
