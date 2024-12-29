import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { email, password, name };

    const response = await fetch("http://localhost/signup.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(userData),
    });

    const data = await response.text();
    console.log(data); // بررسی پاسخ از سرور
  };

  return (
    <div className="Signup_container">
      <form className="list-container" onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="SUbtn" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
