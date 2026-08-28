"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product, STORE_INFO } from "@/lib/mock-data";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  X,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Plus,
  Minus,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  React.useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || "");
      setSelectedColor(product.colors?.[0] || "");
      setQuantity(1);
    }
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    addItem(product, selectedSize, selectedColor, quantity);
    onClose();
  };

  const handleWhatsAppOrder = () => {
    const priceText = product.price ? `\n• Price: ৳${product.price * quantity}` : "";
    const text = encodeURIComponent(
      `✨ *MS PARK — Product Inquiry & Order* ✨\n\n` +
      `📦 *Product Details:*\n` +
      `• Item: ${product.name}\n` +
      `• Code: ${product.id}\n` +
      `• Size: ${selectedSize}\n` +
      `• Color: ${selectedColor || "Standard"}\n` +
      `• Quantity: ${quantity}${priceText}\n\n` +
      `👤 *Customer Information:*\n` +
      `• Name:\n` +
      `• Phone Number:\n` +
      `• Delivery Address:\n\n` +
      `Please let me know if this item is in stock and ready for delivery. Thank you!`
    );
    const whatsappNumber = STORE_INFO.whatsappRaw || "8801815340090";
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background rounded-2xl shadow-2xl border border-border/80 flex flex-col md:flex-row overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors border shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Media */}
        <div className="md:w-1/2 relative bg-zinc-100 dark:bg-zinc-900 min-h-[340px] md:min-h-[500px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-emerald-600 text-white font-medium hover:bg-emerald-600">
                New Arrival
              </Badge>
            )}
            {product.isBestseller && (
              <Badge className="bg-amber-500 text-black font-semibold hover:bg-amber-500">
                ★ Best Seller
              </Badge>
            )}
          </div>
        </div>

        {/* Product Details & Actions */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span>{product.category}</span>
              <span>•</span>
              <span className="text-emerald-600 dark:text-emerald-400">In Stock (Chattogram)</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              {product.name}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating || 5)
                        ? "fill-amber-400 text-amber-400"
                        : "text-zinc-300 dark:text-zinc-700"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold">{product.rating || 4.9}</span>
              <span className="text-xs text-muted-foreground">
                ({product.reviewsCount || 28} verified reviews)
              </span>
            </div>

            {/* Pricing */}
            {product.price !== undefined && (
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black tracking-tight text-foreground">
                  ৳{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through decoration-zinc-400">
                    ৳{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.originalPrice && product.price && (
                  <Badge variant="secondary" className="text-xs text-emerald-600 font-bold bg-emerald-50 dark:bg-emerald-950/40">
                    Save ৳{(product.originalPrice - product.price).toLocaleString()}
                  </Badge>
                )}
              </div>
            )}

            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Fabric & Fit Details */}
            {(product.fabric || product.fit) && (
              <div className="grid grid-cols-2 gap-2 text-xs py-2 px-3 rounded-lg bg-muted/60 border border-border/50">
                {product.fabric && (
                  <div>
                    <span className="font-semibold text-foreground">Fabric:</span>{" "}
                    <span className="text-muted-foreground">{product.fabric}</span>
                  </div>
                )}
                {product.fit && (
                  <div>
                    <span className="font-semibold text-foreground">Fit:</span>{" "}
                    <span className="text-muted-foreground">{product.fit}</span>
                  </div>
                )}
              </div>
            )}

            {/* Size Selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Select Size
                </span>
                <span className="text-xs text-muted-foreground">Standard Bangladeshi Fit</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[44px] h-10 px-3 text-sm font-semibold rounded-lg border transition-all ${
                      selectedSize === size
                        ? "bg-foreground text-background border-foreground shadow-sm"
                        : "bg-background text-foreground border-border hover:border-foreground/40"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground block mb-2">
                  Color: <span className="font-normal text-muted-foreground">{selectedColor}</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                        selectedColor === color
                          ? "bg-foreground text-background border-foreground font-medium"
                          : "bg-muted/50 text-foreground border-border hover:bg-muted"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Quantity:
              </span>
              <div className="flex items-center border border-border rounded-lg bg-background">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center text-sm font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                size="lg"
                onClick={handleAddToCart}
                className="w-full gap-2 font-bold bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-zinc-950 shadow-lg shadow-amber-500/20"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart{product.price ? ` • ৳${(product.price * quantity).toLocaleString()}` : ""}
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsAppOrder}
                className="w-full gap-2 border-amber-400/50 text-amber-500 hover:bg-amber-500/10"
              >
                <MessageCircle className="w-4 h-4" />
                Order on WhatsApp
              </Button>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] text-muted-foreground text-center">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>100% Original Garments</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-primary" />
                <span>Fast Nationwide Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RotateCcw className="w-4 h-4 text-primary" />
                <span>Easy Size Exchange</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
