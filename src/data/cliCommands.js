const cliCommands = {
  help: () => ({
    type: "list",
    content: [
      { cmd: "whoami",   desc: "About Hrutik Jagdale" },
      { cmd: "skills",   desc: "Tech stack & proficiency" },
      { cmd: "projects", desc: "View all projects" },
      { cmd: "contact",  desc: "Get in touch" },
      { cmd: "resume",   desc: "Download resume" },
      { cmd: "clear",    desc: "Clear terminal" },
      { cmd: "exit",     desc: "Close terminal" },
    ],
  }),

  whoami: () => ({
    type: "info",
    content: [
      { label: "name",       value: "Hrutik Jagdale"          },
      { label: "role",       value: "Full Stack Developer"     },
      { label: "location",   value: "Pune, Maharashtra, India" },
      { label: "training",   value: "NxtWave CCBP 4.0"        },
      { label: "stack",      value: "React · Node · MongoDB"   },
      { label: "status",     value: "Open to work immediately" },
      { label: "expected",   value: "₹6+ LPA"                 },
    ],
  }),

  skills: () => ({
    type: "skills",
    content: [
      { name: "React.js",          level: "90%" },
      { name: "JavaScript (ES6+)", level: "88%" },
      { name: "Node.js / Express", level: "80%" },
      { name: "REST APIs",         level: "82%" },
      { name: "MongoDB",           level: "75%" },
      { name: "DSA",               level: "70%" },
    ],
  }),

  projects: () => ({
    type: "projects",
    content: [
      {
        name:   "NxtTrendz",
        tech:   "React · Node · MongoDB · JWT",
        live:   null,
        github: null,
        tag:    "Full Stack",
      },
      {
        name:   "Movies App",
        tech:   "React · REST API · CSS",
        live:   null,
        github: null,
        tag:    "Frontend",
      },
      {
        name:   "Jobby App",
        tech:   "React · JWT · CSS",
        live:   null,
        github: null,
        tag:    "Frontend",
      },
    ],
  }),

  contact: () => ({
    type: "contact",
    content: [
      { label: "email",    value: "hrutikjagdale@gmail.com",                  href: "mailto:hrutikjagdale@gmail.com"              },
      { label: "linkedin", value: "https://www.linkedin.com/in/hrutik-jagdale-283070221/",  href: "https://www.linkedin.com/in/hrutik-jagdale-283070221/" },
      { label: "github",   value: "https://github.com/hrutik-codes",       href: "https://github.com/hrutik-codes"  },
    ],
  }),

  resume: () => ({
    type: "resume",
    content: "/Master_Resume_V1.pdf",
  }),

  clear: () => ({ type: "clear", content: null }),

  exit:  () => ({ type: "exit",  content: null }),
}

export default cliCommands
