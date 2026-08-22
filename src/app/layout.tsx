import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { Navbar } from "@/components/Navbar";
import { CartDrawer } from "@/components/CartDrawer";
import { IntroLoader } from "@/components/IntroLoader";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { STORE_INFO } from "@/lib/mock-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MS PARK | Original Ready-Made Garments - Chattogram",
  description:
    "MS Park is the premier menswear fashion brand in Chattogram. Visit us at Yunusco City Centre (Shop 335, 3rd Floor, GEC Circle) or shop original denim jeans, shirts, polo shirts & pants online.",
  keywords: [
    "MS Park",
    "MS PARK Chattogram",
    "Yunusco City Centre GEC",
    "Jeans Chattogram",
    "Men Clothing Bangladesh",
    "msparkbd",
  ],
  openGraph: {
    title: "MS PARK | Chattogram's Premier Menswear Destination",
    description:
      "Original ready-made garment collections. Shop premium jeans, shirts, polos, and pants with nationwide delivery.",
    url: "https://www.facebook.com/msparkbd",
    siteName: "MS PARK",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background pb-16 md:pb-0">
        <IntroLoader />
        <CartProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <CartDrawer />
          <MobileBottomBar />
        </CartProvider>
      </body>
    </html>
  );
}
