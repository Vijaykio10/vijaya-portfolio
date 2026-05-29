import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  GraduationCap, Award, BookOpen,
  Calendar, MapPin, ExternalLink, CheckCircle2,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: 'easeOut' },
  }),
}

const education = [
  {
    degree: 'M.Sc. Applied Data Science',
    institution: 'SRM Institute of Science and Technology',
    location: 'Chennai, India',
    period: '2024 – 2026',
    status: 'Ongoing',
    accent: '#0ea5e9',
    accentBg: 'rgba(14,165,233,0.08)',
    accentBorder: 'rgba(14,165,233,0.2)',
    icon: GraduationCap,
    highlights: [
      'Specialising in Machine Learning, Deep Learning, and AI Systems',
      'Hands-on projects in LLMs, RAG pipelines, and data engineering',
      'Applied coursework in Statistics, NLP, and Data Visualisation',
      'Industry internships alongside academic study',
    ],
  },
  {
    degree: 'B.Sc. Computer Science',
    institution: 'SRM Trichy Arts and Science College',
    location: 'Trichy, India',
    period: '2020 – 2023',
    status: 'Completed',
    accent: '#a855f7',
    accentBg: 'rgba(168,85,247,0.08)',
    accentBorder: 'rgba(168,85,247,0.2)',
    icon: BookOpen,
    highlights: [
      'Core foundation in programming, data structures, and algorithms',
      'Introduced to database management, OS, and networking concepts',
      'Developed analytical and problem-solving skills across 3 years',
    ],
  },
]

const certifications = [
  {
    title: 'Python for Machine Learning',
    issuer: 'LinkedIn Learning',
    icon: '🐍',
    accent: '#0ea5e9',
    bg: 'rgba(14,165,233,0.07)',
    border: 'rgba(14,165,233,0.18)',
    link: 'https://linkedin.com/',
    skills: ['Python', 'Scikit-learn', 'Data Preprocessing'],
  },
  {
    title: 'Applied Machine Learning',
    issuer: 'LinkedIn Learning',
    icon: '🤖',
    accent: '#a855f7',
    bg: 'rgba(168,85,247,0.07)',
    border: 'rgba(168,85,247,0.18)',
    link: 'https://linkedin.com/',
    skills: ['ML Algorithms', 'Model Evaluation', 'Feature Engineering'],
  },
  {
    title: 'Microsoft PL-300',
    issuer: 'Microsoft · Power BI Data Analyst',
    icon: '📊',
    accent: '#22d3ee',
    bg: 'rgba(34,211,238,0.07)',
    border: 'rgba(34,211,238,0.18)',
    link: 'https://learn.microsoft.com/',
    skills: ['Power BI', 'DAX', 'Data Modelling', 'Reporting'],
  },
]

