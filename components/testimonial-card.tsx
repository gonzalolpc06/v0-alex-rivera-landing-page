"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"
import { fadeInUp } from "@/components/section-wrapper"

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  image: string
  highlight?: string
  rating?: number
}

export function TestimonialCard({
  name,
  role,
  quote,
  image,
  highlight,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      className="glass-card glass-card-hover flex flex-col gap-4 rounded-xl p-6"
    >
      {/* Rating stars */}
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="size-4 fill-primary text-primary"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="flex-1 text-foreground">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Highlight badge */}
      {highlight && (
        <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {highlight}
        </span>
      )}

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-border pt-4">
        <Image
          src={image}
          alt={`Photo of ${name}`}
          width={44}
          height={44}
          className="size-11 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.article>
  )
}
