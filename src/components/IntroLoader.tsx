"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MousePointerClick, ArrowRight } from "lucide-react";

export function IntroLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const increment = Math.floor(Math.random() * 15) + 8;
        return Math.min(100, prev + increment);
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 850);
  };

  if (!isVisible) return null;

  const letterVariants = {
    hidden: { opacity: 0, y: 35, rotateX: -60, filter: "blur(8px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        delay: 0.15 + i * 0.08,
        duration: 0.7,
        ease: "easeOut" as const,
      },
    }),
  };

  const brandWords = [
    { word: "MS", letters: ["M", "S"] },
    { word: "PARK", letters: ["P", "A", "R", "K"] },
  ];

  let charIndex = 0;

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8 },
          }}
          onClick={handleDismiss}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-xl text-white cursor-pointer select-none p-4 overflow-hidden"
        >
          {/* Animated Background Ambient Aurora Lights */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                rotate: [0, 90, 0],
                x: [0, 40, 0],
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-500/50 blur-[120px]"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [0, -90, 0],
                x: [0, -50, 0],
              }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-yellow-400/30 blur-[120px]"
            />
          </div>

          {/* OVAL CAPSULE CONTAINER with Fly-Away on Exit */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -900,
              scale: 0.7,
              rotateX: 35,
              rotateZ: -5,
              filter: "blur(25px)",
              transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full max-w-[480px] sm:max-w-[540px] px-8 py-12 sm:px-12 sm:py-14 rounded-[80px] sm:rounded-[100px] bg-gradient-to-b from-zinc-900/90 via-zinc-950/95 to-black/95 border border-white/20 shadow-2xl shadow-blue-500/20 backdrop-blur-2xl flex flex-col items-center text-center overflow-hidden"
          >
            {/* Glowing Border Sweep Effect around the Oval */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute -inset-[200%] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(251,191,36,0.6)_340deg,rgba(245,158,11,0.9)_360deg)] pointer-events-none opacity-70"
            />
            <div className="absolute inset-[1px] rounded-[79px] sm:rounded-[99px] bg-zinc-950/95 pointer-events-none" />

            {/* Inner Content on top of background */}
            <div className="relative z-10 flex flex-col items-center w-full">
              {/* Circular Emblem with soft glow */}
              <motion.div
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative mb-5"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-amber-400 to-amber-600 shadow-xl shadow-amber-500/40">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-900 border-2 border-zinc-950">
                    <Image
                      src="/ms-pro.jpg"
                      alt="MS Park Emblem"
                      fill
                      sizes="(max-width: 640px) 80px, 96px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Pulsing ring */}
                <motion.div
                  animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="absolute -inset-2 rounded-full border border-amber-400/60 pointer-events-none"
                />
              </motion.div>

              {/* Tagline Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/15 text-[11px] font-semibold tracking-wider uppercase text-amber-400 border border-amber-400/25 backdrop-blur-md mb-4 shadow-sm"
              >
                <Sparkles className="w-3 h-3 text-amber-400" />
                Original Garments • Chattogram
              </motion.div>

              {/* ANIMATED "MS PARK" TEXT with Staggered Kinetic Letters & Shimmer */}
              <div className="flex items-center justify-center gap-3 sm:gap-4 my-2 perspective-500">
                {brandWords.map((group, gIdx) => (
                  <div key={gIdx} className="flex items-center">
                    {group.letters.map((char) => {
                      const current = charIndex++;
                      return (
                        <motion.span
                          key={`${gIdx}-${char}`}
                          custom={current}
                          variants={letterVariants}
                          initial="hidden"
                          animate="visible"
                          className="inline-block text-4xl sm:text-6xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-amber-400 to-amber-600 drop-shadow-md"
                        >
                          {char}
                        </motion.span>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Animated Shimmer Line below brand name */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "140px", opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="h-1 rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-600 my-2 shadow-sm shadow-amber-400/50"
              />

              {/* Showroom location text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xs text-zinc-400 font-medium tracking-wide mt-1"
              >
                Shop 335, Yunusco City Centre, GEC Circle
              </motion.p>

              {/* Loading Bar with glow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="w-48 sm:w-64 mt-6 space-y-2"
              >
                <div className="w-full h-1.5 bg-zinc-800/90 rounded-full overflow-hidden border border-white/10 p-0.5">
                  <motion.div
                    className="h-full bg-gradient-to-r from-yellow-400 via-amber-400 to-amber-500 rounded-full shadow-sm shadow-amber-400/40"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut" }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>LOADING STORE</span>
                  <span className="text-amber-400 font-semibold">{progress}%</span>
                </div>
              </motion.div>

              {/* Click / Tap Anywhere to Fly Away Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, -4, 0] }}
                transition={{
                  delay: 0.85,
                  y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" },
                }}
                className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/25 text-xs font-bold text-amber-300 backdrop-blur-md shadow-lg transition-all"
              >
                <MousePointerClick className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>Tap anywhere to enter</span>
                <ArrowRight className="w-3 h-3 text-amber-400" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
