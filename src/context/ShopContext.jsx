import { createContext } from "react";
import {products}  from "../assets/assets";

export const shopContext = createContext()

const ShopContextProvider = ({children}) => {
    const currencySymbol='$'
    const deliveryCharge=5

    const value = {
        products,
        currencySymbol,
        deliveryCharge
    }
    return (
        <shopContext.Provider value={value}>
            {children}
        </shopContext.Provider>
    )
}
export default ShopContextProvider