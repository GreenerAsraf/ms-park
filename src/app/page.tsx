"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FEATURED_PRODUCTS,
  CATEGORIES,
  STORE_INFO,
  Product,
  ProductCategory,
} from "@/lib/mock-data";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Clock,
  ExternalLink,
  ChevronRight,
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
      <section className="border-b border-border bg-muted/30 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/60">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Original Export Quality</h4>
                <p className="text-xs text-muted-foreground">Certified fabric & finish</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/60">
              <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Cash on Delivery</h4>
                <p className="text-xs text-muted-foreground">Inside & outside Chattogram</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/60">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Physical Showroom</h4>
                <p className="text-xs text-muted-foreground">Yunusco City Centre, GEC</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/60">
              <div className="p-3 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Hassle-Free Exchange</h4>
                <p className="text-xs text-muted-foreground">Instant size replacement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHOWROOM SPOTLIGHT BANNER */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-3xl overflow-hidden bg-zinc-950 text-white border border-zinc-800 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 p-8 md:p-12 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Showroom Highlight</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                  MS PARK • Yunusco City Centre
                </h3>

                <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                  Located at Shop 335, 3rd Floor, Yunusco City Centre (GEC Circle, Chittagong). Step into a realm of premium denim, formal elegance, and everyday casual wear.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#showroom"
                    className="inline-flex items-center gap-2 font-bold px-6 h-11 bg-white text-zinc-950 hover:bg-zinc-200 rounded-full text-sm transition-all"
                  >
                    View Showroom Details <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href={`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent("Hello MS PARK! I would like to inquire about products.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold px-6 h-11 border border-white/30 text-white hover:bg-white/10 rounded-full text-sm transition-all"
                  >
                    WhatsApp Helpline
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[420px] w-full">
                <Image
                  src="/ms-shop.jpg"
                  alt="MS Park Showroom Interior"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-zinc-950 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CATEGORIES HIGHLIGHT */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                Curated Collections
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Shop By Category
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              From everyday office essentials to weekend streetwear, discover garments tailored to fit Bangladeshi men with perfection.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.name}
                onClick={() => {
                  setSelectedCategory(cat.name);
                  document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-border/80 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold text-zinc-300">{cat.count}+ Items</span>
                  <h3 className="text-xl font-black uppercase tracking-tight flex items-center justify-between">
                    {cat.name}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MAIN PRODUCT SHOWCASE & FILTER TABS */}
      <section id="collection" className="py-16 bg-muted/20 border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
                Featured Apparel
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                Hand-picked bestsellers & new arrivals in stock at MS Park Chattogram
              </p>
            </div>

            {/* Filter Pills with Horizontal Scroll on Mobile */}
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-card border border-border overflow-x-auto no-scrollbar max-w-full">
              {(["All", "Jeans", "Shirts", "Polo Shirts", "Pants"] as ProductCategory[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedCategory(tab)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all flex-shrink-0 ${
                    selectedCategory === tab
                      ? "bg-foreground text-background shadow-xs"
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
      <section className="py-14 bg-gradient-to-r from-blue-900 via-indigo-950 to-zinc-950 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md">
            <div className="space-y-4 text-center lg:text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
                <FacebookIcon className="w-3.5 h-3.5 fill-blue-300" />
                <span>Official Facebook Community</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Join 3,500+ MS Park Fans on Facebook
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Stay updated with our weekly live unboxing, stock drops, Eid special collections, and instant customer support on Messenger.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href={STORE_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12 gap-2 shadow-lg shadow-blue-600/30 transition-all text-sm"
              >
                <FacebookIcon className="w-5 h-5 fill-white" />
                Visit facebook.com/msparkbd
                <ExternalLink className="w-4 h-4 ml-1" />
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Chattogram Flagship Store</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground">
                Visit Our Showroom at Yunusco City Centre
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Experience fabric feel, test our custom denim washes, and try on our tailored shirt collection in person. Our sales associates are ready to guide you.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-foreground">Address</h5>
                    <p className="text-sm text-muted-foreground">{STORE_INFO.address}</p>
                    <p className="text-xs font-semibold text-primary mt-1">{STORE_INFO.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-sm text-foreground">Visiting Hours</h5>
                    <p className="text-xs text-muted-foreground">{STORE_INFO.openingHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <Truck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
                  className="inline-flex items-center justify-center font-bold gap-2 rounded-full px-8 h-11 bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-sm shadow-md"
                >
                  <MapPin className="w-4 h-4" /> Get Directions / Contact Us
                </Link>
              </div>
            </div>

            {/* Showroom Aesthetic Graphic / Actual Photo Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl bg-card p-6 space-y-6">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
                  <Image
                    src="/ms-shop.jpg"
                    alt="MS Park Yunusco City Centre Storefront"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <p className="text-xs font-semibold text-amber-400">YUNUSCO CITY CENTRE</p>
                      <h4 className="text-xl font-bold">MS PARK • Shop 335 (3rd Floor)</h4>
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
                    className="object-cover"
                  />
                </div>
                <span className="font-black text-2xl tracking-tight text-white uppercase">
                  MS PARK
                </span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
                One and only unique menswear brand in Chattogram offering original ready-made garment collections.
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
