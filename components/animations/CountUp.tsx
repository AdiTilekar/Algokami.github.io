'use client'
import { useRef, useState, useEffect } from 'react'

interface Props {
  target: number
  suffix?: string
  prefix?: string
  className?: string
  duration?: number
}

export default function CountUp({
  target, suffix = '', prefix = '', className, duration = 2000
}: Props) {
  const [count, setCount]     = useState(0)
  const ref                   = useRef<HTMLSpanElement>(null)
  const started               = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const step = target / (duration / 16)
          let current = 0
          const timer = setInterval(() => {
            current += step
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(parseFloat(current.toFixed(1)))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
