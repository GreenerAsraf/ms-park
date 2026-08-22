"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { STORE_INFO } from "@/lib/mock-data";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MapPin,
  Sparkles,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";

export interface HeroSlide {
  id: number;
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  accentText: string;
  tagline: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: "/ms-cover.jpg",
    badge: "Chattogram Exclusive Showroom",
    title: "ELEVATE YOUR EVERYDAY",
    accentText: "STYLE & FIT",
    subtitle:
      "Original export garments, handcrafted denim washes, tailored cotton shirts, and modern casuals directly from MS Park.",
    tagline: "Shop 335, 3rd Floor, Yunusco City Centre, GEC Circle",
    ctaText: "Shop Collection",
    ctaLink: "#collection",
    secondaryCtaText: "Visit Showroom",
    secondaryCtaLink: "#showroom",
  },
  {
    id: 2,
    image: "/ms-shop.jpg",
    badge: "Yunusco City Centre (GEC Circle)",
    title: "EXPERIENCE THE SHOWROOM",
    accentText: "IN PERSON",
    subtitle:
      "Walk into our flagship store in Chittagong to experience authentic fabrics, precise stitching, and personalized sizing.",
    tagline: "Daily 10:00 AM - 10:00 PM • Fast Cash on Delivery Nationwide",
    ctaText: "Explore Jeans & Chinos",
    ctaLink: "#collection",
    secondaryCtaText: "Get Showroom Location",
    secondaryCtaLink: "#showroom",
  },
  {
    id: 3,
    image: "/ms-pro.jpg",
    badge: "100% Original Menswear",
    title: "SIGNATURE READY-MADE",
    accentText: "COLLECTIONS",
    subtitle:
      "Crafted for longevity and comfort. Discover high-demand slim denim, Oxford weave shirts, and luxury pique polos.",
    tagline: "Inside Ctg: 1-2 Days • Outside Ctg: 2-3 Days Delivery",
    ctaText: "View Featured Drops",
    ctaLink: "#collection",
    secondaryCtaText: "Message on WhatsApp",
    secondaryCtaLink: `https://wa.me/${STORE_INFO.whatsappRaw}`,
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      className="relative overflow-hidden bg-zinc-950 text-white min-h-[580px] md:min-h-[680px] flex items-center"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Slides with Crossfade Animation */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.title}
              fill
              className="object-cover object-center"
              priority
            />
            {/* Multi-layered Vignette & Dark Gradients for contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/40 md:to-zinc-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />
            <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content Container */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Slide Captions */}
          <div className="lg:col-span-8 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide.id}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-4"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-semibold text-zinc-100 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{currentSlide.badge}</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[1.08]">
                  {currentSlide.title}{" "}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-emerald-400">
                    {currentSlide.accentText}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed">
                  {currentSlide.subtitle}
                </p>

                {/* Tagline / Showroom highlight */}
                <div className="flex items-center gap-2 text-xs md:text-sm text-emerald-400 font-semibold pt-1">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>{currentSlide.tagline}</span>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href={currentSlide.ctaLink}
                    className="inline-flex items-center justify-center font-bold text-sm md:text-base px-8 h-12 bg-white text-zinc-950 hover:bg-zinc-200 transition-all rounded-full shadow-xl shadow-white/10 gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {currentSlide.ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  {currentSlide.secondaryCtaLink.startsWith("http") ? (
                    <Link
                      href={currentSlide.secondaryCtaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center font-semibold text-sm md:text-base px-6 h-12 border border-white/30 text-white hover:bg-white/10 transition-all rounded-full backdrop-blur-sm"
                    >
                      {currentSlide.secondaryCtaText}
                    </Link>
                  ) : (
                    <a
                      href={currentSlide.secondaryCtaLink}
                      className="inline-flex items-center justify-center font-semibold text-sm md:text-base px-6 h-12 border border-white/30 text-white hover:bg-white/10 transition-all rounded-full backdrop-blur-sm"
                    >
                      {currentSlide.secondaryCtaText}
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Slide Mini Preview Card */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="relative p-4 rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-white/15 shadow-2xl space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold text-zinc-400">
                <span className="flex items-center gap-1.5 text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Showroom Spotlight
                </span>
                <span>
                  0{currentIndex + 1} / 0{HERO_SLIDES.length}
                </span>
              </div>

              {/* Thumbnails list */}
              <div className="grid grid-cols-3 gap-2">
                {HERO_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                      currentIndex === idx
                        ? "border-emerald-400 scale-105 shadow-md"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-zinc-400 border-t border-white/10 flex items-center justify-between">
                <span>Shop 335, Yunusco City Centre</span>
                <span className="text-emerald-400 font-bold">100% Original</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Arrows & Slide Indicators */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-white/10">
          {/* Progress Indicators */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-white"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={goToPrev}
              aria-label="Previous slide"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              aria-label="Next slide"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
