import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelataedProducts';
import { useShoppingCart } from 'use-shopping-cart';

const Product = () => {
  const { id } = useParams();
  const { products } = useContext(shopContext);
  const [product, setProduct] = useState(null);
  const { addItem } = useShoppingCart();
  
  const [mainImage, setMainImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const foundProduct = products.find(item => item._id === id);
    setProduct(foundProduct);
    
    if (foundProduct && foundProduct.image && foundProduct.image.length > 0) {
      setMainImage(foundProduct.image[0]);
    }
  }, [id, products]);

  // --- UPDATED ADD TO CART LOGIC ---
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first!");
      return;
    }

    // Create a unique ID combining product ID and size
    // This prevents adding 10 separate items; it increments quantity instead
    const cartItemId = `${product._id}-${selectedSize}`;

    addItem({
      name: product.name,
      id: cartItemId, // The unique key for the cart
      price: product.price,
      currency: 'USD',
      image: mainImage,
      // Metadata allows us to display the size in the Cart UI later
      product_data: {
        size: selectedSize,
        category: product.category
      }
    });
  };

  if (!product) return <div className="loading-state">Loading...</div>;

  return (
    <div className="product-page-container">
      <div className="product-wrapper">
        
        {/* LEFT: Image Gallery */}
        <div className="gallery-section">
          <div className="thumbnail-list">
            {product.image.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`${product.name} view ${index + 1}`} 
                onClick={() => setMainImage(img)}
                className={`thumbnail-item ${img === mainImage ? 'active' : ''}`}
              />
            ))}
          </div>

          <div className="main-image-container">
            <img 
              src={mainImage} 
              alt={product.name} 
              className="main-product-image"
            />
          </div>
        </div>

        {/* RIGHT: Details Section */}
        <div className="details-section">
          <h1 className="product-title">{product.name}</h1>
          
          <div className="price-row">
            <p className="product-price">${product.price}</p>
            {product.bestseller && (
              <span className="bestseller-badge">Bestseller</span>
            )}
          </div>

          <p className="product-desc">{product.description}</p>

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

          {/* UPDATED BUTTON CALL */}
          <button onClick={handleAddToCart} className="add-to-cart-btn">
            Add to Cart
          </button>

          <div className="policy-footer">
             <p>100% Original product.</p>
             <p>Cash on delivery is available on this product.</p>
             <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      <div className="description-review-section">
        <div className="tab-header">
          <b className="tab-item active">Description</b>
          <p className="tab-item">Reviews (122)</p>
        </div>
        
        <div className="tab-content">
          <p>An e-commerce website is an online platform that facilitates buying and selling...</p>
          <p>Each product usually has its own dedicated page with relevant information.</p>
        </div>
      </div>

      <RelatedProducts category={product.category} subCategory={product.subCategory} />
    </div>
  );
};

export default Product;