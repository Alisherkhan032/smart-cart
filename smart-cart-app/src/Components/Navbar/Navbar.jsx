import cart_icon from "../Assets/cart_icon.png";
import logo from "../Assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState("");
  const {getTotalCartItems} = useContext(ShopContext);
  // console.log('number is ',getTotalCartItems())

  // Set the menu based on the current path
  useEffect(() => {
    switch (location.pathname) {
      case "/shop":
        setMenu("ShopAll");
        break;
      case "/men":
        setMenu("ShopMen");
        break;
      case "/women":
        setMenu("ShopWomen");
        break;
      case "/kid":
        setMenu("ShopKids");
        break;
      case "/contact":
        setMenu("Contact");
        break;
      default:
        setMenu("");
    }
  }, [location.pathname]);

  return (
    <nav>
      <div className="title">
        <img src={logo} alt="logo" />
        <h2>
          <Link to="/">Smart Cart</Link>
        </h2>
      </div>
      <div className="links">
        <ul>
          <li
            className="hover-underline-animation"
          >
            <Link to="/shop">Home</Link>
            {menu === "ShopAll" && <hr />}
          </li>

          <li
            className="hover-underline-animation"
          >
            <Link to="/men">Men</Link>
            {menu === "ShopMen" && <hr />}
          </li>

          <li
            className="hover-underline-animation"
          >
            <Link to="/women">Women</Link>
            {menu === "ShopWomen" && <hr />}
          </li>

          <li
            className="hover-underline-animation"
          >
            <Link to="/kid">Kids</Link>
            {menu === "ShopKids" && <hr />}
          </li>

          <li
            className="hover-underline-animation"
          >
            <Link to="/contact">Contact</Link>
            {menu === "Contact" && <hr />}
          </li>
        </ul>
      </div>
      <div className="login">
        <ul>
          <li>
            <Link to="/login-signup">
              <button>Sign In</button>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <img src={cart_icon} alt="cart-icon" />
            </Link>
            <span className="item-number">{getTotalCartItems()}</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
