import { CLIProvider } from './context/CLIContext'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <CLIProvider>
      <div className="relative min-h-screen bg-gh-bg">

        <Navbar />

        <main>
          {/* Temporary placeholder */}
          <div className="min-h-screen dot-grid flex items-center justify-center pt-16">
            <div className="text-center space-y-3">
              <p className="font-mono text-gh-green text-lg">Navbar ✓</p>
              <p className="font-mono text-gh-muted text-sm">
                Step 05 complete — scroll down to test blur
              </p>
              <div className="h-screen" />
            </div>
          </div>
        </main>

      </div>
    </CLIProvider>
  )
}

export default App
