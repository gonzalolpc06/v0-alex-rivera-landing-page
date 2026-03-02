"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import { SectionWrapper, StaggerContainer } from "@/components/section-wrapper"
import { CheckCircle2, Target, Zap, TrendingUp } from "lucide-react"

const STEPS = [
    {
        icon: Target,
        title: "Phase 1: Biometric Baseline",
        description: "Weeks 1-2: We stack your wearable data against executive-grade blood panels to identify exactly where your performance bottlenecks are.",
    },
    {
        icon: Zap,
        title: "Phase 2: The Metabolism Hack",
        description: "Weeks 3-6: Precision nutrition and high-intensity hybrid strength protocols to strip body fat and skyrocket cognitive energy.",
    },
    {
        icon: TrendingUp,
        title: "Phase 3: Peak Performance",
        description: "Weeks 7-10: Advanced progressive overload protocols that sync with your strain data to push physical boundaries without burnout.",
    },
    {
        icon: CheckCircle2,
        title: "Phase 4: Sustainable Mastery",
        description: "Weeks 11-12: Off-loading coaching into systems that you maintain with less than 3 hours of focused effort per week.",
    },
]

export function ProcessTimeline() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    })

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <SectionWrapper id="process" className="px-4 py-24 lg:px-8">
            <div className="mx-auto max-w-4xl" ref={containerRef}>
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                        The Precision <span className="text-primary">Process</span>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        A 90-day trajectory designed for elite results.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical line with drawing animation */}
                    <div className="absolute left-[23px] top-0 h-full w-[2px] bg-border md:left-1/2 md:-ml-[1px]" />
                    <motion.div
                        className="absolute left-[23px] top-0 z-10 w-[2px] bg-primary md:left-1/2 md:-ml-[1px]"
                        style={{ height: "100%", scaleY: pathLength, transformOrigin: "top" }}
                    />

                    <StaggerContainer className="flex flex-col gap-12">
                        {STEPS.map((step, index) => {
                            const isEven = index % 2 === 0
                            return (
                                <div
                                    key={step.title}
                                    className={`relative flex items-center md:justify-between ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                                        }`}
                                >
                                    {/* Content card */}
                                    <motion.div
                                        variants={{
                                            hidden: { opacity: 0, x: isEven ? -50 : 50 },
                                            visible: { opacity: 1, x: 0 },
                                        }}
                                        className="ml-16 w-full md:ml-0 md:w-[45%]"
                                    >
                                        <div className="glass-card glass-card-hover rounded-2xl p-6">
                                            <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10">
                                                <step.icon className="size-6 text-primary" />
                                            </div>
                                            <h3 className="mb-2 text-xl font-bold text-foreground">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm leading-relaxed text-muted-foreground">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Dot on the timeline */}
                                    <div className="absolute left-0 z-20 flex size-12 items-center justify-center rounded-full bg-background border-4 border-border md:left-1/2 md:-ml-6">
                                        <div className="size-3 rounded-full bg-primary" />
                                    </div>

                                    {/* Empty space for layout */}
                                    <div className="hidden w-[45%] md:block" />
                                </div>
                            )
                        })}
                    </StaggerContainer>
                </div>
            </div>
        </SectionWrapper>
    )
}
