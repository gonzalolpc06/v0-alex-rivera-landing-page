"use client"

import { motion } from "framer-motion"
import { Shield, Users, Activity } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { MeshGradient, FloatingBlobs } from "@/components/ui/animated-background-elements"

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
      {/* Background image/mesh with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
        >
          <div className="absolute inset-0 bg-background/70" />
        </div>

        {/* Animated Effects */}
        <MeshGradient />
        <FloatingBlobs />

        {/* Glass Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background backdrop-blur-[2px]" />
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
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.4,
              },
            },
          }}
          className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          {"Build the body that ".split(" ").map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-block mr-[0.2em]"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            className="animate-gradient-text inline-block"
          >
            fuels your career.
          </motion.span>
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
