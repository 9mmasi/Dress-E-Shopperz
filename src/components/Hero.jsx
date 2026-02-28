import React from 'react'
import { assets } from '../assets/assets'


const Hero = () => {
  return (
    <div className="hero-container">
  <div className="hero-left">
    <div className="hero-content-wrapper">
      <div className="hero-flex-row">
        <p className="hero-line-thick"></p>
        <p className="hero-text-sm">OUR BESTSELLERS</p>
      </div>
      <h1 className="hero-title">Latest Arrivals</h1>
      <div className="hero-flex-row">
        <p className="hero-text-sm">SHOP NOW</p>
        <p className="hero-line-thin"></p>
      </div>
    </div>
  </div>

  <img src={assets.hero_img} className="hero-img" alt="Fashion Hero" />
</div>
  )
}

export default Hero