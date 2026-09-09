import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Brain, Code2, BarChart3, Wrench,
  Network, FlaskConical, GitBranch, Layers,
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
    category: 'Generative AI & LLMs',
    icon: Brain,
    accent: '#0ea5e9',
    bg: 'rgba(14,165,233,0.06)',
    border: 'rgba(14,165,233,0.15)',
    skills: [
      'LLM Applications', 'RAG', 'Prompt Engineering', 'LangChain',
      'Gemini API', 'Ollama', 'Embeddings', 'Vector Databases',
      'Semantic Search', 'AI Agents',
    ],
  },
  {
    category: 'Machine Learning & Deep Learning',
    icon: FlaskConical,
    accent: '#a855f7',
    bg: 'rgba(168,85,247,0.06)',
    border: 'rgba(168,85,247,0.15)',
    skills: [
      'Classification', 'Regression', 'Ensemble Learning', 'Clustering',
      'Feature Engineering', 'Model Evaluation', 'ANN', 'CNN', 'RNN', 'LSTM',
    ],
  },
  {
    category: 'Python & Data Science',
    icon: Code2,
    accent: '#22d3ee',
    bg: 'rgba(34,211,238,0.06)',
    border: 'rgba(34,211,238,0.15)',
    skills: [
      'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow',
      'Keras', 'OpenCV', 'Plotly',
    ],
  },
  {
    category: 'AI Applications & APIs',
    icon: Network,
    accent: '#f97316',
    bg: 'rgba(249,115,22,0.06)',
    border: 'rgba(249,115,22,0.15)',
    skills: [
      'FastAPI', 'Streamlit', 'REST APIs', 'Whisper',
      'Speech AI', 'API Integration', 'React', 'Vite',
    ],
  },
  {
    category: 'Data & Analytics',
    icon: BarChart3,
    accent: '#10b981',
    bg: 'rgba(16,185,129,0.06)',
    border: 'rgba(16,185,129,0.15)',
    skills: [
      'SQL', 'Power BI', 'Excel', 'DAX', 'Data Cleaning',
      'Data Modelling', 'Dashboard Design', 'Reporting Automation',
    ],
  },
  {
    category: 'Tools & Engineering',
    icon: GitBranch,
    accent: '#ec4899',
    bg: 'rgba(236,72,153,0.06)',
    border: 'rgba(236,72,153,0.15)',
    skills: [
      'Git', 'GitHub', 'SQLite', 'ChromaDB', 'VS Code',
      'Jupyter Notebook', 'Google Colab',
    ],
  },
]

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
        <div
          className="ml-auto h-0.5 w-10 rounded-full opacity-40"
          style={{ background: accent }}
        />
      </div>

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

const coreSkills = [
  { name: 'Python & Data Science', level: 90, color: '#0ea5e9' },
  { name: 'Machine Learning', level: 85, color: '#a855f7' },
  { name: 'LLMs & RAG', level: 80, color: '#22d3ee' },
  { name: 'SQL & Analytics', level: 82, color: '#10b981' },
  { name: 'AI Application Development', level: 78, color: '#f97316' },
  { name: 'Deep Learning', level: 75, color: '#ec4899' },
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
            A focused AI/ML toolkit covering machine learning, generative AI, data, APIs, and intelligent applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {skillGroups.map((group, i) => (
              <SkillGroup key={group.category} {...group} groupIndex={i} />
            ))}
          </div>

          <div className="lg:col-span-1">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="glass-card p-6 sticky top-24"
            >
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

              <div
                className="mt-6 pt-4 text-xs leading-relaxed font-mono"
                style={{
                  color: 'var(--text-muted)',
                  borderTop: '1px solid rgba(14,165,233,0.08)',
                }}
              >
                <span style={{ color: 'var(--cyan)' }}>// </span>
                Currently deepening skills in agentic AI workflows, advanced RAG, and production-oriented AI systems.
              </div>
            </motion.div>
          </div>
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
                AI/ML Engineering Toolkit
              </p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                From data preparation and model development to LLM applications and AI product prototypes
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            {['Python', 'Scikit-learn', 'LLMs', 'RAG', 'FastAPI'].map(tag => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
