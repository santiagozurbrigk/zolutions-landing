import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Process from './components/Process'
import Benefits from './components/Benefits'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <AboutUs />
      <Services />
      <Process />
      <Benefits />
      <CaseStudies />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
