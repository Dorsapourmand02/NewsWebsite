import React from 'react'
import logo from "/Users/dori/News website/src/assets/logo.png"
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo-nav">
            <img src={logo} alt="" />
        </div>
        <div className="log-nav">
            <div className="login">
                <Link to={"/login"} target='_blank'>
                  <button>login</button>
                
                </Link>
            </div>
            <div className="signup">
                <Link to={"/Signup"} target='_blank'>
                
                <button>signup</button>
                </Link>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar