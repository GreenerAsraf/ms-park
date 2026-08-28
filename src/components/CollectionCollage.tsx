"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_PRODUCTS, Product, ProductCategory, STORE_INFO } from "@/lib/mock-data";
import { Eye, ShoppingBag, Sparkles, Flame, Tag, ArrowUpRight, Star } from "lucide-react";
import { useCart } from "@/lib/cart-context";

interface CollectionCollageProps {
  onQuickView?: (product: Product) => void;
}

export function CollectionCollage({ onQuickView }: CollectionCollageProps) {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Filter only new products
  const newProducts = useMemo(() => {
    const items = FEATURED_PRODUCTS.filter((p) => p.isNew);
    if (selectedCategory === "All") return items;
    return items.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const categories: ProductCategory[] = ["All", "Bags", "Shirts", "T-Shirts", "Jeans", "Polo Shirts", "Pants"];

  return (
    <section id="collection" className="py-16 md:py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white relative overflow-hidden border-y border-zinc-800">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-400" />
              <span>New Arrivals Collection</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              THE <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">COLLECTION</span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Explore our latest drop of handcrafted denim, premium cotton shirts, and tailored menswear designed for unmatched style and fit in Chattogram.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
                  selectedCategory === cat
                    ? "bg-amber-400 text-zinc-950 border-amber-400 shadow-lg shadow-amber-400/20"
                    : "bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700 hover:bg-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PHOTO COLLAGE GRID (Asymmetrical Bento-style Layout) */}
        {newProducts.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/50 rounded-2xl border border-zinc-800">
            <p className="text-zinc-400 text-sm">No new items found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 auto-rows-[280px] sm:auto-rows-[320px] lg:auto-rows-[340px]">
            {newProducts.map((product, idx) => {
              // Asymmetrical grid column/row span logic for photo collage feel
              let spanClass = "lg:col-span-4 lg:row-span-1"; // default
              if (idx === 0) {
                spanClass = "lg:col-span-7 lg:row-span-2"; // Spotlight featured big tile
              } else if (idx === 1) {
                spanClass = "lg:col-span-5 lg:row-span-1"; // Wide medium tile
              } else if (idx === 2) {
                spanClass = "lg:col-span-5 lg:row-span-1"; // Wide medium tile
              } else if (idx === 3) {
                spanClass = "lg:col-span-4 lg:row-span-1";
              } else if (idx === 4) {
                spanClass = "lg:col-span-4 lg:row-span-1";
              } else if (idx === 5) {
                spanClass = "lg:col-span-4 lg:row-span-1";
              }

              const discountPercent = (product.originalPrice && product.price)
                ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                : null;

              return (
                <div
                  key={product.id}
                  className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 shadow-xl hover:border-amber-500/50 transition-all duration-500 flex flex-col justify-end ${spanClass}`}
                >
                  {/* Background Image with Zoom on Hover */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-zinc-950 text-[11px] font-black uppercase tracking-wider shadow-md">
                        <Flame className="w-3 h-3 fill-zinc-950" /> NEW DROP
                      </span>
                      {discountPercent && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-500/90 text-white text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-sm">
                          -{discountPercent}%
                        </span>
                      )}
                    </div>

                    <span className="px-3 py-1 rounded-full bg-zinc-950/70 text-zinc-300 text-xs font-semibold backdrop-blur-md border border-white/10">
                      {product.category}
                    </span>
                  </div>

                  {/* Bottom Info Content */}
                  <div className="relative z-10 p-5 sm:p-6 space-y-3">
                    {/* Rating & Fabric pill if featured item */}
                    {idx === 0 && (
                      <div className="flex items-center gap-3 text-xs text-amber-400 font-semibold">
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{product.rating ?? 4.9}</span>
                          <span className="text-zinc-400">({product.reviewsCount ?? 35} reviews)</span>
                        </div>
                        {product.fabric && (
                          <>
                            <span className="text-zinc-600">•</span>
                            <span className="text-zinc-300">{product.fabric}</span>
                          </>
                        )}
                      </div>
                    )}

                    <div>
                      <h3 className={`font-black text-white group-hover:text-amber-300 transition-colors leading-tight ${idx === 0 ? "text-xl sm:text-2xl" : "text-base sm:text-lg"}`}>
                        {product.name}
                      </h3>
                      {idx === 0 && (
                        <p className="text-zinc-300 text-xs sm:text-sm line-clamp-2 mt-1.5 font-normal">
                          {product.description}
                        </p>
                      )}
                    </div>

                    {/* Price & Action Buttons */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      {product.price !== undefined ? (
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg sm:text-xl font-extrabold text-amber-400">
                            ৳{product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs sm:text-sm text-zinc-400 line-through">
                              ৳{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      ) : <div />}

                      {/* Interactive Triggers */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onQuickView && onQuickView(product)}
                          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-zinc-900/90 text-zinc-200 hover:text-white hover:bg-amber-400 hover:text-zinc-950 transition-all border border-white/15"
                          title="Quick View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => addItem(product, product.sizes[0] || "M")}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-zinc-950 font-extrabold text-xs transition-all shadow-md shadow-amber-400/20"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Showroom Direct Inquiry Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-extrabold text-white">
              Want to see these new items in person?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Visit shop 335 at Yunusco City Centre, GEC Circle or chat directly with our sales team on WhatsApp.
            </p>
          </div>
          <Link
            href={`https://wa.me/${STORE_INFO.whatsappRaw}?text=${encodeURIComponent(
              "✨ *Hello MS PARK!* ✨\nI am interested in your new collection arrivals and would like to check availability."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20 flex-shrink-0"
          >
            <span>Inquire on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
