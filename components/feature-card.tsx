"use client"

import { motion } from "framer-motion"
import { type LucideIcon } from "lucide-react"
import { fadeInUp } from "@/components/section-wrapper"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  details: string[]
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  details,
}: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="glass-card glass-card-hover group flex flex-col gap-4 rounded-xl p-6"
    >
      {/* Icon */}
      <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="size-6 text-primary" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>

      {/* Description */}
      <p className="text-muted-foreground">{description}</p>

      {/* Detail list */}
      <ul className="mt-auto flex flex-col gap-2">
        {details.map((detail) => (
          <li
            key={detail}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
