import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/common/Navbar'
import { Home } from './components/Home'
import { ServicesCarousel } from './components/ServicesCarousel'
import { Aboutus } from './components/Aboutus'
import { CompaniesSection } from './components/CompaniesSection'
import { CaseStudyies } from './components/CaseStudyies'
import { DevelopmentApproach } from './components/DevelopmentApproach'
import { TechStackSection } from './components/TechStackSection'
import { DevelopmentCycle } from './components/DevelopmentCycle'
import { BlogSection } from './components/BlogSection'
import { Footer } from './components/Footer'
import { BuildingSoftwareSection } from './components/BuildingSoftwareSection'
import { Testimonial } from './components/Testimonial'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path = "/" element={

          <>
          <Home/>
          <ServicesCarousel />
          <Aboutus/>
          <CompaniesSection />
          <Testimonial />
          <CaseStudyies/>
          <BuildingSoftwareSection />
          <DevelopmentApproach />
          <TechStackSection/>
          <DevelopmentCycle />
          <BlogSection />
          <Footer />
          </>

        } />
      </Routes>
    </>
  )
}

export default App
