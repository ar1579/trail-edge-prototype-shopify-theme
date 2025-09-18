"use client"

import { useState } from "react"
import { BaseNavigation } from "@/components/base/base-navigation"
import { BaseGrid } from "@/components/base/base-grid"
import { BaseForm } from "@/components/base/base-form"
import { ProductCard } from "@/components/base/product-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Trash2, Plus, Minus, ShoppingBag, Truck, Tag } from "lucide-react"

interface CartItem {
  id: string
  title: string
  price: number
  image: string
  quantity: number
  size?: string
  color?: string
}

export default function CartPage() {
  const [currentPage, setCurrentPage] = useState("cart")
  const [cartCount, setCartCount] = useState(3)
  const [discountCode, setDiscountCode] = useState("")
  const [shippingZip, setShippingZip] = useState("")
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "tactical-backpack",
      title: "Professional Tactical Backpack - 35L Capacity",
      price: 149.99,
      image: "/tactical-backpack-professional.jpg",
      quantity: 1,
      size: "Medium (35L)",
      color: "Black",
    },
    {
      id: "travel-organizer",
      title: "Travel Document Organizer with RFID Protection",
      price: 79.99,
      image: "/travel-document-organizer-rfid.jpg",
      quantity: 2,
      color: "Navy",
    },
    {
      id: "work-boots",
      title: "Steel Toe Safety Boots - Waterproof",
      price: 189.99,
      image: "/steel-toe-safety-boots-waterproof.jpg",
      quantity: 1,
      size: "Size 10",
      color: "Brown",
    },
  ])

  const navigationMenu = [
    { label: "Work Gear", href: "/work-gear" },
    { label: "Travel Gear", href: "/travel-gear" },
    { label: "Digital Products", href: "/digital" },
    { label: "Gift Ideas", href: "/gifts" },
    { label: "About", href: "/about" },
  ]

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id)
      return
    }
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
    setCartCount((prev) => prev - 1)
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const crossSellProducts = [
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
      key="tool-belt"
      id="tool-belt"
      title="Professional Tool Belt with Suspenders"
      price={129.99}
      image="/placeholder.svg?key=tool-belt"
      rating={4.5}
      reviewCount={78}
      badge="New"
      onAddToCart={() => setCartCount((prev) => prev + 1)}
    />,
    <ProductCard
      key="work-gloves"
      id="work-gloves"
      title="Cut-Resistant Work Gloves - Level 5"
      price={34.99}
      image="/placeholder.svg?key=work-gloves"
      rating={4.6}
      reviewCount={145}
      onAddToCart={() => setCartCount((prev) => prev + 1)}
    />,
  ]

  const shippingFields = [
    {
      id: "zip",
      label: "ZIP Code",
      type: "text" as const,
      placeholder: "Enter ZIP code",
      required: true,
    },
  ]

  const discountFields = [
    {
      id: "code",
      label: "Discount Code",
      type: "text" as const,
      placeholder: "Enter discount code",
      required: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <BaseNavigation logo="Trail Edge Co." menu={navigationMenu} onNavigate={setCurrentPage} cartCount={cartCount} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <span>Home</span> / <span className="text-foreground">Shopping Cart</span>
        </nav>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <Card className="text-center py-12">
            <CardContent>
              <div className="max-w-md mx-auto">
                <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">Add some products to get started with your order.</p>
                <Button onClick={() => setCurrentPage("collections")} size="lg">
                  Continue Shopping
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Shopping Cart</h1>
                <span className="text-muted-foreground">
                  {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
                </span>
              </div>

              <Card>
                <CardContent className="p-0">
                  {cartItems.map((item, index) => (
                    <div key={item.id}>
                      <div className="p-6 flex gap-4">
                        <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm mb-2 line-clamp-2">{item.title}</h3>

                          <div className="flex flex-wrap gap-2 mb-3">
                            {item.size && (
                              <Badge variant="outline" className="text-xs">
                                {item.size}
                              </Badge>
                            )}
                            {item.color && (
                              <Badge variant="outline" className="text-xs">
                                {item.color}
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="h-8 w-8 p-0"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center text-sm">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="h-8 w-8 p-0"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>

                            <div className="text-right">
                              <div className="font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                              <div className="text-xs text-muted-foreground">${item.price.toFixed(2)} each</div>
                            </div>
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      {index < cartItems.length - 1 && <Separator />}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Shipping Calculator */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Truck className="h-5 w-5" />
                    Shipping Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BaseForm
                    fields={shippingFields}
                    cta="Calculate Shipping"
                    layout="horizontal"
                    onSubmit={(data) => setShippingZip(data.zip)}
                  />
                  {shippingZip && (
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <p className="text-sm">
                        <strong>Standard Shipping to {shippingZip}:</strong>
                        {shipping === 0 ? " FREE" : ` $${shipping.toFixed(2)}`}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Estimated delivery: 3-5 business days</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Discount Code */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Tag className="h-5 w-5" />
                    Discount Code
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BaseForm
                    fields={discountFields}
                    cta="Apply Discount"
                    layout="horizontal"
                    onSubmit={(data) => setDiscountCode(data.code)}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? <span className="text-green-600">FREE</span> : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  {subtotal < 50 && (
                    <div className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
                      Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                    </div>
                  )}

                  <Button size="lg" className="w-full" onClick={() => setCurrentPage("checkout")}>
                    Proceed to Checkout
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full bg-transparent"
                    onClick={() => setCurrentPage("collections")}
                  >
                    Continue Shopping
                  </Button>
                </CardContent>
              </Card>

              {/* Security Features */}
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Secure SSL encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>30-day return policy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>2-year warranty included</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Cross-sell Products */}
        {cartItems.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-balance">Complete Your Setup</h2>
            <BaseGrid items={crossSellProducts} columns={{ desktop: 3, tablet: 2, mobile: 1 }} gap="lg" />
          </section>
        )}
      </div>
    </div>
  )
}
