"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { BackToTop } from "@/components/back-to-top"
import { CtaModalProvider } from "@/components/cta-modal"
import { SectionWrapper } from "@/components/section-wrapper"
import { Mail, MapPin, Phone } from "lucide-react"

const CONTACT_INFO = [
  { icon: Mail, label: "alex@alexrivera.com" },
  { icon: Phone, label: "+1 (555) 000-0000" },
  { icon: MapPin, label: "Los Angeles, CA" },
]

export function ContactPageContent() {
  return (
    <CtaModalProvider>
      <Navbar />
      <main className="flex min-h-screen flex-col pt-16">
        <SectionWrapper className="flex flex-1 flex-col items-center justify-center px-4 py-24 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h1 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to start your transformation? Reach out and let&apos;s talk
              about your goals.
            </p>

            {/* Contact info */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              {CONTACT_INFO.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <info.icon className="size-4 text-primary" />
                  <span>{info.label}</span>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </SectionWrapper>
      </main>
      <Footer />
      <BackToTop />
    </CtaModalProvider>
  )
}
