import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8888/phpMyAdmin5/index.php?route=/sql&db=News-web&table=users&pos=0") // Replace with the correct URL to your PHP script
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return <></>;
}

export default App;
