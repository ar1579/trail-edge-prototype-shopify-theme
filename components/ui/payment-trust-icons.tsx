// Payment Method Icons (40x25px each)
export const PaymentIcons = {
  Visa: () => (
    <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
      <rect width="40" height="25" rx="4" fill="#1A1F71" />
      <path
        d="M16.5 8h2.8l-1.7 9h-2.8l1.7-9zm7.2 0l-2.6 9h-2.7l1.3-6.2-1.6 6.2h-1.6l-.3-6.2L14.2 17h-2.7l2.6-9h3.6l.2 4.8L19.7 8h4zm8.1 5.8c0-2.4-3.2-2.5-3.2-3.6 0-.3.3-.7 1-.7.6 0 1.1.1 1.6.3l.3-2.1c-.4-.1-1-.3-1.7-.3-2.8 0-4.8 1.5-4.8 3.6 0 1.6 1.4 2.4 2.5 2.9 1.1.5 1.5.9 1.5 1.3 0 .7-.8 1-1.6 1-.7 0-1.4-.2-2-.4l-.4 2.2c.5.2 1.3.4 2.2.4 3 0 4.9-1.5 4.9-3.8 0-2.8-3.9-3-3.9-4.2 0-.4.4-.8 1.3-.8.4 0 .8.1 1.1.2l.2-2c-.4-.1-.9-.2-1.4-.2z"
        fill="white"
      />
    </svg>
  ),

  Mastercard: () => (
    <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
      <rect width="40" height="25" rx="4" fill="#EB001B" />
      <circle cx="15" cy="12.5" r="7" fill="#FF5F00" />
      <circle cx="25" cy="12.5" r="7" fill="#F79E1B" />
      <path
        d="M20 7.5c1.4 1.4 2.3 3.4 2.3 5.5s-.9 4.1-2.3 5.5c-1.4-1.4-2.3-3.4-2.3-5.5s.9-4.1 2.3-5.5z"
        fill="#FF5F00"
      />
    </svg>
  ),

  AmericanExpress: () => (
    <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
      <rect width="40" height="25" rx="4" fill="#006FCF" />
      <path
        d="M8 8h6l1 2 1-2h6v1.5L20.5 12 22 14.5V16h-6l-1-2-1 2H8V8zm16 0h8v2h-6v1h6v2h-6v1h6v2h-8V8z"
        fill="white"
      />
    </svg>
  ),

  PayPal: () => (
    <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
      <rect width="40" height="25" rx="4" fill="#003087" />
      <path
        d="M12 8c2.2 0 4 .8 4 3 0 2.2-1.8 4-4 4h-2l-.5 2H8l1.5-9H12zm16 0c2.2 0 4 .8 4 3 0 2.2-1.8 4-4 4h-2l-.5 2H24l1.5-9H28z"
        fill="#009CDE"
      />
      <path
        d="M12 10h-1.5l-.3 1H12c.8 0 1.5-.4 1.5-1s-.7-1-1.5-1zm16 0h-1.5l-.3 1H28c.8 0 1.5-.4 1.5-1s-.7-1-1.5-1z"
        fill="white"
      />
    </svg>
  ),

  Discover: () => (
    <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
      <rect width="40" height="25" rx="4" fill="#FF6000" />
      <path d="M8 8h8v2H8V8zm0 3h6v2H8v-2zm0 3h4v2H8v-2z" fill="white" />
      <text x="20" y="16" fill="white" fontSize="8" fontWeight="bold">
        DISCOVER
      </text>
    </svg>
  ),

  ApplePay: () => (
    <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
      <rect width="40" height="25" rx="4" fill="#000000" />
      <path
        d="M15.5 8c-.3 0-.6.1-.8.3-.2.2-.4.5-.4.8 0 .1 0 .2.1.2.1 0 .2 0 .3-.1.2-.1.4-.3.5-.5.1-.2.2-.4.2-.6 0-.1 0-.1.1-.1zm-.8 1.5c-.4 0-.8.2-1 .2s-.6-.2-1-.2c-.5 0-1 .3-1.3.7-.5.9-.1 2.2.4 2.9.2.4.5.8.8.8.3 0 .4-.2.8-.2s.5.2.8.2c.3 0 .6-.4.8-.8.2-.4.3-.8.3-.8s-.6-.2-.6-.8c0-.5.4-.8.4-.8s-.4-.6-1-.6z"
        fill="white"
      />
      <text x="20" y="16" fill="white" fontSize="7" fontWeight="bold">
        Apple Pay
      </text>
    </svg>
  ),

  GooglePay: () => (
    <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
      <rect width="40" height="25" rx="4" fill="#4285F4" />
      <path d="M12 10h4v1h-4v-1zm0 2h3v1h-3v-1zm0 2h2v1h-2v-1z" fill="white" />
      <text x="18" y="16" fill="white" fontSize="7" fontWeight="bold">
        Google Pay
      </text>
    </svg>
  ),

  ShopPay: () => (
    <svg width="40" height="25" viewBox="0 0 40 25" fill="none">
      <rect width="40" height="25" rx="4" fill="#5A31F4" />
      <path
        d="M10 10c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1h-8v-1zm0 2h8v4c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-4z"
        fill="white"
      />
      <text x="22" y="16" fill="white" fontSize="7" fontWeight="bold">
        Shop Pay
      </text>
    </svg>
  ),
}

