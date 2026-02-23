"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionWrapper, fadeInLeft, fadeInRight } from "@/components/section-wrapper"
import { Shield, Award, Clock } from "lucide-react"

const CREDENTIALS = [
  { icon: Shield, label: "NASM Certified" },
  { icon: Award, label: "Precision Nutrition L2" },
  { icon: Clock, label: "10+ Years Experience" },
]

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="px-4 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInLeft}
          className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl lg:mx-0"
        >
          <Image
            src="/images/alex-rivera.jpg"
            alt="Alex Rivera, hybrid performance coach"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </motion.div>

        {/* Bio content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInRight}
          className="flex flex-col gap-6"
        >
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Meet Alex Rivera
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Alex Rivera is a hybrid performance coach who specializes in
            transforming the physical and mental performance of high-achieving
            executives. With over a decade of experience working with C-suite
            leaders, founders, and elite professionals, Alex has developed a
            data-driven approach that respects the demands of a packed schedule
            while delivering measurable results.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            His methodology combines cutting-edge wearable technology, hybrid
            strength and conditioning protocols, and personalized nutrition
            systems to create programs that don&apos;t just change how you look
            - they change how you perform, decide, and lead.
          </p>

          {/* Credentials */}
          <div className="mt-2 flex flex-wrap gap-4">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.label}
                className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground"
              >
                <cred.icon className="size-4 text-primary" />
                {cred.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
