import React from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";
import "./App.css";
import backgroundTomato2 from "./images/background/bg_tomato2.jpg";
import Recipes from "components/Recipes";
import Gallery from "components/Gallery";
import Game from "components/Game";

function App() {
  const location = useLocation();

  // Home 페이지일 때만 home 클래스 추가
  const isHome = location.pathname === "/";

  return (
    <div
      className={`app ${isHome ? "home" : ""}`}
      style={{ backgroundImage: isHome ? `url(${backgroundTomato2})` : "none" }}
    >
      <header className="app-header">
        <div className="nav-bar">
          <nav>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
              About
            </NavLink>
            <NavLink to="/recipes" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Recipes
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Gallery
            </NavLink>
            <NavLink to="/game" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Game
            </NavLink>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<div className="app-title">Welcome to tomatomato.</div>} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
