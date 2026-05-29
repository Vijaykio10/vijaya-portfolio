import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Cpu } from 'lucide-react'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'AI Focus',   href: '#ai-focus' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [activeSection, setActive]  = useState('')

  /* ── scroll + active-section detection ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(2,8,24,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(14,165,233,0.1)'
            : '1px solid transparent',
        }}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-20">

            {/* ── Logo ── */}
            <motion.a
              href="#"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--blue), var(--violet))',
                  boxShadow: '0 0 16px rgba(14,165,233,0.4)',
                }}
              >
                <Cpu size={18} color="white" />
              </div>
              <span
                className="font-display font-800 text-lg tracking-tight"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
              >
                <span className="gradient-text">VR</span>
                <span style={{ color: 'var(--text-secondary)' }}>.ai</span>
              </span>
            </motion.a>

            {/* ── Desktop Nav ── */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      color: isActive ? 'var(--cyan)' : 'var(--text-secondary)',
                      background: isActive ? 'rgba(14,165,233,0.08)' : 'transparent',
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: 'rgba(14,165,233,0.08)' }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <span
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ background: 'var(--cyan)' }}
                      />
                    )}
                  </button>
                )
              })}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="/resume.pdf"
                download
                className="btn-outline text-sm py-2 px-5"
              >
                Resume
              </a>
              <button
                onClick={() => handleNavClick('#contact')}
                className="btn-primary text-sm py-2 px-5"
              >
                <span>Hire Me</span>
              </button>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              className="md:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-lg transition-all"
              style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)' }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={20} color="var(--cyan)" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={20} color="var(--cyan)" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{
              background: 'rgba(2,8,24,0.97)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Close tap area */}
            <div className="flex-1 flex flex-col justify-center px-8">

              {/* Mobile logo */}
              <div className="flex items-center gap-2 mb-12">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, var(--blue), var(--violet))' }}
                >
                  <Cpu size={18} color="white" />
                </div>
                <span className="text-lg font-bold gradient-text" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Vijaya Ragunath
                </span>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left py-4 px-5 rounded-xl text-xl font-semibold transition-all"
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      color: activeSection === link.href.slice(1) ? 'var(--cyan)' : 'var(--text-primary)',
                      background: activeSection === link.href.slice(1)
                        ? 'rgba(14,165,233,0.08)'
                        : 'transparent',
                      border: '1px solid',
                      borderColor: activeSection === link.href.slice(1)
                        ? 'rgba(14,165,233,0.2)'
                        : 'transparent',
                    }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-3 mt-10"
              >
                <a href="/resume.pdf" download className="btn-outline w-full justify-center py-3 text-base">
                  Download Resume
                </a>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="btn-primary w-full justify-center py-3 text-base"
                >
                  <span>Hire Me</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
