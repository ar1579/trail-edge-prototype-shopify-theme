"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BaseBannerProps {
  content: string
  cta?: {
    label: string
    priority: "primary" | "secondary" | "tertiary"
    onClick?: () => void
  }
  className?: string
  variant?: "hero" | "announcement" | "default"
  backgroundImage?: string
}

export function BaseBanner({ content, cta, className, variant = "default", backgroundImage }: BaseBannerProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "hero":
        return "min-h-[60vh] bg-gradient-to-r from-primary/10 to-secondary/10 text-center"
      case "announcement":
        return "py-3 bg-primary text-primary-foreground text-center text-sm"
      default:
        return "py-16 bg-muted text-center"
    }
  }

  const getCtaVariant = () => {
    switch (cta?.priority) {
      case "primary":
        return "default"
      case "secondary":
        return "secondary"
      case "tertiary":
        return "outline"
      default:
        return "default"
    }
  }

  return (
    <section
      className={cn("relative flex items-center justify-center", getVariantStyles(), className)}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }
          : undefined
      }
      role="region"
      aria-label="Banner"
    >
      {backgroundImage && <div className="absolute inset-0 bg-black/40" />}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1
          className={cn(
            "font-bold text-balance",
            variant === "hero"
              ? "text-4xl md:text-6xl mb-6"
              : variant === "announcement"
                ? "text-sm"
                : "text-2xl md:text-3xl mb-4",
          )}
        >
          {content}
        </h1>
        {cta && variant !== "announcement" && (
          <Button variant={getCtaVariant()} size="lg" onClick={cta.onClick} className="mt-4">
            {cta.label}
          </Button>
        )}
      </div>
    </section>
  )
}
