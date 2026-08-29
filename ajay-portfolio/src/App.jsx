import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import RecentWorks from './components/RecentWorks.jsx'
import Experience from './components/Experience.jsx'
import Services from './components/Services.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="relative bg-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <RecentWorks />
        <Experience />
        <Services />
      </main>
      <Footer />
    </div>
  )
}

export default App
