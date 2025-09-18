"use client"

import React from "react"

// Loading Spinner (48x48px)
export const LoadingSpinner = ({ className = "w-12 h-12" }: { className?: string }) => (
  <div className={`${className} animate-spin`}>
    <svg viewBox="0 0 48 48" fill="none">
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="31.416"
        strokeDashoffset="31.416"
        className="animate-spin"
        style={{
          animation: "spin 2s linear infinite, dash 1.5s ease-in-out infinite",
        }}
      />
    </svg>
  </div>
)

// Button Hover Animation Component
export const AnimatedButton = ({
  children,
  className = "",
  onClick,
  variant = "primary",
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: "primary" | "secondary"
}) => {
  const baseClasses =
    "px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

// Add to Cart Animation
export const AddToCartButton = ({
  onAddToCart,
  className = "",
}: {
  onAddToCart: () => void
  className?: string
}) => {
  const [isAdding, setIsAdding] = React.useState(false)

  const handleClick = () => {
    setIsAdding(true)
    onAddToCart()
    setTimeout(() => setIsAdding(false), 1000)
  }

  return (
    <button
      onClick={handleClick}
      disabled={isAdding}
      className={`px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-semibold transition-all duration-300 hover:bg-primary/90 disabled:opacity-50 ${className}`}
    >
      <span className="flex items-center gap-2">
        {isAdding ? (
          <>
            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12a9 9 0 11-6.219-8.56" />
            </svg>
            Adding...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
              <path d="M20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            Add to Cart
          </>
        )}
      </span>
    </button>
  )
}

// Menu Transition Animation
export const AnimatedMobileMenu = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        className={`absolute right-0 top-0 h-full w-80 bg-background shadow-xl transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">
          <button onClick={onClose} className="absolute top-4 right-4 p-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </div>
  )
}
