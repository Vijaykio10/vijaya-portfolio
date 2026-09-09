import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Mail, Linkedin, Github, Send, MapPin, MessageSquare,
  User, FileText, CheckCircle2, ArrowRight,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'vijayragunath2003@gmail.com',
    href: 'mailto:vijayragunath2003@gmail.com',
    accent: '#0ea5e9',
    bg: 'rgba(14,165,233,0.07)',
    border: 'rgba(14,165,233,0.18)',
    desc: 'Best way to reach me',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vijayaragunath',
    href: 'https://linkedin.com/in/vijayaragunath',
    accent: '#0ea5e9',
    bg: 'rgba(14,165,233,0.07)',
    border: 'rgba(14,165,233,0.18)',
    desc: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Vijaykio10',
    href: 'https://github.com/Vijaykio10',
    accent: '#a855f7',
    bg: 'rgba(168,85,247,0.07)',
    border: 'rgba(168,85,247,0.18)',
    desc: 'Explore my code and projects',
  },
]

function ContactLink({ item, index }) {
  const { icon: Icon, label, value, href, accent, bg, border, desc } = item
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      whileHover={{ y: -3, borderColor: `${accent}45` }}
      className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
      style={{ background: bg, border: `1px solid ${border}`, textDecoration: 'none' }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}
      >
        <Icon size={18} style={{ color: accent }} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-mono mb-0.5" style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
          {label}
        </p>
        <p className="text-sm font-medium truncate" style={{ color: 'var(--text-primary)', fontFamily: 'DM Sans, sans-serif' }}>
          {value}
        </p>
        <p className="text-xs mt-0.5" style={{ color: `${accent}99` }}>
          {desc}
        </p>
      </div>
    </motion.a>
  )
}

export default function Contact() {
  const headerRef = useRef(null)
  const inView = useInView(headerRef, { once: true, margin: '-60px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setSending(true)
    setError('')

    try {
      const response = await fetch('https://formspree.io/f/xdajjnzl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: form.subject || `Portfolio enquiry from ${form.name}` }),
      })

      if (!response.ok) throw new Error('Unable to send message')

      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      setError('Something went wrong while sending. Please email me directly instead.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container-max">
        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <span className="section-tag">
            <span style={{ color: 'var(--cyan)' }}>//</span> Recruiter Contact
          </span>
          <h2 className="section-title">
            Have an <span className="gradient-text">AI/ML Opportunity?</span>
          </h2>
          <p className="section-subtitle">
            I'm open to AI/ML Engineer, Applied AI, GenAI, and early-career Machine Learning opportunities — as well as selected freelance AI projects and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="gradient-border-card p-6 mb-2"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full" style={{ background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
                <span className="text-xs font-semibold" style={{ color: '#22c55e', fontFamily: 'Syne, sans-serif' }}>
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                Let's build something useful.
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Best fit: teams building practical ML, GenAI, LLM/RAG, computer vision, speech AI, or intelligent business applications.
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-xs font-mono mb-2 flex items-center gap-2"
              style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}
            >
              <MapPin size={12} style={{ color: 'var(--cyan)' }} />
              CONNECT
            </motion.p>

            {contactLinks.map((item, i) => <ContactLink key={item.label} item={item} index={i} />)}

            <a
              href="/resume.pdf"
              download
              className="btn-outline mt-2 flex items-center justify-center gap-2"
              style={{ textDecoration: 'none' }}
            >
              Download Resume <ArrowRight size={15} />
            </a>
          </div>

          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-3"
          >
            <div className="glass-card p-7 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)' }}
                >
                  <MessageSquare size={18} style={{ color: 'var(--cyan)' }} />
                </div>
                <div>
                  <h3 className="text-base font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>Start a Conversation</h3>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    Hiring, collaboration, or an interesting AI problem — all welcome.
                  </p>
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-14 text-center gap-4"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)', boxShadow: '0 0 24px rgba(34,197,94,0.2)' }}
                  >
                    <CheckCircle2 size={28} style={{ color: '#22c55e' }} />
                  </div>
                  <div>
                    <p className="text-lg font-bold mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>Message Sent!</p>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Thanks for reaching out. I'll get back to you soon.</p>
                  </div>
                  <button onClick={() => setSubmitted(false)} className="btn-outline text-sm py-2 px-5 mt-2">Send Another</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono mb-1.5 flex items-center gap-1.5" style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
                        <User size={11} /> NAME *
                      </label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="contact-input" />
                    </div>
                    <div>
                      <label className="text-xs font-mono mb-1.5 flex items-center gap-1.5" style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
                        <Mail size={11} /> EMAIL *
                      </label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required className="contact-input" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono mb-1.5 flex items-center gap-1.5" style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
                      <FileText size={11} /> SUBJECT
                    </label>
                    <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="AI/ML role, collaboration, project..." className="contact-input" />
                  </div>

                  <div>
                    <label className="text-xs font-mono mb-1.5 flex items-center gap-1.5" style={{ color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
                      <MessageSquare size={11} /> MESSAGE *
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about the opportunity or project..." rows={5} required className="contact-input resize-none" />
                  </div>

                  {error && (
                    <p className="text-xs leading-relaxed" style={{ color: '#fb7185' }}>
                      {error}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full justify-center py-3 text-sm mt-2"
                    disabled={sending}
                    style={{ opacity: sending ? 0.8 : 1 }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {sending ? 'Sending...' : 'Send Message'}
                      {!sending && <Send size={15} />}
                    </span>
                  </motion.button>

                  <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                    Your details are only used to respond to your message.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
