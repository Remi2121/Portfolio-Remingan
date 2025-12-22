import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Responsive OrbitPhoto
 * - CSS controls final sizes via --orbit-size at breakpoints
 * - JS only measures .orbit to position dots perfectly
 */
export default function OrbitPhoto({
  src,
  alt = 'profile',
  dots = 8,
  speed = 20, // seconds for one full rotation
}) {
  const orbitRef = useRef(null)
  const [size, setSize] = useState(280) // fallback; real size comes from CSS

  useEffect(() => {
    if (!orbitRef.current) return

    const measure = () => {
      const rect = orbitRef.current.getBoundingClientRect()
      setSize(Math.min(rect.width, rect.height) || 280)
    }
    measure()

    const ro = new ResizeObserver(measure)
    ro.observe(orbitRef.current)
    return () => ro.disconnect()
  }, [])

  const radius = size / 2
  const dotPositions = useMemo(() => {
    return Array.from({ length: dots }).map((_, i) => {
      const angle = (i / dots) * Math.PI * 2
      const r = radius - 10 // keep dots inside the ring
      return {
        left: radius + Math.cos(angle) * r - 5, // 5 = half of dot (10px)
        top:  radius + Math.sin(angle) * r - 5,
      }
    })
  }, [dots, radius])

  return (
    <div ref={orbitRef} className="orbit">
      <motion.div
        className="orbit__dots"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: 'linear', duration: speed }}
      >
        {dotPositions.map((p, idx) => (
          <div className="orbit__dot" key={idx} style={{ left: p.left, top: p.top }} />
        ))}
      </motion.div>

      {/* Photo size is controlled by CSS variables; no inline width/height here */}
      <img className="photo" src={src} alt={alt} draggable="false" />
    </div>
  )
}
