import React from 'react';
import { useContext } from 'react';
import {ShopContext} from '../context/ShopContext'
import './CSS/ShopCategory.css'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';

const ShopCategory = ({category, banner}) => {
    const products = useContext(ShopContext);
    const category_products = products.filter(prod => prod.category === category)
    console.log(products)
    return ( 
        <div className="shop-category">
            <img className='shopcategory-banner' src={banner} alt={category} />
            <div className="shopcategory-index-sort">
                <p>
                    <span>showing 1-12</span> out of {category_products.length} products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="dropdown" />
                </div>
            </div>

            <div className="shopcategory-products">
                {
                    category_products.map((prod,idx)=>(
                        <Item key={idx} itemInfo = {prod}/>
                    ))
                }
            </div>

        </div>

        
     );
}
 
export default ShopCategory;