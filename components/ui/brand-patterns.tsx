import type React from "react"
import { cn } from "@/lib/utils"

interface BrandPatternProps {
  pattern: "topo" | "canvas" | "grid"
  className?: string
  opacity?: number
}

export function BrandPattern({ pattern, className, opacity = 0.1 }: BrandPatternProps) {
  const patterns = {
    topo: (
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
        <defs>
          <pattern id="topo" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M0 10c5-5 15-5 20 0M0 20c5-5 15-5 20 0M0 0c5-5 15-5 20 0"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              opacity={opacity}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo)" />
      </svg>
    ),
    canvas: (
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
        <defs>
          <pattern id="canvas" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
            <rect width="4" height="4" fill="currentColor" opacity={opacity * 0.3} />
            <rect width="2" height="2" fill="currentColor" opacity={opacity} />
            <rect x="2" y="2" width="2" height="2" fill="currentColor" opacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#canvas)" />
      </svg>
    ),
    grid: (
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
        <defs>
          <pattern id="grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity={opacity} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    ),
  }

  return <div className={cn("absolute inset-0 pointer-events-none text-charcoal", className)}>{patterns[pattern]}</div>
}

// Pre-configured pattern backgrounds for common use cases
export function TopoBackground({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("relative", className)}>
      <BrandPattern pattern="topo" opacity={0.05} />
      {children}
    </div>
  )
}

export function CanvasBackground({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("relative", className)}>
      <BrandPattern pattern="canvas" opacity={0.08} />
      {children}
    </div>
  )
}

export function GridBackground({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div className={cn("relative", className)}>
      <BrandPattern pattern="grid" opacity={0.06} />
      {children}
    </div>
  )
}
