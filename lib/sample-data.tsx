export interface Product {
  id: string
  name: string
  type: "digital" | "physical" | "pod"
  price: number
  originalPrice?: number
  image: string
  images: string[]
  category: string
  description: string
  features: string[]
  inStock: boolean
  rating: number
  reviewCount: number
  badge?: string
}

export const sampleProducts: Product[] = [
  // Work Gear - Physical Products
  {
    id: "work-backpack-pro",
    name: "Professional Work Backpack",
    type: "physical",
    price: 189.99,
    originalPrice: 229.99,
    image: "/product-work-backpack.jpg",
    images: ["/product-work-backpack.jpg", "/product-work-backpack-2.jpg", "/product-work-backpack-3.jpg"],
    category: "Work Gear",
    description:
      "TSA-compliant professional backpack with dedicated laptop compartment, cable management, and weather-resistant materials.",
    features: [
      "TSA-Compliant Design",
      "17-inch Laptop Compartment",
      "Weather Resistant",
      "Cable Management System",
      "Ergonomic Straps",
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 127,
    badge: "Best Seller",
  },
  {
    id: "portable-desk-setup",
    name: "Portable Desk Setup Kit",
    type: "physical",
    price: 149.99,
    image: "/product-portable-desk.jpg",
    images: ["/product-portable-desk.jpg", "/product-portable-desk-2.jpg"],
    category: "Work Gear",
    description: "Complete portable workspace solution with adjustable laptop stand, wireless keyboard, and mouse pad.",
    features: ["Adjustable Height", "Wireless Keyboard", "Premium Mouse Pad", "Compact Storage", "Quick Setup"],
    inStock: true,
    rating: 4.6,
    reviewCount: 89,
  },
  {
    id: "field-tablet-case",
    name: "Rugged Field Tablet Case",
    type: "physical",
    price: 79.99,
    image: "/product-tablet-case.jpg",
    images: ["/product-tablet-case.jpg", "/product-tablet-case-2.jpg"],
    category: "Work Gear",
    description: "Military-grade protection for tablets used in field work, with shoulder strap and document storage.",
    features: [
      "Military-Grade Protection",
      "Shoulder Strap",
      "Document Storage",
      "Screen Protection",
      "All-Weather Seal",
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 203,
  },

  // Travel Gear - Physical Products
  {
    id: "travel-organizer-set",
    name: "Travel Organizer Set",
    type: "physical",
    price: 69.99,
    image: "/product-travel-organizer.jpg",
    images: ["/product-travel-organizer.jpg", "/product-travel-organizer-2.jpg"],
    category: "Travel Gear",
    description: "Complete set of packing cubes and organizers designed for digital nomads and frequent travelers.",
    features: ["6-Piece Set", "Compression Zippers", "Mesh Panels", "Color-Coded", "Lightweight Materials"],
    inStock: true,
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: "universal-adapter-pro",
    name: "Universal Travel Adapter Pro",
    type: "physical",
    price: 49.99,
    image: "/product-travel-adapter.jpg",
    images: ["/product-travel-adapter.jpg", "/product-travel-adapter-2.jpg"],
    category: "Travel Gear",
    description: "All-in-one travel adapter with USB-C PD, wireless charging, and compatibility with 200+ countries.",
    features: [
      "200+ Country Compatibility",
      "USB-C Power Delivery",
      "Wireless Charging Pad",
      "Safety Certified",
      "Compact Design",
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 312,
  },

  // Digital Products
  {
    id: "productivity-templates",
    name: "Remote Work Productivity Templates",
    type: "digital",
    price: 29.99,
    image: "/product-digital-templates.jpg",
    images: ["/product-digital-templates.jpg"],
    category: "Digital Tools",
    description: "Comprehensive collection of Notion templates, spreadsheets, and workflows for remote professionals.",
    features: ["50+ Templates", "Notion Integration", "Excel/Google Sheets", "Video Tutorials", "Lifetime Updates"],
    inStock: true,
    rating: 4.9,
    reviewCount: 89,
  },
  {
    id: "travel-planning-app",
    name: "Digital Nomad Travel Planner",
    type: "digital",
    price: 19.99,
    image: "/product-travel-app.jpg",
    images: ["/product-travel-app.jpg"],
    category: "Digital Tools",
    description: "Complete travel planning software with visa requirements, cost calculators, and destination guides.",
    features: ["Visa Requirements Database", "Cost Calculator", "Destination Guides", "Offline Access", "Mobile App"],
    inStock: true,
    rating: 4.6,
    reviewCount: 67,
  },

  // Print on Demand Products
  {
    id: "trail-edge-tshirt",
    name: "Trail Edge Co. Performance T-Shirt",
    type: "pod",
    price: 34.99,
    image: "/product-tshirt.jpg",
    images: ["/product-tshirt.jpg", "/product-tshirt-2.jpg"],
    category: "Apparel",
    description:
      "Moisture-wicking performance t-shirt with Trail Edge Co. branding, perfect for outdoor professionals.",
    features: [
      "Moisture-Wicking Fabric",
      "UV Protection",
      "Odor Resistant",
      "Sustainable Materials",
      "Multiple Colors",
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 43,
  },
  {
    id: "outdoor-work-mug",
    name: "Insulated Work Mug",
    type: "pod",
    price: 24.99,
    image: "/product-mug.jpg",
    images: ["/product-mug.jpg", "/product-mug-2.jpg"],
    category: "Accessories",
    description: "Double-wall insulated mug with Trail Edge Co. logo, designed for outdoor work environments.",
    features: ["Double-Wall Insulation", "Spill-Proof Lid", "Dishwasher Safe", "BPA-Free", "12oz Capacity"],
    inStock: true,
    rating: 4.7,
    reviewCount: 91,
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Digital Marketing Consultant",
    image: "/testimonial-person-1.jpg",
    content:
      "The Professional Work Backpack has been a game-changer for my client meetings. TSA-compliant and fits everything I need perfectly.",
    rating: 5,
    location: "San Francisco, CA",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Field Engineer",
    image: "/testimonial-person-2.jpg",
    content:
      "Trail Edge Co. gear withstands the toughest conditions. The rugged tablet case saved my equipment during a storm in Alaska.",
    rating: 5,
    location: "Denver, CO",
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Travel Blogger & Photographer",
    image: "/testimonial-person-3.jpg",
    content:
      "As a digital nomad, I need gear that travels well. The travel organizer set keeps me organized across 15 countries and counting.",
    rating: 5,
    location: "Currently in Lisbon, Portugal",
  },
]

export const blogPosts = [
  {
    id: 1,
    title: "Essential Gear for Remote Work Success",
    excerpt: "Discover the must-have equipment that transforms any space into a productive workspace.",
    image: "/blog-remote-work.jpg",
    author: "Trail Edge Team",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Work Tips",
  },
  {
    id: 2,
    title: "Digital Nomad Packing Guide 2024",
    excerpt: "Complete packing checklist for location-independent professionals planning their next adventure.",
    image: "/blog-packing-guide.jpg",
    author: "Emma Thompson",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Travel",
  },
  {
    id: 3,
    title: "Field Work Safety: Protecting Your Equipment",
    excerpt: "Professional tips for keeping your gear safe and functional in challenging outdoor environments.",
    image: "/blog-field-safety.jpg",
    author: "Marcus Rodriguez",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Safety",
  },
]

export const collections = [
  {
    id: "work-gear",
    name: "Professional Work Gear",
    description: "Equipment designed for remote professionals and field workers",
    image: "/collection-work-gear.jpg",
    productCount: 24,
    badge: "physical" as const,
  },
  {
    id: "travel-gear",
    name: "Travel & Adventure Gear",
    description: "Lightweight, durable equipment for digital nomads",
    image: "/collection-travel-gear.jpg",
    productCount: 18,
    badge: "physical" as const,
  },
  {
    id: "digital-tools",
    name: "Digital Productivity Tools",
    description: "Software and digital resources for enhanced productivity",
    image: "/collection-digital-products.jpg",
    productCount: 12,
    badge: "digital" as const,
  },
]
