"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, ShoppingCart, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

interface BaseNavigationProps {
  logo: string
  menu: NavigationItem[]
  onNavigate?: (href: string) => void
  cartCount?: number
  className?: string
}

export function BaseNavigation({ logo, menu, onNavigate, cartCount = 0, className }: BaseNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav
      className={cn("sticky top-0 z-50 bg-background border-b border-border", className)}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onNavigate?.("/")}
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              {logo}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menu.map((item) => (
              <button
                key={item.label}
                onClick={() => onNavigate?.(item.href)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative" aria-label="Shopping cart">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon" aria-label="User account">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-2">
              {menu.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigate?.(item.href)
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
