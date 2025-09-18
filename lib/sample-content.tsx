// Sample Product Data
export const sampleProducts = [
  // Work Gear Category
  {
    id: "work-backpack-pro",
    name: "Professional Work Backpack",
    category: "work-gear",
    type: "physical",
    price: 89.99,
    image: "/product-work-backpack.jpg",
    description: "Durable backpack designed for construction professionals with tool organization compartments.",
    features: ["Water-resistant", "Tool organization", "Laptop compartment", "Reflective strips"],
  },
  {
    id: "portable-desk-station",
    name: "Portable Desk Station",
    category: "work-gear",
    type: "physical",
    price: 149.99,
    image: "/product-portable-desk.jpg",
    description: "Foldable desk station perfect for job site offices and remote work locations.",
    features: ["Foldable design", "Built-in storage", "Adjustable height", "Weather resistant"],
  },
  {
    id: "rugged-tablet-case",
    name: "Rugged Tablet Case",
    category: "work-gear",
    type: "physical",
    price: 59.99,
    image: "/product-tablet-case.jpg",
    description: "Heavy-duty protection for tablets used in construction and outdoor environments.",
    features: ["Drop protection", "Dust/water resistant", "Screen protector", "Hand strap"],
  },

  // Travel Gear Category
  {
    id: "travel-organizer-pro",
    name: "Professional Travel Organizer",
    category: "travel-gear",
    type: "physical",
    price: 79.99,
    image: "/product-travel-organizer.jpg",
    description: "Keep your business travel essentials organized with this comprehensive organizer.",
    features: ["Multiple compartments", "Document holder", "Cable management", "TSA friendly"],
  },
  {
    id: "universal-travel-adapter",
    name: "Universal Travel Adapter",
    category: "travel-gear",
    type: "physical",
    price: 34.99,
    image: "/product-travel-adapter.jpg",
    description: "All-in-one travel adapter with USB-C and wireless charging capabilities.",
    features: ["150+ countries", "USB-C PD", "Wireless charging", "Safety certified"],
  },

  // Digital Products Category
  {
    id: "project-templates-bundle",
    name: "Project Management Templates",
    category: "digital-products",
    type: "digital",
    price: 29.99,
    image: "/product-digital-templates.jpg",
    description: "Complete set of project management templates for construction professionals.",
    features: ["Excel & PDF formats", "Customizable", "Instant download", "Lifetime updates"],
  },
  {
    id: "travel-planning-app",
    name: "Business Travel Planning App",
    category: "digital-products",
    type: "digital",
    price: 19.99,
    image: "/product-travel-app.jpg",
    description: "Mobile app for planning and organizing business travel itineraries.",
    features: ["Offline access", "Expense tracking", "Itinerary sharing", "Cloud sync"],
  },

  // Print-on-Demand Category
  {
    id: "trail-edge-tshirt",
    name: "Trail Edge Co. T-Shirt",
    category: "apparel",
    type: "pod",
    price: 24.99,
    image: "/product-tshirt.jpg",
    description: "Comfortable cotton t-shirt featuring the Trail Edge Co. logo.",
    features: ["100% cotton", "Multiple sizes", "Durable print", "Machine washable"],
  },
  {
    id: "outdoor-adventure-mug",
    name: "Outdoor Adventure Mug",
    category: "apparel",
    type: "pod",
    price: 18.99,
    image: "/product-mug.jpg",
    description: "Insulated travel mug perfect for outdoor adventures and job sites.",
    features: ["Double-wall insulated", "Leak-proof lid", "Dishwasher safe", "Custom design"],
  },
]

// Sample Testimonials
export const sampleTestimonials = [
  {
    id: 1,
    name: "Mike Rodriguez",
    role: "Construction Superintendent",
    company: "BuildRight Construction",
    image: "/testimonial-person-1.jpg",
    quote:
      "Trail Edge Co. gear has transformed how I organize my job sites. The professional backpack keeps all my tools and documents perfectly organized.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Project Manager",
    company: "Global Engineering Solutions",
    image: "/testimonial-person-2.jpg",
    quote:
      "As someone who travels frequently for work, the travel organizer has been a game-changer. Everything has its place and I never forget important documents.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Thompson",
    role: "Field Engineer",
    company: "Mountain Peak Construction",
    image: "/testimonial-person-3.jpg",
    quote:
      "The digital templates saved me hours of work. Professional, well-designed, and exactly what I needed for project management.",
    rating: 5,
  },
]

// Sample Blog Posts
export const sampleBlogPosts = [
  {
    id: "construction-organization-tips",
    title: "10 Essential Organization Tips for Construction Professionals",
    excerpt: "Discover proven strategies to keep your job site organized and improve productivity.",
    image: "/blog-construction-tips.jpg",
    author: "Trail Edge Team",
    date: "2024-01-15",
    category: "Tips & Guides",
  },
  {
    id: "business-travel-essentials",
    title: "The Ultimate Business Travel Packing Guide",
    excerpt: "Everything you need to know about packing efficiently for business travel.",
    image: "/blog-travel-guide.jpg",
    author: "Trail Edge Team",
    date: "2024-01-10",
    category: "Travel",
  },
  {
    id: "outdoor-gear-maintenance",
    title: "How to Maintain Your Outdoor Gear for Maximum Durability",
    excerpt: "Expert tips on caring for your outdoor equipment to ensure it lasts for years.",
    image: "/blog-gear-maintenance.jpg",
    author: "Trail Edge Team",
    date: "2024-01-05",
    category: "Maintenance",
  },
]

