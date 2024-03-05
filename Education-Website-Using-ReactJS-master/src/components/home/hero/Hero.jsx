import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"


const Hero = () => {

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO Learn In UK' title='Unleash Your Potential: Your UK University Journey Starts Here.' />
            <p>Confused about navigating the UK university application process? We're here to guide you every step of the way. Our website provides comprehensive resources, expert advice, and personalized support to help you find the perfect program, craft a compelling application, and secure your dream admission.</p>
            <div className='button'>
              <button className='primary-btn'>
                Plan Your Studies <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button to="/universities" className="btn" >
                View Universities <i className=' fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
