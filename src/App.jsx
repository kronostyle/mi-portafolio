import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/stats';
import PerformanceMetrics from './components/PerformanceMetrics';
import Projects from './components/Projects';
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