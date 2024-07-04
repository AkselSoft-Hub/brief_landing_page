import { useState, useEffect } from 'react'

const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleDarkModeChange = (event: any) => {
      setDarkMode(event.matches)
    }

    darkModeMediaQuery.addEventListener('change', handleDarkModeChange)
    setDarkMode(darkModeMediaQuery.matches)

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleDarkModeChange)
    }
  }, [])

  return { darkMode }
}

export default useTheme
