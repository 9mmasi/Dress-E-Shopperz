import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <Link to='/'><img src={assets.logo} className="logo" alt="Logo" /></Link>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          <NavLink to="/" className="nav-item">Home<hr className="nav-underline" /></NavLink>
          <NavLink to="/collection" className="nav-item">Collection<hr className="nav-underline" /></NavLink>
          <NavLink to="/about" className="nav-item">About<hr className="nav-underline" /></NavLink>
          <NavLink to="/contact" className="nav-item">Contact<hr className="nav-underline" /></NavLink>
        </ul>

        <div className="nav-container">
          <img src={assets.search_icon} className="icon" alt="Search" />

          <div className="profile-group">
            <img src={assets.profile_icon} className="icon" alt="Profile" />
            <div className="dropdown-menu">
              <div className="menu-content">
                <p className="menu-item">My Profile</p>
                <p className="menu-item">Orders</p>
                <p className="menu-item">Logout</p>
              </div>
            </div>
          </div>

          <Link to="/cart" className="cart-container">
            <img src={assets.cart_icon} className="icon" alt="Cart" />
            <p className="cart-badge">0</p>
          </Link>

          {/* Mobile Menu Icon */}
          <img onClick={() => setVisible(true)} src={assets.menu_icon} className="menu-toggle-icon" alt="" />
        </div>
      </div>

      {/* --- Sidebar Menu for Small Screens --- */}
      <div className={`mobile-sidebar ${visible ? 'show' : ''}`}>
        <div className="sidebar-content">
          <div onClick={() => setVisible(false)} className="sidebar-back">
            <img src={assets.dropdown_icon} className="back-icon" alt="" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="sidebar-link" to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className="sidebar-link" to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className="sidebar-link" to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className="sidebar-link" to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavBar