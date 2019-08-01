import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navbar">
      <h1>React Router Mini</h1>
      <div className="nav-item">
        <Link className="Nav-link btn-warning" to="/">Home</Link>
      </div>
      <div className="nav-item">
        <Link className="Nav-link btn-info" to="/About">About</Link>
      </div>
      <div className="nav-item">
        <Link className="Nav-link btn-danger" to="/Contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navigation;
