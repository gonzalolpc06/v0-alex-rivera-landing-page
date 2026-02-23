"use client"

import { Activity, Timer, UtensilsCrossed, StretchHorizontal } from "lucide-react"
import {
  SectionWrapper,
  StaggerContainer,
} from "@/components/section-wrapper"
import { FeatureCard } from "@/components/feature-card"
import { CtaButton } from "@/components/cta-button"

const FEATURES = [
  {
    icon: Activity,
    title: "Wearable-Sync Technology",
    description: "Workouts that listen to your body.",
    details: [
      "Real-time HRV, sleep, and strain integration",
      "Compatible with Apple Watch, Whoop, and Oura",
      "Automatic program adjustments based on recovery data",
    ],
  },
  {
    icon: Timer,
    title: "30-Min High-Density Workouts",
    description: "Maximum output in 30 minutes.",
    details: [
      "Hybrid strength + conditioning protocols",
      "Designed for the busiest schedules",
      "Progressive overload tracking built in",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Concierge Nutrition",
    description: "Decision-free fueling.",
    details: [
      "Personalized macros based on your biometrics",
      "Meal plans that sync with your travel schedule",
      "Executive-friendly dining and prep guides",
    ],
  },
  {
    icon: StretchHorizontal,
    title: "Executive Mobility Flows",
    description: "Reverse the effects of the desk.",
    details: [
      "15-minute daily mobility routines",
      "Targeted protocols for desk-bound executives",
      "Reduces tension, increases energy and focus",
    ],
  },
]

export function FeaturesSection() {
  return (
    <SectionWrapper id="program" className="px-4 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            The 90-Day Executive Rebuild
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            A precision-engineered system for the professional who refuses to
            compromise.
          </p>
        </div>

        {/* Feature grid */}
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </StaggerContainer>

        {/* CTA #2 */}
        <div className="mt-16 flex justify-center">
          <CtaButton label="Join the Rebuild" />
        </div>
      </div>
    </SectionWrapper>
  )
}
