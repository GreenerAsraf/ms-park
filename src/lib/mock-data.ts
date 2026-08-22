export type ProductCategory = "All" | "Jeans" | "Shirts" | "Polo Shirts" | "Pants";

export type Product = {
  id: string;
  name: string;
  category: "Jeans" | "Shirts" | "Polo Shirts" | "Pants";
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  sizes: string[];
  colors?: string[];
  fabric?: string;
  fit?: string;
  isNew?: boolean;
  isBestseller?: boolean;
  rating?: number;
  reviewsCount?: number;
};

export const STORE_INFO = {
  name: "MS PARK",
  tagline: "One and only unique brand in Chattogram",
  description:
    "MS Park is your premier destination for original ready-made garment collections. We craft and curate premium denim jeans, smart shirts, luxury polo shirts, and comfortable chinos.",
  address: "Shop no. 335, 3rd Floor, Yunusco City Centre, GEC Circle",
  city: "Chattogram, Bangladesh",
  phone: "+880 1614-354407",
  whatsapp: "+880 1614-354407",
  whatsappRaw: "8801614354407",
  facebookUrl: "https://www.facebook.com/msparkbd",
  facebookHandle: "@msparkbd",
  openingHours: "Saturday - Thursday: 10:00 AM - 10:00 PM | Friday: 3:00 PM - 10:00 PM",
  deliveryInfo: "Inside Chattogram: 1-2 Days (৳70) | All Over Bangladesh: 2-3 Days (৳130)",
};

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Vintage Whisker Washed Slim Jeans",
    category: "Jeans",
    price: 2450,
    originalPrice: 2950,
    image: "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80",
    description: "Premium stretch denim with artisanal whisker wash and durable reinforced copper stitching.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Deep Indigo", "Vintage Blue"],
    fabric: "98% Cotton, 2% Elastane",
    fit: "Slim Fit",
    isNew: true,
    isBestseller: true,
    rating: 4.9,
    reviewsCount: 38,
  },
  {
    id: "p2",
    name: "Classic Oxford Pure Cotton Shirt",
    category: "Shirts",
    price: 1850,
    originalPrice: 2200,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",
    description: "Breathable, high-thread-count Oxford weave designed for both boardroom elegance and smart-casual weekends.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Crisp White", "Sky Blue", "Pastel Pink"],
    fabric: "100% Combed Cotton",
    fit: "Regular Smart Fit",
    isNew: false,
    isBestseller: true,
    rating: 4.8,
    reviewsCount: 42,
  },
  {
    id: "p3",
    name: "Tailored Smart Casual Chino Pants",
    category: "Pants",
    price: 1950,
    originalPrice: 2350,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-comfortable stretch twill chinos featuring a streamlined modern taper and stain-resistant finish.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Khaki", "Olive Green", "Navy", "Charcoal"],
    fabric: "97% Cotton Twill, 3% Spandex",
    fit: "Tapered Fit",
    isNew: true,
    isBestseller: false,
    rating: 4.7,
    reviewsCount: 29,
  },
  {
    id: "p4",
    name: "Midnight Black Super Slim Denim",
    category: "Jeans",
    price: 2600,
    originalPrice: 3100,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
    description: "Deep reactive-dyed stay-black denim engineered to retain deep rich color through repeated washes.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Jet Black"],
    fabric: "98% Organic Cotton, 2% Lycra",
    fit: "Super Slim Fit",
    isNew: true,
    isBestseller: true,
    rating: 5.0,
    reviewsCount: 51,
  },
  {
    id: "p5",
    name: "Luxury Pique Structured Polo Shirt",
    category: "Polo Shirts",
    price: 1450,
    originalPrice: 1750,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
    description: "Double-mercerized Egyptian cotton polo shirt with contrast ribbed tipping collar and mother-of-pearl buttons.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Navy Blue", "Forest Green", "Burgundy"],
    fabric: "100% Mercerized Pique Cotton",
    fit: "Athletic Fit",
    isNew: false,
    isBestseller: true,
    rating: 4.9,
    reviewsCount: 64,
  },
  {
    id: "p6",
    name: "Urban Texture Casual Linen Shirt",
    category: "Shirts",
    price: 2150,
    originalPrice: 2500,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    description: "Lightweight, airy linen-blend shirt tailored for tropical comfort and effortless Mediterranean charm.",
    sizes: ["M", "L", "XL"],
    colors: ["Sand Beige", "Sage", "Pure White"],
    fabric: "55% Linen, 45% Cotton",
    fit: "Relaxed Fit",
    isNew: true,
    isBestseller: false,
    rating: 4.6,
    reviewsCount: 19,
  },
  {
    id: "p7",
    name: "Executive Formal Stretch Trouser",
    category: "Pants",
    price: 2250,
    originalPrice: 2700,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80",
    description: "Wrinkle-free corporate trousers designed with hidden elastic waistband comfort for all-day office wear.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Charcoal Grey", "Dark Navy", "Solid Black"],
    fabric: "Polyester Viscose Blend",
    fit: "Classic Straight Fit",
    isNew: false,
    isBestseller: false,
    rating: 4.8,
    reviewsCount: 31,
  },
  {
    id: "p8",
    name: "Distressed Raw Edge Street Denim",
    category: "Jeans",
    price: 2750,
    originalPrice: 3300,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
    description: "Contemporary street-style denim with micro-abrasions, hand-crafted distressing and custom brass hardware.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Medium Acid Wash"],
    fabric: "100% Rigid Heavyweight Cotton",
    fit: "Regular Straight",
    isNew: true,
    isBestseller: false,
    rating: 4.7,
    reviewsCount: 22,
  },
];

export const CATEGORIES: { name: ProductCategory; count: number; image: string }[] = [
  {
    name: "Jeans",
    count: 14,
    image: "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Shirts",
    count: 18,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Polo Shirts",
    count: 12,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Pants",
    count: 10,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80",
  },
];
