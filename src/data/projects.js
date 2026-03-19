const projects = [
  {
    id: 1,
    title: "NxtTrendz",
    subtitle: "Full Stack E-Commerce App",
    desc: "A full-stack e-commerce platform inspired by Amazon/Flipkart. Features JWT authentication, product listing, cart management, filters, sorting, and a complete checkout flow.",
    tech: ["React.js", "Node.js", "MongoDB", "Express", "JWT Auth", "REST API"],
    liveUrl: "https://nxt-trendz-fullstack.vercel.app",       // replace with your live URL
    githubUrl: "https://github.com/hrutik-codes/nxt-trendz-fullstack",     // replace with your GitHub URL
    featured: true,
    icon: "🛒",
    color: "blue",
  },
  {
    id: 2,
    title: "Movies App",
    subtitle: "Frontend Project",
    desc: "Browse and search movies using a REST API. Features search, category filters, and a clean responsive grid layout.",
    tech: ["React.js", "REST API", "CSS"],
    liveUrl: "https://hj-nxt-watch.vercel.app",
    githubUrl: "https://github.com/hrutik-codes/nxt-watch",
    featured: false,
    icon: "🎬",
    color: "purple",
  },
  {
    id: 3,
    title: "Jobby App",
    subtitle: "Frontend Project",
    desc: "Job listing platform with login, search, filters by salary and employment type, and a detailed job view with similar job suggestions.",
    tech: ["React.js", "JWT Auth", "CSS"],
    liveUrl: "https://jobbyhj.ccbp.tech/",
    githubUrl: null,
    featured: false,
    icon: "💼",
    color: "green",
  },
]

export default projects