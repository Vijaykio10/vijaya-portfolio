import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

// A torus knot supplies the centreline. Each cross-section is perpendicular
// to its tangent, so the strands stay wrapped around the curve as it turns.
const tau = Math.PI * 2
function center(t) {
  const radius = 0.72 + 0.32 * Math.cos(3 * t)
  return [radius * Math.cos(2 * t), radius * Math.sin(2 * t), 0.43 * Math.sin(3 * t)]
}

const bands = 144
const strands = 12
const mesh = Array.from({ length: bands }, (_, i) => {
  const t = tau * i / bands
  const [x, y, z] = center(t)
  const next = center(t + 0.001)
  const dx = next[0] - x, dy = next[1] - y, dz = next[2] - z
  const length = Math.hypot(dx, dy, dz)
  const flat = Math.hypot(dx, dy)
  const nx = -dy / flat, ny = dx / flat
  return Array.from({ length: strands }, (_, j) => {
    const a = tau * j / strands + t
    const u = 0.105 * Math.cos(a), v = 0.105 * Math.sin(a)
    return [x + u * nx - v * dz * ny / length,
      y + u * ny + v * dz * nx / length, z + v * flat / length]
  })
})

export default function SignalSculpture() {
  const canvasRef = useRef(null)
  const time = useRef(0)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame, previous = 0, visible = false
    let width, height
    function paint() {
      const angle = time.current * 0.12 + 0.35
      const scale = Math.min(width, height) * 0.37
      const ca = Math.cos(angle), sa = Math.sin(angle)
      ctx.clearRect(0, 0, width, height)
      const points = mesh.map(row => row.map(([x, y, z]) => {
        const horizontal = x * ca + z * sa
        const depth = -x * sa + z * ca
        const vertical = y * 0.9 - depth * 0.436
        const distance = y * 0.436 + depth * 0.9
        const zoom = scale * 4 / (4 - distance)
        return [width / 2 + horizontal * zoom, height / 2 + vertical * zoom, distance]
      }))
      const order = points.map((row, i) => i).sort((a,b) => points[a][0][2] - points[b][0][2])
      for (const i of order) {
        const row = points[i], next = points[(i + 1) % bands]
        const light = Math.max(0, Math.min(1, (row[0][2] + 1.2) / 2.4))
        const hue = 175 + 62 * (1 - Math.cos(tau * i / bands)) / 2
        ctx.strokeStyle = 'hsla(' + hue + ',88%,' + (40 + 39 * light) + '%,' + (0.22 + 0.7 * light) + ')'
        ctx.lineWidth = 0.6 + light * 0.6
        ctx.beginPath()
        for (let j = 0; j < strands; j++) {
          ctx.moveTo(row[j][0], row[j][1])
          ctx.lineTo(next[j][0], next[j][1])
        }
        if (i % 4 === 0) {
          ctx.moveTo(row[0][0], row[0][1])
          for (const [x,y] of row.slice(1)) ctx.lineTo(x,y)
          ctx.closePath()
        }
        ctx.stroke()
      }
    }
    function tick(now) {
      if (previous && now - previous < 32) { frame = requestAnimationFrame(tick); return }
      if (previous) time.current += Math.min(now - previous, 80) / 1000
      previous = now
      paint()
      frame = requestAnimationFrame(tick)
    }
    function refresh() {
      cancelAnimationFrame(frame)
      previous = 0
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
      paint()
      if (visible && !document.hidden && !paused && !motion.matches) frame = requestAnimationFrame(tick)
    }
    const size = new ResizeObserver(refresh)
    const viewport = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; refresh() })
    size.observe(canvas)
    viewport.observe(canvas)
    motion.addEventListener('change', refresh)
    document.addEventListener('visibilitychange', refresh)
    return () => {
      cancelAnimationFrame(frame)
      size.disconnect()
      viewport.disconnect()
      motion.removeEventListener('change', refresh)
      document.removeEventListener('visibilitychange', refresh)
    }
  }, [paused])

  return <div className="signal-scene">
    <canvas ref={canvasRef} aria-hidden="true" />
    <button type="button" className="signal-toggle" aria-label={paused ? 'Play background animation' : 'Pause background animation'} onClick={() => setPaused(!paused)}>
      {paused ? <Play size={15} /> : <Pause size={15} />}
    </button>
  </div>
}
