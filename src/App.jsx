import Navbar from './components/navbar';
import Hero from './components/hero';
import Stats from './components/stats';
import PerformanceMetrics from './components/PerformanceMetrics';
import Projects from './components/projects';
import Education from './components/education';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <PerformanceMetrics />
        <Projects />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App;