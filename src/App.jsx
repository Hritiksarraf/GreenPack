import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'

import Testimonial from './components/Testimonial/Testimonial'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Footer from './components/Footer/Footer'
import Contact_us from './components/contactUs/Contact_us'
import View from './components/view/View'
import { BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    
    <>
    <BrowserRouter>
      <Navbar/>
      <Hero/>
      <View/>
      <Services/>
      {/* <Banner/> */}
      <Testimonial/>
      <Contact_us/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
