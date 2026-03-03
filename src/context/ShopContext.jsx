import { createContext, useState } from "react";
import {products}  from "../assets/assets";

export const shopContext = createContext()

const ShopContextProvider = ({children}) => {
    const[showSearch,setShowSearch] = useState(false)
    const[searchTerm,setSearchTerm] = useState('')
    const currencySymbol='$'
    const deliveryCharge=5

    const value = {
        products,
        currencySymbol,
        deliveryCharge,
        showSearch,
        setShowSearch,
        searchTerm,
        setSearchTerm
    }
    return (
        <shopContext.Provider value={value}>
            {children}
        </shopContext.Provider>
    )
}
export default ShopContextProvider