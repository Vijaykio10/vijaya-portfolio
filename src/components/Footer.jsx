import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp, Cpu, Heart } from 'lucide-react'

const footerLinks = {
  Navigation: [
    { label: 'About',      href: '#about' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects',   href: '#projects' },
    { label: 'AI Focus',   href: '#ai-focus' },
    { label: 'Education',  href: '#education' },
    { label: 'Contact',    href: '#contact' },
  ],
  Focus: [
    { label: 'LLM Applications',  href: '#ai-focus' },
    { label: 'RAG Systems',        href: '#ai-focus' },
    { label: 'AI Chatbots',        href: '#ai-focus' },
    { label: 'Machine Learning',   href: '#ai-focus' },
    { label: 'Data Analytics',     href: '#ai-focus' },
    { label: 'FastAPI Backends',   href: '#ai-focus' },
  ],
}

const socials = [
  { icon: Github,   href: 'https://github.com/Vijaykio10',   label: 'GitHub',   color: '#a855f7' },
  { icon: Linkedin, href: 'https://linkedin.com/in/vijayaragunath', label: 'LinkedIn', color: '#0ea5e9' },
  { icon: Mail,     href: 'mailto:vijayragunath2003@gmail.com', label: 'Email', color: '#22d3ee' },
]

const scrollTo = (href) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'rgba(2,8,24,0.95)',
        borderTop: '1px solid rgba(14,165,233,0.1)',
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.4), rgba(168,85,247,0.4), transparent)',
        }}
      />

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: '500px', height: '500px',
            bottom: '-200px', left: '-100px',
            background: 'radial-gradient(circle, rgba(14,165,233,0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute rounded-full opacity-8"
          style={{
            width: '400px', height: '400px',
            bottom: '-150px', right: '-100px',
            background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="container-max relative">

        {/* ── Main footer grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-14">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--blue), var(--violet))',
                  boxShadow: '0 0 16px rgba(14,165,233,0.4)',
                }}
              >
                <Cpu size={18} color="white" />
              </div>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.1rem' }}>
                <span className="gradient-text">Vijaya Ragunath</span>
                <span style={{ color: 'var(--text-muted)' }}> S</span>
              </span>
            </div>

            <p
              className="text-sm leading-relaxed mb-5 max-w-xs"
              style={{ color: 'var(--text-secondary)' }}
            >
              AI/ML Engineer building intelligent systems with LLMs, RAG pipelines,
              and real-world machine learning. M.Sc. Applied Data Science · SRM Institute.
            </p>

            {/* Role tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['AI/ML Engineer', 'LLM Developer', 'Data Analyst'].map(tag => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-md"
                  style={{
                    background: 'rgba(14,165,233,0.07)',
                    border: '1px solid rgba(14,165,233,0.15)',
                    color: 'var(--cyan)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200"
                  style={{
                    background: `${color}10`,
                    border: `1px solid ${color}25`,
                    color,
                  }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav + Focus columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p
                className="text-xs font-mono mb-4"
                style={{
                  color: 'var(--cyan)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {title}
              </p>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm transition-all duration-200 hover:translate-x-1 text-left"
                      style={{
                        color: 'var(--text-muted)',
                        fontFamily: 'DM Sans, sans-serif',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                      onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
                      onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div
          className="w-full h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.15), rgba(168,85,247,0.15), transparent)',
          }}
        />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">

          <p
            className="text-xs text-center sm:text-left"
            style={{ color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}
          >
            © {new Date().getFullYear()} Vijaya Ragunath S. Built with{' '}
            <Heart
              size={11}
              style={{ display: 'inline', color: '#ec4899', verticalAlign: 'middle' }}
            />{' '}
            using React, Tailwind CSS &amp; Framer Motion.
          </p>

          <div className="flex items-center gap-4">
            <span
              className="text-xs font-mono hidden sm:block"
              style={{ color: 'var(--text-muted)' }}
            >
              Chennai, India · Open to Remote
            </span>

            {/* Back to top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
              className="w-9 h-9 flex items-center justify-center rounded-lg"
              style={{
                background: 'rgba(14,165,233,0.08)',
                border: '1px solid rgba(14,165,233,0.2)',
                color: 'var(--cyan)',
                cursor: 'pointer',
              }}
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  )
}
