"use client"

import {
  SectionWrapper,
  StaggerContainer,
} from "@/components/section-wrapper"
import { TestimonialCard } from "@/components/testimonial-card"
import { MetricCard } from "@/components/metric-card"

const TESTIMONIALS = [
  {
    name: "Marcus T.",
    role: "CEO, Fortune 500",
    quote:
      "My afternoon energy crashes vanished within the first three weeks. I'm sharper in board meetings, sleeping deeper, and my team has noticed the difference. Alex's system doesn't feel like a workout plan - it feels like an upgrade.",
    image: "/images/testimonial-1.jpg",
    highlight: "Productivity +40%",
    rating: 5,
  },
  {
    name: "Sarah L.",
    role: "Tech Founder",
    quote:
      "I dropped 12lbs of fat while gaining 4lbs of muscle - all in just 3 hours per week. As a founder, I can't afford to spend hours in the gym. Alex designed a system that respects my time while delivering real results.",
    image: "/images/testimonial-2.jpg",
    highlight: "3 hours per week",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Private Equity Partner",
    quote:
      "I've tried every premium coach and expensive gym. Alex is the first one who actually used data to drive my program. The wearable integration changed everything - my workouts finally match my recovery.",
    image: "/images/testimonial-3.jpg",
    highlight: "Data-driven results",
    rating: 5,
  },
]

export function SocialProofSection() {
  return (
    <SectionWrapper
      id="results"
      className="px-4 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Performance Results
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Real transformations from real executives. Numbers don&apos;t lie.
          </p>
        </div>

        {/* Bento grid */}
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard {...TESTIMONIALS[0]} />
          <MetricCard />
          <TestimonialCard {...TESTIMONIALS[1]} />
        </StaggerContainer>

        {/* Third testimonial full width */}
        <StaggerContainer className="mt-6">
          <TestimonialCard {...TESTIMONIALS[2]} />
        </StaggerContainer>
      </div>
    </SectionWrapper>
  )
}
