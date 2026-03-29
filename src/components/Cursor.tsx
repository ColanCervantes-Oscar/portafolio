import { useEffect, useRef } from 'react'

export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null)
  const dot = useRef<HTMLDivElement>(null)
  const trails = useRef<HTMLDivElement[]>([])
  const TRAIL_COUNT = 12

  useEffect(() => {
    // Crear trails
    const container = document.body
    const trailEls: HTMLDivElement[] = []
    for (let i = 0; i < TRAIL_COUNT; i++) {
      const el = document.createElement('div')
      el.className = 'cursor-trail'
      el.style.opacity = String(1 - i / TRAIL_COUNT)
      el.style.width = el.style.height = `${6 - i * 0.4}px`
      container.appendChild(el)
      trailEls.push(el)
    }
    trails.current = trailEls

    const positions: { x: number; y: number }[] = Array(TRAIL_COUNT).fill({ x: 0, y: 0 })
    let mouseX = 0, mouseY = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (ring.current) { ring.current.style.left = mouseX + 'px'; ring.current.style.top = mouseY + 'px' }
      if (dot.current)  { dot.current.style.left  = mouseX + 'px'; dot.current.style.top  = mouseY + 'px' }
    }

    const animate = () => {
      positions.unshift({ x: mouseX, y: mouseY })
      positions.length = TRAIL_COUNT
      trailEls.forEach((el, i) => {
        const p = positions[i] || positions[positions.length - 1]
        el.style.left = p.x + 'px'
        el.style.top  = p.y + 'px'
        el.style.opacity = String((1 - i / TRAIL_COUNT) * 0.6)
      })
      rafId = requestAnimationFrame(animate)
    }

    const onEnter = () => { if (ring.current) { ring.current.style.width = '52px'; ring.current.style.height = '52px' } }
    const onLeave = () => { if (ring.current) { ring.current.style.width = '36px'; ring.current.style.height = '36px' } }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a,button,.badge').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      trailEls.forEach(el => el.remove())
    }
  }, [])

  return (
    <>
      <div ref={ring} id="cursor-ring" />
      <div ref={dot}  id="cursor-dot" />
    </>
  )
}
