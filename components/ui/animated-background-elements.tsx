"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function MeshGradient() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div
                className="absolute inset-0 opacity-40 mix-blend-soft-light"
                style={{
                    backgroundImage: `
            radial-gradient(at 0% 0%, var(--primary) 0, transparent 50%),
            radial-gradient(at 50% 0%, #3b82f6 0, transparent 50%),
            radial-gradient(at 100% 0%, var(--primary) 0, transparent 50%),
            radial-gradient(at 50% 50%, #1e293b 0, transparent 80%),
            radial-gradient(at 0% 100%, var(--primary) 0, transparent 50%),
            radial-gradient(at 50% 100%, #3b82f6 0, transparent 50%),
            radial-gradient(at 100% 100%, var(--primary) 0, transparent 50%)
          `,
                    backgroundSize: "200% 200%",
                    animation: "gradient-move 20s ease infinite"
                }}
            />
            <style jsx>{`
        @keyframes gradient-move {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>
        </div>
    )
}

export function FloatingBlobs() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <motion.div
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 100, 0],
                    scale: [1, 1.2, 0.9, 1],
                    rotate: [0, 90, 180, 360],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -top-[10%] -left-[10%] size-[500px] rounded-full bg-primary/20 blur-[120px]"
            />
            <motion.div
                animate={{
                    x: [0, -120, 80, 0],
                    y: [0, 100, -50, 0],
                    scale: [1, 0.8, 1.1, 1],
                    rotate: [0, -90, -180, -360],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -bottom-[10%] -right-[10%] size-[600px] rounded-full bg-blue-500/10 blur-[150px]"
            />
            <motion.div
                animate={{
                    x: [0, 80, -100, 0],
                    y: [0, 120, -80, 0],
                    scale: [1, 1.1, 0.8, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[20%] right-[10%] size-[400px] rounded-full bg-primary/10 blur-[100px]"
            />
        </div>
    )
}

export function GlassBackdrop() {
    return (
        <div className="absolute inset-0 z-0 backdrop-blur-[100px] pointer-events-none" />
    )
}
export function BackgroundGradients() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent opacity-50" />
            <div className="absolute bottom-0 right-0 w-full h-[500px] bg-gradient-to-t from-blue-500/10 to-transparent opacity-50" />
        </div>
    )
}
export function VisualAccents() {
    return (
        <div className="absolute inset-x-0 top-0 h-full overflow-hidden pointer-events-none z-[-1]">
            <GlowPoints />
            <FloatingIcons />
        </div>
    )
}

function GlowPoints() {
    return (
        <>
            <div className="absolute top-[20%] left-[5%] size-1 bg-primary/40 rounded-full blur-sm animate-pulse" />
            <div className="absolute top-[40%] right-[10%] size-2 bg-blue-500/30 rounded-full blur-md animate-pulse [animation-delay:1s]" />
            <div className="absolute top-[70%] left-[15%] size-1.5 bg-primary/20 rounded-full blur-sm animate-pulse [animation-delay:2s]" />
            <div className="absolute top-[85%] right-[5%] size-1 bg-blue-400/30 rounded-full blur-sm animate-pulse [animation-delay:0.5s]" />
        </>
    )
}

function FloatingIcons() {
    return (
        <div className="absolute inset-0 opacity-10">
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[15%] right-[5%] text-primary"
            >
                <div className="border border-current px-2 py-1 rotate-12 rounded text-[10px] font-mono tracking-tighter">DATA:RAW</div>
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -10, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[60%] left-[2%] text-primary"
            >
                <div className="border border-current px-2 py-1 -rotate-6 rounded text-[10px] font-mono tracking-tighter">PHASE:02</div>
            </motion.div>
        </div>
    )
}
