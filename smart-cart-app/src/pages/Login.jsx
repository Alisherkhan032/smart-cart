import React from "react";
import "./CSS/LoginSignUp.css";

const App = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>
        <form className="loginsignup-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default App;
