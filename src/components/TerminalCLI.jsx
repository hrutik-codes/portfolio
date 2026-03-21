import { useState, useEffect, useRef } from 'react'
//eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { useCLI } from '../context/CLIContext'
import cliCommands from '../data/cliCommands'

// ── Renders the correct UI per response type
const CommandRenderer = ({ response}) => {
  if (!response) return null

  const { type, content } = response

  if (type === 'list') {
    return (
      <div className="mt-1 space-y-1">
        {content.map(({ cmd, desc }) => (
          <div key={cmd} className="flex gap-4 font-mono text-xs">
            <span className="text-gh-blue min-w-[80px]">{cmd}</span>
            <span className="text-gh-muted">{desc}</span>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'info') {
    return (
      <div className="mt-1 space-y-1">
        {content.map(({ label, value }) => (
          <div key={label} className="flex gap-4 font-mono text-xs">
            <span className="text-gh-muted min-w-[100px]">{label}</span>
            <span className="text-gh-green">{value}</span>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'skills') {
    return (
      <div className="mt-1 space-y-2">
        {content.map(({ name, level }) => (
          <div key={name} className="font-mono text-xs">
            <div className="flex justify-between mb-0.5">
              <span className="text-gh-blue">{name}</span>
              <span className="text-gh-muted">{level}</span>
            </div>
            <div className="h-1 bg-gh-border rounded-full overflow-hidden w-48">
              <div
                className="h-full rounded-full"
                style={{
                  width: level,
                  background: 'linear-gradient(90deg, #79c0ff, #56d364)',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'projects') {
    return (
      <div className="mt-1 space-y-3">
        {content.map(({ name, tech, live, github, tag }) => (
          <div key={name} className="border border-gh-border rounded p-3 space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-gh-text">{name}</span>
              <span className="font-mono text-xs text-gh-green bg-gh-green/10 border border-gh-green/20 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            </div>
            <div className="font-mono text-xs text-gh-muted">{tech}</div>
            <div className="flex gap-4 font-mono text-xs mt-1">
              {live ? (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gh-blue hover:text-gh-green transition-colors underline underline-offset-2"
                >
                  live demo →
                </a>
              ) : (
                <span className="text-gh-muted/50 line-through">deploy in progress</span>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gh-blue hover:text-gh-green transition-colors underline underline-offset-2"
                >
                  github →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'contact') {
    return (
      <div className="mt-1 space-y-1">
        {content.map(({ label, value, href }) => (
          <div key={label} className="flex gap-4 font-mono text-xs">
            <span className="text-gh-muted min-w-[80px]">{label}</span>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gh-blue hover:text-gh-green transition-colors underline underline-offset-2"
            >
              {value}
            </a>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'resume') {
    return (
      <div className="mt-1 font-mono text-xs text-gh-green">
        ✓ opening resume in new tab...
      </div>
    )
  }

  if (type === 'error') {
    return (
      <div className="mt-1 font-mono text-xs text-gh-red">
        {content}
      </div>
    )
  }

  return null
}

// ── Single history entry (command + response)
const HistoryEntry = ({ entry }) => (
  <div className="mb-4">
    {/* The command the user typed */}
    <div className="flex items-center gap-2 font-mono text-sm">
      <span className="text-gh-green">➜</span>
      <span className="text-gh-blue">~</span>
      <span className="text-gh-text">{entry.input}</span>
    </div>
    {/* The response */}
    <div className="pl-6">
      <CommandRenderer response={entry.response} />
    </div>
  </div>
)

// ── Welcome message shown on first open
const WelcomeMessage = () => (
  <div className="mb-6 font-mono text-xs space-y-1">
    <div className="text-gh-green font-bold text-sm mb-2">
      Hrutik Jagdale — Portfolio Terminal v1.0
    </div>
    <div className="text-gh-muted">
      Type <span className="text-gh-blue">help</span> to see available commands.
    </div>
    <div className="text-gh-muted">
      Press <span className="text-gh-blue">Escape</span> or type{' '}
      <span className="text-gh-blue">exit</span> to close.
    </div>
    <div className="text-gh-muted">
      Use <span className="text-gh-blue">↑ ↓</span> arrow keys to navigate history.
    </div>
    <div className="h-px bg-gh-border mt-3" />
  </div>
)

// ── Main TerminalCLI component
const TerminalCLI = () => {
  const { isOpen, closeCLI } = useCLI()

  const [commandHistory, setCommandHistory] = useState([])
  const [inputValue, setInputValue]         = useState('')
  const [historyIndex, setHistoryIndex]     = useState(-1)

  const inputRef   = useRef(null)
  const bottomRef  = useRef(null)
  const typedCmds  = commandHistory.map(e => e.input)

  // ── Auto focus input when CLI opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // ── Auto scroll to bottom on new command
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [commandHistory])

  // ── Escape key closes CLI
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeCLI()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, closeCLI])

  const handleCommand = (raw) => {
    const input = raw.trim().toLowerCase()
    if (!input) return

    // handle resume side effect
    if (input === 'resume') {
      const response = cliCommands.resume()
      window.open(response.content, '_blank')
      setCommandHistory(prev => [...prev, { input, response }])
      setInputValue('')
      setHistoryIndex(-1)
      return
    }

    // handle clear
    if (input === 'clear') {
      setCommandHistory([])
      setInputValue('')
      setHistoryIndex(-1)
      return
    }

    // handle exit
    if (input === 'exit') {
      closeCLI()
      setInputValue('')
      setHistoryIndex(-1)
      return
    }

    // lookup command
    const handler  = cliCommands[input]
    const response = handler
      ? handler()
      : { type: 'error', content: `command not found: ${input}. Type 'help' for available commands.` }

    setCommandHistory(prev => [...prev, { input, response }])
    setInputValue('')
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue)
      return
    }

    // Arrow up — go back in history
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const newIndex = Math.min(historyIndex + 1, typedCmds.length - 1)
      setHistoryIndex(newIndex)
      setInputValue(typedCmds[typedCmds.length - 1 - newIndex] || '')
      return
    }

    // Arrow down — go forward in history
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const newIndex = Math.max(historyIndex - 1, -1)
      setHistoryIndex(newIndex)
      setInputValue(newIndex === -1 ? '' : typedCmds[typedCmds.length - 1 - newIndex] || '')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ── Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeCLI}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* ── Terminal window */}
          <motion.div
            key="terminal"
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,   scale: 1    }}
            exit={{    opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-[10%] left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-lg border border-gh-border overflow-hidden shadow-2xl">

              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gh-surface2 border-b border-gh-border">
                <div className="flex gap-2">
                  <button
                    onClick={closeCLI}
                    className="w-3 h-3 rounded-full dot-red hover:opacity-80 transition-opacity"
                  />
                  <span className="w-3 h-3 rounded-full dot-yellow" />
                  <span className="w-3 h-3 rounded-full dot-green" />
                </div>
                <span className="font-mono text-xs text-gh-muted mx-auto">
                  hrutik@portfolio ~ — terminal
                </span>
                <button
                  onClick={closeCLI}
                  className="text-gh-muted hover:text-gh-text transition-colors"
                  aria-label="Close terminal"
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Terminal body */}
              <div className="bg-gh-bg p-5 h-96 overflow-y-auto">
                <WelcomeMessage />

                {/* Command history */}
                {commandHistory.map((entry, i) => (
                  <HistoryEntry key={i} entry={entry} />
                ))}

                {/* Scroll anchor */}
                <div ref={bottomRef} />
              </div>

              {/* Input line */}
              <div className="flex items-center gap-2 px-5 py-3 bg-gh-surface border-t border-gh-border">
                <span className="text-gh-green font-mono text-sm">➜</span>
                <span className="text-gh-blue font-mono text-sm">~</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent font-mono text-sm text-gh-text placeholder:text-gh-muted/40 focus:outline-none"
                  placeholder="type a command..."
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
                <span className="animate-blink text-gh-green font-mono text-sm">█</span>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default TerminalCLI