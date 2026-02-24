import React from 'react'

const NewsLetter = () => {
  return (
    <div className="newsletter-container">
  <div className="text-center">
    <p className="newsletter-title">Subscribe now & get 20% off</p>
    
    <p className="newsletter-subtitle">
      Stay updated with our latest collections and exclusive offers.
    </p>

    <form className="newsletter-form">
      <input type="email" placeholder="Enter your email" required className="newsletter-input" />
      <button type="submit" className="newsletter-button">SUBSCRIBE</button>
    </form>
  </div>
</div>
  )
}

export default NewsLetter