// Trust Badges (120x60px each)
export const TrustBadges = {
  SSL: () => (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
      <rect width="120" height="60" rx="8" fill="#2D5016" />
      <path
        d="M30 20v-4c0-4.4 3.6-8 8-8s8 3.6 8 8v4h2c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H28c-1.1 0-2-.9-2-2V22c0-1.1.9-2 2-2h2zm2 0h12v-4c0-3.3-2.7-6-6-6s-6 2.7-6 6v4z"
        fill="white"
      />
      <text x="60" y="25" fill="white" fontSize="10" fontWeight="bold">
        SSL
      </text>
      <text x="60" y="38" fill="white" fontSize="8">
        SECURE
      </text>
      <text x="60" y="48" fill="white" fontSize="8">
        CHECKOUT
      </text>
    </svg>
  ),

  MoneyBack: () => (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
      <rect width="120" height="60" rx="8" fill="#B35B2E" />
      <circle cx="30" cy="30" r="15" fill="none" stroke="white" strokeWidth="2" />
      <path d="M25 30l5 5 10-10" stroke="white" strokeWidth="2" fill="none" />
      <text x="50" y="25" fill="white" fontSize="9" fontWeight="bold">
        30-DAY
      </text>
      <text x="50" y="35" fill="white" fontSize="9" fontWeight="bold">
        MONEY BACK
      </text>
      <text x="50" y="45" fill="white" fontSize="8">
        GUARANTEE
      </text>
    </svg>
  ),

  FreeShipping: () => (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
      <rect width="120" height="60" rx="8" fill="#4D617A" />
      <path d="M15 25h15v8h-15v-8zm15 0h8l4 4v4h-12v-8zm-12 10h2v2h-2v-2zm16 0h2v2h-2v-2z" fill="white" />
      <text x="50" y="25" fill="white" fontSize="9" fontWeight="bold">
        FREE
      </text>
      <text x="50" y="35" fill="white" fontSize="9" fontWeight="bold">
        SHIPPING
      </text>
      <text x="50" y="45" fill="white" fontSize="8">
        ON ORDERS $50+
      </text>
    </svg>
  ),

  Satisfaction: () => (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
      <rect width="120" height="60" rx="8" fill="#355E3B" />
      <path d="M30 15l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6l3-6z" fill="white" />
      <text x="50" y="25" fill="white" fontSize="9" fontWeight="bold">
        100%
      </text>
      <text x="50" y="35" fill="white" fontSize="9" fontWeight="bold">
        SATISFACTION
      </text>
      <text x="50" y="45" fill="white" fontSize="8">
        GUARANTEED
      </text>
    </svg>
  ),

  FastDelivery: () => (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
      <rect width="120" height="60" rx="8" fill="#C9B89C" />
      <path d="M15 25h10v8h-10v-8zm10 0h6l3 3v5h-9v-8zm-8 10h2v2h-2v-2zm12 0h2v2h-2v-2z" fill="white" />
      <path d="M8 20h4l2 2h-4l-2-2zm2 4h4l2 2h-4l-2-2z" fill="white" />
      <text x="50" y="25" fill="white" fontSize="9" fontWeight="bold">
        FAST
      </text>
      <text x="50" y="35" fill="white" fontSize="9" fontWeight="bold">
        DELIVERY
      </text>
      <text x="50" y="45" fill="white" fontSize="8">
        2-3 BUSINESS DAYS
      </text>
    </svg>
  ),

  CustomerSupport: () => (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
      <rect width="120" height="60" rx="8" fill="#4D617A" />
      <circle cx="30" cy="25" r="8" fill="white" />
      <path
        d="M30 20c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 2c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"
        fill="#4D617A"
      />
      <path d="M25 35c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="white" strokeWidth="2" fill="none" />
      <text x="50" y="25" fill="white" fontSize="9" fontWeight="bold">
        24/7
      </text>
      <text x="50" y="35" fill="white" fontSize="9" fontWeight="bold">
        CUSTOMER
      </text>
      <text x="50" y="45" fill="white" fontSize="8">
        SUPPORT
      </text>
    </svg>
  ),
}

// Secure Checkout Icon (24x24px)
export const SecureCheckoutIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

// Payment Methods Display Component
export const PaymentMethodsDisplay = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <span className="text-sm text-muted-foreground mr-2">We accept:</span>
    <PaymentIcons.Visa />
    <PaymentIcons.Mastercard />
    <PaymentIcons.AmericanExpress />
    <PaymentIcons.PayPal />
    <PaymentIcons.ApplePay />
    <PaymentIcons.GooglePay />
  </div>
)

// Trust Badges Display Component
export const TrustBadgesDisplay = ({ className = "" }: { className?: string }) => (
  <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>
    <TrustBadges.SSL />
    <TrustBadges.MoneyBack />
    <TrustBadges.FreeShipping />
    <TrustBadges.Satisfaction />
    <TrustBadges.FastDelivery />
    <TrustBadges.CustomerSupport />
  </div>
)
