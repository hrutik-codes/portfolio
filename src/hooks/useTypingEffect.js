import { useState, useEffect } from 'react'

const useTypingEffect = (roles, typingSpeed = 100, deletingSpeed = 60, pauseTime = 1800) => {
  const [currentText, setCurrentText] = useState('')
  const [roleIndex, setRoleIndex]     = useState(0)
  const [charIndex, setCharIndex]     = useState(0)
  const [isDeleting, setIsDeleting]   = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // typing forward
        setCurrentText(currentRole.slice(0, charIndex + 1))
        setCharIndex(prev => prev + 1)

        // finished typing full word → start pause then delete
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // deleting
        setCurrentText(currentRole.slice(0, charIndex - 1))
        setCharIndex(prev => prev - 1)

        // finished deleting → move to next role
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setRoleIndex(prev => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, pauseTime])

  return currentText
}

export default useTypingEffect
