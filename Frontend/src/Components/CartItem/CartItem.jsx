import './Cartitem.css'

import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart/cart_cross_icon.png';

const CartItem = () => {
    const { all_products, cart, removeProductFromCart } = useContext(ShopContext);
    const cartItems = Object.keys(cart); //* cart is object of key:value where key is productID and value is number of items
    
    const totalCost = Object.entries(cart).reduce((acc, [productId, quantity]) => {
        const product = all_products.find(product => product.id === parseInt(productId));
        return acc + (product ? product.new_cost * quantity : 0);
    }, 0);
    return (
        <div className="cartitems">
            <div className="cartitems-header">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            {cartItems.map((productId) => {
                const product = all_products.find(product => product.id === Number(productId));
                return (
                    <div key={productId} className="cartitem">
                        <img src={product.image} alt={product.name} />
                        <p>{product.name}</p>
                        <p>₹{product.new_cost}</p>
                        <p>{cart[productId]}</p>
                        <p>₹{product.new_cost * cart[productId]}</p>
                        <img src={remove_icon} alt="remove" onClick={() => removeProductFromCart(productId)} />
                    </div>
                );
            })}

            <div className="cartitems-bottom">
                <div className="cart-summary">
                    <div className="cart-summary-item">
                        <span className="label">SubTotal:</span>
                        <span className="value">₹{totalCost.toFixed(2)}</span>
                    </div>
                    <div className="cart-summary-item">
                        <span className="label">Shipping:</span>
                        <span className="value">FREE</span>
                    </div>
                    <div className="cart-summary-item">
                        <span className="label">Total:</span>
                        <span className="value">₹{totalCost.toFixed(2)}</span>
                    </div>
                    <div className="cartitems-bottom-promocode">
                        <input type="text" placeholder="Promo Code" />
                        <button>Apply</button>
                    </div>
                    <div>
                        <button className="checkout-button">Checkout</button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default CartItem;