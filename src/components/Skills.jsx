// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import useScrollReveal from '../hooks/useScrollReveal'
import { skillCards, alsoKnows } from '../data/skills'

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0  },
}

const colorMap = {
  blue:   { text: 'text-gh-blue',   bg: 'bg-gh-blue/10',   border: 'border-gh-blue/20'   },
  green:  { text: 'text-gh-green',  bg: 'bg-gh-green/10',  border: 'border-gh-green/20'  },
  orange: { text: 'text-gh-orange', bg: 'bg-gh-orange/10', border: 'border-gh-orange/20' },
  purple: { text: 'text-gh-purple', bg: 'bg-gh-purple/10', border: 'border-gh-purple/20' },
  red:    { text: 'text-gh-red',    bg: 'bg-gh-red/10',    border: 'border-gh-red/20'    },
}

// ── Single skill card
const SkillCard = ({ name, desc, category, color, icon }) => {
  const c = colorMap[color] || colorMap.blue

  return (
    <div className="card-hover bg-gh-surface rounded-lg p-5 border border-gh-border">
      <div className="text-2xl mb-3">{icon}</div>
      <div className={`font-mono font-bold text-sm mb-1 ${c.text}`}>
        {name}
      </div>
      <div className="font-mono text-xs text-gh-muted mb-3">
        {desc}
      </div>
      <span className={`inline-block font-mono text-xs px-2.5 py-1 rounded-full border ${c.text} ${c.bg} ${c.border}`}>
        {category}
      </span>
    </div>
  )
}

const Skills = () => {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-6"
      style={{ background: 'rgba(22, 27, 34, 0.5)' }}
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
            ls <span className="text-gh-blue">./skills</span>
          </h2>
          <div className="flex-1 h-px bg-gh-border" />
        </motion.div>

        {/* ── Skill cards grid ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
        >
          {skillCards.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </motion.div>

        {/* ── Also familiar with ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="font-mono text-xs text-gh-muted mb-4">
            # also comfortable with
          </div>
          <div className="flex flex-wrap gap-3">
            {alsoKnows.map((item) => (
              <span
                key={item}
                className="font-mono text-xs text-gh-muted border border-gh-border px-3 py-1.5 rounded-full hover:border-gh-blue hover:text-gh-blue transition-all duration-200 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills