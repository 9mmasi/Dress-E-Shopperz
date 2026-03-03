import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import { shopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const [showFilter, setShowFilter] = React.useState(false)
  const [filteredProducts, setFilteredProducts] = React.useState([])
  const [Category, setCategory] = React.useState([])
  const [Type, setType] = React.useState([])
  const[sortType, setSortType] = React.useState('relevant')
  const{searchTerm,showSearch}= useContext(shopContext)
  const toggleCategory=(e)=>{
    if(Category.includes(e.target.value)){
      setCategory(Category.filter((item) => item !== e.target.value))
    } else {
      setCategory([...Category, e.target.value])
    }
  }
    const toggleType=(e)=>{  
      if(Type.includes(e.target.value)){
        setType(Type.filter((item) => item !== e.target.value))
      } else {
        setType([...Type, e.target.value])
      }
    } 
    
    
  const {products}= useContext(shopContext)
  const applyFilterAndSort = () => {
    let productsCopy = products.slice();
  // 1. Apply Filtering
    if(searchTerm&&showSearch){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    if (Category.length > 0) {
      productsCopy = productsCopy.filter(item => Category.includes(item.category));
    }
    if (Type.length > 0) {
      productsCopy = productsCopy.filter(item => Type.includes(item.subCategory));
    }

    // 2. Apply Sorting
    switch (sortType) {
      case 'low-high':
        setFilteredProducts(productsCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilteredProducts(productsCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        setFilteredProducts(productsCopy);
        break;
    }
  }
  useEffect(() => {
    applyFilterAndSort();
  },[Category, Type,sortType,searchTerm,showSearch])
  return (
    <div className="filter-container">
      {/* Filter Options */}
      <div className="filter-sidebar">
        <p 
          onClick={() => setShowFilter(!showFilter)} 
          className="filter-title"
        >
          FILTERS <img  src={assets.dropdown_icon} className={`dropdown-icon ${showFilter ? 'rotate' : ''}`} alt="Filter Icon" />
        </p>

        {/* Category Filter */}
        <div className={`category-box ${showFilter ? '' : 'hidden'}`}>
          <p className="category-header">CATEGORIES</p>
          <div className="checkbox-group">
            
            <label className="checkbox-item">
              <input type="checkbox" value="Men" onChange={toggleCategory} /> Men
            </label>
            
            <label className="checkbox-item">
              <input type="checkbox" value="Women" onChange={toggleCategory} /> Women
            </label>
            
            <label className="checkbox-item">
              <input type="checkbox" value="Kids" onChange={toggleCategory} /> Kids
            </label>
            
          </div>
        </div>
        {/**sub categorie */}
      <div className={`category-box ${showFilter ? '' : 'hidden'}`}>
          <p className="category-header">TYPES</p>
          <div className="checkbox-group">
            
            <label className="checkbox-item">
              <input type="checkbox" value="Topwear" onChange={toggleType} /> Topwear
            </label>
            
            <label className="checkbox-item">
              <input type="checkbox" value="Bottomwear" onChange={toggleType}/> Bottomwear
            </label>
            
            <label className="checkbox-item">
              <input type="checkbox" value="Winterwear" onChange={toggleType} /> Winterwear
            </label>
            
          </div>
          
        </div>
        
      </div>
  
          {/* Right Side */}
<div className="right-side-container">
  
  <div className="collection-header">
    <Title text1={'ALL'} text2={'COLLECTIONS'} />
    
    {/* Product Sort */}
    <select onChange={(e)=>setSortType(e.target.value)} className="sort-dropdown">
      <option value="relevant">Sort by: Relevant</option>
      <option value="low-high">Sort by: Low to High</option>
      <option value="high-low">Sort by: High to Low</option>
    </select>
  </div>
  <div className="collection-right">
  
 

  {/* Product Grid */}
  <div className="product-grid">
    {filteredProducts.map((product) => (
      <ProductItem 
        key={product._id} 
        product={product}
      />
    ))}
  </div>
</div>

</div>
    </div>
  )
}

export default Collection