"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"

export function ContactForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="glass-card mx-auto flex w-full max-w-lg flex-col gap-6 rounded-2xl p-6 sm:p-8"
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-name" className="text-foreground">
          Full Name
        </Label>
        <Input
          id="contact-name"
          placeholder="John Smith"
          className="border-border bg-background/50 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-email" className="text-foreground">
          Email
        </Label>
        <Input
          id="contact-email"
          type="email"
          placeholder="john@company.com"
          className="border-border bg-background/50 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-phone" className="text-foreground">
          Phone{" "}
          <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Input
          id="contact-phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          className="border-border bg-background/50 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-message" className="text-foreground">
          Message
        </Label>
        <Textarea
          id="contact-message"
          placeholder="Tell Alex about your goals..."
          rows={5}
          className="border-border bg-background/50 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <Button type="submit" className="h-11 w-full gap-2 text-base font-bold">
        <Send className="size-4" />
        Send Message
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        This is a placeholder form. No data is collected.
      </p>
    </form>
  )
}
