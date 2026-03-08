import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { 
    cartCount, 
    cartDetails, 
    removeItem, 
    incrementItem, 
    decrementItem, 
    totalPrice, 
    redirectToCheckout 
  } = useShoppingCart();

  const handleCheckout = async (event) => {
    event.preventDefault();

    if (cartCount > 0) {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.error(result.error.message);
      }
    } else {
      alert("Your cart is empty");
    }
  };

  // Convert the object to an array to map through items
  const cartItems = Object.values(cartDetails ?? {});

  if (cartCount === 0) {
    return (
      <div className="product-page-container" style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2 className="product-title">Your cart is empty</h2>
        <p className="product-desc">Looks like you haven't added anything yet.</p>
        <Link to="/" className="add-to-cart-btn" style={{ textDecoration: 'none', display: 'inline-block', marginTop: '20px' }}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="product-page-container">
      {/* Title Header matching the Tab style */}
      <div className="tab-header" style={{ marginBottom: '30px', borderBottom: '1px solid #ddd' }}>
        <h1 className="tab-item active" style={{ fontSize: '1.5rem', paddingBottom: '10px' }}>
          YOUR CART
        </h1>
      </div>

      <div className="product-wrapper" style={{ alignItems: 'flex-start' }}>
        
        {/* --- LEFT: Cart Items List --- */}
        <div className="gallery-section" style={{ flex: '1.5', display: 'block' }}>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-row" style={{ display: 'flex', gap: '20px', padding: '20px 0', borderBottom: '1px solid #eee' }}>
              
              {/* Product Image - Reusing thumbnail-item style */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="thumbnail-item" 
                style={{ width: '100px', height: '120px', objectFit: 'cover', cursor: 'default' }} 
              />

              <div className="item-details" style={{ flex: 1 }}>
                <h3 className="product-title" style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{item.name}</h3>
                
                {/* DISPLAY SELECTED SIZE FROM METADATA */}
                <p className="section-label" style={{ marginBottom: '10px' }}>
                  Size: <span style={{ color: '#000', fontWeight: '600' }}>{item.product_data?.size || 'N/A'}</span>
                </p>
                
                <p className="product-price" style={{ fontSize: '1.1rem' }}>${item.price}</p>
                
                {/* Quantity Toggles */}
                <div className="quantity-controls" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '15px' }}>
                  <button onClick={() => decrementItem(item.id)} className="size-button" style={{ width: '30px', height: '30px', padding: 0 }}>-</button>
                  <span style={{ fontWeight: 'bold' }}>{item.quantity}</span>
                  <button onClick={() => incrementItem(item.id)} className="size-button" style={{ width: '30px', height: '30px', padding: 0 }}>+</button>
                  
                  <button 
                    onClick={() => removeItem(item.id)} 
                    style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer', fontSize: '0.9rem' }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- RIGHT: Order Summary Section --- */}
        <div className="details-section" style={{ flex: '1', backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '4px' }}>
          <h2 className="section-label" style={{ fontSize: '1.3rem', marginBottom: '20px' }}>Order Summary</h2>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <p className="product-desc">Subtotal</p>
            <p className="product-price" style={{ fontSize: '1rem' }}>${totalPrice}</p>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <p className="product-desc">Shipping Fee</p>
            <p className="product-price" style={{ fontSize: '1rem' }}>FREE</p>
          </div>

          <hr className="divider" style={{ margin: '20px 0' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Total</p>
            <p className="product-price" style={{ fontSize: '1.2rem' }}>${totalPrice}</p>
          </div>

          <button 
            onClick={handleCheckout} 
            className="add-to-cart-btn" 
            style={{ width: '100%', textTransform: 'uppercase', letterSpacing: '1px' }}
          >
            Proceed to Checkout
          </button>

          <div className="policy-footer" style={{ marginTop: '20px' }}>
             <p>• Secure SSL Encrypted Checkout</p>
             <p>• Fast reliable delivery</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;