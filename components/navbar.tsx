"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Program", href: "#program" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a
          href="#hero"
          className="text-lg font-bold tracking-widest text-foreground transition-colors hover:text-primary"
        >
          ALEX RIVERA
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Contact
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="flex size-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-card md:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>
      </nav>

      <MobileMenu open={mobileOpen} onOpenChange={setMobileOpen} />
    </motion.header>
  )
}
