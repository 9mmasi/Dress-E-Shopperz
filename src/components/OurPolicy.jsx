import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className="policy-container">
  <div className="policy-item">
    <img src={assets.exchange_icon} alt="Exchange" className="policy-icon" />
    <p className="policy-title">Easy Exchange Policy</p>
    <p className="policy-subtitle">We offer hassle free exchange policy</p>
  </div>

  <div className="policy-item">
    <img src={assets.quality_icon} alt="Quality" className="policy-icon" />
    <p className="policy-title">7 Days Return Policy</p>
    <p className="policy-subtitle">We provide 7 days free return policy</p>
  </div>

  <div className="policy-item">
    <img src={assets.support_img} alt="Support" className="policy-icon" />
    <p className="policy-title">Best Customer Support</p>
    <p className="policy-subtitle">We provide 24/7 customer support</p>
  </div>
</div>
  )
}

export default OurPolicy