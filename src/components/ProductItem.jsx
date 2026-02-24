import React from 'react'
import { Link } from 'react-router-dom'
import { shopContext } from '../context/ShopContext'

const ProductItem = ({product}) => {
    const {_id,name,price,image} = product
    const{currencySymbol}= React.useContext(shopContext)
  return (
    <Link to={`/product/${_id}`} className="product-item">
  <div className="product-image-container">
    <img 
      src={image[0]} 
      alt={name} 
      className="product-image"
    />
  </div>

  <p className="product-name">{name}</p>
  <p className="product-price">{currencySymbol}{price}</p>
</Link>
  )
}

export default ProductItem