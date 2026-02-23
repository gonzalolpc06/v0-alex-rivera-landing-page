"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"

const NAV_LINKS = [
  { label: "Program", href: "#program" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
]

interface MobileMenuProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  const handleLinkClick = () => {
    onOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-[280px] border-border bg-[#0F172A] sm:max-w-[320px]"
      >
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="text-left font-bold tracking-wider text-foreground">
            ALEX RIVERA
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4 pt-4" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <SheetClose asChild key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-card hover:text-primary"
              >
                {link.label}
              </a>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
