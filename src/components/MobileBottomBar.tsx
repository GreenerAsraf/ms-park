"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { STORE_INFO } from "@/lib/mock-data";
import {
  Home,
  Grid,
  ShoppingBag,
  MapPin,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function MobileBottomBar() {
  const { totalCount, setIsOpen } = useCart();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const collectionEl = document.getElementById("collection");
      const showroomEl = document.getElementById("showroom");

      const scrollPos = window.scrollY + 200;

      if (showroomEl && scrollPos >= showroomEl.offsetTop) {
        setActiveSection("showroom");
      } else if (collectionEl && scrollPos >= collectionEl.offsetTop) {
        setActiveSection("collection");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 pb-safe">
      <div className="mx-3 mb-3 p-1.5 rounded-2xl bg-zinc-950/90 border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/80 flex items-center justify-around">
        {/* Home */}
        <Link
          href="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("home");
          }}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            activeSection === "home"
              ? "text-emerald-400 bg-white/10 font-bold"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <Home className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-medium">Home</span>
        </Link>

        {/* Collections */}
        <a
          href="#collection"
          onClick={() => setActiveSection("collection")}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            activeSection === "collection"
              ? "text-emerald-400 bg-white/10 font-bold"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <Grid className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-medium">Shop</span>
        </a>

        {/* Floating Shopping Bag in Center */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative flex flex-col items-center justify-center py-1 px-3 rounded-xl text-white hover:text-emerald-400 transition-all group"
          aria-label="Open Shopping Bag"
        >
          <div className="relative p-2 -mt-4 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-emerald-500 shadow-lg shadow-blue-500/30 group-active:scale-95 transition-transform">
            <ShoppingBag className="w-4 h-4 text-white" />
            {totalCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] px-1 items-center justify-center rounded-full bg-emerald-400 text-black text-[9px] font-black shadow-md animate-bounce">
                {totalCount}
              </span>
            )}
          </div>
          <span className="text-[10px] mt-0.5 font-bold text-zinc-300">Bag ({totalCount})</span>
        </button>

        {/* Showroom */}
        <a
          href="#showroom"
          onClick={() => setActiveSection("showroom")}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            activeSection === "showroom"
              ? "text-emerald-400 bg-white/10 font-bold"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span className="text-[10px] mt-0.5 font-medium">Showroom</span>
        </a>

        {/* Direct WhatsApp Call/Chat */}
        <Link
          href={`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent(
            "✨ *Hello MS PARK!* ✨\nI am browsing your collection from mobile and would like to order or ask a question."
          )}`}
          className="flex flex-col items-center justify-center py-1 px-3 rounded-xl text-emerald-400 hover:text-emerald-300 transition-all active:scale-95"
        >
          <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
          <span className="text-[10px] mt-0.5 font-bold">Chat</span>
        </Link>
      </div>
    </div>
  );
}
