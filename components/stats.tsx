"use client"

import { useEffect, useRef, useState } from "react"

import { Users, CheckCircle, Globe, Award } from "lucide-react"

type Stat = {
  icon: typeof Users
  value: number
  suffix?: string
  label: string
}

function AnimatedNumber({
  value,
  suffix,
  start,
}: {
  value: number
  suffix?: string
  start: boolean
}) {
  const [currentValue, setCurrentValue] = useState(0)
  const frameRef = useRef<number | null>(null)
  const hasStartedRef = useRef(false)

  useEffect(() => {
    if (!start || hasStartedRef.current) {
      return
    }

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
    <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
      {currentValue.toLocaleString()}
      {suffix}
    </div>
  )
}

export function Stats() {
  const stats: Stat[] = [
    {
      icon: Users,
      value: 500,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      icon: CheckCircle,
      value: 1000,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      icon: Globe,
      value: 50,
      suffix: "+",
      label: "Countries Served",
    },
    {
      icon: Award,
      value: 15,
      suffix: "+",
      label: "Years Experience",
    },
  ]

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
    <section ref={sectionRef} className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} start={startAnimation} />
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
