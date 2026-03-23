// === NAVIGATION ===
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Visit Us", href: "#location" },
] as const;

// === HERO STATS ===
export const HERO_STATS = [
  { value: "5+", label: "Years of Brewing" },
  { value: "100%", label: "Arabica Beans" },
  { value: "3", label: "Locations" },
] as const;

// === ABOUT FEATURES ===
export interface IAboutFeature {
  icon: string;
  title: string;
  description: string;
}

export const ABOUT_FEATURES: IAboutFeature[] = [
  {
    icon: "leaf",
    title: "Ethically Sourced",
    description: "Direct trade with local farmers from Aceh to Flores",
  },
  {
    icon: "fire",
    title: "Freshly Roasted",
    description: "Small-batch roasting in-house every single morning",
  },
  {
    icon: "heart",
    title: "Made with Care",
    description: "Every drink is handcrafted by our skilled baristas",
  },
];

// === MENU ===
export type MenuCategory = "signature" | "pastries" | "seasonal";

export interface IMenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  tag: string;
  category: MenuCategory;
}

export const MENU_CATEGORIES: { key: MenuCategory; label: string }[] = [
  { key: "signature", label: "Signature Drinks" },
  { key: "pastries", label: "Pastries" },
  { key: "seasonal", label: "Seasonal" },
];

export const MENU_ITEMS: IMenuItem[] = [
  {
    name: "Caramel Macchiato",
    description:
      "Velvety espresso meets buttery caramel, topped with silky steamed milk and a drizzle of house-made caramel.",
    price: "45K",
    image: "/images/menu/caramel-macchiato.jpg",
    tag: "★ Best Seller",
    category: "signature",
  },
  {
    name: "Nusantara Cold Brew",
    description:
      "18-hour slow-steeped Gayo beans with hints of dark chocolate and a smooth, clean finish.",
    price: "40K",
    image: "/images/menu/cold-brew.jpg",
    tag: "✦ House Special",
    category: "signature",
  },
  {
    name: "Matcha Oat Latte",
    description:
      "Ceremonial-grade matcha whisked with creamy oat milk, lightly sweetened with organic honey.",
    price: "48K",
    image: "/images/menu/matcha-latte.jpg",
    tag: "🌿 Vegan Friendly",
    category: "signature",
  },
  {
    name: "Sourdough Croissant",
    description:
      "48-hour fermented dough, baked fresh every morning with French butter.",
    price: "35K",
    image: "/images/menu/croissant.jpg",
    tag: "🥐 Fresh Daily",
    category: "pastries",
  },
  {
    name: "Banana Bread",
    description:
      "Moist, perfectly spiced banana bread with walnuts, served warm with butter.",
    price: "30K",
    image: "/images/menu/banana-bread.jpg",
    tag: "🍌 Homemade",
    category: "pastries",
  },
  {
    name: "Tiramisu Cake",
    description:
      "Classic Italian tiramisu layered with espresso-soaked ladyfingers and mascarpone cream.",
    price: "45K",
    image: "/images/menu/tiramisu.jpg",
    tag: "🍰 Chef's Pick",
    category: "pastries",
  },
  {
    name: "Pumpkin Spice Latte",
    description:
      "A seasonal favorite — warm espresso blended with real pumpkin purée and autumn spices.",
    price: "50K",
    image: "/images/menu/pumpkin-latte.jpg",
    tag: "🎃 Limited Edition",
    category: "seasonal",
  },
  {
    name: "Iced Lychee Rose",
    description:
      "Refreshing lychee-infused tea with a hint of rose syrup, served over crushed ice.",
    price: "42K",
    image: "/images/menu/lychee-rose.jpg",
    tag: "🌸 Summer Special",
    category: "seasonal",
  },
  {
    name: "Gingerbread Mocha",
    description:
      "Rich mocha with gingerbread spice, topped with whipped cream and a gingerbread cookie.",
    price: "52K",
    image: "/images/menu/gingerbread.jpg",
    tag: "🎄 Holiday Special",
    category: "seasonal",
  },
];

// === USP ===
export interface IUspItem {
  icon: string;
  title: string;
  description: string;
}

export const USP_ITEMS: IUspItem[] = [
  {
    icon: "sun",
    title: "Freshly Roasted Daily",
    description:
      "Our beans are roasted in-house every morning for the freshest possible flavor in every cup.",
  },
  {
    icon: "handshake",
    title: "Direct Trade",
    description:
      "We work directly with local farmers, ensuring fair prices and sustainable farming practices.",
  },
  {
    icon: "sofa",
    title: "Cozy Ambience",
    description:
      "Designed for comfort — whether you're deep in work, reading, or catching up with friends.",
  },
  {
    icon: "wifi",
    title: "Free Wi-Fi & Power",
    description:
      "High-speed internet and plenty of power outlets. Stay as long as you need.",
  },
];

// === GALLERY ===
export const GALLERY_IMAGES = [
  {
    src: "/images/gallery/interior-1.jpg",
    alt: "Cozy interior with warm lighting",
    span: true,
  },
  { src: "/images/gallery/coffee-pour.jpg", alt: "Barista pouring latte art" },
  { src: "/images/gallery/barista.jpg", alt: "Our skilled barista at work" },
  {
    src: "/images/gallery/latte-art.jpg",
    alt: "Beautiful latte art",
    span: true,
  },
  { src: "/images/gallery/pastries.jpg", alt: "Fresh pastries display" },
] as const;

// === TESTIMONIALS ===
export interface ITestimonial {
  quote: string;
  name: string;
  source: string;
  initial: string;
}

export const TESTIMONIALS: ITestimonial[] = [
  {
    quote:
      "The best oat milk latte I've ever had in Jakarta. The ambience is perfect for remote working. I basically live here now!",
    name: "Rina Wijaya",
    source: "Google Review",
    initial: "R",
  },
  {
    quote:
      "Their cold brew is incredibly smooth. You can taste the quality of the beans. And the croissants? Absolutely addictive.",
    name: "Andi Prasetyo",
    source: "Regular Customer",
    initial: "A",
  },
  {
    quote:
      "Love how they source directly from local farmers. It's great coffee with a great story behind it. Highly recommended!",
    name: "Maya Chen",
    source: "Food Blogger",
    initial: "M",
  },
];

// === LOCATION ===
export const STORE_INFO = {
  address: "Jl. Senopati No. 12, Kebayoran Baru",
  city: "Jakarta Selatan 12190",
  phone: "+62 812 3456 7890",
  email: "hello@kopinusantara.id",
  hours: {
    weekday: { open: "07:00", close: "22:00", label: "Mon — Fri" },
    weekend: { open: "08:00", close: "23:00", label: "Sat — Sun" },
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.8!3d-6.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
} as const;

// === SOCIAL LINKS ===
export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/kopinusantara",
    icon: "instagram",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/kopinusantara",
    icon: "twitter",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/kopinusantara",
    icon: "facebook",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@kopinusantara",
    icon: "tiktok",
  },
] as const;

// === FOOTER LINKS ===
export const FOOTER_LINKS = {
  explore: [
    { label: "Our Story", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Locations", href: "#location" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Franchise", href: "/franchise" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
} as const;
