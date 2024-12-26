import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="list-container">
      <h3>Sign Up</h3>
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

export default Signup;
