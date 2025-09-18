"use client"

import { useState } from "react"
import { BaseNavigation } from "@/components/base/base-navigation"
import { BaseBanner } from "@/components/base/base-banner"
import { BaseGrid } from "@/components/base/base-grid"
import { ProductCard } from "@/components/base/product-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Filter, Grid, List, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function CollectionPage() {
  const [currentPage, setCurrentPage] = useState("collection")
  const [cartCount, setCartCount] = useState(0)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState("newest")
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedFilters, setSelectedFilters] = useState({
    type: [] as string[],
    useCase: [] as string[],
    availability: [] as string[],
  })

  const navigationMenu = [
    { label: "Work Gear", href: "/work-gear" },
    { label: "Travel Gear", href: "/travel-gear" },
    { label: "Digital Products", href: "/digital" },
    { label: "Gift Ideas", href: "/gifts" },
    { label: "About", href: "/about" },
  ]

  const filterOptions = {
    type: ["Backpacks", "Cases", "Boots", "Accessories", "Tools"],
    useCase: ["Field Work", "Business Travel", "Daily Commute", "Outdoor", "Professional"],
    availability: ["In Stock", "Pre-order", "Limited Edition"],
  }

  const products = [
    {
      id: "tactical-backpack",
      title: "Professional Tactical Backpack - 35L Capacity",
      price: 149.99,
      originalPrice: 199.99,
      image: "/tactical-backpack-professional.jpg",
      rating: 4.8,
      reviewCount: 124,
      badge: "Bestseller",
    },
    {
      id: "travel-organizer",
      title: "Travel Document Organizer with RFID Protection",
      price: 79.99,
      image: "/travel-document-organizer-rfid.jpg",
      rating: 4.6,
      reviewCount: 89,
    },
    {
      id: "work-boots",
      title: "Steel Toe Safety Boots - Waterproof",
      price: 189.99,
      originalPrice: 229.99,
      image: "/steel-toe-safety-boots-waterproof.jpg",
      rating: 4.9,
      reviewCount: 203,
      badge: "Top Rated",
    },
    {
      id: "laptop-case",
      title: "Rugged Laptop Case - 15.6 inch Protection",
      price: 99.99,
      image: "/rugged-laptop-case-protection.jpg",
      rating: 4.7,
      reviewCount: 156,
    },
    {
      id: "tool-belt",
      title: "Professional Tool Belt with Suspenders",
      price: 129.99,
      image: "/placeholder.svg?key=tool-belt",
      rating: 4.5,
      reviewCount: 78,
      badge: "New",
    },
    {
      id: "hard-hat",
      title: "Safety Hard Hat with LED Light",
      price: 59.99,
      image: "/placeholder.svg?key=hard-hat",
      rating: 4.4,
      reviewCount: 92,
    },
    {
      id: "work-gloves",
      title: "Cut-Resistant Work Gloves - Level 5",
      price: 34.99,
      image: "/placeholder.svg?key=work-gloves",
      rating: 4.6,
      reviewCount: 145,
    },
    {
      id: "safety-vest",
      title: "High-Visibility Safety Vest - Class 3",
      price: 49.99,
      image: "/placeholder.svg?key=safety-vest",
      rating: 4.3,
      reviewCount: 67,
    },
  ]

  const handleFilterChange = (category: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }))
  }

  const clearFilters = () => {
    setSelectedFilters({
      type: [],
      useCase: [],
      availability: [],
    })
    setPriceRange([0, 500])
  }

  const activeFilterCount =
    Object.values(selectedFilters).flat().length + (priceRange[0] > 0 || priceRange[1] < 500 ? 1 : 0)

  return (
    <div className="min-h-screen bg-background">
      <BaseNavigation logo="Trail Edge Co." menu={navigationMenu} onNavigate={setCurrentPage} cartCount={cartCount} />

      {/* Collection Banner */}
      <BaseBanner
        content="Work Gear Collection"
        variant="default"
        backgroundImage="/professional-outdoor-gear-mountain-landscape.jpg"
        cta={{
          label: "Shop All",
          priority: "primary",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <span>Home</span> / <span className="text-foreground">Work Gear</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={cn("lg:w-64 space-y-6", showFilters ? "block" : "hidden lg:block")}>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-lg">
                  Filters
                  {activeFilterCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
                      Clear All
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Price Range */}
                <div>
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={10} className="mb-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Type Filter */}
                <div>
                  <h4 className="font-medium mb-3">Type</h4>
                  <div className="space-y-2">
                    {filterOptions.type.map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={`type-${type}`}
                          checked={selectedFilters.type.includes(type)}
                          onCheckedChange={() => handleFilterChange("type", type)}
                        />
                        <label
                          htmlFor={`type-${type}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Case Filter */}
                <div>
                  <h4 className="font-medium mb-3">Use Case</h4>
                  <div className="space-y-2">
                    {filterOptions.useCase.map((useCase) => (
                      <div key={useCase} className="flex items-center space-x-2">
                        <Checkbox
                          id={`useCase-${useCase}`}
                          checked={selectedFilters.useCase.includes(useCase)}
                          onCheckedChange={() => handleFilterChange("useCase", useCase)}
                        />
                        <label
                          htmlFor={`useCase-${useCase}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {useCase}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability Filter */}
                <div>
                  <h4 className="font-medium mb-3">Availability</h4>
                  <div className="space-y-2">
                    {filterOptions.availability.map((availability) => (
                      <div key={availability} className="flex items-center space-x-2">
                        <Checkbox
                          id={`availability-${availability}`}
                          checked={selectedFilters.availability.includes(availability)}
                          onCheckedChange={() => handleFilterChange("availability", availability)}
                        />
                        <label
                          htmlFor={`availability-${availability}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {availability}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-6 p-4 bg-muted rounded-lg">
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="ml-1 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
                      {activeFilterCount}
                    </span>
                  )}
                </Button>
                <span className="text-sm text-muted-foreground">Showing {products.length} products</span>
              </div>

              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="bestselling">Bestselling</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border border-border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.entries(selectedFilters).map(([category, values]) =>
                  values.map((value) => (
                    <div
                      key={`${category}-${value}`}
                      className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      <span>{value}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-auto p-0 hover:bg-transparent"
                        onClick={() => handleFilterChange(category as keyof typeof selectedFilters, value)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  )),
                )}
                {(priceRange[0] > 0 || priceRange[1] < 500) && (
                  <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    <span>
                      ${priceRange[0]} - ${priceRange[1]}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 hover:bg-transparent"
                      onClick={() => setPriceRange([0, 500])}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                )}
              </div>
            )}

            {/* Product Grid */}
            <BaseGrid
              items={products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  badge={product.badge}
                  onAddToCart={() => setCartCount((prev) => prev + 1)}
                />
              ))}
              columns={
                viewMode === "grid" ? { desktop: 3, tablet: 2, mobile: 1 } : { desktop: 1, tablet: 1, mobile: 1 }
              }
              gap="lg"
            />

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="default" size="sm">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
