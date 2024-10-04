import handIcon from '../Assets/hand_icon.png';
import arrowIcon from '../Assets/arrow_icon.png';
import heroPng from '../Assets/hero_image.png';
import './Hero.css';

const Hero = () => {
    return ( 
        <div className='hero'>
            <div className="left-hero">
                <div>
                    <div className="hand-icon-div">
                        <img src={handIcon} alt="handIconPng" />
                        <p>Smart</p>
                    </div>
                    <p>collections</p>
                    <p>for smart GEN</p>
                </div>

                <div className='button-div'>
                    <span>Latest Collection</span>
                    <img src={arrowIcon} alt="" />
                </div>
            </div>
            <div className="right-hero">
                <img src={heroPng} alt="heroPng" />
            </div>
        </div>
     );
}
 
export default Hero;