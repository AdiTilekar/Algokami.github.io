'use client'
import { useState, useEffect, useRef } from 'react'

interface Props {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export default function TypewriterText({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseTime = 1800,
}: Props) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting]   = useState(false)
  const pauseRef = useRef(false)

  useEffect(() => {
    if (pauseRef.current) return

    const current = words[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => setCharIndex(c => c + 1), typingSpeed)
      } else {
        pauseRef.current = true
        timeout = setTimeout(() => {
          pauseRef.current = false
          setDeleting(true)
        }, pauseTime)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex(c => c - 1), deletingSpeed)
      } else {
        setDeleting(false)
        setWordIndex(i => (i + 1) % words.length)
      }
    }

    setDisplayed(current.substring(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return (
    <>
      <span className="typewriter-text">{displayed}</span>
      <span className="cursor">|</span>
    </>
  )
}
