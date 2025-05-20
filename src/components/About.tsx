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

export // About Component
const About = () => {
  const features = [
    {
      icon: <Users size={32} className="text-amber-500" />,
      title: "Family Owned",
      description:
        "Our farm has been in the family for three generations, with values passed down through the years.",
    },
    {
      icon: <Leaf size={32} className="text-amber-500" />,
      title: "Sustainable Practices",
      description:
        "We use environmentally friendly methods that keep our farm and hens healthy.",
    },
    {
      icon: <Check size={32} className="text-amber-500" />,
      title: "Quality Guaranteed",
      description:
        "Every egg is inspected for quality and freshness before it leaves our farm.",
    },
  ];

  return (
    <section id="about" className="py-14 bg-amber-50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.span className="text-amber-500 text-lg font-medium block mb-2">
            Our Heritage
          </motion.span>
          <motion.h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            The Udi's Story
          </motion.h2>
          <motion.p className="mt-4 text-xl text-amber-700/80 max-w-2xl mx-auto">
            From humble beginnings to becoming the region's most loved egg
            producer - our journey of quality and care.
          </motion.p>
        </motion.div>

        <div className="relative mt-20">
          {/* Timeline design */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-amber-200 transform -translate-x-1/2"></div>

          <div className="space-y-24">
            {/* Timeline item 1 */}
            <motion.div
              className="flex flex-col md:flex-row items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 text-right">
                <h3 className="text-3xl font-bold text-amber-800 mb-4">
                  The Beginning
                </h3>
                <p className="text-lg text-amber-700/80">
                  Udi's Eggs began with just 50 hens and a passion for quality.
                  Our founder, Ifeoma Eze, wanted to create eggs that tasted
                  like those from her childhood farm.
                </p>
              </div>

              <div className="md:hidden h-8 w-1 bg-amber-200"></div>

              <div className="hidden md:flex items-center justify-center z-10">
                <motion.div
                  className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold"
                  whileHover={{ scale: 1.2 }}
                >
                  1
                </motion.div>
              </div>

              <div className="md:w-1/2 md:pl-16">
                <div className="bg-amber-100 p-6 rounded-xl">
                  <p className="italic text-amber-800 text-lg">
                    "I wanted to create eggs that reminded people of the way
                    food used to taste – rich, flavorful, and natural."
                  </p>
                  <p className="text-right text-amber-500 mt-4">
                    - Chioma Ifeanyi-Eze, Founder
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Timeline item 2 */}
            <motion.div
              className="flex flex-col md:flex-row items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 text-right md:order-2">
                <h3 className="text-3xl font-bold text-amber-800 mb-4">
                  Growing Sustainably
                </h3>
                <p className="text-lg text-amber-700/80">
                  By 2010, we had expanded to over 2,000 hens while maintaining
                  our commitment to free-range farming and sustainable
                  practices. We implemented solar power and water recycling
                  systems.
                </p>
              </div>

              <div className="md:hidden h-8 w-1 bg-amber-200"></div>

              <div className="hidden md:flex items-center justify-center z-10">
                <motion.div
                  className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold"
                  whileHover={{ scale: 1.2 }}
                >
                  2
                </motion.div>
              </div>

              <div className="md:w-1/2 md:pl-16 md:order-1">
                <div className="bg-amber-100 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl font-bold text-amber-500 mr-3">
                      2,000+
                    </div>
                    <div className="text-amber-800">
                      Happy, healthy
                      <br />
                      free-range hens
                    </div>
                  </div>
                  <p className="text-amber-700/80">
                    Our flock grew while maintaining our core values of quality
                    and care.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Timeline item 3 */}
            <motion.div
              className="flex flex-col md:flex-row items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 text-right">
                <h3 className="text-3xl font-bold text-amber-800 mb-4">
                  Today
                </h3>
                <p className="text-lg text-amber-700/80">
                  Today, we maintain that same dedication to excellence while
                  caring for over 5,000 free-range hens across 30 acres of
                  beautiful countryside. We believe happy hens produce the best
                  eggs.
                </p>
              </div>

              <div className="md:hidden h-8 w-1 bg-amber-200"></div>

              <div className="hidden md:flex items-center justify-center z-10">
                <motion.div
                  className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold"
                  whileHover={{ scale: 1.2 }}
                >
                  3
                </motion.div>
              </div>

              <div className="md:w-1/2 md:pl-16">
                <div className="bg-amber-100 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="text-4xl font-bold text-amber-500 mr-3">
                        5,000+
                      </div>
                      <div className="text-amber-800">Hens</div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-4xl font-bold text-amber-500 mr-3">
                        30
                      </div>
                      <div className="text-amber-800">Acres</div>
                    </div>
                  </div>
                  <p className="text-amber-700/80">
                    Our commitment to quality and sustainability continues to
                    grow.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <motion.div
                className="mx-auto mb-6 bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-amber-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-amber-700/80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
