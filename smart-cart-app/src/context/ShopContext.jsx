import { createContext, useState, useEffect } from "react";
import all_products from "../Components/Assets/data/all_product";

export const ShopContext = createContext(null);

// initialize the cart object with an empty object, as the cart is empty initially
const getDefaultCart = ()=>{
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : {};
}

const ShopContextProvider = ({children}) => {
    const [cart, setCart] = useState(getDefaultCart());

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    //* This cart variable will be a key-value pair, where key is the ID of the product, and value would be the number of times, it is added to cart.

    const addProductToCart = (productId)=>{
        let newCart = { ...cart, [productId]: (cart[productId] || 0) + 1 };
        setCart(newCart);
        // setCart((prevCart)=>{
        //     return {
        //         ...prevCart,
        //         [productId] : (prevCart[productId] || 0) + 1
        //     }
        // })
    }

    const removeProductFromCart = (productId)=>{
        setCart((prevCart)=>{
            // Check if the product is in the cart or not, if not => return
            if(!prevCart[productId]){
                return prevCart; //Do nothing
            }
    
            // If the product quantity is 1, remove the product from the cart
            if(prevCart[productId] === 1){
                const newCart = { ...prevCart }; 
                delete newCart[productId];   
                return newCart;
            }

            // otherwise decrement quanity by 1
            return {
                ...prevCart,           // Copy the previous cart
                [productId]: prevCart[productId] - 1  // Decrement the quantity of the specified product
            };
        })

    }

    const getTotalCartItems = ()=>{
        let totalItems = 0;
        for(let item in cart){
            if(cart[item]>0){
                totalItems += cart[item];
            }
        }
        return totalItems;
    }

    const contextValue = { getTotalCartItems,all_products, cart, addProductToCart, removeProductFromCart };

    return ( 
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
     );
}
 
export default ShopContextProvider;