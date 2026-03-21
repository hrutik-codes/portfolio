// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import useScrollReveal from '../hooks/useScrollReveal'
import projects from '../data/projects'

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

// ── Reusable link buttons
const LiveButton = ({ url }) => {
  if (!url) {
    return (
      <span className="inline-flex items-center gap-2 font-mono text-xs text-gh-muted border border-gh-border px-3 py-2 rounded cursor-not-allowed opacity-50">
        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" d="M12 6v6l4 2" />
        </svg>
        deploy in progress
      </span>
    )
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 btn-primary font-mono text-xs text-white px-3 py-2 rounded"
    >
      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
      </svg>
      live demo
    </a>
  )
}

const GithubButton = ({ url }) => {
  if (!url) return null
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 btn-outline font-mono text-xs text-gh-muted px-3 py-2 rounded"
    >
      <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
      github
    </a>
  )
}

// ── Featured project card (NxtTrendz — full width)
const FeaturedProject = ({ project }) => {
  const c = colorMap[project.color] || colorMap.blue

  return (
    <div className="card-hover bg-gh-surface rounded-lg border border-gh-border p-6 mb-6 relative overflow-hidden">

      {/* Featured badge */}
      <div className="absolute top-4 right-4">
        <span className="font-mono text-xs text-gh-green bg-gh-green/10 border border-gh-green/20 px-3 py-1 rounded-full">
          ⭐ featured project
        </span>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">

        {/* Left: info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${c.bg} border ${c.border}`}>
              {project.icon}
            </div>
            <div>
              <h3 className="font-mono font-bold text-gh-text text-lg">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-gh-muted">
                {project.subtitle}
              </p>
            </div>
          </div>

          <p className="text-gh-muted text-sm leading-relaxed mb-5">
            {project.desc}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className={`font-mono text-xs px-2.5 py-1 rounded border ${c.text} ${c.bg} ${c.border}`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 flex-wrap">
            <LiveButton   url={project.liveUrl}   />
            <GithubButton url={project.githubUrl} />
          </div>
        </div>

        {/* Right: decoration code snippet */}
        <div className="rounded-lg border border-gh-border overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 bg-gh-surface2 border-b border-gh-border">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full dot-red" />
              <span className="w-2.5 h-2.5 rounded-full dot-yellow" />
              <span className="w-2.5 h-2.5 rounded-full dot-green" />
            </div>
            <span className="font-mono text-xs text-gh-muted mx-auto">
              NxtTrendz.jsx
            </span>
          </div>
          <div className="bg-gh-bg p-4 font-mono text-xs leading-6 overflow-x-auto">
            <div>
              <span className="text-gh-purple">const </span>
              <span className="text-gh-blue">Cart </span>
              <span className="text-gh-purple">= </span>
              <span className="text-gh-orange">() </span>
              <span className="text-gh-purple">={'>'} {'{'}</span>
            </div>
            <div className="pl-4">
              <span className="text-gh-purple">const </span>
              <span className="text-gh-text">{'{cartList}'} </span>
              <span className="text-gh-purple">= </span>
              <span className="text-gh-blue">useContext</span>
              <span className="text-gh-text">(CartContext)</span>
            </div>
            <div className="pl-4 mt-2">
              <span className="text-gh-purple">return </span>
              <span className="text-gh-text">(</span>
            </div>
            <div className="pl-8">
              <span className="text-gh-blue">{'<div '}</span>
              <span className="text-gh-green">className</span>
              <span className="text-gh-text">=</span>
              <span className="text-gh-orange">"cart-container"</span>
              <span className="text-gh-blue">{'>'}</span>
            </div>
            <div className="pl-10">
              <span className="text-gh-text">{'{'}</span>
              <span className="text-gh-blue">cartList</span>
              <span className="text-gh-text">.</span>
              <span className="text-gh-blue">map</span>
              <span className="text-gh-text">(item </span>
              <span className="text-gh-purple">{'=> '}</span>
              <span className="text-gh-text">(</span>
            </div>
            <div className="pl-12">
              <span className="text-gh-blue">{'<CartItem '}</span>
              <span className="text-gh-green">key</span>
              <span className="text-gh-text">={'{'}item.id{'}'}</span>
            </div>
            <div className="pl-14">
              <span className="text-gh-green">data</span>
              <span className="text-gh-text">={'{'}item{'}'} </span>
              <span className="text-gh-blue">{'/>'}</span>
            </div>
            <div className="pl-10">
              <span className="text-gh-text">))</span>
              <span className="text-gh-text">{'}'}</span>
            </div>
            <div className="pl-8">
              <span className="text-gh-blue">{'</div>'}</span>
            </div>
            <div className="pl-4">
              <span className="text-gh-text">)</span>
            </div>
            <div>
              <span className="text-gh-purple">{'}'}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

// ── Regular project card
const ProjectCard = ({ project }) => {
  const c = colorMap[project.color] || colorMap.blue

  return (
    <div className="card-hover bg-gh-surface rounded-lg border border-gh-border p-6 flex flex-col">

      <div className="flex items-center gap-3 mb-4">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${c.bg} border ${c.border}`}>
          {project.icon}
        </div>
        <div>
          <h3 className="font-mono font-bold text-gh-text text-sm">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-gh-muted">
            {project.subtitle}
          </p>
        </div>
      </div>

      <p className="text-gh-muted text-xs leading-relaxed mb-4 flex-1">
        {project.desc}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className={`font-mono text-xs px-2 py-0.5 rounded ${c.text} ${c.bg}`}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 flex-wrap">
        <LiveButton   url={project.liveUrl}   />
        <GithubButton url={project.githubUrl} />
      </div>

    </div>
  )
}

// ── Coming soon placeholder
const ComingSoonCard = () => (
  <div className="bg-gh-surface rounded-lg border border-dashed border-gh-border p-6 flex flex-col items-center justify-center text-center min-h-48 group hover:border-gh-blue transition-all duration-200">
    <div className="w-12 h-12 rounded-full bg-gh-bg border border-dashed border-gh-border flex items-center justify-center mb-4 group-hover:border-gh-blue transition-colors duration-200">
      <span className="text-gh-muted text-2xl group-hover:text-gh-blue transition-colors duration-200">+</span>
    </div>
    <div className="font-mono text-xs text-gh-muted mb-1">// next project</div>
    <div className="font-mono text-xs text-gh-blue/60">currently building...</div>
  </div>
)

// ── Main section
const Projects = () => {
  const { ref, isVisible } = useScrollReveal(0.1)

  const featured = projects.filter(p => p.featured)
  const rest     = projects.filter(p => !p.featured)

  return (
    <section
      id="projects"
      ref={ref}
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
            git log <span className="text-gh-blue">--projects</span>
          </h2>
          <div className="flex-1 h-px bg-gh-border" />
        </motion.div>

        {/* ── Featured project ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {featured.map(p => (
            <FeaturedProject key={p.id} project={p} />
          ))}
        </motion.div>

        {/* ── Regular cards + coming soon ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {rest.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
          <ComingSoonCard />
        </motion.div>

      </div>
    </section>
  )
}

export default Projects
