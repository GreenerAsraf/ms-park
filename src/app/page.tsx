"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FEATURED_PRODUCTS,
  STORE_INFO,
  Product,
  ProductCategory,
} from "@/lib/mock-data";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CategoryMarquee } from "@/components/CategoryMarquee";
import { CollectionCollage } from "@/components/CollectionCollage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Truck,
  RotateCcw,
  Clock,
  ExternalLink,
  ShoppingBag,
} from "lucide-react";
import { FacebookIcon } from "@/components/FacebookIcon";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>("All");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return FEATURED_PRODUCTS;
    return FEATURED_PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION WITH CAROUSEL ANIMATION */}
      <HeroCarousel />

      {/* 2. VALUE PROPOSITIONS BAR */}
      <section className="border-b border-border bg-zinc-950/5 py-7">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border/60">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500 flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">100% Original</h4>
                <p className="text-xs text-muted-foreground">Certified quality</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border/60">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500 flex-shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Cash on Delivery</h4>
                <p className="text-xs text-muted-foreground">All over Bangladesh</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border/60">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Live Showroom</h4>
                <p className="text-xs text-muted-foreground">Yunusco, GEC Circle</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-card border border-border/60">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500 flex-shrink-0">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Easy Exchange</h4>
                <p className="text-xs text-muted-foreground">Wrong size? No issue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHOWROOM SPOTLIGHT BANNER */}
      <section className="py-10 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-2xl overflow-hidden bg-zinc-950 text-white border border-zinc-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className="lg:col-span-6 p-7 md:p-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-500/25">
                  <MapPin className="w-3 h-3" />
                  <span>Live Showroom</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
                  MS PARK <span className="text-amber-400">•</span> Yunusco City Centre
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  Shop 335, 3rd Floor, GEC Circle, Chattogram. Open daily 10 AM – 10 PM.
                </p>

                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href="#showroom"
                    className="inline-flex items-center gap-2 font-bold px-5 h-10 bg-gradient-to-r from-yellow-400 to-amber-500 text-zinc-950 hover:from-yellow-300 hover:to-amber-400 rounded-full text-sm transition-all shadow-md shadow-amber-500/20"
                  >
                    Showroom Details <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    href={`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent(
                      "✨ *Hello MS PARK!* ✨\nI would like to get showroom directions or inquire about in-store product stock."
                    )}`}
                    className="inline-flex items-center gap-2 font-semibold px-5 h-10 border border-white/20 text-zinc-300 hover:bg-white/10 rounded-full text-sm transition-all"
                  >
                    WhatsApp Us
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 relative w-full flex items-center justify-center p-4 lg:p-6 bg-zinc-950/80">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/ms-shop.jpg"
                    alt="MS Park Showroom Interior"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain bg-zinc-950"
                    unoptimized
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CATEGORIES HIGHLIGHT — Infinite Marquee */}
      <CategoryMarquee
        onSelect={(cat) => {
          setSelectedCategory(cat);
          document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* 5. NEW COLLECTION PICTURE COLLAGE SECTION */}
      <CollectionCollage onQuickView={(p) => setActiveProduct(p)} />

      {/* 6. ALL PRODUCTS CATALOG SHOWCASE & FILTER TABS */}
      <section id="catalog" className="py-16 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                All Products Catalog
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Full collection & bestsellers • MS Park Chattogram
              </p>
            </div>

            {/* Filter Pills with Horizontal Scroll on Mobile */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-card border border-border overflow-x-auto no-scrollbar max-w-full">
              {(["All", "Bags", "Shirts", "T-Shirts", "Jeans", "Polo Shirts", "Pants"] as ProductCategory[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedCategory(tab)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex-shrink-0 ${
                    selectedCategory === tab
                      ? "bg-amber-500 text-zinc-950 shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid (2 columns on mobile, 3 on tablet, 4 on desktop) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={(p) => setActiveProduct(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. FACEBOOK CONNECT BANNER */}
      <section className="py-12 bg-zinc-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 border border-white/10 rounded-2xl p-7 md:p-10">
            <div className="space-y-3 text-center lg:text-left max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
                <FacebookIcon className="w-3.5 h-3.5 fill-blue-300" />
                <span>Official Community</span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                Follow <span className="text-amber-400">MS Park</span> on Facebook
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Live drops, Eid specials, and instant Messenger support.
              </p>
            </div>

            <div>
              <Link
                href={`https://m.me/${STORE_INFO.messengerRaw}?text=${encodeURIComponent(
                  "✨ *Hello MS PARK!* ✨\nI am contacting your Facebook team to inquire about your new collections and offers."
                )}`}
                className="inline-flex items-center justify-center font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-full px-7 h-11 gap-2 shadow-lg shadow-blue-600/30 transition-all text-sm"
              >
                <FacebookIcon className="w-4 h-4 fill-white" />
                Message on Facebook
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PHYSICAL SHOWROOM SPOTLIGHT (YUNUSCO CITY CENTRE) */}
      <section id="showroom" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Info Card */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-500 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Chattogram Flagship</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-foreground">
                Come Visit Our Showroom
              </h2>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Touch the fabric, try the fit, take it home. Our team at Yunusco City Centre is ready.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-card border border-border">
                  <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-foreground">Address</h5>
                    <p className="text-sm text-muted-foreground">{STORE_INFO.address}</p>
                    <p className="text-xs font-semibold text-primary mt-1">{STORE_INFO.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-card border border-border">
                  <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-foreground">Visiting Hours</h5>
                    <p className="text-xs text-muted-foreground">{STORE_INFO.openingHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-card border border-border">
                  <Truck className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-foreground">Delivery Rates</h5>
                    <p className="text-xs text-muted-foreground">{STORE_INFO.deliveryInfo}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={STORE_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-bold gap-2 rounded-full px-7 h-10 bg-gradient-to-r from-yellow-400 to-amber-500 text-zinc-950 hover:from-yellow-300 hover:to-amber-400 transition-all text-sm shadow-md shadow-amber-500/20"
                >
                  <MapPin className="w-4 h-4" /> Get Directions
                </Link>
              </div>
            </div>

            {/* Showroom Aesthetic Graphic / Actual Photo Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl bg-card p-6 space-y-6">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 border border-border/50">
                  <Image
                    src="/ms-shop.jpg"
                    alt="MS Park Yunusco City Centre Storefront"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 sm:p-6 pointer-events-none">
                    <div className="text-white">
                      <p className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider">YUNUSCO CITY CENTRE</p>
                      <h4 className="text-base sm:text-xl font-black leading-tight">MS PARK • Shop 335 (3rd Floor)</h4>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="text-sm font-bold text-foreground">GEC Circle, Ctg</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
                    <p className="text-xs text-muted-foreground">Facebook</p>
                    <p className="text-sm font-bold text-foreground">fb.com/msparkbd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-zinc-950 text-zinc-300 pt-16 pb-12 border-t border-zinc-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800">
            {/* Brand column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                  <Image
                    src="/ms-pro.jpg"
                    alt="MS PARK Logo"
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
                <span className="font-black text-2xl tracking-tight text-white uppercase">
                  MS PARK
                </span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
                Chattogram's premium menswear — original garments, honest prices.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <Link
                  href={STORE_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-blue-600 hover:text-white flex items-center justify-center border border-zinc-800 transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4 fill-current" />
                </Link>
              </div>
            </div>

            {/* Collections */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                Collections
              </h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#jeans" className="hover:text-white transition-colors">
                    Denim Jeans
                  </a>
                </li>
                <li>
                  <a href="#shirts" className="hover:text-white transition-colors">
                    Casual & Formal Shirts
                  </a>
                </li>
                <li>
                  <a href="#polo" className="hover:text-white transition-colors">
                    Luxury Polo Shirts
                  </a>
                </li>
                <li>
                  <a href="#pants" className="hover:text-white transition-colors">
                    Chinos & Pants
                  </a>
                </li>
              </ul>
            </div>

            {/* Showroom & Contact */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                Showroom
              </h4>
              <p className="text-sm text-zinc-400">
                Shop 335, 3rd Floor, Yunusco City Centre, GEC Circle, Chattogram
              </p>
              <p className="text-xs text-zinc-500 pt-1">
                Open Daily: 10:00 AM - 10:00 PM
              </p>
            </div>

            {/* Help & Ordering */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                Customer Care
              </h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <Link
                    href={STORE_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Messenger Support
                  </Link>
                </li>
                <li>
                  <span className="hover:text-white">Nationwide Delivery</span>
                </li>
                <li>
                  <span className="hover:text-white">Size Exchange Policy</span>
                </li>
                <li>
                  <span className="hover:text-white">Cash On Delivery</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
            <p>© {new Date().getFullYear()} MS PARK (Chattogram). All rights reserved.</p>
            <div className="flex items-center gap-3 text-[10px] text-zinc-600">
              <p>
                Official Brand Page:{" "}
                <Link
                  href={STORE_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white underline underline-offset-4"
                >
                  facebook.com/msparkbd
                </Link>
              </p>
              <span>•</span>
              <span className="opacity-40 hover:opacity-100 transition-opacity">Powered by Netlify</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 9. PRODUCT MODAL */}
      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </div>
  );
}
