"use client"

import { useState } from "react"
import { BaseNavigation } from "@/components/base/base-navigation"
import { BaseGrid } from "@/components/base/base-grid"
import { BaseForm } from "@/components/base/base-form"
import { ProductCard } from "@/components/base/product-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Package, Download, Heart, MapPin, Settings, Eye, Truck, CheckCircle, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AccountDashboard() {
  const [currentPage, setCurrentPage] = useState("account")
  const [cartCount, setCartCount] = useState(0)
  const [activeTab, setActiveTab] = useState("orders")

  const navigationMenu = [
    { label: "Work Gear", href: "/work-gear" },
    { label: "Travel Gear", href: "/travel-gear" },
    { label: "Digital Products", href: "/digital" },
    { label: "Gift Ideas", href: "/gifts" },
    { label: "About", href: "/about" },
  ]

  const orders = [
    {
      id: "TE-2025-001",
      date: "January 10, 2025",
      status: "delivered",
      total: 309.97,
      items: [
        {
          title: "Professional Tactical Backpack - 35L Capacity",
          image: "/tactical-backpack-professional.jpg",
          quantity: 1,
          price: 149.99,
        },
        {
          title: "Travel Document Organizer with RFID Protection",
          image: "/travel-document-organizer-rfid.jpg",
          quantity: 2,
          price: 79.99,
        },
      ],
    },
    {
      id: "TE-2024-089",
      date: "December 15, 2024",
      status: "shipped",
      total: 189.99,
      items: [
        {
          title: "Steel Toe Safety Boots - Waterproof",
          image: "/steel-toe-safety-boots-waterproof.jpg",
          quantity: 1,
          price: 189.99,
        },
      ],
    },
    {
      id: "TE-2024-067",
      date: "November 28, 2024",
      status: "processing",
      total: 99.99,
      items: [
        {
          title: "Rugged Laptop Case - 15.6 inch Protection",
          image: "/rugged-laptop-case-protection.jpg",
          quantity: 1,
          price: 99.99,
        },
      ],
    },
  ]

  const digitalProducts = [
    {
      id: "guide-001",
      title: "Complete Field Work Safety Guide",
      type: "PDF Guide",
      downloadCount: 3,
      lastDownload: "January 8, 2025",
      size: "2.4 MB",
    },
    {
      id: "checklist-001",
      title: "Travel Packing Checklist for Professionals",
      type: "PDF Checklist",
      downloadCount: 1,
      lastDownload: "December 20, 2024",
      size: "1.1 MB",
    },
    {
      id: "app-001",
      title: "Gear Maintenance Tracker App",
      type: "Mobile App",
      downloadCount: 2,
      lastDownload: "January 5, 2025",
      size: "15.2 MB",
    },
  ]

  const wishlistItems = [
    {
      id: "hard-hat",
      title: "Safety Hard Hat with LED Light",
      price: 59.99,
      image: "/placeholder.svg?key=hard-hat",
      rating: 4.4,
      reviewCount: 92,
      inStock: true,
    },
    {
      id: "work-gloves",
      title: "Cut-Resistant Work Gloves - Level 5",
      price: 34.99,
      originalPrice: 44.99,
      image: "/placeholder.svg?key=work-gloves",
      rating: 4.6,
      reviewCount: 145,
      inStock: true,
      badge: "Sale",
    },
    {
      id: "tool-belt",
      title: "Professional Tool Belt with Suspenders",
      price: 129.99,
      image: "/placeholder.svg?key=tool-belt",
      rating: 4.5,
      reviewCount: 78,
      inStock: false,
      badge: "Out of Stock",
    },
  ]

  const addresses = [
    {
      id: "home",
      type: "Home",
      name: "John Smith",
      address: "123 Main Street",
      city: "San Francisco",
      state: "CA",
      zip: "94102",
      isDefault: true,
    },
    {
      id: "work",
      type: "Work",
      name: "John Smith",
      address: "456 Business Ave, Suite 200",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      isDefault: false,
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "shipped":
        return <Truck className="h-4 w-4 text-blue-600" />
      case "processing":
        return <Clock className="h-4 w-4 text-yellow-600" />
      default:
        return <Package className="h-4 w-4 text-muted-foreground" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800"
      case "shipped":
        return "bg-blue-100 text-blue-800"
      case "processing":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const addressFields = [
    { id: "name", label: "Full Name", type: "text" as const, required: true },
    { id: "address", label: "Street Address", type: "text" as const, required: true },
    { id: "city", label: "City", type: "text" as const, required: true },
    { id: "state", label: "State", type: "select" as const, required: true, options: ["CA", "NY", "TX", "FL"] },
    { id: "zip", label: "ZIP Code", type: "text" as const, required: true },
  ]

  return (
    <div className="min-h-screen bg-background">
      <BaseNavigation logo="Trail Edge Co." menu={navigationMenu} onNavigate={setCurrentPage} cartCount={cartCount} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <span>Home</span> / <span className="text-foreground">My Account</span>
        </nav>

        {/* Account Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Account</h1>
            <p className="text-muted-foreground">Welcome back, John Smith</p>
          </div>
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Settings className="h-4 w-4" />
            Account Settings
          </Button>
        </div>

        {/* Account Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Package className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{orders.length}</div>
              <div className="text-sm text-muted-foreground">Total Orders</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Download className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{digitalProducts.length}</div>
              <div className="text-sm text-muted-foreground">Digital Products</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{wishlistItems.length}</div>
              <div className="text-sm text-muted-foreground">Wishlist Items</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{addresses.length}</div>
              <div className="text-sm text-muted-foreground">Saved Addresses</div>
            </CardContent>
          </Card>
        </div>

        {/* Account Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="downloads" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Downloads
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Wishlist
            </TabsTrigger>
            <TabsTrigger value="addresses" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Addresses
            </TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Order History</h2>
                <Button variant="outline" size="sm">
                  View All Orders
                </Button>
              </div>

              {orders.map((order) => (
                <Card key={order.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(order.status)}
                          <span className="font-semibold">Order #{order.id}</span>
                        </div>
                        <Badge className={cn("capitalize", getStatusColor(order.status))}>{order.status}</Badge>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">${order.total.toFixed(2)}</div>
                        <div className="text-sm text-muted-foreground">{order.date}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium line-clamp-1">{item.title}</p>
                            <p className="text-xs text-muted-foreground">
                              Qty: {item.quantity} × ${item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                        <Eye className="h-3 w-3" />
                        View Details
                      </Button>
                      {order.status === "delivered" && (
                        <Button variant="outline" size="sm">
                          Reorder
                        </Button>
                      )}
                      {order.status === "shipped" && (
                        <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                          <Truck className="h-3 w-3" />
                          Track Package
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Downloads Tab */}
          <TabsContent value="downloads" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Digital Library</h2>
                <Button variant="outline" size="sm">
                  Download All
                </Button>
              </div>

              <BaseGrid
                items={digitalProducts.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Download className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm mb-1">{product.title}</h3>
                            <Badge variant="outline" className="text-xs">
                              {product.type}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-xs text-muted-foreground mb-4">
                        <div className="flex justify-between">
                          <span>Downloads:</span>
                          <span>{product.downloadCount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Last downloaded:</span>
                          <span>{product.lastDownload}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>File size:</span>
                          <span>{product.size}</span>
                        </div>
                      </div>

                      <Button size="sm" className="w-full">
                        <Download className="h-3 w-3 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
                columns={{ desktop: 2, tablet: 2, mobile: 1 }}
                gap="lg"
              />
            </div>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">My Wishlist</h2>
                <Button variant="outline" size="sm">
                  Clear Wishlist
                </Button>
              </div>

              <BaseGrid
                items={wishlistItems.map((item) => (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    originalPrice={item.originalPrice}
                    image={item.image}
                    rating={item.rating}
                    reviewCount={item.reviewCount}
                    badge={item.badge}
                    isWishlisted={true}
                    onAddToCart={() => setCartCount((prev) => prev + 1)}
                    onToggleWishlist={() => {}}
                  />
                ))}
                columns={{ desktop: 3, tablet: 2, mobile: 1 }}
                gap="lg"
              />
            </div>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Saved Addresses</h2>
                <Button className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Add New Address
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addresses.map((address) => (
                  <Card key={address.id}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {address.type}
                        </CardTitle>
                        {address.isDefault && <Badge variant="secondary">Default</Badge>}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-1 text-sm mb-4">
                        <p className="font-medium">{address.name}</p>
                        <p className="text-muted-foreground">{address.address}</p>
                        <p className="text-muted-foreground">
                          {address.city}, {address.state} {address.zip}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          Delete
                        </Button>
                        {!address.isDefault && (
                          <Button variant="outline" size="sm">
                            Set as Default
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Add New Address Card */}
                <Card className="border-dashed">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <h3 className="font-semibold mb-2">Add New Address</h3>
                      <p className="text-sm text-muted-foreground mb-4">Save a new shipping or billing address</p>
                      <BaseForm
                        fields={addressFields}
                        cta="Save Address"
                        layout="vertical"
                        onSubmit={(data) => console.log("New address:", data)}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
