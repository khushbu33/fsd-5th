import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header" style={{ padding: "10px", background: "#222", color: "white" }}>
      <h2>WatchStore ⌚</h2>
      <nav className="nav" style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Products</Link>
      </nav>
    </header>
  );
}

export default Header;

