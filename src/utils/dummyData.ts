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
  img: string;
}

export const ABOUT_FEATURES: IAboutFeature[] = [
  {
    icon: "leaf",
    title: "Ethically Sourced",
    description: "Direct trade with local farmers from Aceh to Flores",
    img: "/assets/icon/coffee-leaves.png",
  },
  {
    icon: "fire",
    title: "Freshly Roasted",
    description: "Small-batch roasting in-house every single morning",
    img: "/assets/icon/beans.png",
  },
  {
    icon: "heart",
    title: "Made with Care",
    description: "Every drink is handcrafted by our skilled baristas",
    img: "/assets/icon/coffee.png",
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
    name: "Cappuccino",
    description:
      "A harmonious balance of rich espresso, steamed milk, and velvety milk foam.",
    price: "45K",
    image: "/assets/menu/cappuccino.png",
    tag: "★ Best Seller",
    category: "signature",
  },
  {
    name: "Ice Late Night Coffee",
    description:
      "Freshly brewed medium-roast coffee, cooled and served over ice with a splash of milk and subtle sweetness.",
    price: "40K",
    image: "/assets/menu/ice-coffee.png",
    tag: "✦ House Special",
    category: "signature",
  },
  {
    name: "Green Matcha Latte",
    description:
      "Ceremonial-grade matcha whisked with creamy milk, lightly sweetened with organic honey.",
    price: "48K",
    image: "/assets/menu/matcha.png",
    tag: "🌿 Vegan Friendly",
    category: "signature",
  },
  {
    name: "Sourdough Croissant",
    description:
      "48-hour fermented dough, baked fresh every morning with French butter.",
    price: "35K",
    image: "/assets/menu/croissant.png",
    tag: "🥐 Fresh Daily",
    category: "pastries",
  },
  {
    name: "Banana Bread",
    description:
      "Moist, perfectly spiced banana bread with walnuts, served warm with butter.",
    price: "30K",
    image: "/assets/menu/banana-bread.png",
    tag: "🍌 Homemade",
    category: "pastries",
  },
  {
    name: "Tiramisu Cake",
    description:
      "Classic Italian tiramisu layered with espresso-soaked ladyfingers and mascarpone cream.",
    price: "45K",
    image: "/assets/menu/tiramisu.png",
    tag: "🍰 Chef's Pick",
    category: "pastries",
  },
  {
    name: "Pumpkin Spice Latte",
    description:
      "A seasonal favorite — warm espresso blended with real pumpkin purée and autumn spices.",
    price: "50K",
    image: "/assets/menu/pumpkin-latte.png",
    tag: "🎃 Limited Edition",
    category: "seasonal",
  },
  {
    name: "Iced Lychee Rose",
    description:
      "Refreshing lychee-infused tea with a hint of rose syrup, served over crushed ice.",
    price: "42K",
    image: "/assets/menu/lychee-rose.png",
    tag: "🌸 Summer Special",
    category: "seasonal",
  },
  {
    name: "Gingerbread Mocha",
    description:
      "Rich mocha with gingerbread spice, topped with whipped cream and a gingerbread cookie.",
    price: "52K",
    image: "/assets/menu/gingerbread.png",
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

export interface IGalleryItems {
  url: string;
  description: string;
  space: boolean;
}

// === GALLERY ===
export const GALLERY_IMAGES: IGalleryItems[] = [
  {
    url: "/assets/gallery/img-1.png",
    description: "Cozy interior with warm lighting",
    space: true,
  },
  {
    url: "/assets/gallery/img-2.png",
    description: "Barista pouring latte art",
    space: false,
  },
  {
    url: "/assets/gallery/img-3.png",
    description: "Our skilled barista at work",
    space: false,
  },
  {
    url: "/assets/gallery/img-4.png",
    description: "Beautiful latte art",
    space: false,
  },
  {
    url: "/assets/gallery/img-5.png",
    description: "Fresh pastries display",
    space: false,
  },
  {
    url: "/assets/gallery/img-6.png",
    description: "Fresh pastries display",
    space: true,
  },
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
    name: "Catherine Wijaya",
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
    name: "Sarah Maulida",
    source: "Food Blogger",
    initial: "M",
  },
];

// === LOCATION ===
export const STORE_INFO = {
  address: "Jl. Panglima Polim V Selatan No.6, Melawai, Kebayoran Baru",
  city: "Jakarta Selatan 12160",
  phone: "+62 812 3456 7890",
  email: "hello@latenightcoffee.id",
  hours: {
    weekday: { open: "07:00", close: "22:00", label: "Mon — Fri" },
    weekend: { open: "08:00", close: "23:00", label: "Sat — Sun" },
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.284118059777!2d106.79489714418504!3d-6.24500271141361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f15f0d75ccbb%3A0x673681e728003a2b!2sWarkopolim!5e0!3m2!1sid!2sid!4v1774521969898!5m2!1sid!2sid",
} as const;

// === SOCIAL LINKS ===
export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/latenightcoffee.id",
    icon: "instagram",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/latenightcoffee.id",
    icon: "twitter",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/latenightcoffee.id",
    icon: "facebook",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@latenightcoffee.id",
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
