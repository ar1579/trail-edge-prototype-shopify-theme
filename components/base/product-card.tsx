"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Download, Package, Printer } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  id: string
  title: string
  price: number
  originalPrice?: number
  image: string
  rating?: number
  reviewCount?: number
  badge?: string
  productType?: "digital" | "physical" | "pod"
  useCase?: "work" | "travel" | "outdoor" | "mixed"
  onAddToCart?: (id: string) => void
  onToggleWishlist?: (id: string) => void
  isWishlisted?: boolean
  className?: string
}

export function ProductCard({
  id,
  title,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  badge,
  productType = "physical",
  useCase,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
  className,
}: ProductCardProps) {
  const getProductTypeIcon = () => {
    switch (productType) {
      case "digital":
        return <Download className="h-3 w-3" />
      case "pod":
        return <Printer className="h-3 w-3" />
      default:
        return <Package className="h-3 w-3" />
    }
  }

  const getProductTypeLabel = () => {
    switch (productType) {
      case "digital":
        return "Digital"
      case "pod":
        return "Print-on-Demand"
      default:
        return "Physical"
    }
  }

  return (
    <Card className={cn("group hover:shadow-lg transition-shadow", className)}>
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {badge && <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">{badge}</Badge>}
          <div className={cn("absolute top-2 right-10 product-badge", productType)}>
            {getProductTypeIcon()}
            <span className="sr-only">{getProductTypeLabel()}</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={() => onToggleWishlist?.(id)}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={cn("h-4 w-4", isWishlisted && "fill-current text-red-500")} />
          </Button>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-sm mb-2 line-clamp-2 text-balance">{title}</h3>

          {rating && (
            <div className="flex items-center gap-1 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-3 w-3",
                      i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground",
                    )}
                  />
                ))}
              </div>
              {reviewCount && <span className="text-xs text-muted-foreground">({reviewCount})</span>}
            </div>
          )}

          <div className="flex items-center gap-2 mb-3">
            <span className="font-bold text-lg">${price}</span>
            {originalPrice && <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>}
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            {getProductTypeIcon()}
            <span>{getProductTypeLabel()}</span>
            {useCase && <span>• {useCase.charAt(0).toUpperCase() + useCase.slice(1)} Gear</span>}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button onClick={() => onAddToCart?.(id)} className="w-full" size="sm">
          {productType === "digital" ? "Download Now" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}
