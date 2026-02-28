import React, {  useContext, useEffect } from 'react'
import { shopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
const LatestCollection = () => {
    const [latestProducts,setLatestProducts] = React.useState([])
    const {products} = useContext(shopContext)
    useEffect(() => {
        setLatestProducts(products.slice(0,10))
        
    }, [])
  return (
    <div className='section-spacing'>
      <div className='header-center'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='subtitle-text'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        
      </div>

      {/* Product Grid would go here */}
      <div className="product-grid">
        {latestProducts.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
    </div>
    </div>
  )
}

export default LatestCollection