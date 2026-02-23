"use client"

import { motion } from "framer-motion"
import { TrendingUp, Activity, Heart } from "lucide-react"
import { fadeInUp } from "@/components/section-wrapper"

interface MetricRow {
  label: string
  before: number
  after: number
  unit: string
  better: "higher" | "lower"
}

const METRICS: MetricRow[] = [
  { label: "HRV Score", before: 38, after: 72, unit: "ms", better: "higher" },
  {
    label: "Resting Heart Rate",
    before: 78,
    after: 58,
    unit: "bpm",
    better: "lower",
  },
  {
    label: "Deep Sleep",
    before: 45,
    after: 92,
    unit: "min",
    better: "higher",
  },
]

export function MetricCard() {
  return (
    <motion.div
      variants={fadeInUp}
      className="glass-card glass-card-hover flex flex-col gap-5 rounded-xl p-6"
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <Activity className="size-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">
          Biometric Comparison
        </h3>
      </div>
      <p className="text-sm text-muted-foreground">
        Week 1 vs Week 12 averages
      </p>

      {/* Metrics */}
      <div className="flex flex-col gap-4">
        {METRICS.map((metric) => {
          const improvement =
            metric.better === "higher"
              ? metric.after - metric.before
              : metric.before - metric.after
          const pct = Math.round(
            (improvement / metric.before) * 100
          )

          return (
            <div key={metric.label} className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{metric.label}</span>
                <span className="flex items-center gap-1 text-primary">
                  <TrendingUp className="size-3" />+{pct}%
                </span>
              </div>
              {/* Progress bar */}
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-background">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${Math.min(
                      (metric.after / Math.max(metric.before, metric.after, 100)) *
                        100,
                      100
                    )}%`,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className="absolute top-0 left-0 h-full rounded-full bg-primary/80"
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>
                  Week 1: {metric.before}
                  {metric.unit}
                </span>
                <span className="font-medium text-foreground">
                  Week 12: {metric.after}
                  {metric.unit}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer badge */}
      <div className="mt-auto flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2">
        <Heart className="size-4 text-primary" />
        <span className="text-sm font-medium text-primary">
          Data from 500+ executive clients
        </span>
      </div>
    </motion.div>
  )
}
