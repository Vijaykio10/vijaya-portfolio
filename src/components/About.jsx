import { motion, useInView } from 'framer-motion'
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

const highlights = [
  {
    icon: BrainCircuit,
    title: 'Applied AI / ML',
    text: 'Building practical machine learning and deep learning solutions for real business use cases.',
    accent: '#0ea5e9',
  },
  {
    icon: Layers,
    title: 'GenAI & RAG',
    text: 'Developing LLM applications with RAG, embeddings, vector databases, LangChain, and model APIs.',
    accent: '#a855f7',
  },
  {
    icon: BarChart3,
    title: 'Data to Product',
    text: 'Combining data analysis, APIs, interfaces, and AI workflows to turn ideas into usable prototypes.',
    accent: '#22d3ee',
  },
  {
    icon: Rocket,
    title: 'Continuous Builder',
    text: 'Learning by shipping projects across computer vision, speech AI, LLMs, and business automation.',
    accent: '#ec4899',
  },
]

const facts = [
  { icon: MapPin, label: 'Based in', value: 'Tamil Nadu, India' },
  { icon: GraduationCap, label: 'Education', value: 'M.Sc. Applied Data Science' },
  { icon: Briefcase, label: 'Current role', value: 'AI / ML Intern · VDart' },
]

export default function About() {
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true, margin: '-60px' })

  return (
    <section id="about" className="section">
      <div className="container-max">
        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <span className="section-tag">
            <span style={{ color: 'var(--cyan)' }}>//</span> About Me
          </span>
          <h2 className="section-title">
            Building <span className="gradient-text">Practical AI</span>
          </h2>
          <p className="section-subtitle">
            An early-career AI/ML engineer focused on turning machine learning and generative AI concepts into useful software.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-2 glass-card p-7 md:p-9"
          >
            <p className="text-lg leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
              I’m an <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>M.Sc. Applied Data Science</span> graduate and AI/ML intern at VDart, with hands-on experience building AI applications rather than only experimenting with models in notebooks.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
              My work spans <span style={{ color: 'var(--cyan)' }}>machine learning, deep learning, LLM applications, RAG pipelines, computer vision, speech AI, and data analytics</span>. I enjoy connecting these pieces into complete workflows — from data ingestion and model/API integration to storage, dashboards, and user-facing applications.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Recent projects include a sales-call intelligence pipeline, a workforce attendance and face-recognition prototype, and a voice-based AI English coach. I’m currently looking for opportunities where I can contribute to applied AI/ML engineering while continuing to grow toward production-grade systems.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="glass-card p-7"
          >
            <p className="text-xs font-mono mb-5" style={{ color: 'var(--cyan)', letterSpacing: '0.12em' }}>
              QUICK FACTS
            </p>
            <div className="space-y-5">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(14,165,233,0.07)',
                      border: '1px solid rgba(14,165,233,0.12)',
                    }}
                  >
                    <Icon size={16} style={{ color: 'var(--cyan)' }} />
                  </div>
                  <div>
                    <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{label}</p>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map(({ icon: Icon, title, text, accent }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -4 }}
              className="glass-card p-6"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${accent}10`,
                  border: `1px solid ${accent}25`,
                }}
              >
                <Icon size={19} style={{ color: accent }} />
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
