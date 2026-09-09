import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Bot, Mic, Github, ExternalLink,
  Zap, CheckCircle2, Tag, ArrowUpRight, ScanFace, PhoneCall,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const projects = [
  {
    id: 1,
    label: 'Featured · AI / CV',
    title: 'Pennar Pulse',
    subtitle: 'Smart workforce attendance & face-recognition prototype',
    icon: ScanFace,
    accent: '#f97316',
    accentBg: 'rgba(249,115,22,0.08)',
    accentBorder: 'rgba(249,115,22,0.2)',
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.12) 0%, rgba(14,165,233,0.08) 100%)',
    description:
      'A workforce attendance prototype that connects a camera-driven recognition workflow with employee management, attendance, reporting, notifications, audit events, and operational modules. The current repository clearly separates the recognition UX from the production biometric layer.',
    features: [
      'Camera and photo-upload recognition workflow',
      'Face enrollment and employee management modules',
      'Recognition state machine with threshold-based decision flow',
      'Attendance, gate, notification, and audit-event integration',
      'Reports, analytics, shifts, leave, devices, and ERP workflow modules',
    ],
    tech: ['React', 'TypeScript', 'TanStack Start', 'Tailwind CSS', 'Browser Camera API'],
    github: null,
    demo: null,
    status: 'Private Prototype',
  },
  {
    id: 2,
    label: 'AI Engineering',
    title: 'FitNova — Sales Call Intelligence',
    subtitle: 'LLM-powered sales conversation analysis pipeline',
    icon: PhoneCall,
    accent: '#a855f7',
    accentBg: 'rgba(168,85,247,0.08)',
    accentBorder: 'rgba(168,85,247,0.2)',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(34,211,238,0.06) 100%)',
    description:
      'An end-to-end sales-call intelligence workflow designed to ingest conversations, classify sales relevance, evaluate rubric dimensions, flag issues, validate generated evidence, store structured results, and expose insights through a dashboard.',
    features: [
      'Sales-call ingestion and conversation classification',
      'LLM-based structured analysis and rubric scoring',
      'Quote-grounding verification to reduce unsupported conclusions',
      'SQLite-backed structured result storage',
      'Streamlit dashboard for reviewing analysis output',
    ],
    tech: ['Python', 'LLMs', 'Gemini API', 'SQLite', 'Streamlit', 'Prompt Engineering'],
    github: null,
    demo: null,
    status: 'Private / Client Work',
  },
  {
    id: 3,
    label: 'Public · Voice AI',
    title: 'AI English Coach',
    subtitle: 'Voice + text English speaking coach with progress tracking',
    icon: Mic,
    accent: '#22d3ee',
    accentBg: 'rgba(34,211,238,0.08)',
    accentBorder: 'rgba(34,211,238,0.2)',
    gradient: 'linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(236,72,153,0.06) 100%)',
    description:
      'A voice-first English speaking coach combining Whisper speech recognition, local Mistral inference through Ollama, structured coaching feedback, fluency scoring, gTTS responses, and session analytics in a Streamlit application.',
    features: [
      'Whisper-powered speech-to-text input',
      'Local Mistral 7B inference through Ollama',
      'Structured grammar, response, tip, and practice-question feedback',
      'Fluency scoring and session-level metrics',
      'JSON practice-history export and text-to-speech responses',
    ],
    tech: ['Streamlit', 'Ollama', 'Mistral 7B', 'Whisper', 'gTTS', 'Python'],
    github: 'https://github.com/VijayaKio10/ai-english-coach',
    demo: null,
    status: 'Public',
  },
]

