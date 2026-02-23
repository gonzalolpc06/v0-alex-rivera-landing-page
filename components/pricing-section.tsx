"use client"

import {
  SectionWrapper,
  StaggerContainer,
} from "@/components/section-wrapper"
import { PricingCard } from "@/components/pricing-card"
import { CtaButton } from "@/components/cta-button"

const TIERS = [
  {
    tier: "Self-Guided",
    target: "The DIY Pro",
    price: "$199",
    period: "mo",
    features: [
      "Personalized training program",
      "Wearable data integration",
      "Nutrition macro guide",
      "Weekly program updates",
      "Community access",
    ],
    ctaLabel: "Get Started",
    ctaVariant: "outline" as const,
    highlighted: false,
  },
  {
    tier: "Executive",
    target: "The Busy Hero",
    price: "$499",
    period: "mo",
    features: [
      "Everything in Self-Guided",
      "1:1 weekly coaching calls",
      "Real-time HRV-based adjustments",
      "Concierge meal planning",
      "Travel-adaptive programming",
      "Priority Slack access to Alex",
      "Monthly progress deep-dive",
    ],
    ctaLabel: "Join the Rebuild",
    ctaVariant: "primary" as const,
    highlighted: true,
  },
  {
    tier: "VIP Performance",
    target: "The C-Suite",
    price: "$1,200",
    period: "mo",
    features: [
      "Everything in Executive",
      "Daily coaching & accountability",
      "In-person sessions (if local)",
      "Executive sleep optimization protocol",
      "Quarterly body composition lab work",
      "Exclusive VIP retreats access",
      "White-glove supplement curation",
      "Direct phone access to Alex",
    ],
    ctaLabel: "Apply Now",
    ctaVariant: "secondary" as const,
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <SectionWrapper id="pricing" className="px-4 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Choose Your Path
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Every tier is designed for results. The difference is how much
            support you want on the journey.
          </p>
        </div>

        {/* Pricing cards */}
        <StaggerContainer className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <PricingCard key={tier.tier} {...tier} />
          ))}
        </StaggerContainer>

        {/* CTA #3 */}
        <div className="mt-16 flex justify-center">
          <CtaButton label="Join the Rebuild" />
        </div>
      </div>
    </SectionWrapper>
  )
}
