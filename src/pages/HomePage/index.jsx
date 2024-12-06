import React from 'react'
import Navbar from '../../shared/Navbar'
import Hero from '../../components/HomePage/Hero'
import About from '../../components/HomePage/About'
import Footer from '../../shared/Footer' 
import Review from '../../components/HomePage/Review'
import Products from '../../components/HomePage/Products'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Products/>
        <Review/>
        <Footer/>
    </div>
  )
}
 
export default HomePage