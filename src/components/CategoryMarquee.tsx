"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import { CATEGORIES, ProductCategory } from "@/lib/mock-data";

interface CategoryMarqueeProps {
  onSelect: (category: ProductCategory) => void;
}

// Duplicate tiles 4× so the loop is seamless even on wide screens
const TILES = [...CATEGORIES, ...CATEGORIES, ...CATEGORIES, ...CATEGORIES];

const CARD_W = 240; // px
const CARD_GAP = 20; // px
const STEP = CARD_W + CARD_GAP;
const SPEED = 1.1; // px per frame — fast dynamic scroll

export function CategoryMarquee({ onSelect }: CategoryMarqueeProps) {
  const x = useMotionValue(0);
  const isPaused = useRef(false);

  // Total width of one full set of CATEGORIES
  const loopWidth = CATEGORIES.length * STEP;

  useAnimationFrame(() => {
    if (isPaused.current) return;
    const current = x.get();
    // Reset to 0 when we've scrolled one full set
    x.set(current <= -loopWidth ? 0 : current - SPEED);
  });

  // Keep translateX as a CSS transform
  const translateX = useTransform(x, (v) => `${v}px`);

  return (
    <section className="py-14 md:py-20 overflow-hidden bg-background">
      {/* Section header */}
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-amber-500 mb-1">
              Curated Collections
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Shop By Category
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Denim, shirts, polos &amp; chinos — fit for every occasion.
          </p>
        </div>
      </div>

      {/* Infinite marquee track */}
      <div
        className="relative"
        onMouseEnter={() => { isPaused.current = true; }}
        onMouseLeave={() => { isPaused.current = false; }}
        onTouchStart={() => { isPaused.current = true; }}
        onTouchEnd={() => { isPaused.current = false; }}
      >
        {/* Left fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
        {/* Right fade mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex"
          style={{ translateX, gap: `${CARD_GAP}px`, paddingLeft: "20px" }}
        >
          {TILES.map((cat, i) => (
            <motion.div
              key={`${cat.name}-${i}`}
              onClick={() => onSelect(cat.name)}
              whileHover={{ scale: 1.04, y: -6 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="relative cursor-pointer flex-shrink-0 rounded-2xl overflow-hidden border border-border/60 shadow-md group"
              style={{ width: CARD_W, height: 300 }}
            >
              {/* Photo */}
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="240px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Animated amber glow on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(ellipse at bottom, rgba(245,158,11,0.22) 0%, transparent 70%)",
                }}
              />

              {/* Shimmer top-right badge */}
              <div className="absolute top-3 right-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 backdrop-blur-sm"
                >
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span className="text-[10px] font-bold text-amber-300">{cat.count}+ Items</span>
                </motion.div>
              </div>

              {/* Text content */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-black uppercase tracking-tight flex items-center justify-between">
                  {cat.name}
                  <motion.span
                    className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-zinc-950"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.span>
                </h3>
                <p className="text-xs text-zinc-400 mt-1 font-medium">Tap to explore</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
