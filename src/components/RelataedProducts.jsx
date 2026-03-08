import React, { useContext, useEffect, useState } from 'react';
import { shopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import Title from './Title';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(shopContext);
  const [related, setRelated] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length > 0) {
      // Filter by category and subCategory to find similar items
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

      setRelated(productsCopy.slice(0, 5)); // Limit to 5 items
    }
  }, [products, category, subCategory]);

  return (
    <div className="related-products-section">
      <div className="related-title">
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>
      
      <div className="related-grid">
        {related.map((item, index) => (
          <div 
            key={index} 
            className="product-card" 
            onClick={() => {
              navigate(`/product/${item._id}`);
              window.scrollTo(0, 0); // Scroll to top when clicking new product
            }}
          >
            <div className="card-image-wrapper">
              <img src={item.image[0]} alt={item.name} />
            </div>
            <p className="card-name">{item.name}</p>
            <p className="card-price">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;