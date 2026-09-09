import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  BrainCircuit, BarChart3, CheckCircle2,
  Calendar, MapPin, Building2, ExternalLink,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const experiences = [
  {
    role: 'AI / ML Intern',
    company: 'VDart',
    location: 'Chennai, India',
    period: 'Nov 2025 – Present',
    type: 'Current',
    icon: BrainCircuit,
    accent: '#0ea5e9',
    accentBg: 'rgba(14,165,233,0.08)',
    accentBorder: 'rgba(14,165,233,0.2)',
    summary:
      'Working on applied AI/ML solutions across LLM applications, computer vision prototypes, speech AI, and data-driven automation — turning business requirements into usable AI systems.',
    achievements: [
      'Built and iterated on end-to-end AI/ML prototypes spanning ingestion, analysis, model/API integration, storage, and user-facing interfaces.',
      'Developed LLM-powered applications using Gemini API, Ollama, LangChain, RAG, embeddings, and vector databases.',
      'Built FitNova, a sales-call intelligence pipeline for conversation classification, rubric-based analysis, structured outputs, and SQLite-backed reporting.',
      'Contributed to Pennar Pulse, a workforce attendance prototype with webcam-based recognition flows, employee management, attendance, reporting, and operational modules.',
      'Developed voice-based AI applications using Whisper, local LLM inference, text-to-speech, and Streamlit interfaces.',
      'Worked with FastAPI, Streamlit, React/Vite, SQLite, and Git/GitHub to turn AI concepts into demonstrable applications.',
    ],
    tags: ['Python', 'LLMs', 'RAG', 'LangChain', 'Gemini', 'Ollama', 'Whisper', 'FastAPI', 'Streamlit', 'React'],
  },
  {
    role: 'Data Analyst Intern',
    company: 'VDart',
    location: 'Chennai, India',
    period: 'May 2025 – Jun 2025',
    type: 'Internship',
    icon: BarChart3,
    accent: '#a855f7',
    accentBg: 'rgba(168,85,247,0.08)',
    accentBorder: 'rgba(168,85,247,0.2)',
    summary:
      'Worked on data analysis and business intelligence workflows, using SQL, Excel, and Power BI to transform operational data into reports and dashboards.',
    achievements: [
      'Cleaned and transformed datasets using SQL queries and Excel-based data preparation workflows.',
      'Built interactive Power BI dashboards for KPI monitoring, filtering, and business reporting.',
      'Used DAX measures and calculated metrics to support analytical reporting and dashboard insights.',
      'Worked with stakeholders to understand reporting requirements and translate them into usable visualizations.',
    ],
    tags: ['SQL', 'Power BI', 'Excel', 'DAX', 'Data Cleaning', 'Data Visualisation'],
  },
]

function AchievementItem({ text, accent, index }) {
  return (
    <motion.li
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      className="flex items-start gap-3 text-sm leading-relaxed"
      style={{ color: 'var(--text-secondary)' }}
    >
      <CheckCircle2
        size={15}
        className="flex-shrink-0 mt-0.5"
        style={{ color: accent }}
      />
      <span>{text}</span>
    </motion.li>
  )
}

function ExperienceCard({ exp, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { role, company, location, period, type, icon: Icon,
          accent, accentBg, accentBorder, summary, achievements, tags } = exp

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="relative pl-10 md:pl-14"
    >
      <div
        className="absolute left-0 top-6 w-4 h-4 rounded-full border-2 z-10"
        style={{
          background: accent,
          borderColor: 'var(--bg-primary)',
          boxShadow: `0 0 14px ${accent}88`,
        }}
      />

      {index < experiences.length - 1 && (
        <div
          className="absolute left-[7px] top-10 w-0.5 h-full"
          style={{
            background: `linear-gradient(180deg, ${accent}60, rgba(168,85,247,0.3), transparent)`,
          }}
        />
      )}

      <div className="glass-card p-6 md:p-8 mb-10 group">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
              style={{ background: accentBg, border: `1px solid ${accentBorder}` }}
            >
              <Icon size={22} style={{ color: accent }} />
            </div>

            <div>
              <h3
                className="text-xl font-bold leading-tight mb-1"
                style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
              >
                {role}
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: accent }}>
                  <Building2 size={13} />
                  {company}
                </div>
                <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                  <MapPin size={11} />
                  {location}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: accentBg,
                border: `1px solid ${accentBorder}`,
                color: accent,
                fontFamily: 'Syne, sans-serif',
              }}
            >
              {type}
            </div>
            <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
              <Calendar size={11} />
              <span className="font-mono">{period}</span>
            </div>
          </div>
        </div>

        <div
          className="w-full h-px mb-5"
          style={{ background: `linear-gradient(90deg, ${accent}30, transparent)` }}
        />

        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
          {summary}
        </p>

        <div className="mb-5">
          <p
            className="text-xs font-mono mb-3"
            style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}
          >
            KEY CONTRIBUTIONS
          </p>
          <ul className="space-y-2.5">
            {achievements.map((a, i) => (
              <AchievementItem key={i} text={a} accent={accent} index={i} />
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          {tags.map(tag => (
            <span
              key={tag}
              className="tech-tag"
              style={{
                background: `${accent}0d`,
                borderColor: `${accent}28`,
                color: `${accent}cc`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="section">
      <div className="container-max">
        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <span className="section-tag">
            <span style={{ color: 'var(--cyan)' }}>//</span> Work History
          </span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Applied AI/ML and data analytics experience at VDart, with a focus on building practical systems from business requirements.
          </p>
        </motion.div>

        <div className="relative max-w-3xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex items-center gap-3 mb-8 pl-10 md:pl-14"
          >
            <span
              className="text-xs font-mono px-3 py-1 rounded-full"
              style={{
                background: 'rgba(14,165,233,0.08)',
                border: '1px solid rgba(14,165,233,0.15)',
                color: 'var(--cyan)',
                letterSpacing: '0.1em',
              }}
            >
              PRESENT ↓ PAST
            </span>
          </motion.div>

          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.role} exp={exp} index={i} />
          ))}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3 pl-10 md:pl-14"
          >
            <div
              className="w-4 h-4 rounded-full border-2"
              style={{
                borderColor: 'rgba(14,165,233,0.3)',
                background: 'var(--bg-primary)',
              }}
            />
            <span
              className="text-xs font-mono"
              style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}
            >
              M.Sc. Applied Data Science · SRM IST Trichy
            </span>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 gradient-border-card p-6 flex flex-col sm:flex-row items-center justify-between gap-5 max-w-3xl"
        >
          <div>
            <p
              className="text-base font-semibold mb-1"
              style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
            >
              Want the full picture?
            </p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Download my resume for a complete overview of experience, education, and projects.
            </p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="btn-primary flex-shrink-0"
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Download Resume
              <ExternalLink size={15} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
