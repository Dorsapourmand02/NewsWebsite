import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Header from './Components/Header/Header.jsx'
import Carousel from './Components/Slider/Carousel.jsx'
import Footer from './Components/Footer/Footer.jsx'
import News from './Components/Newspart/News.jsx'
// import Login from './Components/Login/Login.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sigunup from './Components/Signup/Signup.jsx'
import Login from './Components/Login/Login.jsx'

createRoot(document.getElementById('root')).render(

    
  <StrictMode>
    <Navbar/>
    {/* <Header/>
    <Carousel/>
    <News/> */}
    {/* <Sigunup/> */}
    <Login/>
    <Footer/>

  </StrictMode>,
)
