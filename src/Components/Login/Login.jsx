import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");  // برای نمایش پیغام خطا
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8888/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          email: email,
          password: password,
        }),
      });

      const result = await response.text();
      console.log("Server response:", result);

      if (result === "Login successful") {

        localStorage.setItem("user", JSON.stringify({ email }));
        navigate("/dashboard");
      } else if (result === "You should sign up first") {
       
        setErrorMessage("You should sign up first");
      } else {
   
        setErrorMessage(result);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="Login-container">
      <div className="list-container">
        <h3>Login</h3>
        <ul>
          <li>
            <span>Email</span>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
            />
          </li>
          <li>
            <span>Password</span>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" 
            />
          </li>
        </ul>
        <button className="SUbtn" onClick={handleSubmit}>Login</button>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} {/* نمایش پیام خطا */}
      </div>
    </div>
  );
}

export default Login;
