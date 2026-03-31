# Hrutik Jagdale — Portfolio

Personal portfolio website built with React, Tailwind CSS, and Framer Motion.

🔗 **Live:** https://portfolio-hrutik-codes.vercel.app

## Tech Stack

- React 18 + Vite
- Tailwind CSS v3
- Framer Motion
- EmailJS (contact form)
- Deployed on Vercel

## Features

- Dark terminal aesthetic (GitHub-inspired)
- Scroll reveal animations
- Custom hooks — `useTypingEffect`, `useScrollReveal`
- React Context API — global CLI state
- Hidden CLI easter egg (`>_` in navbar) — type `help` to start
- Fully mobile responsive
- Working contact form via EmailJS
- Resume download

## CLI Commands

| Command    | Description                    |
|------------|--------------------------------|
| `help`     | List all available commands    |
| `whoami`   | About Hrutik Jagdale           |
| `skills`   | Tech stack & proficiency       |
| `projects` | View all projects              |
| `contact`  | Get in touch                   |
| `resume`   | Download resume                |
| `clear`    | Clear terminal                 |
| `exit`     | Close terminal                 |

## Local Setup
```bash
git clone https://github.com/hrutik-codes/portfolio
cd portfolio
npm install
npm run dev
```

## Project Structure
```
src/
├── components/   # UI components
├── context/      # CLIContext — global CLI state
├── data/         # projects, skills, cliCommands
├── hooks/        # useTypingEffect, useScrollReveal
└── index.css     # global styles + Tailwind
```
