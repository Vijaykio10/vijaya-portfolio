import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Mail, Phone, Linkedin, Github, Send,
  MapPin, MessageSquare, User, FileText, CheckCircle2,
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
    icon: Phone,
    label: 'Phone',
    value: '+91 90803 89090',
    href: 'tel:9080389090',
    accent: '#22d3ee',
    bg: 'rgba(34,211,238,0.07)',
    border: 'rgba(34,211,238,0.18)',
    desc: 'Available Mon–Fri',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'www.linkedin.com/in/vijayaragunath',
    href: 'https://linkedin.com/in/vijayaragunath',
    accent: '#0ea5e9',
    bg: 'rgba(14,165,233,0.07)',
    border: 'rgba(14,165,233,0.18)',
    desc: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'https://github.com/Vijaykio10',
    href: 'https://github.com/Vijaykio10',
    accent: '#a855f7',
    bg: 'rgba(168,85,247,0.07)',
    border: 'rgba(168,85,247,0.18)',
    desc: 'View my projects',
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
      style={{
        background: bg,
        border: `1px solid ${border}`,
        textDecoration: 'none',
      }}
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

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
  e.preventDefault()

  if (!form.name || !form.email || !form.message) return

  setSending(true)

  try {
    const response = await fetch(
      'https://formspree.io/f/xdajjnzl',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(form),
      }
    )

    if (response.ok) {
      setSubmitted(true)
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }
  } catch (error) {
    console.error(error)
    alert('Failed to send message')
  }

  setSending(false)
}

  return (
    <section id="contact" className="section">
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
            <span style={{ color: 'var(--cyan)' }}>//</span> Get In Touch
          </span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle">
            Open to AI/ML roles, internships, freelance projects, and research
            collaborations. Drop a message — I respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* ── Left: Contact links ── */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="text-xs font-mono mb-2 flex items-center gap-2"
              style={{ color: 'var(--text-muted)', letterSpacing: '0.1em' }}
            >
              <MapPin size={12} style={{ color: 'var(--cyan)' }} />
              REACH ME AT
            </motion.p>

            {contactLinks.map((item, i) => (
              <ContactLink key={item.label} item={item} index={i} />
            ))}

            {/* Availability card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-2 p-5 rounded-xl"
              style={{
                background: 'rgba(34,197,94,0.05)',
                border: '1px solid rgba(34,197,94,0.15)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: '#22c55e', boxShadow: '0 0 8px #22c55e' }}
                />
                <span className="text-xs font-semibold" style={{ color: '#22c55e', fontFamily: 'Syne, sans-serif' }}>
                  Available for Opportunities
                </span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Actively looking for AI/ML Engineer, Junior AI Engineer, Machine Learning Intern, and Data Analyst roles — remote or Chennai-based.
              </p>
            </motion.div>
          </div>

          {/* ── Right: Contact form ── */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-3"
          >
            <div className="glass-card p-7 md:p-8">

              {/* Form header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'rgba(14,165,233,0.08)',
                    border: '1px solid rgba(14,165,233,0.15)',
                  }}
                >
                  <MessageSquare size={18} style={{ color: 'var(--cyan)' }} />
                </div>
                <div>
                  <h3 className="text-base font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
                    Send a Message
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    I'll get back to you within 24 hours
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
                    style={{
                      background: 'rgba(34,197,94,0.1)',
                      border: '1px solid rgba(34,197,94,0.25)',
                      boxShadow: '0 0 24px rgba(34,197,94,0.2)',
                    }}
                  >
                    <CheckCircle2 size={28} style={{ color: '#22c55e' }} />
                  </div>
                  <div>
                    <p className="text-lg font-bold mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                      Message Sent!
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      Thanks for reaching out. I'll reply within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline text-sm py-2 px-5 mt-2"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>

                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="text-xs font-mono mb-1.5 flex items-center gap-1.5"
                        style={{ color: 'var(--text-muted)', display: 'flex', letterSpacing: '0.08em' }}
                      >
                        <User size={11} />
                        NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="contact-input"
                      />
                    </div>
                    <div>
                      <label
                        className="text-xs font-mono mb-1.5 flex items-center gap-1.5"
                        style={{ color: 'var(--text-muted)', display: 'flex', letterSpacing: '0.08em' }}
                      >
                        <Mail size={11} />
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="contact-input"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      className="text-xs font-mono mb-1.5 flex items-center gap-1.5"
                      style={{ color: 'var(--text-muted)', display: 'flex', letterSpacing: '0.08em' }}
                    >
                      <FileText size={11} />
                      SUBJECT
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Job opportunity / Collaboration / Project"
                      className="contact-input"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="text-xs font-mono mb-1.5 flex items-center gap-1.5"
                      style={{ color: 'var(--text-muted)', display: 'flex', letterSpacing: '0.08em' }}
                    >
                      <MessageSquare size={11} />
                      MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity, project, or just say hi..."
                      rows={5}
                      required
                      className="contact-input resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full justify-center py-3 text-sm mt-2"
                    disabled={sending}
                    style={{ opacity: sending ? 0.8 : 1 }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {sending ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={15} />
                        </>
                      )}
                    </span>
                  </motion.button>

                  <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                    * Required fields. Your info is only used to respond to your message.
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
