import { useEffect } from 'react'
import { useUIStore } from '../stores'

export const useTheme = () => {
  const { isDark, toggleTheme } = useUIStore()

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  return { isDark, toggleTheme }
}
