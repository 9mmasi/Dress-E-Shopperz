import React from 'react'
import { shopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
    const {products} = React.useContext(shopContext)
    const [bestSellers,setBestSellers] = React.useState([])
    React.useEffect(() => {
        const bestSellerProducts = products.filter(product => product.bestseller)
        setBestSellers(bestSellerProducts.slice(0,5))
    }, [products])  
  return (
    <section className="best-sellers-section">
  <div className="best-sellers-header">
    <Title text1={'BEST'} text2={'SELLERS'} />
    
    <p class="best-sellers-desc">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
    </p>
  </div>
   {/* Product Grid would go here */}
      <div className="product-grid">
        {bestSellers.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </div>
</section>
  )
}

export default BestSeller