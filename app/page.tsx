"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { PricingSection } from "@/components/pricing-section"
import { AboutSection } from "@/components/about-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { CtaModalProvider } from "@/components/cta-modal"

export default function Home() {
  return (
    <CtaModalProvider>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SocialProofSection />
        <PricingSection />
        <AboutSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <BackToTop />
    </CtaModalProvider>
  )
}
