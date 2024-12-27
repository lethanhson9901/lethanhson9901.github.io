import { useEffect } from 'react'
import Portfolio from './components/Portfolio'
import './styles.css'

function App() {
  useEffect(() => {
    // Set initial theme
    document.documentElement.classList.add('light')
  }, [])

  return (
    <main className="min-h-screen bg-background font-sans antialiased">
      <Portfolio />
    </main>
  )
}

export default App