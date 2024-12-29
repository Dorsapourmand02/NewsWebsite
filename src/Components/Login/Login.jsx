import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="Login-container">
      <div className="list-container">
      <h3>Login</h3>
        <ul>
          <li>
            <span>Name</span>
            <input type="text" />
          </li>
          <li>
            <span>Password</span>
            <input type="password" />
          </li>
          <button className="SUbtn">Done</button>
        </ul>
      </div>
    </div>
  );
}

export default Login;