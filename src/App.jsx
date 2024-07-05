import React from 'react'
import Nav from './components/Nav'
import HeroSection from './sections/HeroSection'
import PopularSection from './sections/PopularSection'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import SpecialOffers from './sections/SpecialOffers'
import CustomersReviews from './sections/CustomersReviews'
import Subscribe from './sections/Subscribe'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main className='relative'>
        <Nav/>
        <HeroSection/>
        <PopularSection/>
        <SuperQuality/>
        <Services/>
        <SpecialOffers/>
        <CustomersReviews/>
        <Subscribe/>
        <Footer/>
    </main>
  )
}

export default App