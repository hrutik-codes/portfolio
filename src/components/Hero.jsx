// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import useTypingEffect from '../hooks/useTypingEffect'

const ROLES = [
  'Full Stack Developer',
  'React Developer',
  'MERN Stack Dev',
  'Frontend Engineer',
]

// ── Framer Motion variants
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0  },
}

const Hero = () => {
  const currentRole = useTypingEffect(ROLES)

  return (
    <section
      id="home"
      className="min-h-screen dot-grid flex items-center pt-16 pb-16 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Main content ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 font-mono text-xs text-gh-green bg-gh-green/10 border border-gh-green/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-gh-green animate-pulse-slow inline-block"></span>
              available for work · Pune, India
            </div>

            {/* Prompt line */}
            <p className="font-mono text-gh-muted text-sm mb-2">
              <span className="text-gh-blue">$</span> whoami
            </p>

            {/* Name */}
            <h1 className="font-mono font-bold leading-none mb-4" style={{ fontSize: 'clamp(2.2rem, 6vw, 3.8rem)' }}>
              <span className="text-gh-text">Hrutik</span>
              <br />
              <span className="text-gh-blue">Jagdale</span>
              <span className="text-gh-green">.</span>
            </h1>

            {/* Typing role */}
            <div className="font-mono text-gh-green text-lg mb-6 h-7 flex items-center gap-1">
              <span>{currentRole}</span>
              <span className="animate-blink text-gh-green">|</span>
            </div>

            {/* Bio */}
            <p className="text-gh-muted text-base leading-relaxed mb-8 max-w-lg">
              I build end-to-end web applications using the{' '}
              <span className="text-gh-blue font-medium">MERN stack</span>.
              Trained via NxtWave CCBP 4.0 — focused on clean code,
              intuitive UIs and scalable backends.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="btn-primary px-6 py-3 rounded font-mono text-sm text-white font-medium flex items-center gap-2"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                view_projects()
              </a>
              <a
                href="#contact"
                className="btn-outline px-6 py-3 rounded font-mono text-sm text-gh-muted flex items-center gap-2"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hire_me()
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6 font-mono text-xs text-gh-muted">
              <a
                href="https://github.com/hrutik-codes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gh-blue transition-colors duration-200"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                /hrutik-codes
              </a>
              <a
                href="https://www.linkedin.com/in/hrutik-jagdale-283070221/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gh-blue transition-colors duration-200"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                /in/hrutik-jagdale
              </a>
            </div>
          </motion.div>

          {/* ── Right: Level 1 Decoration Terminal ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="rounded-lg border border-gh-border overflow-hidden">

              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gh-surface2 border-b border-gh-border">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full dot-red"></span>
                  <span className="w-3 h-3 rounded-full dot-yellow"></span>
                  <span className="w-3 h-3 rounded-full dot-green"></span>
                </div>
                <span className="font-mono text-xs text-gh-muted mx-auto">
                  hrutik@portfolio ~ %
                </span>
              </div>

              {/* Terminal body — Level 1: decoration only */}
              <div className="bg-gh-surface p-6 font-mono text-sm space-y-4 min-h-80">

                {/* Command line */}
                <div className="flex gap-2 items-center">
                  <span className="text-gh-green">➜</span>
                  <span className="text-gh-blue">~</span>
                  <span className="text-gh-muted">cat</span>
                  <span className="text-gh-text">about.json</span>
                </div>

                {/* JSON output */}
                <div className="pl-4 border-l-2 border-gh-border text-xs leading-6 space-y-0.5">
                  <div className="text-gh-orange">{'{'}</div>
                  <div className="pl-4">
                    <span className="text-gh-blue">"name"</span>
                    <span className="text-gh-muted">: </span>
                    <span className="text-gh-green">"Hrutik Jagdale"</span>
                    <span className="text-gh-muted">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-gh-blue">"role"</span>
                    <span className="text-gh-muted">: </span>
                    <span className="text-gh-green">"Full Stack Developer"</span>
                    <span className="text-gh-muted">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-gh-blue">"location"</span>
                    <span className="text-gh-muted">: </span>
                    <span className="text-gh-green">"Pune, Maharashtra"</span>
                    <span className="text-gh-muted">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-gh-blue">"training"</span>
                    <span className="text-gh-muted">: </span>
                    <span className="text-gh-green">"NxtWave CCBP 4.0"</span>
                    <span className="text-gh-muted">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-gh-blue">"stack"</span>
                    <span className="text-gh-muted">: [</span>
                    <span className="text-gh-green">"React"</span>
                    <span className="text-gh-muted">, </span>
                    <span className="text-gh-green">"Node"</span>
                    <span className="text-gh-muted">, </span>
                    <span className="text-gh-green">"MongoDB"</span>
                    <span className="text-gh-muted">],</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-gh-blue">"status"</span>
                    <span className="text-gh-muted">: </span>
                    <span className="text-gh-purple">"open_to_work"</span>
                  </div>
                  <div className="text-gh-orange">{'}'}</div>
                </div>

                {/* Second command */}
                <div className="flex gap-2 items-center pt-2">
                  <span className="text-gh-green">➜</span>
                  <span className="text-gh-blue">~</span>
                  <span className="text-gh-muted">ls</span>
                  <span className="text-gh-text">projects/</span>
                </div>

                {/* ls output */}
                <div className="pl-4 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                  <span className="text-gh-blue hover:text-gh-green transition-colors cursor-default">NxtTrendz/</span>
                  <span className="text-gh-blue hover:text-gh-green transition-colors cursor-default">nxt-watch/</span>
                  <span className="text-gh-blue hover:text-gh-green transition-colors cursor-default">jobby-app/</span>
                </div>

                {/* Idle cursor */}
                <div className="flex gap-2 items-center">
                  <span className="text-gh-green">➜</span>
                  <span className="text-gh-blue">~</span>
                  <span className="animate-blink text-gh-green">█</span>
                </div>
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-3 border-t border-gh-border bg-gh-surface">
                <div className="p-3 text-center border-r border-gh-border">
                  <div className="font-mono font-bold text-lg text-gh-blue">3+</div>
                  <div className="font-mono text-xs text-gh-muted">projects</div>
                </div>
                <div className="p-3 text-center border-r border-gh-border">
                  <div className="font-mono font-bold text-lg text-gh-green">MERN</div>
                  <div className="font-mono text-xs text-gh-muted">stack</div>
                </div>
                <div className="p-3 text-center">
                  <div className="font-mono font-bold text-lg text-gh-purple">₹6L+</div>
                  <div className="font-mono text-xs text-gh-muted">expected</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
