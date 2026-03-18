/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        gh: {
          bg:      '#0d1117',
          surface: '#161b22',
          surface2:'#1c2128',
          border:  '#30363d',
          text:    '#e6edf3',
          muted:   '#7d8590',
          blue:    '#79c0ff',
          green:   '#56d364',
          orange:  '#e3b341',
          purple:  '#d2a8ff',
          red:     '#ff7b72',
        }
      },
      animation: {
        'blink':   'blink 1s step-end infinite',
        'fadeUp':  'fadeUp 0.6s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}