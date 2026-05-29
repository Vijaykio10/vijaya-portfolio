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
    period: '2024',
    type: 'Internship',
    icon: BrainCircuit,
    accent: '#0ea5e9',
    accentBg: 'rgba(14,165,233,0.08)',
    accentBorder: 'rgba(14,165,233,0.2)',
    summary:
      'Designed and deployed end-to-end ML pipelines and LLM-powered applications, working across the full AI stack from data preprocessing to production-ready APIs.',
    achievements: [
      'Built complete ML workflows covering preprocessing, feature engineering, model training, and evaluation.',
      'Developed an LLM-powered chatbot using FastAPI and Gemini API with robust API request handling.',
      'Integrated Ollama for local LLM inference, enabling cloud-independent AI deployment.',
      'Applied ANN, CNN, and RNN architectures for deep learning experiments.',
      'Practised advanced prompt engineering to significantly improve AI response quality and relevance.',
      'Improved backend API request handling and response latency for production chatbot applications.',
    ],
    tags: ['FastAPI', 'Gemini API', 'Ollama', 'ANN', 'CNN', 'RNN', 'Prompt Engineering', 'Python'],
  },
  {
    role: 'Data Analyst Intern',
    company: 'VDart',
    location: 'Chennai, India',
    period: '2023 – 2024',
    type: 'Internship',
    icon: BarChart3,
    accent: '#a855f7',
    accentBg: 'rgba(168,85,247,0.08)',
    accentBorder: 'rgba(168,85,247,0.2)',
    summary:
      'Delivered business intelligence solutions through interactive Power BI dashboards, clean data pipelines, and automated reporting — translating raw data into actionable insights.',
    achievements: [
      'Designed and deployed interactive Power BI dashboards with dynamic filters and drill-down capabilities.',
      'Cleaned, transformed, and modelled datasets using SQL queries and Excel functions.',
      'Created advanced DAX measures using CALCULATE, RANKX, and ALL for complex KPI calculations.',
      'Automated recurring reporting workflows, reducing manual effort by several hours per cycle.',
      'Collaborated with business stakeholders to gather requirements and iterate on dashboard designs.',
    ],
    tags: ['Power BI', 'SQL', 'Excel', 'DAX', 'CALCULATE', 'RANKX', 'Data Modelling'],
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
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-6 w-4 h-4 rounded-full border-2 z-10"
        style={{
          background: accent,
          borderColor: 'var(--bg-primary)',
          boxShadow: `0 0 14px ${accent}88`,
        }}
      />

      {/* Connector line to next card */}
      {index < experiences.length - 1 && (
        <div
          className="absolute left-[7px] top-10 w-0.5 h-full"
          style={{
            background: `linear-gradient(180deg, ${accent}60, rgba(168,85,247,0.3), transparent)`,
          }}
        />
      )}

      {/* Card */}
      <div className="glass-card p-6 md:p-8 mb-10 group">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
              style={{ background: accentBg, border: `1px solid ${accentBorder}` }}
            >
              <Icon size={22} style={{ color: accent }} />
            </div>

            {/* Role & company */}
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

          {/* Period + type badge */}
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

        {/* Divider */}
        <div
          className="w-full h-px mb-5"
          style={{ background: `linear-gradient(90deg, ${accent}30, transparent)` }}
        />

        {/* Summary */}
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
          {summary}
        </p>

        {/* Achievements */}
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

        {/* Tags */}
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

        {/* ── Header ── */}
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
            Hands-on internship experience spanning AI/ML engineering and data analytics — both at VDart.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative max-w-3xl">

          {/* Top timeline label */}
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

          {/* Experience cards */}
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.role} exp={exp} index={i} />
          ))}

          {/* Timeline end marker */}
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
              B.Sc. Computer Science · SRM Trichy · 2020–2023
            </span>
          </motion.div>
        </div>

        {/* ── Bottom CTA ── */}
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
              Download my resume for a complete overview of experience, education, and skills.
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
