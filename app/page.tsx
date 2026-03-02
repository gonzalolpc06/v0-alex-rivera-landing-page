"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { PricingSection } from "@/components/pricing-section"
import { AboutSection } from "@/components/about-section"
import { FaqSection } from "@/components/faq-section"
import { ProcessTimeline } from "@/components/process-timeline"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { CtaModalProvider } from "@/components/cta-modal"
import { LearnMoreModalProvider } from "@/components/learn-more-modal"

import { SectionDivider } from "@/components/ui/section-divider"

import { VisualAccents, BackgroundGradients } from "@/components/ui/animated-background-elements"

export default function Home() {
  return (
    <CtaModalProvider>
      <LearnMoreModalProvider>
        <Navbar />
        <main className="relative">
          <VisualAccents />
          <BackgroundGradients />
          <HeroSection />
          <SectionDivider type="wave" variant="primary" />
          <FeaturesSection />
          <SectionDivider type="slant" variant="secondary" reverse />
          <SocialProofSection />
          <SectionDivider type="wave" variant="primary" />
          <ProcessTimeline />
          <SectionDivider type="slant" variant="secondary" />
          <PricingSection />
          <AboutSection />
          <FaqSection />
          <FinalCtaSection />
        </main>
        <Footer />
        <BackToTop />
      </LearnMoreModalProvider>
    </CtaModalProvider>
  )
}
