import { DigitalBadgeIcon, PhysicalBadgeIcon, PODBadgeIcon } from "@/components/ui/icons"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ProductBadgeProps {
  type: "digital" | "physical" | "pod"
  className?: string
  showIcon?: boolean
  size?: "sm" | "md" | "lg"
}

export function ProductBadge({ type, className, showIcon = true, size = "md" }: ProductBadgeProps) {
  const badgeConfig = {
    digital: {
      label: "Digital",
      icon: DigitalBadgeIcon,
      className: "bg-sky-blue/10 text-sky-blue border-sky-blue/20 hover:bg-sky-blue/20",
    },
    physical: {
      label: "Physical",
      icon: PhysicalBadgeIcon,
      className: "bg-forest/10 text-forest border-forest/20 hover:bg-forest/20",
    },
    pod: {
      label: "Print on Demand",
      icon: PODBadgeIcon,
      className: "bg-burnt-orange/10 text-burnt-orange border-burnt-orange/20 hover:bg-burnt-orange/20",
    },
  }

  const config = badgeConfig[type]
  const IconComponent = config.icon

  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2",
  }

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  }

  return (
    <Badge
      variant="outline"
      className={cn(config.className, sizeClasses[size], "font-medium transition-colors", className)}
    >
      {showIcon && <IconComponent className={cn(iconSizes[size], "mr-1.5")} />}
      {config.label}
    </Badge>
  )
}

// Utility component for product type indicators in grids
export function ProductTypeIndicator({
  type,
  className,
}: { type: "digital" | "physical" | "pod"; className?: string }) {
  const config = {
    digital: {
      icon: DigitalBadgeIcon,
      color: "text-sky-blue",
      bg: "bg-sky-blue/10",
    },
    physical: {
      icon: PhysicalBadgeIcon,
      color: "text-forest",
      bg: "bg-forest/10",
    },
    pod: {
      icon: PODBadgeIcon,
      color: "text-burnt-orange",
      bg: "bg-burnt-orange/10",
    },
  }

  const { icon: IconComponent, color, bg } = config[type]

  return (
    <div className={cn("inline-flex items-center justify-center w-8 h-8 rounded-full", bg, className)}>
      <IconComponent className={cn("w-4 h-4", color)} />
    </div>
  )
}
