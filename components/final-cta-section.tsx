"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import { CtaButton } from "@/components/cta-button"
import { useLearnMoreModal } from "@/components/learn-more-modal"
import { Clock, Info } from "lucide-react"
import { motion } from "framer-motion"

export function FinalCtaSection() {
  const { setOpen: openLearnMore } = useLearnMoreModal()

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

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CtaButton label="Join the 90-Day Rebuild" size="lg" />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => openLearnMore(true)}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border-2 border-primary px-8 text-lg font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <Info className="size-4" />
            Learn More
          </motion.button>
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
