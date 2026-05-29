import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles, Brain, Code2, Database } from 'lucide-react'

const roles = [
  'AI/ML Engineer',
  'LLM Developer',
  'RAG Systems Builder',
  'ML Model Trainer',
  'Data Analyst',
]

const orbitIcons = [
  { Icon: Brain,    color: '#0ea5e9', size: 18, duration: 9,  radius: 130, label: 'ML' },
  { Icon: Code2,    color: '#a855f7', size: 16, duration: 13, radius: 170, label: 'API' },
  { Icon: Database, color: '#22d3ee', size: 16, duration: 11, radius: 150, label: 'RAG' },
  { Icon: Sparkles, color: '#ec4899', size: 14, duration: 7,  radius: 110, label: 'LLM' },
]

/* ── Typewriter hook ── */
function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay]   = useState('')
  const [wordIdx, setWordIdx]   = useState(0)
  const [charIdx, setCharIdx]   = useState(0)
  const [deleting, setDeleting] = useState(false)
  const timeout = useRef(null)

  useEffect(() => {
    const current = words[wordIdx]
    const delay = deleting
      ? speed / 2
      : charIdx === current.length ? pause : speed

    timeout.current = setTimeout(() => {
      if (!deleting && charIdx < current.length) {
        setDisplay(current.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      } else if (!deleting && charIdx === current.length) {
        setDeleting(true)
      } else if (deleting && charIdx > 0) {
        setDisplay(current.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      } else {
        setDeleting(false)
        setWordIdx(i => (i + 1) % words.length)
      }
    }, delay)

    return () => clearTimeout(timeout.current)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

/* ── Particle dot ── */
function Particle({ x, y, size, opacity, duration }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: 'var(--cyan)',
        opacity,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [opacity, opacity * 0.3, opacity],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  opacity: Math.random() * 0.4 + 0.1,
  duration: Math.random() * 4 + 3,
}))

export default function Hero() {
  const role = useTypewriter(roles)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map(p => (
          <Particle key={p.id} {...p} />
        ))}
      </div>

      {/* Radial hero glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '900px',
          background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(14,165,233,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container-max w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-16">

          {/* ── LEFT: Text content ── */}
          <div className="flex-1 max-w-2xl">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="section-tag">
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{
                    background: '#22c55e',
                    boxShadow: '0 0 8px #22c55e',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                />
                Open to Work · Chennai, India
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p
                className="font-mono text-sm mb-2"
                style={{ color: 'var(--cyan)', letterSpacing: '0.15em' }}
              >
                &gt; Hello, I am
              </p>
              <h1
                className="mb-3"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(2.4rem, 6vw, 4rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                }}
              >
                Vijaya{' '}
                <span className="gradient-text">Ragunath</span>{' '}
                <span style={{ color: 'var(--text-secondary)' }}>S</span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
              style={{ minHeight: '44px' }}
            >
              <span
                className="font-mono text-xl font-medium"
                style={{ color: 'var(--blue)' }}
              >
                {role}
                <span
                  style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '1.2em',
                    background: 'var(--cyan)',
                    marginLeft: '3px',
                    verticalAlign: 'middle',
                    animation: 'blink 1s step-end infinite',
                  }}
                />
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 text-lg leading-relaxed"
              style={{
                color: 'var(--text-secondary)',
                maxWidth: '520px',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              Building{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                intelligent systems
              </span>{' '}
              with LLMs, RAG pipelines, and real-world ML — turning complex data
              into{' '}
              <span style={{ color: 'var(--cyan)', fontWeight: 500 }}>
                impactful AI products
              </span>
              .
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <button
                onClick={() => scrollTo('projects')}
                className="btn-primary"
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  View Projects <ArrowRight size={16} />
                </span>
              </button>

              <a href="/resume.pdf" download className="btn-outline">
                <Download size={16} />
                Resume
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="btn-outline"
                style={{ borderColor: 'rgba(168,85,247,0.4)', color: '#c084fc' }}
              >
                <Mail size={16} />
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-4"
            >
              <span
                className="text-xs font-mono"
                style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}
              >
                FIND ME ON
              </span>
              <div className="flex gap-3">
                {[
                  {
                    Icon: Github,
                    href: 'https://github.com/Vijaykio10',
                    label: 'GitHub',
                    color: 'var(--text-secondary)',
                    hoverColor: 'var(--blue)',
                  },
                  {
                    Icon: Linkedin,
                    href: 'https://linkedin.com/in/vijayaragunath',
                    label: 'LinkedIn',
                    color: 'var(--text-secondary)',
                    hoverColor: '#0ea5e9',
                  },
                ].map(({ Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200"
                    style={{
                      background: 'rgba(14,165,233,0.06)',
                      border: '1px solid rgba(14,165,233,0.12)',
                      color,
                    }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Orbit visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex-shrink-0 relative"
            style={{ width: '340px', height: '340px' }}
          >
            {/* Orbit rings */}
            {[110, 150, 175].map((r, i) => (
              <div
                key={i}
                className="absolute rounded-full border"
                style={{
                  width: r * 2,
                  height: r * 2,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  borderColor: i === 0
                    ? 'rgba(14,165,233,0.15)'
                    : i === 1
                    ? 'rgba(168,85,247,0.1)'
                    : 'rgba(34,211,238,0.07)',
                  borderStyle: i === 2 ? 'dashed' : 'solid',
                }}
              />
            ))}

            {/* Orbiting icons */}
            {orbitIcons.map(({ Icon, color, size, duration, radius, label }, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  width: '40px',
                  height: '40px',
                  marginTop: '-20px',
                  marginLeft: '-20px',
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration,
                  repeat: Infinity,
                  ease: 'linear',
                  direction: i % 2 === 0 ? 'normal' : 'reverse',
                }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className="absolute flex flex-col items-center gap-1"
                  style={{
                    top: `-${radius}px`,
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: `rgba(${
                        color === '#0ea5e9' ? '14,165,233' :
                        color === '#a855f7' ? '168,85,247' :
                        color === '#22d3ee' ? '34,211,238' :
                        '236,72,153'
                      }, 0.15)`,
                      border: `1px solid ${color}33`,
                      boxShadow: `0 0 12px ${color}44`,
                    }}
                  >
                    <Icon size={size} color={color} />
                  </div>
                  <span
                    className="font-mono text-xs"
                    style={{ color, opacity: 0.8, letterSpacing: '0.05em' }}
                  >
                    {label}
                  </span>
                </motion.div>
              </motion.div>
            ))}

            {/* Center avatar / monogram */}
            <div
              className="absolute rounded-2xl flex flex-col items-center justify-center"
              style={{
                width: '120px',
                height: '120px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(168,85,247,0.15))',
                border: '1px solid rgba(14,165,233,0.3)',
                boxShadow: '0 0 30px rgba(14,165,233,0.2), 0 0 60px rgba(168,85,247,0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: '2rem',
                  background: 'linear-gradient(135deg, #0ea5e9, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                }}
              >
                VR
              </span>
              <span
                className="font-mono text-xs mt-1"
                style={{ color: 'var(--cyan)', opacity: 0.7, letterSpacing: '0.15em' }}
              >
                AI/ML
              </span>
            </div>

            {/* Glow pulse behind center */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: '120px',
                height: '120px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)',
              }}
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0.1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 pb-10"
        >
          <span
            className="font-mono text-xs"
            style={{ color: 'var(--text-muted)', letterSpacing: '0.15em' }}
          >
            SCROLL DOWN
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border flex items-start justify-center pt-1"
            style={{ borderColor: 'rgba(14,165,233,0.3)' }}
          >
            <div
              className="w-1 h-2 rounded-full"
              style={{ background: 'var(--cyan)' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
