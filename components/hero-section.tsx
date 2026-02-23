"use client"

import { motion } from "framer-motion"
import { Shield, Users, Activity } from "lucide-react"
import { CtaButton } from "@/components/cta-button"

const TRUST_BADGES = [
  { icon: Shield, label: "NASM Certified" },
  { icon: Users, label: "500+ Executives Trained" },
  { icon: Activity, label: "Biometric Integration" },
]

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 py-32 text-center">
        {/* Tagline pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            The 90-Day Executive Rebuild
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          Build the body that{" "}
          <span className="text-primary">fuels your career.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl"
        >
          Data-driven hybrid performance for the modern executive. No fluff,
          just results.
        </motion.p>

        {/* CTA #1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10"
        >
          <CtaButton label="Join the Rebuild" size="lg" />
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <badge.icon className="size-4 text-primary" />
              <span>{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
