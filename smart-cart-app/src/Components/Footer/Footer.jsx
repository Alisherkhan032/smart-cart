import './Footer.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
    return ( 
        <footer className='footer'>
            <div className="first-line">
                <img src={logo} alt="logo" />
                <p>smart cart</p>
            </div>
            <div className="second-line">
                <Link to='/'>Company</Link>
                <Link to='/'>Product</Link>
                <Link to='/'>Offices</Link>
                <Link to='/'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div className="third-line socials">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-pinterest"></i>
                <i className="fab fa-instagram"></i>
            </div>
            <div className="line"></div>
            <div className="forth-line">
                <p>&copy; 2024 Smart Cart. All rights reserved.</p>
            </div>
        </footer>
     );
}
 
export default Footer;
