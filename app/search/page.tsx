"use client"

import { useState } from "react"
import { BaseNavigation } from "@/components/base/base-navigation"
import { BaseGrid } from "@/components/base/base-grid"
import { ProductCard } from "@/components/base/product-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

export default function SearchResultsPage() {
  const [currentPage, setCurrentPage] = useState("search")
  const [cartCount, setCartCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState("tactical backpack")
  const [showFilters, setShowFilters] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState({
    type: [] as string[],
    category: [] as string[],
    price: [] as string[],
  })

  const navigationMenu = [
    { label: "Work Gear", href: "/work-gear" },
    { label: "Travel Gear", href: "/travel-gear" },
    { label: "Digital Products", href: "/digital" },
    { label: "Gift Ideas", href: "/gifts" },
    { label: "About", href: "/about" },
  ]

  const searchResults = [
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
      id: "tactical-vest",
      title: "Tactical Utility Vest with Multiple Pockets",
      price: 89.99,
      image: "/placeholder.svg?key=tactical-vest",
      rating: 4.5,
      reviewCount: 67,
      badge: "New",
    },
    {
      id: "tactical-belt",
      title: "Heavy Duty Tactical Belt - Reinforced",
      price: 49.99,
      image: "/placeholder.svg?key=tactical-belt",
      rating: 4.6,
      reviewCount: 89,
    },
  ]

  const trendingSearches = ["safety boots", "laptop case", "work gloves", "hard hat", "tool belt", "safety vest"]

  const filterOptions = {
    type: ["Backpacks", "Vests", "Belts", "Accessories"],
    category: ["Work Gear", "Travel Gear", "Safety Equipment"],
    price: ["Under $50", "$50 - $100", "$100 - $200", "Over $200"],
  }

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
      category: [],
      price: [],
    })
  }

  const activeFilterCount = Object.values(selectedFilters).flat().length

  const handleSearch = (data: Record<string, string>) => {
    setSearchQuery(data.search)
  }

  return (
    <div className="min-h-screen bg-background">
      <BaseNavigation logo="Trail Edge Co." menu={navigationMenu} onNavigate={setCurrentPage} cartCount={cartCount} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2" size="sm">
              Search
            </Button>
          </div>
        </div>

        {/* Search Results Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Search Results for "{searchQuery}"</h1>
          <p className="text-muted-foreground">Found {searchResults.length} products matching your search</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={cn("lg:w-64 space-y-6", showFilters ? "block" : "hidden lg:block")}>
            {/* Trending Searches */}
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Trending Searches
                </h3>
                <div className="flex flex-wrap gap-2">
                  {trendingSearches.map((term) => (
                    <Button
                      key={term}
                      variant="outline"
                      size="sm"
                      onClick={() => setSearchQuery(term)}
                      className="text-xs"
                    >
                      {term}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Filters</h3>
                  {activeFilterCount > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
                      Clear All
                    </Button>
                  )}
                </div>

                <div className="space-y-4">
                  {Object.entries(filterOptions).map(([category, options]) => (
                    <div key={category}>
                      <h4 className="font-medium mb-2 capitalize">{category}</h4>
                      <div className="space-y-2">
                        {options.map((option) => (
                          <label key={option} className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={selectedFilters[category as keyof typeof selectedFilters].includes(option)}
                              onChange={() => handleFilterChange(category as keyof typeof selectedFilters, option)}
                              className="rounded border-border"
                            />
                            <span className="text-sm">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Filter Toggle & Active Filters */}
            <div className="flex items-center justify-between mb-6">
              <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="lg:hidden">
                <Filter className="h-4 w-4 mr-2" />
                Filters
                {activeFilterCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {activeFilterCount}
                  </Badge>
                )}
              </Button>

              <div className="text-sm text-muted-foreground">{searchResults.length} results</div>
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
              </div>
            )}

            {/* Search Results */}
            {searchResults.length > 0 ? (
              <BaseGrid
                items={searchResults.map((product) => (
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
                columns={{ desktop: 3, tablet: 2, mobile: 1 }}
                gap="lg"
              />
            ) : (
              /* No Results State */
              <Card className="text-center py-12">
                <CardContent>
                  <div className="max-w-md mx-auto">
                    <div className="text-6xl mb-4">🔍</div>
                    <h2 className="text-xl font-semibold mb-2">No results found</h2>
                    <p className="text-muted-foreground mb-6">
                      We couldn't find any products matching "{searchQuery}". Try adjusting your search or browse our
                      categories.
                    </p>
                    <div className="space-y-3">
                      <Button onClick={() => setSearchQuery("")} className="w-full">
                        Clear Search
                      </Button>
                      <Button variant="outline" onClick={() => setCurrentPage("collections")} className="w-full">
                        Explore Categories
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Suggested Products */}
            {searchResults.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-semibold mb-6">You might also like</h2>
                <BaseGrid
                  items={[
                    <ProductCard
                      key="suggested-1"
                      id="travel-organizer"
                      title="Travel Document Organizer with RFID Protection"
                      price={79.99}
                      image="/travel-document-organizer-rfid.jpg"
                      rating={4.6}
                      reviewCount={89}
                      onAddToCart={() => setCartCount((prev) => prev + 1)}
                    />,
                    <ProductCard
                      key="suggested-2"
                      id="laptop-case"
                      title="Rugged Laptop Case - 15.6 inch Protection"
                      price={99.99}
                      image="/rugged-laptop-case-protection.jpg"
                      rating={4.7}
                      reviewCount={156}
                      onAddToCart={() => setCartCount((prev) => prev + 1)}
                    />,
                    <ProductCard
                      key="suggested-3"
                      id="work-boots"
                      title="Steel Toe Safety Boots - Waterproof"
                      price={189.99}
                      originalPrice={229.99}
                      image="/steel-toe-safety-boots-waterproof.jpg"
                      rating={4.9}
                      reviewCount={203}
                      badge="Top Rated"
                      onAddToCart={() => setCartCount((prev) => prev + 1)}
                    />,
                  ]}
                  columns={{ desktop: 3, tablet: 2, mobile: 1 }}
                  gap="lg"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
