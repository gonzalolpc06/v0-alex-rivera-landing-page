"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useCtaModal } from "@/components/cta-modal"
import { ArrowRight } from "lucide-react"

interface CtaButtonProps {
  label?: string
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "lg" | "sm"
  className?: string
  showArrow?: boolean
}

export function CtaButton({
  label = "Join the Rebuild",
  variant = "primary",
  size = "default",
  className,
  showArrow = true,
}: CtaButtonProps) {
  const { setOpen } = useCtaModal()

  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg font-bold transition-all focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  }

  const sizes = {
    sm: "h-9 px-4 text-sm",
    default: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => setOpen(true)}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {label}
      {showArrow && <ArrowRight className="size-4" />}
    </motion.button>
  )
}
