import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import { CartProvider } from 'use-shopping-cart'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <CartProvider
      stripe={import.meta.env.VITE_STRIPE_KEY}
      currency="USD"
      shouldPersist
    >
      <ShopContextProvider>
      <App />
    </ShopContextProvider>
    </CartProvider>
    
    </BrowserRouter>
  </StrictMode>,
)
