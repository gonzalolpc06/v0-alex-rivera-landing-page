"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
  radius: number
  opacity: number
  pulseSpeed: number
  pulseOffset: number
}

const PARTICLE_COLOR = { r: 217, g: 249, b: 157 } // #D9F99D Electric Lime
const LINE_COLOR = { r: 217, g: 249, b: 157 }
const CONNECTION_DISTANCE = 140
const PARTICLE_COUNT_DESKTOP = 80
const PARTICLE_COUNT_MOBILE = 40
const DRIFT_SPEED = 0.15

export function ParticleGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 })
  const dimensionsRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 })

  const createParticles = useCallback((width: number, height: number) => {
    const count = width < 768 ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP
    const particles: Particle[] = []

    for (let i = 0; i < count; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * DRIFT_SPEED,
        vy: (Math.random() - 0.5) * DRIFT_SPEED,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
      })
    }

    particlesRef.current = particles
  }, [])

  const draw = useCallback((time: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const { w, h } = dimensionsRef.current
    ctx.clearRect(0, 0, w, h)

    const particles = particlesRef.current
    const mouse = mouseRef.current

    // Update & draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]

      // Drift movement
      p.x += p.vx
      p.y += p.vy

      // Soft boundary wrapping
      if (p.x < -20) p.x = w + 20
      if (p.x > w + 20) p.x = -20
      if (p.y < -20) p.y = h + 20
      if (p.y > h + 20) p.y = -20

      // Mouse repulsion
      const dx = p.x - mouse.x
      const dy = p.y - mouse.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 150) {
        const force = (150 - dist) / 150
        p.x += dx * force * 0.02
        p.y += dy * force * 0.02
      }

      // Pulse opacity
      const pulse = Math.sin(time * p.pulseSpeed + p.pulseOffset)
      const currentOpacity = p.opacity + pulse * 0.15

      // Draw particle
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${PARTICLE_COLOR.r}, ${PARTICLE_COLOR.g}, ${PARTICLE_COLOR.b}, ${currentOpacity})`
      ctx.fill()

      // Draw glow for larger particles
      if (p.radius > 1.2) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${PARTICLE_COLOR.r}, ${PARTICLE_COLOR.g}, ${PARTICLE_COLOR.b}, ${currentOpacity * 0.08})`
        ctx.fill()
      }
    }

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < CONNECTION_DISTANCE) {
          const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.12
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(${LINE_COLOR.r}, ${LINE_COLOR.g}, ${LINE_COLOR.b}, ${opacity})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      }
    }

    // Mouse connections
    for (let i = 0; i < particles.length; i++) {
      const dx = particles[i].x - mouse.x
      const dy = particles[i].y - mouse.y
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < 180) {
        const opacity = (1 - dist / 180) * 0.2
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(mouse.x, mouse.y)
        ctx.strokeStyle = `rgba(${PARTICLE_COLOR.r}, ${PARTICLE_COLOR.g}, ${PARTICLE_COLOR.b}, ${opacity})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
    }

    animationRef.current = requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleResize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const w = parent.clientWidth
      const h = parent.clientHeight
      canvas.width = w
      canvas.height = h
      dimensionsRef.current = { w, h }
      createParticles(w, h)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    handleResize()
    animationRef.current = requestAnimationFrame(draw)

    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [createParticles, draw])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      aria-hidden="true"
    />
  )
}
