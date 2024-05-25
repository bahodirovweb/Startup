import React from 'react'
import Hero from '../../components/Hero/Hero'
import Partners from '../../components/partners/Partners'
import Team from '../../components/Team/Team'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div>
        <Hero/> 
        <Partners/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default Home
