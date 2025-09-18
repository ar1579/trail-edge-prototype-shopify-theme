import { cn } from "@/lib/utils"

interface PaymentIconProps {
  type: "visa" | "mastercard" | "amex" | "discover" | "paypal" | "apple-pay" | "google-pay"
  className?: string
}

export function PaymentIcon({ type, className }: PaymentIconProps) {
  const icons = {
    visa: (
      <svg className={cn("w-10 h-6", className)} viewBox="0 0 40 24" fill="none">
        <rect width="40" height="24" rx="4" fill="#1A1F71" />
        <path
          d="M16.5 7.5L14.2 16.5H11.8L13.1 11.2C13.2 10.8 13.1 10.6 12.8 10.6H10.5L10.3 11.5H12.1L11.5 14.2H9.7L8.5 16.5H6.1L8.4 7.5H10.8L9.5 12.8C9.4 13.2 9.5 13.4 9.8 13.4H12.1L12.3 12.5H10.5L11.1 9.8H12.9L14.1 7.5H16.5Z"
          fill="white"
        />
        <path
          d="M25.2 7.5L22.9 16.5H20.5L21.8 11.2C21.9 10.8 21.8 10.6 21.5 10.6H19.2L19 11.5H20.8L20.2 14.2H18.4L17.2 16.5H14.8L17.1 7.5H19.5L18.2 12.8C18.1 13.2 18.2 13.4 18.5 13.4H20.8L21 12.5H19.2L19.8 9.8H21.6L22.8 7.5H25.2Z"
          fill="white"
        />
        <path
          d="M33.5 7.5L31.2 16.5H28.8L30.1 11.2C30.2 10.8 30.1 10.6 29.8 10.6H27.5L27.3 11.5H29.1L28.5 14.2H26.7L25.5 16.5H23.1L25.4 7.5H27.8L26.5 12.8C26.4 13.2 26.5 13.4 26.8 13.4H29.1L29.3 12.5H27.5L28.1 9.8H29.9L31.1 7.5H33.5Z"
          fill="white"
        />
      </svg>
    ),
    mastercard: (
      <svg className={cn("w-10 h-6", className)} viewBox="0 0 40 24" fill="none">
        <rect width="40" height="24" rx="4" fill="#EB001B" />
        <circle cx="15" cy="12" r="7" fill="#FF5F00" />
        <circle cx="25" cy="12" r="7" fill="#F79E1B" />
        <path
          d="M20 6.5C21.5 7.8 22.5 9.8 22.5 12C22.5 14.2 21.5 16.2 20 17.5C18.5 16.2 17.5 14.2 17.5 12C17.5 9.8 18.5 7.8 20 6.5Z"
          fill="#FF5F00"
        />
      </svg>
    ),
    amex: (
      <svg className={cn("w-10 h-6", className)} viewBox="0 0 40 24" fill="none">
        <rect width="40" height="24" rx="4" fill="#006FCF" />
        <path d="M8 8H12L14 12L16 8H20V16H18V10L16 14H12L10 10V16H8V8Z" fill="white" />
        <path d="M22 8H30V10H24V11H29V13H24V14H30V16H22V8Z" fill="white" />
        <path d="M32 8H36L38 12L36 16H32L34 12L32 8Z" fill="white" />
      </svg>
    ),
    discover: (
      <svg className={cn("w-10 h-6", className)} viewBox="0 0 40 24" fill="none">
        <rect width="40" height="24" rx="4" fill="#FF6000" />
        <path
          d="M6 8H10C12 8 13 9 13 11C13 13 12 14 10 14H8V16H6V8ZM8 10V12H10C11 12 11 11 11 11C11 11 11 10 10 10H8Z"
          fill="white"
        />
        <path d="M15 8H17V16H15V8Z" fill="white" />
        <path
          d="M19 8H23C25 8 26 9 26 11C26 12 25 13 24 13L26 16H24L22 13H21V16H19V8ZM21 10V11H23C24 11 24 11 24 11C24 10 24 10 23 10H21Z"
          fill="white"
        />
        <circle cx="32" cy="12" r="6" fill="#FF6000" stroke="white" strokeWidth="1" />
      </svg>
    ),
    paypal: (
      <svg className={cn("w-10 h-6", className)} viewBox="0 0 40 24" fill="none">
        <rect width="40" height="24" rx="4" fill="#003087" />
        <path d="M12 6C15 6 17 8 17 11C17 14 15 16 12 16H10L9 18H7L9 6H12Z" fill="#009CDE" />
        <path d="M16 8C19 8 21 10 21 13C21 16 19 18 16 18H14L13 20H11L13 8H16Z" fill="#012169" />
        <path d="M25 6H27L26 18H24L25 6Z" fill="white" />
        <path d="M29 6H33C35 6 36 7 36 9C36 11 35 12 33 12H31L30 18H28L29 6Z" fill="white" />
      </svg>
    ),
    "apple-pay": (
      <svg className={cn("w-10 h-6", className)} viewBox="0 0 40 24" fill="none">
        <rect width="40" height="24" rx="4" fill="#000" />
        <path
          d="M12.5 8C12.8 7.2 13.5 6.5 14.2 6.5C14.3 7.3 14 8 13.5 8.5C13 9 12.3 9.3 11.8 9.2C11.7 8.5 12 7.8 12.5 8Z"
          fill="white"
        />
        <path
          d="M14.2 9.3C13.2 9.2 12.3 9.8 11.8 9.8C11.3 9.8 10.5 9.3 9.7 9.3C8.6 9.3 7.6 9.9 7.1 10.8C6 12.6 6.8 15.3 7.9 16.8C8.4 17.5 9 18.3 9.7 18.3C10.4 18.3 10.7 17.9 11.6 17.9C12.5 17.9 12.7 18.3 13.5 18.3C14.3 18.3 14.8 17.6 15.3 16.9C15.9 16.1 16.1 15.3 16.1 15.3C16.1 15.3 14.8 14.8 14.8 13.3C14.8 12 15.8 11.4 16.2 11.1C15.6 10.2 14.7 9.4 14.2 9.3Z"
          fill="white"
        />
        <path
          d="M22 8H24C26 8 27 9 27 11C27 13 26 14 24 14H23V16H22V8ZM23 10V12H24C25 12 25 11 25 11C25 11 25 10 24 10H23Z"
          fill="white"
        />
        <path
          d="M28 10C28 9 29 8 30 8C31 8 32 9 32 10V11H29C29 12 30 12 30 12C31 12 31 12 31 11H32C32 13 31 14 30 14C29 14 28 13 28 12V10Z"
          fill="white"
        />
        <path d="M33 8H34L36 14L38 8H39L36 16H35L33 8Z" fill="white" />
      </svg>
    ),
    "google-pay": (
      <svg className={cn("w-10 h-6", className)} viewBox="0 0 40 24" fill="none">
        <rect width="40" height="24" rx="4" fill="#4285F4" />
        <path
          d="M16 10V12H20C19.8 13 19 14 18 14C16.5 14 15 12.5 15 11C15 9.5 16.5 8 18 8C19 8 19.8 8.5 20.3 9L21.8 7.5C20.8 6.5 19.5 6 18 6C15.2 6 13 8.2 13 11C13 13.8 15.2 16 18 16C20.5 16 22 14.5 22 12V10H16Z"
          fill="white"
        />
        <path d="M24 8H25V16H24V8Z" fill="white" />
        <path
          d="M27 8H31C33 8 34 9 34 11C34 13 33 14 31 14H28V16H27V8ZM28 10V12H31C32 12 32 11 32 11C32 11 32 10 31 10H28Z"
          fill="white"
        />
      </svg>
    ),
  }

  return icons[type] || null
}

