import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BrainCircuit, Layers, BarChart3, Rocket, MapPin, GraduationCap, Briefcase } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

const stats = [
  { value: '2+',    label: 'Internships',         icon: Briefcase },
  { value: '3+',    label: 'AI/ML Projects',       icon: BrainCircuit },
  { value: '30+',   label: 'Skills Mastered',      icon: Layers },
  { value: 'M.Sc.', label: 'Applied Data Science', icon: GraduationCap },
]

const highlights = [
  {
    Icon: BrainCircuit,
    color: '#0ea5e9',
    bg: 'rgba(14,165,233,0.08)',
    border: 'rgba(14,165,233,0.2)',
    title: 'LLMs & RAG Systems',
    desc: 'Building document QA pipelines, chatbots, and retrieval systems using Gemini API, Ollama, embeddings, and vector search.',
  },
  {
    Icon: Layers,
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.08)',
    border: 'rgba(168,85,247,0.2)',
    title: 'Machine Learning',
    desc: 'End-to-end ML workflows — data preprocessing, feature engineering, model training, hyperparameter tuning, and evaluation.',
  },
  {
    Icon: BarChart3,
    color: '#22d3ee',
    bg: 'rgba(34,211,238,0.08)',
    border: 'rgba(34,211,238,0.2)',
    title: 'Data Analytics',
    desc: 'Power BI dashboards, DAX measures, SQL transformations, and Excel automation for business intelligence workflows.',
  },
  {
    Icon: Rocket,
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.2)',
    title: 'API-Driven AI Systems',
    desc: 'Production-grade FastAPI backends powering AI chatbots with real-time inference, prompt engineering, and cloud + local LLM support.',
  },
]

function StatCard({ value, label, icon: Icon, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="glass-card p-5 text-center group"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
        style={{
          background: 'rgba(14,165,233,0.08)',
          border: '1px solid rgba(14,165,233,0.15)',
        }}
      >
        <Icon size={18} style={{ color: 'var(--cyan)' }} />
      </div>
      <div
        className="text-2xl font-bold mb-1 gradient-text"
        style={{ fontFamily: 'Syne, sans-serif' }}
      >
        {value}
      </div>
      <div className="text-xs font-mono" style={{ color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
        {label}
      </div>
    </motion.div>
  )
}

function HighlightCard({ Icon, color, bg, border, title, desc, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="glass-card p-5 flex gap-4 group"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
        style={{ background: bg, border: `1px solid ${border}` }}
      >
        <Icon size={20} style={{ color }} />
      </div>
      <div>
        <h4
          className="text-base font-semibold mb-1.5"
          style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
        >
          {title}
        </h4>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function About() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section">
      <div className="container-max">

        {/* ── Header ── */}
        <motion.div
          ref={sectionRef}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-16"
        >
          <span className="section-tag">
            <span style={{ color: 'var(--cyan)' }}>//</span> About Me
          </span>
          <h2 className="section-title">
            Crafting AI that <span className="gradient-text">solves real problems</span>
          </h2>
          <p className="section-subtitle">
            A quick look at who I am, what drives me, and the kind of AI systems I love building.
          </p>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

          {/* ── Left: Story ── */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="gradient-border-card p-7 mb-6"
              style={{ backdropFilter: 'blur(16px)' }}
            >
              {/* Terminal-style header */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full" style={{ background: '#ef4444' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#f59e0b' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#22c55e' }} />
                <span
                  className="font-mono text-xs ml-2"
                  style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}
                >
                  about_vijaya.txt
                </span>
              </div>

              <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                <p>
                  Hey — I'm{' '}
                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                    Vijaya Ragunath S
                  </span>
                  , an{' '}
                  <span style={{ color: 'var(--cyan)', fontWeight: 500 }}>
                    M.Sc. Applied Data Science
                  </span>{' '}
                  student at SRM Institute of Science and Technology, Chennai, with a genuine obsession for building AI that actually works in the real world.
                </p>
                <p>
                  My focus sits at the intersection of{' '}
                  <span style={{ color: 'var(--blue)', fontWeight: 500 }}>
                    LLMs, RAG pipelines, and ML systems
                  </span>
                  . I've built AI chatbots powered by Gemini API and Ollama, document QA systems using vector search and embeddings, and voice-enabled English coaching apps with Whisper + gTTS.
                </p>
                <p>
                  Through two internships at{' '}
                  <span style={{ color: 'var(--purple)', fontWeight: 500 }}>VDart</span>
                  , I've worked across the full AI stack — from data preprocessing and model evaluation to FastAPI backends and Power BI dashboards — giving me a rare combo of{' '}
                  <span style={{ color: 'var(--cyan)', fontWeight: 500 }}>
                    ML depth + data analytics breadth
                  </span>
                  .
                </p>
                <p>
                  I thrive in fast-moving environments, love turning ambiguous problems into clean intelligent systems, and I'm always chasing the next thing to learn.
                </p>
              </div>
            </motion.div>

            {/* Location + status */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="flex flex-wrap gap-3"
            >
              {[
                { icon: MapPin,        label: 'Chennai, India',           color: '#0ea5e9' },
                { icon: GraduationCap, label: 'M.Sc. Applied Data Science', color: '#a855f7' },
                { icon: Briefcase,     label: 'Open to AI/ML Roles',       color: '#22c55e' },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    background: `${color}10`,
                    border: `1px solid ${color}25`,
                    color,
                    fontSize: '0.82rem',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 500,
                  }}
                >
                  <Icon size={13} />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Highlight cards ── */}
          <div className="grid gap-4">
            {highlights.map((h, i) => (
              <HighlightCard key={h.title} {...h} index={i} />
            ))}
          </div>
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
