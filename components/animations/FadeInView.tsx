'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
  once?: boolean
}

const variants = {
  up:    { hidden: { opacity: 0, y: 40 },  visible: { opacity: 1, y: 0  } },
  left:  { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0  } },
  right: { hidden: { opacity: 0, x: 40 },  visible: { opacity: 1, x: 0  } },
  none:  { hidden: { opacity: 0 },          visible: { opacity: 1 }         },
}

export default function FadeInView({
  children, delay = 0, direction = 'up', className, once = true
}: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants[direction]}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
