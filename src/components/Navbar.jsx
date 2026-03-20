import { useState, useEffect } from 'react'
import { useCLI } from '../context/CLIContext'

const Navbar = () => {
  const { toggleCLI } = useCLI()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { label: 'about', href: '#about' },
    { label: 'skills', href: '#skills' },
    { label: 'projects', href: '#projects' },
    { label: 'contact', href: '#contact' },
  ]

  // Scroll: add blur bg + track active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const { top } = el.getBoundingClientRect()
        if (top <= 80) setActiveSection(id)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close mobile menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handleClick = (e) => {
      if (!e.target.closest('#navbar')) setMenuOpen(false)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [menuOpen])

  return (
    <header
      id="navbar"
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled
          ? 'bg-gh-bg/90 backdrop-blur-md border-b border-gh-border'
          : 'bg-transparent border-b border-transparent'
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="font-mono text-sm flex items-center gap-1 group"
        >
          <span className="text-gh-muted">~/</span>
          <span className="text-gh-text group-hover:text-gh-green transition-colors duration-200">
            hrutik-jagdale
          </span>
          <span className="text-gh-green animate-blink">▋</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`
                font-mono text-sm relative transition-colors duration-200
                after:content-[''] after:absolute after:bottom-[-2px] after:left-0
                after:h-px after:bg-gh-blue after:transition-all after:duration-200
                ${activeSection === label
                  ? 'text-gh-blue after:w-full'
                  : 'text-gh-muted hover:text-gh-text after:w-0 hover:after:w-full'
                }
              `}
            >
              {label}
            </a>
          ))}

          {/* CLI button */}
          <button
            onClick={toggleCLI}
            title="Open terminal"
            className="
              md:flex items-center gap-2
              font-mono text-xs text-gh-muted
              border border-gh-border rounded px-3 py-1.5
              hover:border-gh-green hover:text-gh-green
              transition-all duration-200 cursor-pointer
            "
          >
            <span>&gt;_</span>
            <span>terminal</span>
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gh-muted hover:text-gh-text transition-colors p-1"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
          bg-gh-surface border-b border-gh-border
        `}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`
                font-mono text-sm transition-colors duration-200
                ${activeSection === label
                  ? 'text-gh-blue'
                  : 'text-gh-muted hover:text-gh-text'
                }
              `}
            >
              <span className="text-gh-green mr-2">$</span>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