// Sample Collections
export const sampleCollections = [
  {
    id: "work-essentials",
    name: "Work Essentials",
    description: "Professional gear designed for construction and field work",
    image: "/collection-work-gear.jpg",
    productCount: 12,
  },
  {
    id: "travel-ready",
    name: "Travel Ready",
    description: "Organize your business travel with our curated selection",
    image: "/collection-travel-gear.jpg",
    productCount: 8,
  },
  {
    id: "digital-tools",
    name: "Digital Tools",
    description: "Templates and apps to streamline your workflow",
    image: "/collection-digital-products.jpg",
    productCount: 6,
  },
]

export const sampleFAQs = [
  {
    id: "shipping-info",
    question: "What are your shipping options and delivery times?",
    answer:
      "We offer free standard shipping on orders over $50, which takes 5-7 business days. Express shipping (2-3 business days) is available for $9.99, and overnight shipping for $19.99. Digital products are delivered instantly via email.",
    category: "shipping",
  },
  {
    id: "return-policy",
    question: "What is your return and exchange policy?",
    answer:
      "We offer a 30-day money-back guarantee on all physical products. Items must be in original condition with tags attached. Digital products are non-refundable due to their nature, but we offer full support to ensure satisfaction.",
    category: "returns",
  },
  {
    id: "product-warranty",
    question: "Do your products come with a warranty?",
    answer:
      "Yes! All physical products come with a 1-year manufacturer warranty covering defects in materials and workmanship. We also provide lifetime customer support for all digital products and templates.",
    category: "warranty",
  },
  {
    id: "bulk-orders",
    question: "Do you offer discounts for bulk orders?",
    answer:
      "We offer volume discounts starting at 10+ items (10% off), 25+ items (15% off), and 50+ items (20% off). Contact our sales team for custom quotes on larger orders.",
    category: "pricing",
  },
  {
    id: "customization",
    question: "Can products be customized or personalized?",
    answer:
      "Many of our products can be customized with your company logo or personal details. Digital templates are fully customizable, and we offer custom printing services for physical items. Contact us for specific customization options.",
    category: "customization",
  },
  {
    id: "international-shipping",
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries worldwide. International shipping rates vary by destination and are calculated at checkout. Please note that customers are responsible for any customs duties or taxes.",
    category: "shipping",
  },
]

export const productCategories = [
  {
    id: "work-gear",
    name: "Work Gear",
    description: "Professional equipment and tools for construction, field work, and job sites",
    icon: "briefcase",
    color: "#355E3B",
    subcategories: ["Backpacks & Bags", "Tool Organization", "Safety Equipment", "Mobile Workstations"],
  },
  {
    id: "travel-gear",
    name: "Travel Gear",
    description: "Essential items for business travel and professional trips",
    icon: "plane",
    color: "#4D617A",
    subcategories: ["Travel Organizers", "Tech Accessories", "Luggage", "Travel Comfort"],
  },
  {
    id: "digital-products",
    name: "Digital Products",
    description: "Templates, apps, and digital tools to streamline your workflow",
    icon: "download",
    color: "#B35B2E",
    subcategories: ["Project Templates", "Mobile Apps", "Planning Tools", "Productivity Software"],
  },
  {
    id: "apparel",
    name: "Apparel & Accessories",
    description: "Branded clothing and accessories for outdoor professionals",
    icon: "shirt",
    color: "#C9B89C",
    subcategories: ["T-Shirts", "Hoodies", "Hats", "Drinkware", "Stickers"],
  },
]

export const companyInfo = {
  name: "Trail Edge Co.",
  tagline: "Professional Gear for Outdoor Work",
  founded: "2019",
  headquarters: "Denver, Colorado",
  mission:
    "To provide durable, role-specific gear that helps outdoor professionals work more efficiently and travel with confidence.",
  values: ["Durability", "Functionality", "Innovation", "Customer Success"],
  certifications: ["ISO 9001", "B-Corp Certified", "Carbon Neutral Shipping"],
  socialMedia: {
    instagram: "@trailedgeco",
    facebook: "TrailEdgeCo",
    linkedin: "trail-edge-co",
    youtube: "TrailEdgeCoOfficial",
  },
  contact: {
    email: "hello@trailedgeco.com",
    phone: "1-800-TRAIL-EDGE",
    address: "1234 Mountain View Drive, Denver, CO 80202",
  },
}

export const newsletterIncentives = [
  {
    title: "10% Off First Order",
    description: "Get an exclusive discount code when you subscribe to our newsletter",
  },
  {
    title: "Early Access",
    description: "Be the first to know about new products and seasonal collections",
  },
  {
    title: "Expert Tips",
    description: "Receive monthly tips on organization, productivity, and gear maintenance",
  },
  {
    title: "Exclusive Content",
    description: "Access to subscriber-only guides, templates, and resources",
  },
]

export const seasonalPromotions = [
  {
    id: "spring-prep",
    name: "Spring Job Site Prep",
    description: "Get ready for the busy season with 20% off work gear",
    startDate: "2024-03-01",
    endDate: "2024-03-31",
    discount: 20,
    categories: ["work-gear"],
  },
  {
    id: "summer-travel",
    name: "Summer Travel Ready",
    description: "Travel gear essentials for your summer business trips",
    startDate: "2024-06-01",
    endDate: "2024-08-31",
    discount: 15,
    categories: ["travel-gear"],
  },
  {
    id: "back-to-work",
    name: "Back to Work Sale",
    description: "Organize your workspace with digital tools and templates",
    startDate: "2024-09-01",
    endDate: "2024-09-30",
    discount: 25,
    categories: ["digital-products"],
  },
  {
    id: "holiday-gifts",
    name: "Holiday Gift Guide",
    description: "Perfect gifts for the outdoor professional in your life",
    startDate: "2024-11-15",
    endDate: "2024-12-24",
    discount: 30,
    categories: ["apparel", "work-gear", "travel-gear"],
  },
]
