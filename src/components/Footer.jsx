import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
<footer className="footer-container">
  <div className="footer-content">
    
    <div className="footer-column brand-col">
      <img className="footer-logo" src={assets.logo} alt="Forever Logo" />
      <p className="footer-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>

    <div className="footer-column">
      <p className="footer-heading">COMPANY</p>
      <ul className="footer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About us</a></li>
        <li><a href="/delivery">Delivery</a></li>
        <li><a href="/privacy">Privacy policy</a></li>
      </ul>
    </div>

    <div className="footer-column">
      <p className="footer-heading">GET IN TOUCH</p>
      <ul className="footer-contact">
        <li>+1-212-456-7890</li>
        <li>contact@foreveryou.com</li>
      </ul>
    </div>
    
  </div>

  <div className="footer-bottom">
    <hr className="footer-divider" />
    <p className="copyright-text">Copyright {new Date().getFullYear()} @ Gemini&I - All Right Reserved.</p>
  </div>
</footer>  )
}

export default Footer