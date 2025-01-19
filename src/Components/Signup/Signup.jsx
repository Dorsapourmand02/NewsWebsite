import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");  // برای نمایش پیغام خطا
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8888/signup.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          email: email,
          password: password,
          username: username,
        }),
      });

      const result = await response.text();
      console.log("Server response:", result);

      if (result === "User already exists!") {
        // اگر ایمیل تکراری بود، پیغام خطا را نمایش بده
        setErrorMessage("User already exists!");
      } else if (result === "New record created successfully") {
        // اگر ثبت‌نام موفقیت‌آمیز بود، اطلاعات کاربر را ذخیره و به داشبورد برو
        localStorage.setItem("user", JSON.stringify({ email, username }));
        navigate("/dashboard");
      } else {
        // اگر خطای دیگری رخ داد
        setErrorMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
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
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="SUbtn" type="submit">Sign Up</button>
      </form>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} {/* نمایش پیام خطا */}
    </div>
  );
}

export default Signup;
