import React from 'react'
import { assets } from '../assets/assets'


const Hero = () => {
  return (
    <div class="hero-container">
  <div class="hero-left">
    <div class="hero-content-wrapper">
      <div class="hero-flex-row">
        <p class="hero-line-thick"></p>
        <p class="hero-text-sm">OUR BESTSELLERS</p>
      </div>
      <h1 class="hero-title">Latest Arrivals</h1>
      <div class="hero-flex-row">
        <p class="hero-text-sm">SHOP NOW</p>
        <p class="hero-line-thin"></p>
      </div>
    </div>
  </div>

  <img src={assets.hero_img} className="hero-img" alt="Fashion Hero" />
</div>
  )
}

export default Hero