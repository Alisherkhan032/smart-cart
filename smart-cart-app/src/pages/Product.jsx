import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProduct/RelatedProduct";

const Product = () => {
    const { id } = useParams();   
    const {all_products} = useContext(ShopContext);
    const product = all_products.find(product => product.id === Number(id) )

    return ( 
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox />
            <RelatedProducts category={product.category}/>
            
        </div>
     );
}
 
export default Product;