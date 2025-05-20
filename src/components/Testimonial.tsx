"use client";
import React from "react";
import { motion } from "framer-motion";

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

export const Testimonials = () => {
  const testimonials = [
    {
      text: "These are the best eggs I've ever tasted! The yolks are so yellow and flavorful. I won't buy eggs from anywhere else now.",
      name: "Sarah Johnson",
      role: "Home Chef",
    },
    {
      text: "We use Udi Eggs exclusively in our restaurant. Our customers can taste the difference, and they love knowing they're supporting a local, ethical farm.",
      name: "Chef Michael Torres",
      role: "Executive Chef",
    },
    {
      text: "As someone who cares deeply about animal welfare, I appreciate Udi's commitment to free-range, humane practices. Plus, the eggs are delicious!",
      name: "Lisa Montgomery",
      role: "Nutritionist",
    },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold text-amber-800">
            What Our Customers Say
          </motion.h2>
          <motion.p className="mt-4 text-xl text-amber-700/80 max-w-2xl mx-auto">
            Don't just take our word for it—hear from the people who enjoy our
            eggs every day.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              className="bg-amber-50 p-8 rounded-2xl shadow relative"
            >
              <div className="text-6xl text-amber-200 absolute top-4 left-4">
                "
              </div>
              <p className="text-amber-900/80 mb-8 relative z-10">
                {testimonial.text}
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-bold text-amber-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-amber-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
