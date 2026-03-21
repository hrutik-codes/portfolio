import { CLIProvider } from './context/CLIContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

const App = () => {
  return (
    <CLIProvider>
      <div className="relative min-h-screen bg-gh-bg">
        <Navbar />
        <main>
          <Hero />
          <About />
          {/* Skills   → Step 08 */}
          {/* Projects → Step 09 */}
          {/* Contact  → Step 10 */}
        </main>
        {/* Footer      → Step 11 */}
        {/* TerminalCLI → Step 12 */}
      </div>
    </CLIProvider>
  )
}

export default App
