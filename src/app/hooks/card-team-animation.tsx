'use client'
import { useEffect, useRef} from 'react'
import gsap from 'gsap'

export function UseCardAnimation() {
  const containerCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.from('.card-item', {
        y: 60,
        opacity: 0,
        filter: 'blur(8px)',
        ease: 'power3.inOut',
        stagger: 0.12
      })

      gsap.from('.card-title', {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: 0.4,
        stagger: 0.1,
        ease: 'back.inOut(1.7)'
      })
    }, containerCardRef)

    return () => ctx.revert()
  }, [])

  return containerCardRef
}