// Trust Badge Components
interface TrustBadgeProps {
  type: "ssl" | "secure" | "verified" | "guarantee"
  className?: string
}

export function TrustBadge({ type, className }: TrustBadgeProps) {
  const badges = {
    ssl: (
      <div
        className={cn(
          "inline-flex items-center gap-2 px-3 py-2 bg-forest/10 text-forest border border-forest/20 rounded-lg",
          className,
        )}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-xs font-medium">SSL Secured</span>
      </div>
    ),
    secure: (
      <div
        className={cn(
          "inline-flex items-center gap-2 px-3 py-2 bg-forest/10 text-forest border border-forest/20 rounded-lg",
          className,
        )}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-xs font-medium">Secure Checkout</span>
      </div>
    ),
    verified: (
      <div
        className={cn(
          "inline-flex items-center gap-2 px-3 py-2 bg-sky-blue/10 text-sky-blue border border-sky-blue/20 rounded-lg",
          className,
        )}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-xs font-medium">Verified Store</span>
      </div>
    ),
    guarantee: (
      <div
        className={cn(
          "inline-flex items-center gap-2 px-3 py-2 bg-burnt-orange/10 text-burnt-orange border border-burnt-orange/20 rounded-lg",
          className,
        )}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-xs font-medium">30-Day Guarantee</span>
      </div>
    ),
  }

  return badges[type] || null
}

// Payment Methods Display Component
export function PaymentMethods({ className }: { className?: string }) {
  const methods: Array<PaymentIconProps["type"]> = [
    "visa",
    "mastercard",
    "amex",
    "discover",
    "paypal",
    "apple-pay",
    "google-pay",
  ]

  return (
    <div className={cn("flex items-center gap-2 flex-wrap", className)}>
      <span className="text-sm text-slate-blue mr-2">We accept:</span>
      {methods.map((method) => (
        <PaymentIcon key={method} type={method} className="opacity-80 hover:opacity-100 transition-opacity" />
      ))}
    </div>
  )
}

// Trust Indicators Display Component
export function TrustIndicators({ className }: { className?: string }) {
  const indicators: Array<TrustBadgeProps["type"]> = ["ssl", "secure", "verified", "guarantee"]

  return (
    <div className={cn("flex items-center gap-3 flex-wrap", className)}>
      {indicators.map((indicator) => (
        <TrustBadge key={indicator} type={indicator} />
      ))}
    </div>
  )
}
