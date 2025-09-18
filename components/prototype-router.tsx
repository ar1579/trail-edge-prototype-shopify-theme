"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Smartphone, Eye, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { DurableIcon, RoleSpecificIcon, TravelReadyIcon } from "@/components/ui/icons"

// Import all page components
import Homepage from "@/app/page"
import ProductPage from "@/app/product/page"
import CollectionPage from "@/app/collection/page"
import SearchPage from "@/app/search/page"
import CartPage from "@/app/cart/page"
import CheckoutPage from "@/app/checkout/page"
import AccountPage from "@/app/account/page"

interface PrototypeRouterProps {
  className?: string
}

export function PrototypeRouter({ className }: PrototypeRouterProps) {
  const [currentPage, setCurrentPage] = useState("overview")
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop")

  const pages = [
    {
      id: "homepage",
      name: "Homepage",
      description: "Hero banner, benefits, collections, products, testimonials",
      component: Homepage,
      status: "complete",
    },
    {
      id: "product",
      name: "Product Page",
      description: "Gallery, details, tabs, reviews, cross-sells",
      component: ProductPage,
      status: "complete",
    },
    {
      id: "collection",
      name: "Collection Page",
      description: "Filters, sorting, product grid, pagination",
      component: CollectionPage,
      status: "complete",
    },
    {
      id: "search",
      name: "Search Results",
      description: "Search bar, filters, results, no-results state",
      component: SearchPage,
      status: "complete",
    },
    {
      id: "cart",
      name: "Shopping Cart",
      description: "Line items, shipping calculator, discount, cross-sells",
      component: CartPage,
      status: "complete",
    },
    {
      id: "checkout",
      name: "Checkout Flow",
      description: "Multi-step: information, shipping, payment, confirmation",
      component: CheckoutPage,
      status: "complete",
    },
    {
      id: "account",
      name: "Account Dashboard",
      description: "Orders, downloads, wishlist, addresses",
      component: AccountPage,
      status: "complete",
    },
  ]

  const renderCurrentPage = () => {
    if (currentPage === "overview") {
      return (
        <div className="space-y-8">
          {/* Overview Header */}
          <div className="text-center py-12 bg-gradient-to-r from-forest/10 to-burnt-orange/10 rounded-lg">
            <div className="flex justify-center mb-6">
              <img src="/trail-edge-logo.svg" alt="Trail Edge Co" className="h-20 w-auto" />
            </div>
            <p className="text-xl font-medium mb-2 text-charcoal">Professional Outdoor Gear & Digital Tools</p>
            <p className="text-lg text-slate-blue max-w-2xl mx-auto">
              Interactive e-commerce prototypes for traveling workers, remote professionals, and outdoor enthusiasts.
              Featuring work gear, travel equipment, and digital productivity tools.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-sand-tan/20">
              <CardContent className="p-6 text-center">
                <DurableIcon className="mx-auto mb-4 text-forest" />
                <h3 className="font-bold text-lg mb-2 text-charcoal">Built to Last</h3>
                <p className="text-slate-blue text-sm">
                  Professional-grade gear designed for demanding work environments and outdoor adventures
                </p>
              </CardContent>
            </Card>
            <Card className="border-sand-tan/20">
              <CardContent className="p-6 text-center">
                <RoleSpecificIcon className="mx-auto mb-4 text-forest" />
                <h3 className="font-bold text-lg mb-2 text-charcoal">Role-Specific Solutions</h3>
                <p className="text-slate-blue text-sm">
                  Curated collections for remote workers, field professionals, and digital nomads
                </p>
              </CardContent>
            </Card>
            <Card className="border-sand-tan/20">
              <CardContent className="p-6 text-center">
                <TravelReadyIcon className="mx-auto mb-4 text-forest" />
                <h3 className="font-bold text-lg mb-2 text-charcoal">Travel-Ready Design</h3>
                <p className="text-slate-blue text-sm">
                  Optimized for mobility with TSA-compliant designs and international compatibility
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Pages Grid */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-charcoal">Available Prototypes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pages.map((page) => (
                <Card key={page.id} className="hover:shadow-lg transition-shadow cursor-pointer border-sand-tan/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-charcoal">{page.name}</CardTitle>
                      <Badge variant="secondary" className="bg-forest/10 text-forest">
                        {page.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-blue text-sm mb-4">{page.description}</p>
                    <Button
                      onClick={() => setCurrentPage(page.id)}
                      className="w-full bg-burnt-orange hover:bg-burnt-orange/90"
                      size="sm"
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Prototype
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Details */}
          <Card className="border-sand-tan/20">
            <CardHeader>
              <CardTitle className="text-charcoal">Technical Implementation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-charcoal">Built With</h4>
                  <ul className="space-y-2 text-sm text-slate-blue">
                    <li>• React 18 with TypeScript</li>
                    <li>• Next.js 15 App Router</li>
                    <li>• Tailwind CSS v4 with Trail Edge Co. brand tokens</li>
                    <li>• Shadcn/ui component library</li>
                    <li>• Custom Trail Edge Co. icon set</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-charcoal">Features</h4>
                  <ul className="space-y-2 text-sm text-slate-blue">
                    <li>• Responsive design (320px - 1440px+)</li>
                    <li>• Product type indicators (Digital, Physical, POD)</li>
                    <li>• Interactive components and forms</li>
                    <li>• Mixed cart handling for different product types</li>
                    <li>• Professional Trail Edge Co. branding</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    }

    const page = pages.find((p) => p.id === currentPage)
    if (!page) return null

    const PageComponent = page.component
    return <PageComponent />
  }

  return (
    <div className={cn("min-h-screen bg-off-white", className)}>
      {/* Prototype Navigation */}
      <div className="sticky top-0 z-50 bg-off-white/95 backdrop-blur-sm border-b border-sand-tan/30">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/trail-edge-logo.svg" alt="Trail Edge Co" className="h-8 w-auto mr-2" />
              <Button
                variant={currentPage === "overview" ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentPage("overview")}
                className={
                  currentPage === "overview"
                    ? "bg-burnt-orange hover:bg-burnt-orange/90"
                    : "text-charcoal hover:bg-sand-tan/20"
                }
              >
                Overview
              </Button>
              <div className="h-4 w-px bg-sand-tan" />
              <div className="flex items-center gap-2">
                {pages.map((page) => (
                  <Button
                    key={page.id}
                    variant={currentPage === page.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setCurrentPage(page.id)}
                    className={
                      currentPage === page.id
                        ? "bg-burnt-orange hover:bg-burnt-orange/90"
                        : "text-charcoal hover:bg-sand-tan/20"
                    }
                  >
                    {page.name}
                  </Button>
                ))}
              </div>
            </div>

            {currentPage !== "overview" && (
              <div className="flex items-center gap-2">
                <div className="flex border border-border rounded-md">
                  <Button
                    variant={viewMode === "desktop" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("desktop")}
                    className="rounded-r-none"
                  >
                    <Monitor className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "mobile" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("mobile")}
                    className="rounded-l-none"
                  >
                    <Smartphone className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Export
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div
        className={cn(
          "transition-all duration-300",
          currentPage !== "overview" && viewMode === "mobile" ? "max-w-sm mx-auto" : "w-full",
        )}
      >
        {renderCurrentPage()}
      </div>

      {/* Footer */}
      {currentPage === "overview" && (
        <footer className="border-t border-sand-tan/30 mt-16 py-8 bg-sand-tan/10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-slate-blue text-sm">
              Trail Edge Co. E-commerce Prototypes • Built with v0 by Vercel •
              <a href="#" className="text-burnt-orange hover:underline ml-1">
                View Source Code
              </a>
            </p>
          </div>
        </footer>
      )}
    </div>
  )
}
