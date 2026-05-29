import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Bot, FileSearch, Mic, Github, ExternalLink,
  Zap, CheckCircle2, Tag, ArrowUpRight,
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
    label: 'Featured Project',
    title: 'AI Chatbot System',
    subtitle: 'Cloud + Local LLM powered real-time conversational AI',
    icon: Bot,
    accent: '#0ea5e9',
    accentBg: 'rgba(14,165,233,0.08)',
    accentBorder: 'rgba(14,165,233,0.2)',
    gradient: 'linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(124,58,237,0.08) 100%)',
    description:
      'A production-grade AI chatbot architecture that supports both cloud-based (Gemini API) and local (Ollama) LLM inference. Built with a FastAPI backend, it features dynamic prompt engineering, structured response handling, and a clean API-driven design ready for integration into any frontend.',
    features: [
      'Dual LLM support — Gemini API (cloud) + Ollama (local) switching',
      'FastAPI backend with async request handling and rate management',
      'Advanced prompt engineering for improved response accuracy',
      'Structured JSON responses for seamless frontend integration',
      'Modular architecture — easily swap models or add new providers',
    ],
    tech: ['FastAPI', 'Gemini API', 'Ollama', 'Python', 'REST API', 'Prompt Engineering'],
    github: 'https://github.com/',
    demo: null,
    status: 'Completed',
  },
  {
    id: 2,
    label: 'AI / NLP',
    title: 'Document QA System',
    subtitle: 'RAG-powered intelligent document question answering',
    icon: FileSearch,
    accent: '#a855f7',
    accentBg: 'rgba(168,85,247,0.08)',
    accentBorder: 'rgba(168,85,247,0.2)',
    gradient: 'linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(34,211,238,0.06) 100%)',
    description:
      'An end-to-end Retrieval-Augmented Generation (RAG) pipeline that lets users query any document with natural language. Documents are chunked, embedded, and indexed into a vector store for fast semantic retrieval — then fed into an LLM to generate grounded, accurate answers.',
    features: [
      'Intelligent document chunking with configurable overlap strategy',
      'Embedding generation and vector database indexing for semantic search',
      'Cosine similarity-based top-k retrieval for relevant context',
      'LLM response generation grounded strictly in retrieved passages',
      'Supports PDF, TXT, and DOCX document formats',
    ],
    tech: ['Python', 'RAG', 'Embeddings', 'Vector Search', 'LLM', 'Semantic Retrieval'],
    github: 'https://github.com/',
    demo: null,
    status: 'Completed',
  },
  {
    id: 3,
    label: 'Voice AI',
    title: 'AI English Coach',
    subtitle: 'Voice + text English speaking coach with progress tracking',
    icon: Mic,
    accent: '#22d3ee',
    accentBg: 'rgba(34,211,238,0.08)',
    accentBorder: 'rgba(34,211,238,0.2)',
    gradient: 'linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(236,72,153,0.06) 100%)',
    description:
      'An interactive English speaking coach that accepts both voice and text input. Powered by Whisper for speech-to-text and gTTS for voice responses, it corrects grammar, provides natural conversational replies, scores fluency, and exports detailed progress reports — all within a Streamlit interface.',
    features: [
      'Whisper-powered voice recognition for real-time speech-to-text',
      'Grammar correction with natural, contextual AI responses via Ollama',
      'Fluency scoring system based on accuracy and naturalness metrics',
      'Text-to-speech replies using gTTS for immersive coaching experience',
      'Progress report export — track improvement over sessions',
    ],
    tech: ['Streamlit', 'Ollama', 'Whisper', 'gTTS', 'Python', 'Speech AI'],
    github: 'https://github.com/',
    demo: null,
    status: 'Completed',
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
      {/* Top gradient wash */}
      <div
        className="absolute inset-x-0 top-0 h-48 opacity-60 pointer-events-none"
        style={{ background: gradient }}
      />

      {/* Glow corner accent */}
      <div
        className="absolute top-0 right-0 w-40 h-40 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle at top right, ${accent}, transparent 70%)`,
        }}
      />

      <div className="relative p-7 md:p-8">

        {/* ── Top row: label + status ── */}
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
              style={{ background: '#22c55e', boxShadow: '0 0 6px #22c55e' }}
            />
            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
              {status}
            </span>
          </div>
        </div>

        {/* ── Title row ── */}
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

        {/* ── Accent divider ── */}
        <div
          className="w-full h-px mb-5"
          style={{ background: `linear-gradient(90deg, ${accent}40, transparent)` }}
        />

        {/* ── Description ── */}
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </p>

        {/* ── Features ── */}
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

        {/* ── Tech stack ── */}
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

        {/* ── Action buttons ── */}
        <div
          className="flex items-center gap-3 pt-5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
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

        {/* ── Header ── */}
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
            Real-world AI systems built from scratch — chatbots, RAG pipelines, and voice-powered applications.
          </p>
        </motion.div>

        {/* ── Project cards grid ── */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* ── GitHub CTA ── */}
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
                Experiments, notebooks, and open-source contributions
              </p>
            </div>
          </div>
          <a
            href="https://github.com/"
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
