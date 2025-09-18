import type React from "react"
import { cn } from "@/lib/utils"

interface BaseGridProps {
  items: React.ReactNode[]
  columns?: {
    desktop: number
    tablet: number
    mobile: number
  }
  className?: string
  gap?: "sm" | "md" | "lg"
  children?: React.ReactNode
}

export function BaseGrid({
  items,
  columns = { desktop: 4, tablet: 2, mobile: 1 },
  className,
  gap = "md",
  children,
}: BaseGridProps) {
  const getGapClass = () => {
    switch (gap) {
      case "sm":
        return "gap-4"
      case "md":
        return "gap-6"
      case "lg":
        return "gap-8"
      default:
        return "gap-6"
    }
  }

  const getColumnClass = () => {
    return `grid-cols-${columns.mobile} md:grid-cols-${columns.tablet} lg:grid-cols-${columns.desktop}`
  }

  return (
    <div className={cn("grid", getColumnClass(), getGapClass(), className)} role="list" aria-label="Grid section">
      {children ||
        items.map((item, index) => (
          <div key={index} role="listitem">
            {item}
          </div>
        ))}
    </div>
  )
}
