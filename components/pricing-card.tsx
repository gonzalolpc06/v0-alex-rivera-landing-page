"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { scaleIn } from "@/components/section-wrapper"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  tier: string
  target: string
  price: string
  period: string
  features: string[]
  ctaLabel: string
  ctaVariant?: "primary" | "secondary" | "outline"
  highlighted?: boolean
}

export function PricingCard({
  tier,
  target,
  price,
  period,
  features,
  ctaLabel,
  ctaVariant = "secondary",
  highlighted = false,
}: PricingCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      className={cn(
        "glass-card glass-card-hover relative flex flex-col gap-6 rounded-xl p-6",
        highlighted && "scale-[1.02] border-primary/30 shadow-lg shadow-primary/10 lg:scale-105"
      )}
    >
      {/* Most Popular badge */}
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
          Most Popular
        </span>
      )}

      {/* Tier info */}
      <div>
        <h3 className="text-xl font-bold text-foreground">{tier}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{target}</p>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-extrabold text-foreground">{price}</span>
        <span className="text-muted-foreground">/{period}</span>
      </div>

      {/* Features */}
      <ul className="flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <CtaButton
        label={ctaLabel}
        variant={ctaVariant}
        showArrow={false}
        className="w-full"
      />
    </motion.div>
  )
}
