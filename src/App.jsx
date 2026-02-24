import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import About from './pages/About'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='container'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="*" element={<div style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          marginTop:'25%'
        }}>404 - Page Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App