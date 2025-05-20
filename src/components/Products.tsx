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

export const Products = () => {
  const products = [
    {
      name: "Classic Free-Range",
      description: "Our signature farm-fresh eggs from free-range, happy hens",
      price: "#5000",
      image: "/images/3.png",
    },
    {
      name: "Organic Jumbo",
      description: "Extra large eggs from our organically-fed heritage hens",
      price: "#5000",
      image: "/images/1.jpg",
    },
    {
      name: "Omega-3 Enriched",
      description: "Nutrient-rich eggs from hens fed with flaxseed supplements",
      price: "#5000",
      image: "/images/3.jpg",
    },
  ];

  return (
    <section id="products" className="py-12">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.h2 className="text-4xl md:text-5xl font-bold text-amber-800">
            Our Premium Eggs
          </motion.h2>
          <motion.p className="mt-4 text-xl text-amber-700/80 max-w-2xl mx-auto">
            Discover our selection of farm-fresh eggs, each type carefully
            produced for maximum nutrition and flavor.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-amber-800">
                    {product.name}
                  </h3>
                  <span className="text-xl font-bold text-amber-500">
                    {product.price}
                  </span>
                </div>
                <p className="text-amber-700/80 mb-6">{product.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-amber-500 text-white py-3 rounded-xl font-medium hover:bg-amber-600 transition-colors"
                >
                  Order Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
