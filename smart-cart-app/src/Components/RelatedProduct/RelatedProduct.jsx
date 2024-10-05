import './RelatedProduct.css';
import Item from '../Item/Item';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext'

function getRelatedProductsForCategory(category, products) {
    const category_products = products.filter(product => product.category === category);
    const related_products = [];
    const related_product_ids = [];
    while (related_products.length < 4 && category_products.length > 0) {
        const random_product = category_products[Math.floor(Math.random() * category_products.length)];
        if (!related_product_ids.includes(random_product.id)) {
            related_products.push(random_product);
            related_product_ids.push(random_product.id);
        }
    }
    return related_products;
}

const RelatedProducts = ({ category }) => {
    const {all_products} = useContext(ShopContext);
    const related_product_data = getRelatedProductsForCategory(category, all_products);

    return (
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-items">
                {
                    related_product_data.map(product => {
                        return <Item key={product.id} itemInfo={product} />
                    })
                }
            </div>
        </div>
    );
}

export default RelatedProducts;