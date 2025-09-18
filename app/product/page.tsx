"use client"

import { useState } from "react"
import { BaseNavigation } from "@/components/base/base-navigation"
import { BaseCarousel } from "@/components/base/base-carousel"
import { BaseGrid } from "@/components/base/base-grid"
import { ProductCard } from "@/components/base/product-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Heart, Share2, Truck, Shield, RotateCcw, Download } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ProductPage() {
  const [currentPage, setCurrentPage] = useState("product")
  const [cartCount, setCartCount] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("Black")
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const navigationMenu = [
    { label: "Work Gear", href: "/work-gear" },
    { label: "Travel Gear", href: "/travel-gear" },
    { label: "Digital Products", href: "/digital" },
    { label: "Gift Ideas", href: "/gifts" },
    { label: "About", href: "/about" },
  ]

  const productImages = [
    <div key="main" className="aspect-square bg-muted rounded-lg flex items-center justify-center">
      <img
        src="/tactical-backpack-professional.jpg"
        alt="Professional Tactical Backpack - Main View"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>,
    <div key="side" className="aspect-square bg-muted rounded-lg flex items-center justify-center">
      <img
        src="/tactical-backpack-side-view.jpg"
        alt="Professional Tactical Backpack - Side View"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>,
    <div key="interior" className="aspect-square bg-muted rounded-lg flex items-center justify-center">
      <img
        src="/tactical-backpack-interior-compartments.jpg"
        alt="Professional Tactical Backpack - Interior"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>,
    <div key="detail" className="aspect-square bg-muted rounded-lg flex items-center justify-center">
      <img
        src="/tactical-backpack-zipper-detail.jpg"
        alt="Professional Tactical Backpack - Detail"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>,
  ]

  const crossSellProducts = [
    <ProductCard
      key="travel-organizer"
      id="travel-organizer"
      title="Travel Document Organizer with RFID Protection"
      price={79.99}
      image="/travel-document-organizer-rfid.jpg"
      rating={4.6}
      reviewCount={89}
      onAddToCart={() => setCartCount((prev) => prev + 1)}
    />,
    <ProductCard
      key="laptop-case"
      id="laptop-case"
      title="Rugged Laptop Case - 15.6 inch Protection"
      price={99.99}
      image="/rugged-laptop-case-protection.jpg"
      rating={4.7}
      reviewCount={156}
      onAddToCart={() => setCartCount((prev) => prev + 1)}
    />,
    <ProductCard
      key="work-boots"
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
  ]

  const reviews = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Field Engineer",
      rating: 5,
      date: "2 weeks ago",
      title: "Perfect for field work",
      content:
        "This backpack has been a game-changer for my field work. The organization is incredible and it's held up through some tough conditions. The laptop compartment is well-padded and the water resistance has saved me multiple times.",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Sales Director",
      rating: 5,
      date: "1 month ago",
      title: "Great for business travel",
      content:
        "I travel frequently for work and this backpack has everything I need. The TSA-friendly laptop compartment is a huge time saver at airports. Quality construction and professional appearance.",
    },
    {
      id: 3,
      name: "Jennifer Park",
      role: "Project Manager",
      rating: 4,
      date: "3 weeks ago",
      title: "Solid construction",
      content:
        "Really well-made backpack with thoughtful design. The only minor issue is that it's a bit heavy when fully loaded, but the comfort of the straps makes up for it. Would recommend.",
    },
  ]

  const sizes = ["Small (25L)", "Medium (35L)", "Large (45L)"]
  const colors = ["Black", "Navy", "Olive Green", "Charcoal"]

  return (
    <div className="min-h-screen bg-background">
      <BaseNavigation logo="Trail Edge Co." menu={navigationMenu} onNavigate={setCurrentPage} cartCount={cartCount} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8">
          <span>Home</span> / <span>Work Gear</span> / <span>Backpacks</span> /
          <span className="text-foreground"> Professional Tactical Backpack</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Gallery */}
          <div>
            <BaseCarousel
              items={productImages}
              itemsPerView={{ desktop: 1, tablet: 1, mobile: 1 }}
              showControls={true}
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">Bestseller</Badge>
                <Badge variant="outline">Free Shipping</Badge>
              </div>
              <h1 className="text-3xl font-bold mb-4 text-balance">Professional Tactical Backpack - 35L Capacity</h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn("h-4 w-4", i < 4 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground")}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">(124 reviews)</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold">$149.99</span>
                <span className="text-xl text-muted-foreground line-through">$199.99</span>
                <Badge variant="destructive">25% OFF</Badge>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Built for professionals who demand reliability and organization. This tactical backpack features
                multiple compartments, TSA-friendly laptop section, and weather-resistant construction. Perfect for
                field work, business travel, and daily commuting.
              </p>
            </div>

            {/* Product Options */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Size</label>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Color</label>
                <div className="flex gap-2">
                  {colors.map((color) => (
                    <Button
                      key={color}
                      variant={selectedColor === color ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Quantity</label>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    -
                  </Button>
                  <span className="px-4 py-2 border border-border rounded-md min-w-[60px] text-center">{quantity}</span>
                  <Button variant="outline" size="sm" onClick={() => setQuantity(quantity + 1)}>
                    +
                  </Button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button size="lg" className="w-full" onClick={() => setCartCount((prev) => prev + quantity)}>
                Add to Cart - ${(149.99 * quantity).toFixed(2)}
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 bg-transparent"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={cn("h-4 w-4 mr-2", isWishlisted && "fill-current text-red-500")} />
                  {isWishlisted ? "Saved" : "Save"}
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">2 Year Warranty</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-xs text-muted-foreground">30 Day Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="downloads">Downloads</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The Professional Tactical Backpack is engineered for professionals who need reliable, organized
                    storage for their essential gear. Whether you're heading to a job site, traveling for business, or
                    navigating daily commutes, this backpack delivers the durability and functionality you need.
                  </p>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>35L capacity with multiple organized compartments</li>
                    <li>TSA-friendly laptop compartment fits up to 17" laptops</li>
                    <li>Weather-resistant 1000D nylon construction</li>
                    <li>Padded shoulder straps and back panel for comfort</li>
                    <li>MOLLE webbing for additional gear attachment</li>
                    <li>Hydration bladder compatible</li>
                    <li>Lifetime repair guarantee</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specs" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Dimensions & Weight</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Height: 20 inches (51 cm)</li>
                      <li>Width: 13 inches (33 cm)</li>
                      <li>Depth: 9 inches (23 cm)</li>
                      <li>Weight: 3.2 lbs (1.45 kg)</li>
                      <li>Capacity: 35 liters</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Materials & Construction</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>Exterior: 1000D Cordura nylon</li>
                      <li>Lining: 210D ripstop nylon</li>
                      <li>Zippers: YKK #10 heavy-duty</li>
                      <li>Hardware: Duraflex buckles</li>
                      <li>Water resistance: DWR coating</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Customer Reviews</span>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-4 w-4",
                              i < 4 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground",
                            )}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">4.8 out of 5 (124 reviews)</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b border-border pb-6 last:border-b-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold">{review.name}</span>
                              <span className="text-sm text-muted-foreground">•</span>
                              <span className="text-sm text-muted-foreground">{review.role}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={cn(
                                      "h-3 w-3",
                                      i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground",
                                    )}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <h4 className="font-semibold mb-2">{review.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{review.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="downloads" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Downloads & Resources</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Download className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">User Manual</p>
                        <p className="text-sm text-muted-foreground">Complete setup and care instructions</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Download PDF
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Download className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Warranty Information</p>
                        <p className="text-sm text-muted-foreground">2-year warranty details and registration</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Download PDF
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Download className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Packing Guide</p>
                        <p className="text-sm text-muted-foreground">Tips for optimal organization and packing</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Download PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Cross-sell Products */}
        <section>
          <h2 className="text-2xl font-bold mb-8 text-balance">You Might Also Like</h2>
          <BaseGrid items={crossSellProducts} columns={{ desktop: 3, tablet: 2, mobile: 1 }} gap="lg" />
        </section>
      </div>
    </div>
  )
}
