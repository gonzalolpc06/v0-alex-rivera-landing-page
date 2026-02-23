"use client"

import { type ReactNode, createContext, useContext, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useCtaModal } from "@/components/cta-modal"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  TrendingUp,
  Brain,
  Clock,
  Shield,
  Zap,
} from "lucide-react"

interface LearnMoreModalContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

const LearnMoreModalContext = createContext<LearnMoreModalContextType>({
  open: false,
  setOpen: () => {},
})

export function useLearnMoreModal() {
  return useContext(LearnMoreModalContext)
}

export function LearnMoreModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <LearnMoreModalContext.Provider value={{ open, setOpen }}>
      {children}
      <LearnMoreModal open={open} onOpenChange={setOpen} />
    </LearnMoreModalContext.Provider>
  )
}

const REASONS = [
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description:
      "Every client averages a 15% increase in energy levels and a 40% improvement in key strength markers within the first 90 days.",
  },
  {
    icon: Brain,
    title: "Science-Backed Methodology",
    description:
      "Programs are built on biometric data from Oura, Whoop, and Apple Watch — not guesswork. Your body tells us what works.",
  },
  {
    icon: Clock,
    title: "Built for Busy Schedules",
    description:
      "Just 3 hours per week. Sessions are designed around executive calendars, with flexible scheduling and travel-ready workouts.",
  },
  {
    icon: Shield,
    title: "Risk-Free Commitment",
    description:
      "If you don't see measurable improvement in your first 30 days, you get a full refund. No questions asked.",
  },
  {
    icon: Zap,
    title: "Executive-Level Accountability",
    description:
      "Weekly check-ins, biometric reviews, and direct access to Alex ensure you stay on track — even during your busiest quarters.",
  },
]

function LearnMoreModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { setOpen: openCtaModal } = useCtaModal()

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-y-auto border-[var(--glass-border)] bg-[#1E293B] text-foreground sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Why the 90-Day Rebuild{" "}
            <span className="text-primary">Works</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Here&apos;s what makes this program different from anything
            you&apos;ve tried before.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-5 py-2">
          {REASONS.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <reason.icon className="size-5 text-primary" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-4">
          <Button
            onClick={() => {
              onOpenChange(false)
              setTimeout(() => openCtaModal(true), 200)
            }}
            className="h-11 w-full text-base font-bold"
          >
            Join the Rebuild
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Next cohort starting Monday. Only 5 spots remaining.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
