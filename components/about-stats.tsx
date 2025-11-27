"use client"

import { useEffect, useRef, useState } from "react"

export type AboutStat = {
  value: number
  suffix?: string
  label: string
}

type AboutStatsProps = {
  stats: AboutStat[]
}

function AnimatedNumber({ value, suffix, start }: { value: number; suffix?: string; start: boolean }) {
  const [currentValue, setCurrentValue] = useState(0)
  const frameRef = useRef<number | null>(null)
  const hasStartedRef = useRef(false)

  useEffect(() => {
    if (!start || hasStartedRef.current) return

    hasStartedRef.current = true
    const duration = 1500
    const startTime = performance.now()

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      setCurrentValue(Math.round(progress * value))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step)
      }
    }

    frameRef.current = requestAnimationFrame(step)

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }
  }, [start, value])

  return (
    <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
      {currentValue.toLocaleString()}
      {suffix}
    </div>
  )
}

export function AboutStats({ stats }: AboutStatsProps) {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartAnimation(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} start={startAnimation} />
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

