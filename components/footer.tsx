"use client"

import { CtaButton } from "@/components/cta-button"
import { Instagram, Linkedin } from "lucide-react"

const SOCIAL_LINKS = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
]

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
]

export function Footer() {
  return (
    <footer
      className="border-t border-border px-4 py-12 lg:px-8"
      style={{ backgroundColor: "var(--surface-darker)" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row md:justify-between">
        {/* Left: Brand + copyright */}
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="text-lg font-bold tracking-widest text-foreground">
            ALEX RIVERA
          </span>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Alex Rivera Performance. All
            rights reserved.
          </p>
        </div>

        {/* Center: CTA #5 */}
        <div className="flex flex-col items-center gap-3">
          <CtaButton
            label="Join the Rebuild"
            size="sm"
            showArrow={false}
          />
        </div>

        {/* Right: Links */}
        <div className="flex flex-col items-center gap-3 md:items-end">
          {/* Social */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={social.label}
              >
                <social.icon className="size-5" />
              </a>
            ))}
          </div>

          {/* Legal + Contact */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground md:justify-end">
            <a
              href="/contact"
              className="transition-colors hover:text-primary"
            >
              Contact Alex
            </a>
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
