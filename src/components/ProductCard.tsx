"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/mock-data";
import { useCart } from "@/lib/cart-context";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingBag, Eye } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "32");

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, selectedSize);
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-border/80 bg-card hover:shadow-xl hover:border-foreground/20 transition-all duration-300 cursor-pointer active:scale-[0.99]"
    >
      {/* Product Image Area */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1 z-10">
          {product.isNew && (
            <Badge className="bg-emerald-600 hover:bg-emerald-600 text-[9px] sm:text-[10px] tracking-wider uppercase font-bold text-white px-1.5 sm:px-2 py-0.5 shadow-sm">
              New
            </Badge>
          )}
          {product.isBestseller && (
            <Badge className="bg-amber-500 hover:bg-amber-500 text-[9px] sm:text-[10px] tracking-wider uppercase font-bold text-black px-1.5 sm:px-2 py-0.5 shadow-sm">
              Hot
            </Badge>
          )}
        </div>

        {/* Desktop Quick View Overlay */}
        <div className="hidden sm:flex absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 items-center justify-center p-4">
          <Button
            size="sm"
            variant="secondary"
            className="gap-2 shadow-lg backdrop-blur-md bg-white/90 dark:bg-black/90 font-medium"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
          >
            <Eye className="w-4 h-4" /> Quick View
          </Button>
        </div>
      </div>

      {/* Product Information */}
      <div className="flex flex-col flex-1 p-3 sm:p-4 space-y-2 sm:space-y-2.5">
        <div className="flex items-center justify-between text-[11px] sm:text-xs text-muted-foreground font-medium">
          <span className="uppercase tracking-wider truncate mr-1">{product.category}</span>
          <div className="flex items-center gap-1 text-amber-500 font-semibold flex-shrink-0">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{product.rating || 4.8}</span>
          </div>
        </div>

        <h3 className="font-bold text-sm sm:text-base text-foreground line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Size Selection Pills */}
        <div
          className="flex items-center gap-1 sm:gap-1.5 pt-0.5 overflow-x-auto no-scrollbar"
          onClick={(e) => e.stopPropagation()}
        >
          {product.sizes.slice(0, 4).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`text-[10px] sm:text-[11px] h-5 sm:h-6 min-w-[22px] sm:min-w-[24px] px-1 sm:px-1.5 rounded font-medium transition-all ${
                selectedSize === size
                  ? "bg-foreground text-background font-bold shadow-xs"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {size}
            </button>
          ))}
          {product.sizes.length > 4 && (
            <span className="text-[10px] text-muted-foreground">+{product.sizes.length - 4}</span>
          )}
        </div>

        {/* Pricing & Quick Add Button */}
        <div className="flex items-center justify-between pt-2 mt-auto border-t border-border/50">
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-black text-foreground">
              ৳{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] sm:text-xs text-muted-foreground line-through">
                ৳{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <Button
            size="sm"
            onClick={handleAddToCart}
            className="gap-1 h-7 sm:h-8 px-2.5 sm:px-3 font-bold text-xs rounded-lg active:scale-95 transition-transform"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
