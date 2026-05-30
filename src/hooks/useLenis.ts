import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Initializes Lenis smooth scroll for the page and drives it with a
 * requestAnimationFrame loop. Cleans up the instance and RAF on unmount.
 */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    })

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])
}
