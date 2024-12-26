import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    const userData = { name, password };

    try {
        const response = await fetch("http://localhost/user.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });

      const result = await response.json();
      if (result.success) {
        alert("User added successfully!");
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="list-container">
        <h3>Sign Up</h3>
        <ul>
          <li>
            <span>Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </li>
          <li>
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <button className="SUbtn" onClick={handleSubmit}>Done</button>
        </ul>
      </div>
    </div>
  );
}

export default Signup;
