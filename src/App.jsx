import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Collection from './pages/Collection'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import { CartProvider } from 'use-shopping-cart';

const App = () => {
  return (
    <div className='container'>
      <NavBar />
      <Searchbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<div style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          marginTop:'10rem',
          textAlign:'center',
          fontSize:'2rem',
          fontWeight:'bold'
        }}>404 - Page Not Found</div>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App