"use client"

import { SectionWrapper } from "@/components/section-wrapper"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ_ITEMS = [
  {
    question: "I have a packed schedule. How much time is required?",
    answer:
      "The core program requires just 3 hours per week - six 30-minute sessions. Every workout is designed for maximum density, so you're never wasting a minute. Most of our executive clients train before their first meeting or during lunch. The program adapts to your calendar, not the other way around.",
  },
  {
    question: "What if I am traveling for work?",
    answer:
      "We built the program with travel in mind. Every workout has a hotel-room variant that requires zero equipment. Your nutrition plan automatically adjusts for dining out, and the wearable integration ensures your program scales to your recovery - whether you're jet-lagged in Tokyo or fresh at home.",
  },
  {
    question: "Do I need to be in peak shape to start?",
    answer:
      "Absolutely not. The 90-Day Rebuild is designed to meet you where you are. Whether you haven't trained in years or you're already active but not seeing results, the program calibrates to your current fitness level using your biometric data and progressively builds from there.",
  },
  {
    question: "How does the wearable integration work?",
    answer:
      "We sync with Apple Watch, Whoop, Oura Ring, and Garmin devices. Your HRV, sleep quality, strain scores, and recovery data feed directly into your programming. If your data shows you're under-recovered, the program automatically adjusts intensity. It's coaching that listens to your body in real time.",
  },
]

export function FaqSection() {
  return (
    <SectionWrapper id="faq" className="px-4 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Frequently Asked Performance Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know before you start.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-border"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary hover:no-underline [&[data-state=open]]:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  )
}
