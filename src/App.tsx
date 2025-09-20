import { FC } from 'react'
import { AnimatedBackground } from './components/AnimatedBackground'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

const App: FC = () => {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App