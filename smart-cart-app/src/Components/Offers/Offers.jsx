import Exclusive_img from "../Assets/exclusive_image.png";
import './Offers.css';

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Only For You</h1>
                <p>ON THE BEST SELLERS</p>
                <button>Check 'em out</button>
            </div>
            <div className="offers-right">
                <img src={Exclusive_img} alt="exclusive_image" className="exclusive_image" />
            </div>
        </div>
    );
}

export default Offers;
