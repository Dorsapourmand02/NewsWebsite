import React from 'react'
import logo from "/Users/dori/News website/src/assets/logo.png"
import "./Navbar.css"

function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo-nav">
            <img src={logo} alt="" />
        </div>
        <div className="log-nav">
            <div className="login">
                <button>login</button>
            </div>
            <div className="signup">
                <button>signup</button>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
