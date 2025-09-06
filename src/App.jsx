import './App.css'
import Header from './components/Header'
import Hero from './components/HeroSection'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import WorkProcess from './components/WorkProcess'
import Team from './components/Team'
import ContactUs from './components/ContantUs'
import Testimonials from './components/Testimonals'
import Footer from './components/Footer'

function App() {

  return (
    <div className="app">
    <Header/>
    <Hero/>
    <Services/>
    <CaseStudies/>
    <WorkProcess/>
    <Team/>
    <Testimonials/>
    <ContactUs/>
    <Footer/>
    </div>
  )
}

export default App
