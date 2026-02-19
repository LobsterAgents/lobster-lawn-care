import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-warm-900">
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <ContactForm />
      <Footer />
    </div>
  )
}
