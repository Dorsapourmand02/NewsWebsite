import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Header from "./Components/Header/Header.jsx";
import Carousel from "./Components/Slider/Carousel.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import News from "./Components/Newspart/News.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import Login from "./Components/Login/Login.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";

// Layout اصلی برای صفحات عمومی
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <Header />
    <Carousel />
    <News />
    {children}
    <Footer />
  </>
);

// Layout ساده برای صفحات خاص و Dashboard
const SimpleLayout = ({ children }) => <>{children}</>;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* صفحات عمومی با Layout کامل */}
        <Route
          path="/"
          element={
            <MainLayout>
              <App />
            </MainLayout>
          }
        />

        {/* صفحات خاص با Layout ساده */}
        <Route
          path="/signup"
          element={
            <SimpleLayout>
              <Signup />
            </SimpleLayout>
          }
        />
        <Route
          path="/login"
          element={
            <SimpleLayout>
              <Login />
            </SimpleLayout>
          }
        />

        {/* داشبورد با Layout ساده */}
        <Route
          path="/dashboard"
          element={
            <SimpleLayout>
              <Dashboard />
            </SimpleLayout>
          }
        />
      </Routes>
    </Router>
  </StrictMode>
);
