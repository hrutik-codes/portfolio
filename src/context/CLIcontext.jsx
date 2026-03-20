import { createContext, useContext, useState } from 'react'

const CLIContext = createContext()

export const CLIProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCLI = () => setIsOpen(prev => !prev)
  const closeCLI  = () => setIsOpen(false)
  const openCLI   = () => setIsOpen(true)

  return (
    <CLIContext.Provider value={{ isOpen, toggleCLI, closeCLI, openCLI }}>
      {children}
    </CLIContext.Provider>
  )
}

export const useCLI = () => {
  const context = useContext(CLIContext)
  if (!context) throw new Error('useCLI must be used inside CLIProvider')
  return context
}