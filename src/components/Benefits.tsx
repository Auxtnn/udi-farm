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

export const Benefits = () => {
  const nutritionalInfo = [
    { name: "Protein", amount: "6g", highlight: true },
    { name: "Vitamin D", amount: "15% DV", highlight: true },
    { name: "Vitamin B12", amount: "20% DV", highlight: true },
    { name: "Choline", amount: "147mg", highlight: false },
    { name: "Selenium", amount: "28% DV", highlight: false },
    { name: "Lutein", amount: "166mcg", highlight: false },
  ];

  const benefits = [
    {
      title: "Rich in Nutrients",
      description:
        "Our eggs contain essential vitamins, minerals, and high-quality proteins that support overall health.",
      icon: (
        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-amber-500"></div>
        </div>
      ),
    },
    {
      title: "No Antibiotics",
      description:
        "Our hens are raised without antibiotics, ensuring you get clean, natural nutrition in every egg.",
      icon: (
        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
          <Check size={24} className="text-amber-500" />
        </div>
      ),
    },
    {
      title: "Omega-3 Enriched",
      description:
        "Our special feed blend naturally increases the omega-3 content, supporting heart and brain health.",
      icon: (
        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
          <span className="text-amber-500 font-bold">Ω3</span>
        </div>
      ),
    },
  ];

  return (
    <section className="py-12 bg-white" id="benefits">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <span className="text-amber-500 text-lg font-medium">
            Why Choose Our Eggs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mt-2">
            Nature's Perfect Nutrition
          </h2>
          <p className="mt-4 text-xl text-amber-700/80 max-w-2xl mx-auto">
            Our eggs aren't just delicious – they're packed with essential
            nutrients your body needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-amber-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-amber-800 mb-6">
                Nutritional Information
              </h3>
              <p className="text-amber-700/80 mb-6">
                Each large Golden Sunrise egg contains:
              </p>

              <div className="space-y-4">
                {nutritionalInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between items-center border-b border-amber-200 pb-2"
                    whileHover={{ x: 10 }}
                  >
                    <span
                      className={`font-medium ${
                        item.highlight ? "text-amber-800" : "text-amber-700/80"
                      }`}
                    >
                      {item.name}
                    </span>
                    <span
                      className={`${
                        item.highlight
                          ? "bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                          : "text-amber-700/80"
                      }`}
                    >
                      {item.amount}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-amber-100 rounded-xl">
                <p className="text-amber-800 text-sm">
                  *Based on a large egg (50g). Daily values (DV) based on a
                  2,000 calorie diet.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeIn} className="flex gap-6">
                <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-amber-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-amber-700/80">{benefit.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={fadeIn}
              className="mt-8 pt-8 border-t border-amber-100"
            >
              <h3 className="text-xl font-bold text-amber-800 mb-4">
                Our Commitment to Quality
              </h3>
              <p className="text-amber-700/80 mb-4">
                We believe in transparency. That's why we regularly test our
                eggs for nutritional content and share the results with our
                customers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
