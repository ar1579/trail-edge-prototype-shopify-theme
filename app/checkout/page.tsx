"use client"

import { useState } from "react"
import { BaseNavigation } from "@/components/base/base-navigation"
import { BaseForm } from "@/components/base/base-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, CreditCard, Truck, User, Lock, ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"

type CheckoutStep = "information" | "shipping" | "payment" | "confirmation"

export default function CheckoutPage() {
  const [currentPage, setCurrentPage] = useState("checkout")
  const [cartCount, setCartCount] = useState(3)
  const [currentStep, setCurrentStep] = useState<CheckoutStep>("information")
  const [completedSteps, setCompletedSteps] = useState<CheckoutStep[]>([])

  const navigationMenu = [
    { label: "Work Gear", href: "/work-gear" },
    { label: "Travel Gear", href: "/travel-gear" },
    { label: "Digital Products", href: "/digital" },
    { label: "Gift Ideas", href: "/gifts" },
    { label: "About", href: "/about" },
  ]

  const steps = [
    { id: "information", label: "Information", icon: User },
    { id: "shipping", label: "Shipping", icon: Truck },
    { id: "payment", label: "Payment", icon: CreditCard },
    { id: "confirmation", label: "Confirmation", icon: CheckCircle },
  ]

  const cartItems = [
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
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const getStepProgress = () => {
    const stepIndex = steps.findIndex((step) => step.id === currentStep)
    return ((stepIndex + 1) / steps.length) * 100
  }

  const handleStepComplete = (nextStep: CheckoutStep) => {
    setCompletedSteps((prev) => [...prev, currentStep])
    setCurrentStep(nextStep)
  }

  const customerInfoFields = [
    { id: "email", label: "Email Address", type: "email" as const, required: true },
    { id: "firstName", label: "First Name", type: "text" as const, required: true },
    { id: "lastName", label: "Last Name", type: "text" as const, required: true },
    { id: "phone", label: "Phone Number", type: "tel" as const, required: true },
    { id: "address", label: "Street Address", type: "text" as const, required: true },
    { id: "city", label: "City", type: "text" as const, required: true },
    { id: "state", label: "State", type: "select" as const, required: true, options: ["CA", "NY", "TX", "FL"] },
    { id: "zip", label: "ZIP Code", type: "text" as const, required: true },
  ]

  const shippingOptions = [
    { id: "standard", name: "Standard Shipping", price: 0, time: "3-5 business days" },
    { id: "express", name: "Express Shipping", price: 15.99, time: "1-2 business days" },
    { id: "overnight", name: "Overnight Shipping", price: 29.99, time: "Next business day" },
  ]

  const paymentFields = [
    { id: "cardNumber", label: "Card Number", type: "text" as const, required: true },
    { id: "expiryDate", label: "MM/YY", type: "text" as const, required: true },
    { id: "cvv", label: "CVV", type: "text" as const, required: true },
    { id: "cardName", label: "Name on Card", type: "text" as const, required: true },
  ]

  const renderStepContent = () => {
    switch (currentStep) {
      case "information":
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Customer Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BaseForm
                fields={customerInfoFields}
                cta="Continue to Shipping"
                layout="vertical"
                onSubmit={() => handleStepComplete("shipping")}
              />
            </CardContent>
          </Card>
        )

      case "shipping":
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Shipping Options
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {shippingOptions.map((option) => (
                <div
                  key={option.id}
                  className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-muted"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      value={option.id}
                      defaultChecked={option.id === "standard"}
                      className="w-4 h-4"
                    />
                    <div>
                      <p className="font-medium">{option.name}</p>
                      <p className="text-sm text-muted-foreground">{option.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{option.price === 0 ? "FREE" : `$${option.price.toFixed(2)}`}</p>
                  </div>
                </div>
              ))}
              <Button className="w-full mt-6" onClick={() => handleStepComplete("payment")}>
                Continue to Payment
              </Button>
            </CardContent>
          </Card>
        )

      case "payment":
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-muted-foreground">
                    Your payment information is secure and encrypted
                  </span>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">Visa</Badge>
                  <Badge variant="outline">Mastercard</Badge>
                  <Badge variant="outline">American Express</Badge>
                  <Badge variant="outline">PayPal</Badge>
                </div>
              </div>

              <BaseForm
                fields={paymentFields}
                cta="Pay Now"
                layout="vertical"
                onSubmit={() => handleStepComplete("confirmation")}
              />
            </CardContent>
          </Card>
        )

      case "confirmation":
        return (
          <Card>
            <CardContent className="text-center py-12">
              <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-600" />
              <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
              <p className="text-muted-foreground mb-6">
                Thank you for your purchase. Your order #TE-2025-001 has been confirmed.
              </p>

              <div className="bg-muted p-4 rounded-lg mb-6 text-left max-w-md mx-auto">
                <h3 className="font-semibold mb-2">Order Details</h3>
                <p className="text-sm text-muted-foreground mb-1">Order Number: #TE-2025-001</p>
                <p className="text-sm text-muted-foreground mb-1">Estimated Delivery: January 15-17, 2025</p>
                <p className="text-sm text-muted-foreground">Tracking information will be sent to your email</p>
              </div>

              <div className="space-y-3">
                <Button size="lg" onClick={() => setCurrentPage("account")}>
                  Track Your Order
                </Button>
                <Button variant="outline" size="lg" onClick={() => setCurrentPage("/")}>
                  Continue Shopping
                </Button>
              </div>
            </CardContent>
          </Card>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <BaseNavigation logo="Trail Edge Co." menu={navigationMenu} onNavigate={setCurrentPage} cartCount={cartCount} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <span>Home</span> / <span>Cart</span> / <span className="text-foreground">Checkout</span>
        </nav>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isCompleted = completedSteps.includes(step.id as CheckoutStep)
              const isCurrent = currentStep === step.id

              return (
                <div key={step.id} className="flex items-center">
                  <div
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors",
                      isCompleted
                        ? "bg-green-600 border-green-600 text-white"
                        : isCurrent
                          ? "bg-primary border-primary text-primary-foreground"
                          : "border-muted-foreground text-muted-foreground",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={cn(
                      "ml-2 text-sm font-medium",
                      isCompleted || isCurrent ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {step.label}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={cn("w-16 h-0.5 mx-4", isCompleted ? "bg-green-600" : "bg-muted")} />
                  )}
                </div>
              )
            })}
          </div>
          <Progress value={getStepProgress()} className="h-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            {currentStep !== "information" && (
              <Button
                variant="ghost"
                onClick={() => {
                  const currentIndex = steps.findIndex((s) => s.id === currentStep)
                  if (currentIndex > 0) {
                    setCurrentStep(steps[currentIndex - 1].id as CheckoutStep)
                  }
                }}
                className="mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            )}

            {renderStepContent()}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Cart Items */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium line-clamp-2 mb-1">{item.title}</h4>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">Qty: {item.quantity}</span>
                          <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-green-600">FREE</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Security Features */}
                <div className="pt-4 border-t border-border">
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Lock className="h-3 w-3" />
                      <span>Secure SSL encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3" />
                      <span>30-day return policy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3" />
                      <span>2-year warranty included</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
