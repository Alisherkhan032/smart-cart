import { data_object_trending_products } from "../Assets/data/data_trending_products_women";
import { data_object_trending_products_men} from "../Assets/data/data_trending_products_men";
import {data_object_trending_products_child} from '../Assets/data/data_trending_products_child'
import Item from "../Item/Item";
import "./Trending.css";

const Trending = () => {
  return (
    <div className="trending">
        <div className="trending_women">
            <h1>Trending in Women</h1>
            <hr />
            <div className="trending-item">
            {data_object_trending_products.map((item, i) => {
                return <Item itemInfo={item} key={i} />;
            })}
            </div>
        </div>

        <div className="trending_men">
            <h1>Trending in Men</h1>
            <hr />
            <div className="trending-item">
              {data_object_trending_products_men.map((item, i)=>{
                return <>
                  <Item itemInfo={item} key={i} />
                  
                </>
              })}
            </div>
        </div>

        <div className="trending_men">
            <h1>Trending in Kids</h1>
            <hr />
            <div className="trending-item">
              {data_object_trending_products_child.map((item, i)=>{
                return <Item itemInfo={item} key={item.id} />
              })}
            </div>
        </div>

    </div>
  );
};

export default Trending;
