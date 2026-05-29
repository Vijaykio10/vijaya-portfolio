import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  BrainCircuit, FileSearch2, Bot, FlaskConical,
  BarChart3, Plug, Sparkles, ArrowRight,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const focusAreas = [
  {
    icon: BrainCircuit,
    title: 'LLM Applications',
    desc: 'Building production-ready applications powered by large language models — Gemini API for cloud inference and Ollama for local, privacy-first deployment.',
    accent: '#0ea5e9',
    bg: 'rgba(14,165,233,0.07)',
    border: 'rgba(14,165,233,0.18)',
    tags: ['Gemini API', 'Ollama', 'Prompt Engineering'],
    highlight: true,
  },
  {
    icon: FileSearch2,
    title: 'RAG Systems',
    desc: 'Designing Retrieval-Augmented Generation pipelines with document chunking, embedding generation, vector search, and grounded LLM response synthesis.',
    accent: '#a855f7',
    bg: 'rgba(168,85,247,0.07)',
    border: 'rgba(168,85,247,0.18)',
    tags: ['Embeddings', 'Vector DBs', 'Semantic Search'],
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    desc: 'Developing intelligent conversational systems with dynamic context management, multi-turn dialogue, voice input/output, and API-driven architecture.',
    accent: '#22d3ee',
    bg: 'rgba(34,211,238,0.07)',
    border: 'rgba(34,211,238,0.18)',
    tags: ['FastAPI', 'Whisper', 'gTTS'],
  },
  {
    icon: FlaskConical,
    title: 'Machine Learning Models',
    desc: 'End-to-end ML workflows — feature engineering, training classifiers and regressors, hyperparameter tuning, and rigorous model evaluation.',
    accent: '#f97316',
    bg: 'rgba(249,115,22,0.07)',
    border: 'rgba(249,115,22,0.18)',
    tags: ['Scikit-learn', 'TensorFlow', 'Keras'],
  },
  {
    icon: BarChart3,
    title: 'Data Analytics Dashboards',
    desc: 'Crafting interactive Power BI dashboards with drill-downs, DAX measures, and automated reporting pipelines that turn raw data into business insights.',
    accent: '#10b981',
    bg: 'rgba(16,185,129,0.07)',
    border: 'rgba(16,185,129,0.18)',
    tags: ['Power BI', 'DAX', 'SQL'],
  },
  {
    icon: Plug,
    title: 'API-Based AI Systems',
    desc: 'Building robust FastAPI backends that power AI features — async request handling, structured inference pipelines, and seamless LLM API integration.',
    accent: '#ec4899',
    bg: 'rgba(236,72,153,0.07)',
    border: 'rgba(236,72,153,0.18)',
    tags: ['FastAPI', 'REST APIs', 'Python'],
  },
]

function FocusCard({ area, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const { icon: Icon, title, desc, accent, bg, border, tags, highlight } = area

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="group relative rounded-2xl p-6 cursor-default overflow-hidden"
      style={{
        background: 'rgba(7,21,56,0.5)',
        backdropFilter: 'blur(16px)',
        border: `1px solid ${highlight ? accent + '30' : 'rgba(255,255,255,0.05)'}`,
        boxShadow: highlight ? `0 0 30px ${accent}15` : 'none',
        transition: 'all 0.35s ease',
      }}
      whileHover={{
        y: -5,
        borderColor: `${accent}45`,
        boxShadow: `0 16px 48px rgba(0,0,0,0.4), 0 0 24px ${accent}20`,
      }}
    >
      {/* Background glow blob */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${accent}20 0%, transparent 70%)`,
          filter: 'blur(20px)',
        }}
      />

      {/* Number watermark */}
      <div
        className="absolute bottom-4 right-5 font-mono text-5xl font-bold pointer-events-none select-none"
        style={{
          color: `${accent}08`,
          fontFamily: 'Syne, sans-serif',
          lineHeight: 1,
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ background: bg, border: `1px solid ${border}` }}
      >
        <Icon size={22} style={{ color: accent }} />
      </div>

      {/* Title */}
      <h3
        className="text-lg font-bold mb-2.5 leading-tight"
        style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: 'var(--text-secondary)' }}
      >
        {desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {tags.map(tag => (
          <span
            key={tag}
            className="text-xs font-mono px-2.5 py-1 rounded-md"
            style={{
              background: `${accent}10`,
              border: `1px solid ${accent}22`,
              color: `${accent}bb`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hover arrow */}
      <motion.div
        className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ArrowRight size={16} style={{ color: accent }} />
      </motion.div>
    </motion.div>
  )
}

export default function AIFocus() {
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="ai-focus" className="section">
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
            <span style={{ color: 'var(--cyan)' }}>//</span> Specialisation
          </span>
          <h2 className="section-title">
            My AI / ML <span className="gradient-text">Focus Areas</span>
          </h2>
          <p className="section-subtitle">
            Six domains where I invest my deepest learning and build the most
            impactful systems.
          </p>
        </motion.div>

        {/* ── Focus grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {focusAreas.map((area, i) => (
            <FocusCard key={area.title} area={area} index={i} />
          ))}
        </div>

        {/* ── Central philosophy banner ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(168,85,247,0.08) 50%, rgba(34,211,238,0.05) 100%)',
            border: '1px solid rgba(14,165,233,0.15)',
            padding: '48px 40px',
          }}
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(14,165,233,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.06) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Corner glows */}
          <div
            className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at top left, rgba(14,165,233,0.12), transparent 60%)',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at bottom right, rgba(168,85,247,0.12), transparent 60%)',
            }}
          />

          <div className="relative text-center max-w-2xl mx-auto">
            {/* Icon cluster */}
            <div className="flex items-center justify-center gap-3 mb-5">
              {[BrainCircuit, FileSearch2, Bot, FlaskConical].map((Icon, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: [
                      'rgba(14,165,233,0.1)',
                      'rgba(168,85,247,0.1)',
                      'rgba(34,211,238,0.1)',
                      'rgba(249,115,22,0.1)',
                    ][i],
                    border: `1px solid ${['rgba(14,165,233,0.2)', 'rgba(168,85,247,0.2)', 'rgba(34,211,238,0.2)', 'rgba(249,115,22,0.2)'][i]}`,
                  }}
                >
                  <Icon
                    size={18}
                    style={{ color: ['#0ea5e9', '#a855f7', '#22d3ee', '#f97316'][i] }}
                  />
                </motion.div>
              ))}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: 'rgba(14,165,233,0.08)',
                  border: '1px solid rgba(14,165,233,0.15)',
                }}
              >
                <Sparkles size={16} style={{ color: 'var(--cyan)' }} />
              </div>
            </div>

            <h3
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Building AI that{' '}
              <span className="gradient-text">thinks, retrieves &amp; responds</span>
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              My goal is to bridge the gap between powerful AI research and
              practical, deployable systems — whether that's a chatbot that actually
              understands context, a RAG pipeline that retrieves the right information,
              or an ML model that generalises well to real data.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
