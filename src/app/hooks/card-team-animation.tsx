'use client'
import { useEffect, useRef} from 'react'
import gsap from 'gsap'

export function UseCardAnimation() {
  const containerCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.from('.card-item', {
        y: 50,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 1,
        ease: 'expo.out',
        stagger: {
          each: 0.1,
          from: 'start'
        }
      })

      gsap.from('.card-title', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.3,
        ease: 'back.inOut(1.7)'
      })
    }, containerCardRef)

    return () => ctx.revert()
  }, [])

  return containerCardRef
}