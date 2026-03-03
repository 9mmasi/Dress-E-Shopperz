import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shopContext } from '../context/ShopContext';

const Product = () => {
  const { id } = useParams();
  const { products } = useContext(shopContext);
  const [product, setProduct] = useState(null);
  
  // 1. STATE FOR MAIN IMAGE (NEW)
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const foundProduct = products.find(item => item._id === id);
    setProduct(foundProduct);
    
    // 2. SET INITIAL MAIN IMAGE
    if (foundProduct && foundProduct.image && foundProduct.image.length > 0) {
      setMainImage(foundProduct.image[0]);
    }
  }, [id, products]);

  if (!product) return <div className="loading-state">Loading...</div>;

  return (
    <div className="product-page-container">
      <div className="product-wrapper">
        
        {/* --- LEFT: Image Gallery Section (NEW LAYOUT) --- */}
        <div className="gallery-section">
          
          {/* Thumbnails List */}
          <div className="thumbnail-list">
            {product.image.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`${product.name} view ${index + 1}`} 
                // 3. CLICK TO UPDATE MAIN IMAGE
                onClick={() => setMainImage(img)}
                // Dynamic active border class
                className={`thumbnail-item ${img === mainImage ? 'active' : ''}`}
              />
            ))}
          </div>

          {/* Main (Active) Image Container */}
          <div className="main-image-container">
            <img 
              src={mainImage} // Displays the current selected image
              alt={product.name} 
              className="main-product-image"
            />
          </div>
        </div>

        {/* --- RIGHT: Details Section (Unchanged) --- */}
        <div className="details-section">
          <h1 className="product-title">{product.name}</h1>
          
          <div className="price-row">
            <p className="product-price">${product.price}</p>
            {product.bestseller && (
              <span className="bestseller-badge">Bestseller</span>
            )}
          </div>

          <p className="product-desc">
            {product.description}
          </p>

          <hr className="divider" />

          {/* Size Selection */}
          <div className="size-selection">
            <p className="section-label">Select Size</p>
            <div className="size-list">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`size-button ${size === selectedSize ? 'active' : ''}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="add-to-cart-btn">
            Add to Cart
          </button>

          <div className="policy-footer">
             <p>100% Original product.</p>
             <p>Cash on delivery is available on this product.</p>
             <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;