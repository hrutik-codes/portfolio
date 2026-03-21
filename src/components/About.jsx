// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import useScrollReveal from '../hooks/useScrollReveal'
import { skillBars } from '../data/skills'

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0  },
}

// ── Single skill bar row
const SkillBar = ({ name, level, color, isVisible }) => {
  const colorMap = {
    blue:   'text-gh-blue',
    green:  'text-gh-green',
    purple: 'text-gh-purple',
    orange: 'text-gh-orange',
    red:    'text-gh-red',
  }

  return (
    <div className="space-y-1.5 mb-4">
      <div className="flex justify-between font-mono text-xs">
        <span className={colorMap[color] || 'text-gh-text'}>{name}</span>
        <span className="text-gh-muted">{level}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            transform: isVisible ? `scaleX(${level / 100})` : 'scaleX(0)',
            transition: 'transform 1.2s ease',
          }}
        />
      </div>
    </div>
  )
}

const About = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal(0.15)
  const { ref: barRef,     isVisible: barsVisible } = useScrollReveal(0.3)

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

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
            cat <span className="text-gh-blue">about.md</span>
          </h2>
          <div className="flex-1 h-px bg-gh-border" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: Bio ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-3xl font-bold text-gh-text mb-6 leading-tight">
              Building the web,
              <br />
              <span className="text-gh-blue font-mono">one commit</span> at a time.
            </h3>

            <div className="space-y-4 text-gh-muted leading-relaxed text-base">
              <p>
                I am a <span className="text-gh-blue">Computer Engineering</span> graduate
                with a strong emphasis on core fundamentals data structures,
                problem-solving, and system thinking. To complement my degree, I am
                actively enhancing my skills through{' '}
                <span className="text-gh-blue">NxtWave CCBP 4.0</span>, gaining
                industry-aligned experience in full-stack development using the{' '}
                <span className="text-gh-green">MERN stack</span>.
              </p>
              <p>
                I have built multiple projects involving authentication systems,
                protected routes, REST API integration, and dynamic user interfaces
                reflecting real-world application development practices.
              </p>
              <p>
                My goal is to grow as a{' '}
                <span className="text-gh-purple">Software Engineer</span> by continuously
                improving technical depth, mastering scalable application design, and
                staying aligned with current industry standards.
              </p>
            </div>

            {/* ── Info grid ── */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: '// degree',      value: 'BE CSE — 2025',         color: 'text-gh-blue'   },
                { label: '// training',   value: 'NxtWave CCBP 4.0',      color: 'text-gh-green'  },
                { label: '// availability',value: 'Immediate',              color: 'text-gh-purple' },
                { label: '// targeting',   value: 'Software Engineer',      color: 'text-gh-orange' },
              ].map(({ label, value, color }) => (
                <div
                  key={label}
                  className="bg-gh-surface rounded-lg p-4 border border-gh-border"
                >
                  <div className="font-mono text-xs text-gh-muted mb-1">{label}</div>
                  <div className={`font-mono text-sm font-medium ${color}`}>{value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Skill bars terminal ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-lg border border-gh-border overflow-hidden">

              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gh-surface2 border-b border-gh-border">
                <div className="flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full dot-red" />
                  <span className="w-2.5 h-2.5 rounded-full dot-yellow" />
                  <span className="w-2.5 h-2.5 rounded-full dot-green" />
                </div>
                <span className="font-mono text-xs text-gh-muted mx-auto">
                  skills_progress.sh
                </span>
              </div>

              {/* Skill bars */}
              <div ref={barRef} className="bg-gh-surface p-6">
                <div className="font-mono text-xs text-gh-muted mb-5">
                  # core tech proficiency
                </div>
                {skillBars.map(({ name, level, color }) => (
                  <SkillBar
                    key={name}
                    name={name}
                    level={level}
                    color={color}
                    isVisible={barsVisible}
                  />
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
