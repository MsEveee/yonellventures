import React from 'react'
import Navbar from '../../shared/Navbar'
import Hero from '../../components/HomePage/Hero'
import About from '../../components/HomePage/About'
import Footer from '../../shared/Footer'
import Service from '../../components/HomePage/Service'
import Review from '../../components/HomePage/Review'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Review/>
        {/* <Service/> */}
        <Footer/>
    </div>
  )
}
 
export default HomePage