function FeatureItem({ text, accent }) {
  return (
    <li className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
      <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: accent }} />
      <span>{text}</span>
    </li>
  )
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const {
    label, title, subtitle, icon: Icon,
    accent, accentBg, accentBorder, gradient,
    description, features, tech, github, demo, status,
  } = project

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="group relative rounded-2xl overflow-hidden"
      style={{
        background: 'var(--bg-card)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(14,165,233,0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        transition: 'all 0.4s ease',
      }}
      whileHover={{
        y: -6,
        boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${accent}22`,
        borderColor: `${accent}40`,
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-48 opacity-60 pointer-events-none"
        style={{ background: gradient }}
      />

      <div
        className="absolute top-0 right-0 w-40 h-40 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle at top right, ${accent}, transparent 70%)`,
        }}
      />

      <div className="relative p-7 md:p-8">
        <div className="flex items-center justify-between mb-5">
          <span
            className="text-xs font-mono px-3 py-1 rounded-full"
            style={{
              background: accentBg,
              border: `1px solid ${accentBorder}`,
              color: accent,
              letterSpacing: '0.08em',
            }}
          >
            {label}
          </span>
          <div className="flex items-center gap-1.5">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: status === 'Public' ? '#22c55e' : '#f59e0b', boxShadow: `0 0 6px ${status === 'Public' ? '#22c55e' : '#f59e0b'}` }}
            />
            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
              {status}
            </span>
          </div>
        </div>

        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
            style={{
              background: accentBg,
              border: `1px solid ${accentBorder}`,
              boxShadow: `0 0 16px ${accent}33`,
            }}
          >
            <Icon size={22} style={{ color: accent }} />
          </div>
          <div>
            <h3
              className="text-xl font-bold leading-tight mb-1"
              style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
            >
              {title}
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              {subtitle}
            </p>
          </div>
        </div>

        <div
          className="w-full h-px mb-5"
          style={{ background: `linear-gradient(90deg, ${accent}40, transparent)` }}
        />

        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Zap size={13} style={{ color: accent }} />
            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
              KEY FEATURES
            </span>
          </div>
          <ul className="space-y-2">
            {features.map((f, i) => (
              <FeatureItem key={i} text={f} accent={accent} />
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Tag size={12} style={{ color: 'var(--text-muted)' }} />
            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
              TECH STACK
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tech.map(t => (
              <span
                key={t}
                className="tech-tag"
                style={{
                  background: `${accent}0d`,
                  borderColor: `${accent}28`,
                  color: `${accent}bb`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div
          className="flex items-center gap-3 pt-5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex-1 justify-center py-2.5 text-sm"
              style={{ borderColor: `${accent}40`, color: accent }}
            >
              <Github size={15} />
              GitHub
            </a>
          ) : (
            <div
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                color: 'var(--text-muted)',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.85rem',
              }}
            >
              <Github size={13} />
              Repository not public
            </div>
          )}
          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 justify-center py-2.5 text-sm"
              style={{ background: `linear-gradient(135deg, ${accent}, ${accent}99)` }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                Live Demo <ArrowUpRight size={14} />
              </span>
            </a>
          ) : (
            <div
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm rounded-xl"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                color: 'var(--text-muted)',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.85rem',
              }}
            >
              <ExternalLink size={13} />
              Demo Coming Soon
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="section" style={{ background: 'rgba(4,15,42,0.4)' }}>
      <div className="container-max">
        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <span className="section-tag">
            <span style={{ color: 'var(--cyan)' }}>//</span> Work Showcase
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            AI/ML systems and product prototypes spanning computer vision, LLM applications, speech AI, and business automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="gradient-border-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{
                background: 'rgba(14,165,233,0.08)',
                border: '1px solid rgba(14,165,233,0.15)',
              }}
            >
              <Github size={20} style={{ color: 'var(--cyan)' }} />
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}>
                More projects on GitHub
              </p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                Experiments, applications, and engineering projects
              </p>
            </div>
          </div>
          <a
            href="https://github.com/VijayaKio10"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex-shrink-0"
          >
            <Github size={15} />
            View GitHub
          </a>
        </motion.div>

      </div>
    </section>
  )
}
