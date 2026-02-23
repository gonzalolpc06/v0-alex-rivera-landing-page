"use client"

import { type ReactNode, createContext, useContext, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CtaModalContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

const CtaModalContext = createContext<CtaModalContextType>({
  open: false,
  setOpen: () => {},
})

export function useCtaModal() {
  return useContext(CtaModalContext)
}

export function CtaModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <CtaModalContext.Provider value={{ open, setOpen }}>
      {children}
      <CtaModal open={open} onOpenChange={setOpen} />
    </CtaModalContext.Provider>
  )
}

function CtaModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-[var(--glass-border)] bg-[#1E293B] text-foreground sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Start Your Transformation
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Join the 90-Day Executive Rebuild. Fill in your details and
            we&apos;ll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onOpenChange(false)
          }}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="cta-name" className="text-foreground">
              Full Name
            </Label>
            <Input
              id="cta-name"
              placeholder="John Smith"
              className="border-border bg-background/50 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="cta-email" className="text-foreground">
              Email
            </Label>
            <Input
              id="cta-email"
              type="email"
              placeholder="john@company.com"
              className="border-border bg-background/50 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="cta-tier" className="text-foreground">
              Preferred Tier
            </Label>
            <select
              id="cta-tier"
              className="h-9 w-full rounded-md border border-border bg-background/50 px-3 py-1 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              <option value="" className="bg-card text-card-foreground">
                Select a tier...
              </option>
              <option value="self-guided" className="bg-card text-card-foreground">
                Self-Guided ($199/mo)
              </option>
              <option value="executive" className="bg-card text-card-foreground">
                Executive ($499/mo)
              </option>
              <option value="vip" className="bg-card text-card-foreground">
                VIP Performance ($1,200/mo)
              </option>
            </select>
          </div>
          <Button
            type="submit"
            className="mt-2 h-11 w-full text-base font-bold"
          >
            Submit Application
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            This is a placeholder form. No data is collected.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
