import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductBadge } from "@/components/ui/product-badges"
import { TopoBackground } from "@/components/ui/brand-patterns"
import { ArrowRight, Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  scenario: "work" | "travel" | "outdoor"
  className?: string
}

export function HeroSection({ scenario, className }: HeroSectionProps) {
  const heroContent = {
    work: {
      image: "/hero-work-scenario.jpg",
      badge: "For Remote Professionals",
      headline: "Gear That Works as Hard as You Do",
      subheadline:
        "Professional-grade equipment designed for remote workers, field professionals, and hybrid teams who demand reliability.",
      cta: "Shop Work Gear",
      secondaryCta: "Watch Demo",
      features: ["TSA-Compliant Designs", "Rugged Durability", "Tech Integration"],
    },
    travel: {
      image: "/hero-travel-scenario.jpg",
      badge: "For Digital Nomads",
      headline: "Adventure-Ready Professional Gear",
      subheadline:
        "Travel light, work anywhere. Curated equipment for digital nomads and location-independent professionals.",
      cta: "Explore Travel Gear",
      secondaryCta: "View Destinations",
      features: ["Lightweight Design", "Global Compatibility", "Multi-Purpose"],
    },
    outdoor: {
      image: "/hero-outdoor-scenario.jpg",
      badge: "For Outdoor Professionals",
      headline: "Built for the Elements",
      subheadline:
        "Weather-resistant, field-tested equipment for outdoor professionals who work in challenging environments.",
      cta: "Shop Outdoor Gear",
      secondaryCta: "Field Stories",
      features: ["Weather Resistant", "Field Tested", "Professional Grade"],
    },
  }

  const content = heroContent[scenario]

  return (
    <TopoBackground className={cn("relative overflow-hidden", className)}>
      <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={content.image || "/placeholder.svg"}
            alt={`${scenario} scenario`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-6 bg-off-white/90 text-charcoal border-sand-tan">
              {content.badge}
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-off-white mb-6 leading-tight">
              {content.headline}
            </h1>

            <p className="text-xl text-off-white/90 mb-8 leading-relaxed">{content.subheadline}</p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {content.features.map((feature) => (
                <Badge
                  key={feature}
                  variant="secondary"
                  className="bg-forest/20 text-off-white border-forest/30 backdrop-blur-sm"
                >
                  {feature}
                </Badge>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-burnt-orange hover:bg-burnt-orange/90 text-off-white">
                {content.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-off-white/10 text-off-white border-off-white/30 hover:bg-off-white/20 backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5" />
                {content.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </TopoBackground>
  )
}

// Collection Banner Component
interface CollectionBannerProps {
  type: "work" | "travel" | "digital"
  className?: string
}

export function CollectionBanner({ type, className }: CollectionBannerProps) {
  const bannerContent = {
    work: {
      image: "/collection-work-gear.jpg",
      title: "Professional Work Gear",
      description: "Equipment designed for remote professionals and field workers",
      productCount: "24 Products",
      badge: "physical" as const,
    },
    travel: {
      image: "/collection-travel-gear.jpg",
      title: "Travel & Adventure Gear",
      description: "Lightweight, durable equipment for digital nomads",
      productCount: "18 Products",
      badge: "physical" as const,
    },
    digital: {
      image: "/collection-digital-products.jpg",
      title: "Digital Productivity Tools",
      description: "Software and digital resources for enhanced productivity",
      productCount: "12 Products",
      badge: "digital" as const,
    },
  }

  const content = bannerContent[type]

  return (
    <div className={cn("relative overflow-hidden rounded-2xl", className)}>
      <div className="relative h-[300px] lg:h-[400px]">
        <img src={content.image || "/placeholder.svg"} alt={content.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-3">
            <ProductBadge type={content.badge} size="sm" />
            <span className="text-off-white/80 text-sm">{content.productCount}</span>
          </div>

          <h3 className="text-2xl lg:text-3xl font-serif font-bold text-off-white mb-2">{content.title}</h3>

          <p className="text-off-white/90 text-lg mb-4 max-w-md">{content.description}</p>

          <Button
            variant="outline"
            className="bg-off-white/10 text-off-white border-off-white/30 hover:bg-off-white/20 backdrop-blur-sm"
          >
            Explore Collection
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
