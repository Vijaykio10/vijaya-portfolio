import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Brain, Code2, Database, BarChart3, Wrench,
  Network, FlaskConical, GitBranch, Layers
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
}

const skillGroups = [
  {
    category: 'AI & LLM Engineering',
    icon: Brain,
    accent: '#0ea5e9',
    bg: 'rgba(14,165,233,0.06)',
    border: 'rgba(14,165,233,0.15)',
    skills: [
      'Large Language Models', 'RAG Systems', 'Prompt Engineering',
      'Gemini API', 'Ollama', 'Embeddings', 'Vector Databases',
      'AI Chatbot Development', 'Semantic Search',
    ],
  },
  {
    category: 'Machine Learning',
    icon: FlaskConical,
    accent: '#a855f7',
    bg: 'rgba(168,85,247,0.06)',
    border: 'rgba(168,85,247,0.15)',
    skills: [
      'Regression', 'Classification', 'Random Forest',
      'Gradient Boosting', 'Hyperparameter Tuning',
      'Model Evaluation', 'Feature Engineering',
      'ANN', 'CNN', 'RNN', 'LSTM',
    ],
  },
  {
    category: 'Python & ML Libraries',
    icon: Code2,
    accent: '#22d3ee',
    bg: 'rgba(34,211,238,0.06)',
    border: 'rgba(34,211,238,0.15)',
    skills: [
      'Python', 'Scikit-learn', 'TensorFlow', 'Keras',
      'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly',
    ],
  },
  {
    category: 'Backend & APIs',
    icon: Network,
    accent: '#f97316',
    bg: 'rgba(249,115,22,0.06)',
    border: 'rgba(249,115,22,0.15)',
    skills: [
      'FastAPI', 'REST APIs', 'Streamlit',
      'API Integration', 'Backend Architecture',
    ],
  },
  {
    category: 'Data & Analytics',
    icon: BarChart3,
    accent: '#10b981',
    bg: 'rgba(16,185,129,0.06)',
    border: 'rgba(16,185,129,0.15)',
    skills: [
      'SQL', 'Power BI', 'Excel', 'DAX',
      'CALCULATE', 'RANKX', 'Dashboard Design',
      'Data Cleaning', 'Reporting Automation',
    ],
  },
  {
    category: 'Tools & Workflow',
    icon: GitBranch,
    accent: '#ec4899',
    bg: 'rgba(236,72,153,0.06)',
    border: 'rgba(236,72,153,0.15)',
    skills: [
      'Git', 'GitHub', 'VS Code',
      'Jupyter Notebook', 'Google Colab',
    ],
  },
]

/* ── Individual animated skill badge ── */
function SkillBadge({ name, accent, index }) {
  return (
    <motion.span
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ scale: 1.06, y: -2 }}
      className="skill-badge cursor-default"
      style={{
        '--badge-accent': accent,
        borderColor: `${accent}20`,
        color: `${accent}cc`,
      }}
    >
      {name}
    </motion.span>
  )
}

/* ── Skill group card ── */
function SkillGroup({ category, icon: Icon, accent, bg, border, skills, groupIndex }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      custom={groupIndex}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="glass-card p-6 group"
    >
      {/* Card header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
          style={{ background: bg, border: `1px solid ${border}` }}
        >
          <Icon size={18} style={{ color: accent }} />
        </div>
        <div>
          <h3
            className="text-sm font-semibold leading-tight"
            style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
          >
            {category}
          </h3>
          <p className="text-xs font-mono mt-0.5" style={{ color: 'var(--text-muted)' }}>
            {skills.length} skills
          </p>
        </div>
        {/* Accent line */}
        <div
          className="ml-auto h-0.5 w-10 rounded-full opacity-40"
          style={{ background: accent }}
        />
      </div>

      {/* Skill badges */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <SkillBadge
            key={skill}
            name={skill}
            accent={accent}
            index={i * 0.04 + groupIndex * 0.05}
          />
        ))}
      </div>
    </motion.div>
  )
}

/* ── Proficiency bar (core skills spotlight) ── */
const coreSkills = [
  { name: 'Python',           level: 90, color: '#0ea5e9' },
  { name: 'Machine Learning', level: 85, color: '#a855f7' },
  { name: 'LLMs & RAG',       level: 80, color: '#22d3ee' },
  { name: 'FastAPI',          level: 78, color: '#f97316' },
  { name: 'Power BI & SQL',   level: 82, color: '#10b981' },
  { name: 'Deep Learning',    level: 75, color: '#ec4899' },
]

function ProficiencyBar({ name, level, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)', fontFamily: 'DM Sans, sans-serif' }}>
          {name}
        </span>
        <span className="font-mono text-xs" style={{ color }}>
          {level}%
        </span>
      </div>
      <div
        className="w-full h-1.5 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}99, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="skills" className="section" style={{ background: 'rgba(4,15,42,0.4)' }}>
      <div className="container-max">

        {/* ── Header ── */}
        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <span className="section-tag">
            <span style={{ color: 'var(--cyan)' }}>//</span> Technical Stack
          </span>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A full-stack AI/ML toolkit — from raw data to deployed intelligent systems.
          </p>
        </motion.div>

        {/* ── Main layout ── */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">

          {/* Skill groups — left 2 cols */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {skillGroups.map((group, i) => (
              <SkillGroup key={group.category} {...group} groupIndex={i} />
            ))}
          </div>

          {/* Proficiency panel — right col */}
          <div className="lg:col-span-1">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="glass-card p-6 sticky top-24"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'rgba(14,165,233,0.08)',
                    border: '1px solid rgba(14,165,233,0.15)',
                  }}
                >
                  <Layers size={18} style={{ color: 'var(--cyan)' }} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold" style={{ fontFamily: 'Syne, sans-serif' }}>
                    Core Proficiency
                  </h3>
                  <p className="text-xs font-mono mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    self-assessed
                  </p>
                </div>
              </div>

              {coreSkills.map((s, i) => (
                <ProficiencyBar key={s.name} {...s} index={i} />
              ))}

              {/* Footer note */}
              <div
                className="mt-6 pt-4 text-xs leading-relaxed font-mono"
                style={{
                  color: 'var(--text-muted)',
                  borderTop: '1px solid rgba(14,165,233,0.08)',
                }}
              >
                <span style={{ color: 'var(--cyan)' }}>// </span>
                Continuously learning — currently exploring agentic AI workflows and advanced RAG techniques.
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Bottom: total skill count banner ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="gradient-border-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(168,85,247,0.15))',
                border: '1px solid rgba(14,165,233,0.2)',
              }}
            >
              <Wrench size={20} style={{ color: 'var(--cyan)' }} />
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}>
                30+ Technologies &amp; Tools
              </p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                Across AI/ML, data engineering, backend dev, and analytics
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            {['Python', 'LLMs', 'RAG', 'FastAPI', 'Power BI'].map(tag => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
