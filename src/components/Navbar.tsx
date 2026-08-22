"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { STORE_INFO } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  MapPin,
  Truck,
  Sparkles,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";
import { FacebookIcon } from "@/components/FacebookIcon";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Navbar() {
  const { totalCount, setIsOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Micro-Bar (Desktop Only, Hidden on Mobile to reduce clutter) */}
      <div className="hidden sm:block bg-zinc-950 text-zinc-300 text-[11px] py-1.5 px-4 border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
            {/* <span className="font-medium text-zinc-300">
              <strong className="text-white font-semibold">Showroom:</strong> Shop 335 (3rd Floor), Yunusco City Centre, GEC Circle, Ctg
            </span> */}
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Nationwide Delivery (Cash On Delivery)</span>
            </div>
            <span className="text-zinc-700">•</span>
            <Link
              href={`https://wa.me/${STORE_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <WhatsAppIcon className="w-3 h-3" />
              <span>{STORE_INFO.phone}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Luxury Matte-Black Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-zinc-950/95 text-white border-b border-white/10 backdrop-blur-xl shadow-md ${
          isScrolled ? "py-2 sm:py-2.5 shadow-black/50" : "py-2.5 sm:py-3.5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-3 sm:px-6">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden ring-1.5 ring-white/20 group-hover:ring-emerald-400 transition-all shadow-md group-hover:scale-105 flex-shrink-0">
                <Image
                  src="/ms-pro.jpg"
                  alt="MS PARK Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-lg sm:text-2xl tracking-tighter uppercase leading-none text-white">
                    MS PARK
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-black uppercase px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    CTG
                  </span>
                </div>
                <span className="hidden sm:inline-block text-[9px] tracking-widest text-zinc-400 uppercase font-medium mt-0.5">
                  Yunusco City Centre
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-semibold">
              <Link
                href="#collection"
                className="px-4 py-2 rounded-full hover:bg-white/15 hover:text-white text-zinc-300 transition-all"
              >
                All Collections
              </Link>
              <Link
                href="#jeans"
                className="px-4 py-2 rounded-full hover:bg-white/15 hover:text-white text-zinc-400 transition-all"
              >
                Jeans
              </Link>
              <Link
                href="#shirts"
                className="px-4 py-2 rounded-full hover:bg-white/15 hover:text-white text-zinc-400 transition-all"
              >
                Shirts
              </Link>
              <Link
                href="#polo"
                className="px-4 py-2 rounded-full hover:bg-white/15 hover:text-white text-zinc-400 transition-all"
              >
                Polo Shirts
              </Link>
              <Link
                href="#pants"
                className="px-4 py-2 rounded-full hover:bg-white/15 hover:text-white text-zinc-400 transition-all"
              >
                Pants & Chinos
              </Link>
              <Link
                href="#showroom"
                className="px-4 py-2 rounded-full hover:bg-white/15 hover:text-white text-zinc-400 flex items-center gap-1.5 transition-all"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Showroom</span>
              </Link>
            </nav>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* WhatsApp Fast Button */}
            <Link
              href={`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent(
                "Hello MS PARK! I would like to order."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 h-8 sm:h-9 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all active:scale-95 shadow-sm"
              aria-label="WhatsApp Helpline"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              {/* <span className="hidden md:inline">WhatsApp</span> */}
            </Link>

            {/* Facebook Button (Desktop Only) */}
            <Link
              href={STORE_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 h-8 sm:h-9 rounded-full bg-blue-500/15 hover:bg-blue-500/25 text-blue-400 border border-blue-500/30 text-xs font-bold transition-all active:scale-95 shadow-sm"
              aria-label="Facebook Page"
            >
              <FacebookIcon className="w-3.5 h-3.5 fill-blue-400" />
              {/* <span className="hidden md:inline">Facebook</span> */}
            </Link>

            {/* Shopping Bag Button with Badge */}
            <Button
              variant="default"
              size="default"
              className="relative gap-1.5 font-bold shadow-md h-8 sm:h-9 px-2.5 sm:px-3.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-all active:scale-95 text-xs"
              onClick={() => setIsOpen(true)}
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Bag</span>
              {totalCount > 0 && (
                <span className="flex h-4 min-w-[16px] sm:h-5 sm:min-w-[20px] px-1 items-center justify-center rounded-full bg-emerald-500 text-white text-[10px] sm:text-[11px] font-black animate-in zoom-in-50">
                  {totalCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Drawer Trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    className="lg:hidden rounded-full h-8 w-8 sm:h-9 sm:w-9 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                  >
                    <Menu className="h-4 w-4" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                }
              />
              <SheetContent side="left" className="w-[300px] flex flex-col justify-between p-6 bg-zinc-950 text-white border-r border-white/10">
                <div>
                  <SheetHeader className="pb-5 border-b border-white/10 text-left">
                    <SheetTitle className="flex items-center gap-3">
                      <div className="relative w-9 h-9 rounded-xl overflow-hidden ring-1 ring-white/20">
                        <Image
                          src="/ms-pro.jpg"
                          alt="MS PARK Logo"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-black text-xl tracking-tight uppercase leading-none text-white">
                          MS PARK
                        </span>
                        <span className="text-[10px] text-zinc-400 uppercase font-medium mt-0.5">
                          Yunusco City Centre
                        </span>
                      </div>
                    </SheetTitle>
                  </SheetHeader>

                  {/* Navigation Links in Drawer */}
                  <div className="flex flex-col gap-1.5 mt-6 text-sm font-semibold">
                    <Link
                      href="#collection"
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between text-zinc-200"
                    >
                      <div className="flex items-center gap-2.5">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                        <span>All Collections</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-zinc-500" />
                    </Link>
                    <Link
                      href="#jeans"
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between text-zinc-300"
                    >
                      <span>Denim Jeans</span>
                      <ChevronRight className="w-4 h-4 text-zinc-500" />
                    </Link>
                    <Link
                      href="#shirts"
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between text-zinc-300"
                    >
                      <span>Casual & Formal Shirts</span>
                      <ChevronRight className="w-4 h-4 text-zinc-500" />
                    </Link>
                    <Link
                      href="#polo"
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between text-zinc-300"
                    >
                      <span>Polo Shirts</span>
                      <ChevronRight className="w-4 h-4 text-zinc-500" />
                    </Link>
                    <Link
                      href="#pants"
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between text-zinc-300"
                    >
                      <span>Pants & Chinos</span>
                      <ChevronRight className="w-4 h-4 text-zinc-500" />
                    </Link>
                    <Link
                      href="#showroom"
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between text-emerald-400 font-bold"
                    >
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4" />
                        <span>Showroom & Location</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-zinc-500" />
                    </Link>
                  </div>
                </div>

                {/* Mobile Drawer Footer with Contact Actions */}
                <div className="pt-6 border-t border-white/10 space-y-3">
                  <div className="text-xs text-zinc-300 bg-white/5 p-3 rounded-xl border border-white/10">
                    <p className="font-bold text-white">Yunusco City Centre</p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Shop 335, 3rd Floor, GEC Circle, Ctg</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href={`https://wa.me/${STORE_INFO.whatsappRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-10 px-2 rounded-xl text-xs transition-colors shadow-sm"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      WhatsApp
                    </Link>

                    <Link
                      href={STORE_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold h-10 px-2 rounded-xl text-xs transition-colors shadow-sm"
                    >
                      <FacebookIcon className="w-4 h-4" />
                      Facebook
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