function EducationCard({ edu, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const {
    degree, institution, location, period,
    status, accent, accentBg, accentBorder, icon: Icon, highlights,
  } = edu

  const isOngoing = status === 'Ongoing'

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
        className="absolute left-0 top-7 w-4 h-4 rounded-full border-2 z-10"
        style={{
          background: accent,
          borderColor: 'var(--bg-primary)',
          boxShadow: `0 0 14px ${accent}88`,
        }}
      />

      {index < education.length - 1 && (
        <div
          className="absolute left-[7px] top-11 w-0.5"
          style={{
            height: 'calc(100% + 10px)',
            background: `linear-gradient(180deg, ${accent}50, rgba(168,85,247,0.2), transparent)`,
          }}
        />
      )}

      <div className="glass-card p-6 md:p-8 mb-8 group">
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
                className="text-lg font-bold leading-tight mb-1"
                style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
              >
                {degree}
              </h3>
              <p className="text-sm font-medium" style={{ color: accent }}>
                {institution}
              </p>
              <div className="flex items-center gap-1.5 mt-1 text-xs" style={{ color: 'var(--text-muted)' }}>
                <MapPin size={11} />
                {location}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
            <span
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{
                background: isOngoing ? 'rgba(34,197,94,0.1)' : accentBg,
                border: `1px solid ${isOngoing ? 'rgba(34,197,94,0.25)' : accentBorder}`,
                color: isOngoing ? '#22c55e' : accent,
                fontFamily: 'Syne, sans-serif',
              }}
            >
              {isOngoing && (
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#22c55e', boxShadow: '0 0 6px #22c55e' }}
                />
              )}
              {status}
            </span>
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

        <ul className="space-y-2">
          {highlights.map((h, i) => (
            <motion.li
              key={i}
              custom={i * 0.07 + index * 0.1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-start gap-2.5 text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: accent }} />
              {h}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function CertCard({ cert, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const { title, issuer, icon, accent, bg, border, link, skills } = cert

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="group relative rounded-2xl p-5 overflow-hidden"
      style={{
        background: 'rgba(7,21,56,0.5)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.05)',
        transition: 'all 0.35s ease',
      }}
      whileHover={{
        y: -4,
        borderColor: `${accent}40`,
        boxShadow: `0 12px 40px rgba(0,0,0,0.4), 0 0 20px ${accent}18`,
      }}
    >
      <div
        className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at top right, ${accent}20, transparent 70%)`,
        }}
      />

      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-all duration-300 group-hover:scale-110"
            style={{ background: bg, border: `1px solid ${border}` }}
          >
            {icon}
          </div>
          <div>
            <h4
              className="text-sm font-bold leading-tight"
              style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
            >
              {title}
            </h4>
            <p className="text-xs mt-0.5" style={{ color: accent, opacity: 0.85 }}>
              {issuer}
            </p>
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
          style={{ background: bg, border: `1px solid ${border}`, color: accent }}
          aria-label="View certificate"
        >
          <ExternalLink size={13} />
        </a>
      </div>

      <div
        className="w-full h-px mb-4"
        style={{ background: `linear-gradient(90deg, ${accent}25, transparent)` }}
      />

      <div className="flex items-center gap-1.5 mb-3">
        <Award size={12} style={{ color: accent }} />
        <span className="text-xs font-mono" style={{ color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
          VERIFIED CREDENTIAL
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {skills.map(s => (
          <span
            key={s}
            className="text-xs font-mono px-2 py-0.5 rounded-md"
            style={{
              background: `${accent}0d`,
              border: `1px solid ${accent}20`,
              color: `${accent}aa`,
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Education() {
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="education" className="section" style={{ background: 'rgba(4,15,42,0.4)' }}>
      <div className="container-max">

        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <span className="section-tag">
            <span style={{ color: 'var(--cyan)' }}>//</span> Background
          </span>
          <h2 className="section-title">
            Education &amp; <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Academic foundations in data science and computer science, validated
            by industry-recognised credentials.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-xs font-mono mb-8 flex items-center gap-2"
              style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}
            >
              <GraduationCap size={13} style={{ color: 'var(--cyan)' }} />
              ACADEMIC JOURNEY
            </motion.p>

            <div className="relative">
              {education.map((edu, i) => (
                <EducationCard key={edu.degree} edu={edu} index={i} />
              ))}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="pl-10 md:pl-14 flex items-center gap-3"
              >
                <div
                  className="absolute left-0 w-4 h-4 rounded-full border-2"
                  style={{
                    borderColor: 'rgba(14,165,233,0.3)',
                    background: 'var(--bg-primary)',
                  }}
                />
                <span className="font-mono text-xs ml-3" style={{ color: 'var(--text-muted)' }}>
                  // Academic journey continues →
                </span>
              </motion.div>
            </div>
          </div>

          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-xs font-mono mb-8 flex items-center gap-2"
              style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}
            >
              <Award size={13} style={{ color: 'var(--cyan)' }} />
              VERIFIED CERTIFICATIONS
            </motion.p>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <CertCard key={cert.title} cert={cert} index={i} />
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-6 p-5 rounded-xl"
              style={{
                background: 'rgba(14,165,233,0.04)',
                border: '1px solid rgba(14,165,233,0.1)',
              }}
            >
              <p className="text-sm leading-relaxed font-mono" style={{ color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--cyan)' }}>// </span>
                Always learning — currently exploring agentic AI frameworks,
                advanced RAG architectures, and LLM fine-tuning techniques.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
