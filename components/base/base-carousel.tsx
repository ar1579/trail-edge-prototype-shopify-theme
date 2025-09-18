"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BaseCarouselProps {
  items: React.ReactNode[]
  className?: string
  showControls?: boolean
  autoPlay?: boolean
  itemsPerView?: {
    desktop: number
    tablet: number
    mobile: number
  }
}

export function BaseCarousel({
  items,
  className,
  showControls = true,
  autoPlay = false,
  itemsPerView = { desktop: 3, tablet: 2, mobile: 1 },
}: BaseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <div className={cn("relative", className)} role="region" aria-roledescription="carousel" aria-live="polite">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView.desktop)}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={cn("flex-shrink-0", `w-full md:w-1/${itemsPerView.tablet} lg:w-1/${itemsPerView.desktop}`)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {showControls && items.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </>
      )}

      <div className="flex justify-center mt-4 gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              index === currentIndex ? "bg-primary" : "bg-muted-foreground/30",
            )}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
