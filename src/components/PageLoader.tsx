"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sunrise } from "lucide-react";

export const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (2.5 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Generate multiple egg-shaped particles with different sizes and delays
  const generateEggParticles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 6 + 4; // Random size between 4-10px
      const angle = Math.random() * Math.PI * 2; // Random angle
      const distance = 60 + Math.random() * 40; // Random distance from center
      const delay = Math.random() * 1.2; // Random delay
      const duration = 1.8 + Math.random() * 1.5; // Random duration

      // Determine color based on index - using amber palette
      let color;
      if (i % 3 === 0) color = "#F59E0B"; // Amber-500
      else if (i % 3 === 1) color = "#D97706"; // Amber-600
      else color = "#92400E"; // Amber-800

      return { size, angle, distance, delay, duration, color };
    });
  };

  const eggParticles = generateEggParticles(18);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-amber-50 flex flex-col items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 overflow-hidden opacity-5">
            <div className="absolute h-full w-full bg-[linear-gradient(to_right,#F59E0B_1px,transparent_1px),linear-gradient(to_bottom,#F59E0B_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </div>

          {/* Animated floating eggs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-10 h-14 rounded-t-full rounded-b-full bg-amber-200/20"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          <motion.div
            className="absolute bottom-1/4 left-1/3 w-12 h-16 rounded-t-full rounded-b-full bg-amber-500/20"
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
              transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          <motion.div
            className="absolute top-1/3 left-1/4 w-8 h-11 rounded-t-full rounded-b-full border border-amber-600/30"
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0],
              rotate: [0, -8, 0],
              transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          <motion.div
            className="absolute bottom-1/3 right-1/4 w-14 h-18 rounded-t-full rounded-b-full border border-amber-500/30"
            animate={{
              scale: [1, 1.1, 1],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          {/* Main centered animation container */}
          <div className="flex flex-col items-center justify-center">
            {/* Central animation */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Pulsing outer ring */}
              <motion.div
                className="absolute w-64 h-64 rounded-full border-2 border-amber-500/30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />

              {/* Rotating rings */}
              <motion.div
                className="absolute w-56 h-56 rounded-full border border-amber-600/40"
                animate={{
                  rotate: 360,
                  transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {/* Egg elements on the ring */}
                <motion.div className="absolute top-0 left-1/2 w-4 h-5 -ml-2 rounded-t-full rounded-b-full bg-amber-600" />
                <motion.div className="absolute bottom-0 left-1/2 w-4 h-5 -ml-2 rounded-t-full rounded-b-full bg-amber-600" />
                <motion.div className="absolute left-0 top-1/2 w-4 h-5 -mt-2.5 rounded-t-full rounded-b-full bg-amber-600" />
                <motion.div className="absolute right-0 top-1/2 w-4 h-5 -mt-2.5 rounded-t-full rounded-b-full bg-amber-600" />
              </motion.div>

              <motion.div
                className="absolute w-48 h-48 rounded-full border border-amber-500/40"
                animate={{
                  rotate: -360,
                  transition: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                {/* Smaller egg elements on the counter-rotating ring */}
                <motion.div className="absolute top-0 left-1/2 w-3 h-4 -ml-1.5 rounded-t-full rounded-b-full bg-amber-500" />
                <motion.div className="absolute bottom-0 left-1/2 w-3 h-4 -ml-1.5 rounded-t-full rounded-b-full bg-amber-500" />
                <motion.div className="absolute left-0 top-1/2 w-3 h-4 -mt-2 rounded-t-full rounded-b-full bg-amber-500" />
                <motion.div className="absolute right-0 top-1/2 w-3 h-4 -mt-2 rounded-t-full rounded-b-full bg-amber-500" />
              </motion.div>

              {/* Center elements */}
              <div className="relative">
                {/* Center egg */}
                <motion.div
                  className="w-28 h-36 rounded-t-full rounded-b-full bg-gradient-to-br from-amber-500/90 to-amber-600/80 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.8, ease: "easeOut" },
                  }}
                >
                  {/* Inner Sunrise icon */}
                  <motion.div
                    className="mt-2"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: 1,
                      transition: {
                        duration: 0.8,
                        delay: 0.2,
                        ease: "easeOut",
                      },
                    }}
                  >
                    <Sunrise size={32} className="text-white" />
                  </motion.div>
                </motion.div>

                {/* Outer egg shape */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-36 h-44 border-2 border-amber-400 rounded-t-full rounded-b-full -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 0.7,
                    transition: { duration: 1, delay: 0.3, ease: "easeOut" },
                  }}
                />

                {/* Egg-shaped particles */}
                {eggParticles.map((particle, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 rounded-t-full rounded-b-full"
                    style={{
                      width: `${particle.size}px`,
                      height: `${particle.size * 1.3}px`, // Make them egg-shaped
                      backgroundColor: particle.color,
                    }}
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                    }}
                    animate={{
                      x: Math.cos(particle.angle) * particle.distance,
                      y: Math.sin(particle.angle) * particle.distance,
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      rotate: [0, Math.random() * 30 - 15, 0], // Random slight rotation
                      transition: {
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        repeatDelay: Math.random() * 1,
                        ease: "easeInOut",
                      },
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Text animation */}
            <div className="overflow-hidden mt-8">
              <motion.div
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.7, delay: 0.6, ease: "easeOut" },
                }}
              >
                <h2 className="text-4xl font-bold tracking-wide">
                  <span className="text-amber-800">UDI'S</span>
                  <span className="text-amber-500"> EGG</span>
                </h2>
                <h3 className="text-xl font-medium text-amber-700 mt-1 tracking-widest">
                  FARM FRESH QUALITY
                </h3>
              </motion.div>
            </div>

            {/* Highlights */}
            <motion.div
              className="mt-6 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.9, duration: 0.7 },
              }}
            >
              <motion.div
                className="w-3 h-4 bg-amber-800 rounded-t-full rounded-b-full"
                animate={{
                  scale: [1, 1.3, 1],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  },
                }}
              />
              <motion.div
                className="w-3 h-4 bg-amber-500 rounded-t-full rounded-b-full"
                animate={{
                  scale: [1, 1.3, 1],
                  transition: {
                    duration: 1.5,
                    delay: 0.5,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  },
                }}
              />
              <motion.div
                className="w-3 h-4 bg-amber-300 rounded-t-full rounded-b-full"
                animate={{
                  scale: [1, 1.3, 1],
                  transition: {
                    duration: 1.5,
                    delay: 1,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  },
                }}
              />
            </motion.div>

            {/* Progress bar */}
            <div className="mt-8 w-80 h-1.5 bg-amber-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-800 to-amber-500"
                initial={{ width: 0 }}
                animate={{
                  width: "100%",
                  transition: { duration: 2.3, ease: "easeInOut" },
                }}
              />
            </div>

            {/* Loading text */}
            <motion.p
              className="mt-4 text-amber-700 font-medium tracking-[0.3em]"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.3, duration: 0.5 },
              }}
            >
              <motion.span
                animate={{
                  opacity: [1, 0.4, 1],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                LOADING
              </motion.span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
