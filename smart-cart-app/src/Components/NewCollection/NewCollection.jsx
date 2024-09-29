import data from '../Assets/data/exclusive_data';
import Item from '../Item/Item';
import './NewCollection.css'

const App = () => {
    return ( 
        <div className="new-collection">
            <h1>New Collection</h1>
            <hr />
            <div className="new-collection-item">
                {data.map((item,i)=>{
                    return <Item key={i} itemInfo = {item} />
                })}
            </div>
        </div>
     );
}
 
export default App;