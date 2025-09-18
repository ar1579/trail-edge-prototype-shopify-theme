"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { useState } from "react"

// Loading Spinner Component
interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  }

  return (
    <svg className={cn("animate-spin text-forest", sizeClasses[size], className)} fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

// Animated Add to Cart Button
interface AnimatedAddToCartProps {
  onAddToCart: () => void
  className?: string
  children?: React.ReactNode
}

export function AnimatedAddToCart({ onAddToCart, className, children }: AnimatedAddToCartProps) {
  const [isAdding, setIsAdding] = useState(false)
  const [isAdded, setIsAdded] = useState(false)

  const handleClick = async () => {
    setIsAdding(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsAdding(false)
    setIsAdded(true)
    onAddToCart()

    // Reset after animation
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <button
      onClick={handleClick}
      disabled={isAdding || isAdded}
      className={cn(
        "relative overflow-hidden px-6 py-3 bg-burnt-orange text-off-white rounded-lg font-medium transition-all duration-300",
        "hover:bg-burnt-orange/90 hover:scale-105 active:scale-95",
        "disabled:opacity-70 disabled:cursor-not-allowed",
        isAdded && "bg-forest hover:bg-forest",
        className,
      )}
    >
      <span
        className={cn(
          "flex items-center justify-center gap-2 transition-all duration-300",
          (isAdding || isAdded) && "opacity-0",
        )}
      >
        {children || "Add to Cart"}
      </span>

      {isAdding && (
        <span className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" className="text-off-white" />
        </span>
      )}

      {isAdded && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg className="w-5 h-5 text-off-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-2">Added!</span>
        </span>
      )}
    </button>
  )
}

// Animated Menu Toggle
interface AnimatedMenuToggleProps {
  isOpen: boolean
  onToggle: () => void
  className?: string
}

export function AnimatedMenuToggle({ isOpen, onToggle, className }: AnimatedMenuToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "relative w-6 h-6 flex flex-col justify-center items-center transition-all duration-300",
        "hover:scale-110 active:scale-95",
        className,
      )}
      aria-label="Toggle menu"
    >
      <span
        className={cn(
          "block w-5 h-0.5 bg-current transition-all duration-300",
          isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1",
        )}
      />
      <span
        className={cn("block w-5 h-0.5 bg-current transition-all duration-300", isOpen ? "opacity-0" : "opacity-100")}
      />
      <span
        className={cn(
          "block w-5 h-0.5 bg-current transition-all duration-300",
          isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1",
        )}
      />
    </button>
  )
}

// Quantity Selector with Animation
interface QuantitySelectorProps {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  className?: string
}

export function QuantitySelector({ value, onChange, min = 1, max = 99, className }: QuantitySelectorProps) {
  const [isChanging, setIsChanging] = useState(false)

  const handleChange = (newValue: number) => {
    if (newValue >= min && newValue <= max) {
      setIsChanging(true)
      onChange(newValue)
      setTimeout(() => setIsChanging(false), 200)
    }
  }

  return (
    <div className={cn("flex items-center border border-sand-tan rounded-lg overflow-hidden", className)}>
      <button
        onClick={() => handleChange(value - 1)}
        disabled={value <= min}
        className="px-3 py-2 hover:bg-sand-tan/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </button>

      <div
        className={cn(
          "px-4 py-2 min-w-[3rem] text-center font-medium transition-all duration-200",
          isChanging && "scale-110 text-burnt-orange",
        )}
      >
        {value}
      </div>

      <button
        onClick={() => handleChange(value + 1)}
        disabled={value >= max}
        className="px-3 py-2 hover:bg-sand-tan/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  )
}

// Floating Action Button with Pulse Animation
interface FloatingActionButtonProps {
  onClick: () => void
  className?: string
  children: React.ReactNode
  pulse?: boolean
}

export function FloatingActionButton({ onClick, className, children, pulse = false }: FloatingActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 w-14 h-14 bg-burnt-orange text-off-white rounded-full shadow-lg",
        "flex items-center justify-center transition-all duration-300",
        "hover:bg-burnt-orange/90 hover:scale-110 active:scale-95",
        "focus:outline-none focus:ring-4 focus:ring-burnt-orange/30",
        pulse && "animate-pulse",
        className,
      )}
    >
      {children}
    </button>
  )
}
