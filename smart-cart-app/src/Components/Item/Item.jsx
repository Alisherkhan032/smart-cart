import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ itemInfo }) => {
  // I wanted to scroll to top whenever i click on a dress. filhaal wo decription khol deta hai meaning last part of page
  const handleClick = ()=>{
    window.scrollTo({
      top : 0,
      behavior : "instant"
    })
  }

  console.log('item is ',itemInfo)
  return (
    <div className="item">
        <Link to={`/product/${itemInfo.id}`} onClick={handleClick}>
          <img src={itemInfo.image} alt={itemInfo.name} className="item-image" />
          <h3>{itemInfo.name}</h3>
          <div className="item-cost">
            <div className="item-cost-new">₹{itemInfo.new_cost}</div>
            <div className="item-cost-old">₹{itemInfo.old_cost}</div>   
          </div>
        </Link>
    </div>
  );
};

export default Item;

/**
 * const { id } = useParams();
    const all_products = useContext(ShopContext);
    const product = all_products.find(product => product.id == id);
 */
