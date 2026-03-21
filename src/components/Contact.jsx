import { useState, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import useScrollReveal from '../hooks/useScrollReveal'

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0  },
}

// form status machine: idle → sending → success | error
const IDLE     = 'idle'
const SENDING  = 'sending'
const SUCCESS  = 'success'
const ERROR    = 'error'

const Contact = () => {
  const { ref, isVisible } = useScrollReveal(0.1)
  const formRef            = useRef(null)

  const [status, setStatus]   = useState(IDLE)
  const [formData, setFormData] = useState({
    from_name:  '',
    from_email: '',
    message:    '',
  })

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === SENDING) return

    setStatus(SENDING)

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus(SUCCESS)
      setFormData({ from_name: '', from_email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus(ERROR)
    }
  }

  const inputClass = `
    w-full bg-gh-surface border border-gh-border rounded-lg
    px-4 py-3 font-mono text-sm text-gh-text
    placeholder:text-gh-muted/50
    focus:outline-none focus:border-gh-blue
    transition-colors duration-200
  `

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-6"
      style={{ background: 'rgba(22, 27, 34, 0.5)' }}
    >
      <div className="max-w-4xl mx-auto">

        {/* ── Section heading ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-gh-green text-sm">$</span>
          <h2 className="font-mono text-2xl font-bold text-gh-text">
            contact <span className="text-gh-blue">--me</span>
          </h2>
          <div className="flex-1 h-px bg-gh-border" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Info ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-3xl font-bold text-gh-text mb-4 leading-tight">
              Let's{' '}
              <span className="text-gh-blue font-mono">connect</span>
              <span className="text-gh-green">.</span>
            </h3>

            <p className="text-gh-muted text-base leading-relaxed mb-8">
              I'm actively looking for Full Stack, MERN Stack, and
              React roles in Pune or remote. If you have an opportunity
              or just want to say hi — my inbox is open.
            </p>

            {/* Contact terminal */}
            <div className="rounded-lg border border-gh-border overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 bg-gh-surface2 border-b border-gh-border">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full dot-red" />
                  <span className="w-2.5 h-2.5 rounded-full dot-yellow" />
                  <span className="w-2.5 h-2.5 rounded-full dot-green" />
                </div>
                <span className="font-mono text-xs text-gh-muted mx-auto">
                  contact.sh
                </span>
              </div>

              <div className="bg-gh-surface p-5 font-mono text-sm space-y-3">
                {[
                  {
                    label: 'email',
                    value: 'hrutikjagdale@gmail.com',
                    href:  'mailto: hrutikjagdale@gmail.com',
                  },
                  {
                    label: 'linkedin',
                    value: 'linkedin.com/in/hrutik-jagdale-283070221',
                    href:  'https://www.linkedin.com/in/hrutik-jagdale-283070221/',
                  },
                  {
                    label: 'github',
                    value: 'github.com/hrutik-codes',
                    href:  'https://github.com/hrutik-codes',
                  },
                ].map(({ label, value, href }) => (
                  <div key={label}>
                    <span className="text-gh-green">$ </span>
                    <span className="text-gh-muted">echo </span>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gh-blue hover:text-gh-green transition-colors duration-200 underline underline-offset-2"
                    >
                      {value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume download */}
            <a
              href="/Master_Resume_V1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-outline font-mono text-sm text-gh-muted px-5 py-2.5 rounded mt-6"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              download_resume()
            </a>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gh-surface rounded-lg border border-gh-border overflow-hidden">

              {/* Form chrome */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gh-surface2 border-b border-gh-border">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full dot-red" />
                  <span className="w-2.5 h-2.5 rounded-full dot-yellow" />
                  <span className="w-2.5 h-2.5 rounded-full dot-green" />
                </div>
                <span className="font-mono text-xs text-gh-muted mx-auto">
                  send_message.sh
                </span>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-4">

                {/* Name */}
                <div>
                  <label className="font-mono text-xs text-gh-muted mb-1.5 block">
                    <span className="text-gh-green">$</span> your_name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-mono text-xs text-gh-muted mb-1.5 block">
                    <span className="text-gh-green">$</span> your_email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono text-xs text-gh-muted mb-1.5 block">
                    <span className="text-gh-green">$</span> message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hey Hrutik, I'd like to discuss..."
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === SENDING}
                  className={`
                    w-full btn-primary font-mono text-sm text-white
                    py-3 rounded flex items-center justify-center gap-2
                    disabled:opacity-60 disabled:cursor-not-allowed
                  `}
                >
                  {status === SENDING ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      sending...
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      send_message()
                    </>
                  )}
                </button>

                {/* Status messages */}
                {status === SUCCESS && (
                  <div className="flex items-center gap-2 font-mono text-xs text-gh-green bg-gh-green/10 border border-gh-green/20 rounded-lg px-4 py-3">
                    <span>✓</span>
                    <span>message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                {status === ERROR && (
                  <div className="flex items-center justify-between font-mono text-xs text-gh-red bg-gh-red/10 border border-gh-red/20 rounded-lg px-4 py-3">
                    <span>✗ something went wrong. please try again.</span>
                    <button
                      type="button"
                      onClick={() => setStatus(IDLE)}
                      className="underline hover:text-gh-text transition-colors"
                    >
                      retry
                    </button>
                  </div>
                )}

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact