import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Services from './components/Services'

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#111217] font-sans text-[#f5f5f5]">
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute left-0 top-28 h-px w-full bg-gradient-to-r from-transparent via-[#d6bd68]/30 to-transparent" />
        <div className="absolute right-10 top-0 h-full w-px bg-gradient-to-b from-[#d6bd68]/30 via-transparent to-transparent" />
        <div className="absolute -right-20 top-40 h-80 w-80 rotate-45 border border-[#d6bd68]/10" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
