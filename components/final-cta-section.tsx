"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { CtaButton } from "@/components/cta-button"
import { Clock } from "lucide-react"

export function FinalCtaSection() {
  return (
    <SectionWrapper className="px-4 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        {/* Headline */}
        <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Stop managing your fitness.{" "}
          <span className="text-primary">Start leading it.</span>
        </h2>

        <p className="mt-6 text-lg text-muted-foreground">
          The 90-Day Executive Rebuild is built for professionals who demand
          more from their time, their body, and their performance.
        </p>

        {/* CTA #4 */}
        <div className="mt-10 flex justify-center">
          <CtaButton label="Join the 90-Day Rebuild" size="lg" />
        </div>

        {/* Scarcity text */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Clock className="size-4 text-primary" />
          <span>
            Next cohort starting Monday. Only{" "}
            <span className="font-semibold text-primary">5 spots</span>{" "}
            remaining.
          </span>
        </div>
      </div>
    </SectionWrapper>
  )
}
