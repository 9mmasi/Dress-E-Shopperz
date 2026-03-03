import { useLocation } from 'react-router-dom';
import { assets } from '../assets/assets'
import { shopContext } from '../context/ShopContext'
import React, { useContext, useEffect} from 'react';

const Searchbar = () => {
  const { showSearch, setShowSearch, searchTerm, setSearchTerm } = useContext(shopContext);
  const[visibility, setVisibility] = React.useState(false)
  
  const location=useLocation()

  useEffect(() => {
    if(location.pathname.includes('collection')&& showSearch){
      setVisibility(true)
    }
    else{      
      setVisibility(false)
    }
  }, [location, showSearch])
  

  return showSearch && visibility? (
    <div className="search-bar-container">
      <div className="search-input-wrapper">
        <input 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          type="text" 
          placeholder="Search" 
          className="search-input-field"
        />
        <img src={assets.search_icon} className="search-icon-img" alt="search" />
      </div>
      <img 
        onClick={() => setShowSearch(false)} 
        src={assets.cross_icon} 
        className="search-close-icon" 
        alt="close" 
      />
    </div>
  ) : null;
};
export default Searchbar;

