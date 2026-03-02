"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle2, Loader2 } from "lucide-react"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setStatus("success")
    setTimeout(() => setStatus("idle"), 5000)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card mx-auto flex w-full max-w-lg flex-col gap-6 rounded-2xl p-6 sm:p-8"
    >
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 12, stiffness: 200 }}
              className="mb-4 flex size-20 items-center justify-center rounded-full bg-primary/20"
            >
              <CheckCircle2 className="size-10 text-primary" />
            </motion.div>
            <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
            <p className="mt-2 text-muted-foreground">
              Alex will reach out to you within 24 hours.
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-6"
              onClick={() => setStatus("idle")}
            >
              Send another message
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-6"
          >
            {/* Name Input */}
            <div className="group relative flex flex-col gap-2">
              <Label htmlFor="contact-name" className="text-foreground transition-colors group-focus-within:text-primary">
                Full Name
              </Label>
              <div className="relative">
                <Input
                  id="contact-name"
                  required
                  placeholder="John Smith"
                  className="border-border bg-background/50 text-foreground placeholder:text-muted-foreground transition-all focus:border-primary/50"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary"
                  whileFocus={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="group relative flex flex-col gap-2">
              <Label htmlFor="contact-email" className="text-foreground transition-colors group-focus-within:text-primary">
                Email
              </Label>
              <Input
                id="contact-email"
                type="email"
                required
                placeholder="john@company.com"
                className="border-border bg-background/50 text-foreground placeholder:text-muted-foreground transition-all focus:border-primary/50"
              />
            </div>

            {/* Message Textarea */}
            <div className="group relative flex flex-col gap-2">
              <Label htmlFor="contact-message" className="text-foreground transition-colors group-focus-within:text-primary">
                Message
              </Label>
              <Textarea
                id="contact-message"
                required
                placeholder="Tell Alex about your goals..."
                rows={5}
                className="border-border bg-background/50 text-foreground placeholder:text-muted-foreground transition-all focus:border-primary/50"
              />
            </div>

            <Button
              type="submit"
              disabled={status === "loading"}
              className="h-12 w-full gap-2 text-base font-bold relative overflow-hidden group/btn"
            >
              <AnimatePresence mode="wait">
                {status === "loading" ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Loader2 className="size-4 animate-spin" />
                    Processing...
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Send className="size-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                    Send Message
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>

            <p className="text-center text-xs text-muted-foreground italic">
              * Alex handles all consultations personally.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
