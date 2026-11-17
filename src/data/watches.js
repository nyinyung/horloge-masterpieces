export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


export const watches = [
  {
    id: "01",
    name: "The Classic",
    category: "CLASSIC DRESS WATCH",
    subtitle: "TIMELESS ELEGANCE",
    description:
      "A timeless expression of refined craftsmanship, designed for those who appreciate understated elegance.",
    reference: "HV-CLASSIC-001",
    accent: "#A77B42",
    image: "/images/1.png",

    // ADDITIONAL INFORMATION
    movement: "Automatic Mechanical",
    case: "316L Stainless Steel · 40mm",
    crystal: "Sapphire Crystal",
    waterResistance: "5 ATM",
    powerReserve: "42 Hours",
    strap: "Genuine Italian Leather",
    price: "IDR 18.500.000",
    features: [
      "Automatic Movement",
      "Date Display",
      "Exhibition Case Back",
    ],
  },
  {
    id: "02",
    name: "The Chronograph",
    category: "CHRONOGRAPH SPORT",
    subtitle: "PRECISION IN MOTION",
    description:
      "A bold interpretation of precision, combining sporting character with sophisticated engineering.",
    reference: "HV-CHRONO-002",
    accent: "#A77B42",
    image: "/images/2.png",

    // ADDITIONAL INFORMATION
    movement: "Automatic Chronograph",
    case: "316L Stainless Steel · 42mm",
    crystal: "Anti-Reflective Sapphire",
    waterResistance: "10 ATM",
    powerReserve: "48 Hours",
    strap: "Premium Stainless Steel",
    price: "IDR 24.800.000",
    features: [
      "Chronograph Function",
      "Tachymeter Scale",
      "Screw-Down Crown",
    ],
  },
  {
    id: "03",
    name: "The Skeleton",
    category: "SKELETON / OPEN HEART",
    subtitle: "MECHANICAL ARTISTRY",
    description:
      "An open view into the intricate mechanical movement, where engineering becomes art.",
    reference: "HV-SKELETON-003",
    accent: "#F5DFB2",
    image: "/images/3.png",

    // ADDITIONAL INFORMATION
    movement: "Hand-Wound Mechanical",
    case: "316L Stainless Steel · 41mm",
    crystal: "Double Sapphire Crystal",
    waterResistance: "3 ATM",
    powerReserve: "48 Hours",
    strap: "Genuine Leather",
    price: "IDR 32.500.000",
    features: [
      "Open Heart Movement",
      "Skeletonized Dial",
      "Hand-Finished Details",
    ],
  },
  {
    id: "04",
    name: "The Limited",
    category: "LIMITED EDITION",
    subtitle: "RARE BY DESIGN",
    description:
      "An exclusive timepiece created in limited quantities for collectors who value individuality.",
    reference: "HV-LIMITED-004",
    accent: "#A77B42",
    image: "/images/4.png",
    edition: "01 / 50 PIECES",

    // ADDITIONAL INFORMATION
    movement: "Swiss Automatic Movement",
    case: "Premium Stainless Steel · 42mm",
    crystal: "Box-Shaped Sapphire Crystal",
    waterResistance: "5 ATM",
    powerReserve: "60 Hours",
    strap: "Handcrafted Premium Leather",
    price: "IDR 45.000.000",
    features: [
      "Limited Edition of 50",
      "Individual Serial Number",
      "Exclusive Collector Box",
    ],
  },
];


export const panels = [
  {
    id: "00",
    type: "opening",
    name: "The Opening",
  },
  {
    id: "01",
    type: "classic",
    name: "The Classic",
  },
  {
    id: "02",
    type: "chronograph",
    name: "The Chronograph",
  },
  {
    id: "03",
    type: "skeleton",
    name: "The Skeleton",
  },
  {
    id: "04",
    type: "limited",
    name: "The Limited",
  },
  {
    id: "05",
    type: "vault",
    name: "The VIP Vault",
  },
];

// Di dalam file src/data/watches.js, tambahkan ini:

export const footerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};