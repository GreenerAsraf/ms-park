"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { STORE_INFO } from "@/lib/mock-data";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { FacebookIcon } from "@/components/FacebookIcon";

export function CartDrawer() {
  const { items, removeItem, updateQuantity, clearCart, isOpen, setIsOpen, totalCount, subtotal } =
    useCart();

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    const itemList = items
      .map((item, idx) => {
        const priceStr = item.product.price ? ` = ৳${item.product.price * item.quantity}` : "";
        return `${idx + 1}. ${item.product.name} (Size: ${item.selectedSize}${
          item.selectedColor ? `, Color: ${item.selectedColor}` : ""
        }) x${item.quantity}${priceStr}`;
      })
      .join("\n");

    const subtotalText = subtotal > 0 ? `💰 *Estimated Subtotal:* ৳${subtotal.toLocaleString()}\n` : "";

    const text = encodeURIComponent(
      `✨ *MS PARK — Order Request* ✨\n\n` +
        `🛒 *ORDER SUMMARY:*\n${itemList}\n\n` +
        subtotalText +
        `🚚 *Delivery Preferences:*\n` +
        `• Area: Inside / Outside Chattogram\n\n` +
        `👤 *Customer Information:*\n` +
        `• Name:\n` +
        `• Phone Number:\n` +
        `• Delivery Address:\n\n` +
        `Please confirm my order and stock availability. Thank you!`
    );

    const whatsappNumber = STORE_INFO.whatsappRaw || "8801815340090";
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  const handleFacebookCheckout = () => {
    if (items.length === 0) return;

    const itemList = items
      .map((item, idx) => {
        const priceStr = item.product.price ? ` = ৳${item.product.price * item.quantity}` : "";
        return `${idx + 1}. ${item.product.name} (Size: ${item.selectedSize}${
          item.selectedColor ? `, Color: ${item.selectedColor}` : ""
        }) x${item.quantity}${priceStr}`;
      })
      .join("\n");

    const subtotalText = subtotal > 0 ? `💰 *Estimated Subtotal:* ৳${subtotal.toLocaleString()}\n` : "";

    const text = encodeURIComponent(
      `✨ *MS PARK — Order Request via Facebook* ✨\n\n` +
        `🛒 *ORDER SUMMARY:*\n${itemList}\n\n` +
        subtotalText +
        `🚚 *Delivery Preferences:*\n` +
        `• Area: Inside / Outside Chattogram\n\n` +
        `👤 *Customer Information:*\n` +
        `• Name:\n` +
        `• Phone Number:\n` +
        `• Delivery Address:\n\n` +
        `Please confirm my order and stock availability. Thank you!`
    );

    window.open(`https://m.me/${STORE_INFO.messengerRaw || "msparkbd"}?text=${text}`, "_blank");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 z-50">
        {/* Header */}
        <SheetHeader className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-xl font-bold flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Your Bag ({totalCount})
            </SheetTitle>
            {items.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-muted-foreground hover:text-destructive transition-colors"
              >
                Clear all
              </button>
            )}
          </div>
        </SheetHeader>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-muted/60 flex items-center justify-center">
                <ShoppingCart className="w-10 h-10 text-muted-foreground opacity-30" />
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-lg">Your bag is empty</h4>
                <p className="text-sm text-muted-foreground max-w-[240px]">
                  Explore MS Park menswear collections to find your perfect fit.
                </p>
              </div>
              <Button onClick={() => setIsOpen(false)} className="mt-2">
                Start Shopping
              </Button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSize}`}
                className="flex gap-4 p-3 rounded-xl border border-border/70 bg-card/60 relative group"
              >
                {/* Image */}
                <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h5 className="font-semibold text-sm line-clamp-1">
                      {item.product.name}
                    </h5>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                      <span className="font-medium bg-muted px-1.5 py-0.5 rounded">
                        Size: {item.selectedSize}
                      </span>
                      {item.selectedColor && <span>{item.selectedColor}</span>}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    {/* Price */}
                    {item.product.price !== undefined ? (
                      <span className="font-bold text-sm">
                        ৳{(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    ) : <span />}

                    {/* Quantity controls */}
                    <div className="flex items-center border border-border rounded-md bg-background">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, -1)}
                        className="p-1 text-muted-foreground hover:text-foreground"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, 1)}
                        className="p-1 text-muted-foreground hover:text-foreground"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Delete button */}
                <button
                  onClick={() => removeItem(item.product.id, item.selectedSize)}
                  className="text-muted-foreground/50 hover:text-destructive transition-colors p-1"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Action */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-muted/20 space-y-4">
            <div className="space-y-2 text-sm">
              {subtotal > 0 && (
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span className="font-semibold text-foreground">
                    ৳{subtotal.toLocaleString()}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-muted-foreground">
                <span>Estimated Delivery</span>
                <span className="text-xs">৳70 (Ctg) / ৳130 (All BD)</span>
              </div>
              {subtotal > 0 && (
                <div className="border-t border-border/80 pt-2 flex justify-between font-bold text-base text-foreground">
                  <span>Total Amount</span>
                  <span>৳{subtotal.toLocaleString()}</span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Button
                onClick={handleWhatsAppCheckout}
                size="lg"
                className="w-full gap-2 font-bold bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-zinc-950 shadow-md shadow-amber-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-zinc-950" />
                Order via WhatsApp Checkout
              </Button>
              <button
                onClick={handleFacebookCheckout}
                className="w-full inline-flex items-center justify-center gap-2 font-semibold h-10 px-4 rounded-lg border border-border bg-background hover:bg-muted transition-all text-sm text-foreground"
              >
                <FacebookIcon className="w-4 h-4 fill-blue-500" />
                Message on Facebook Page <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Cash on delivery available nationwide</span>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
