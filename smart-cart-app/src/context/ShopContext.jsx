import { createContext } from "react";
import all_products from "../Components/Assets/data/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = ({children}) => {
    const products = all_products;
    return ( 
        <ShopContext.Provider value={products}>
            {children}
        </ShopContext.Provider>
     );
}
 
export default ShopContextProvider;