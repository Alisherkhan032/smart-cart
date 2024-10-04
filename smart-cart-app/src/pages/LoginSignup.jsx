import React from "react";
import "./CSS/LoginSignUp.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form className="loginsignup-form">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I accept the <a href="/terms">terms and conditions</a>
            </label>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default App;
