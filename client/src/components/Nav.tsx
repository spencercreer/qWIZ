import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">qWIZ</Link>
      </h1>
      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="nav-link">
            <Link to="/highscores">Highscores</Link>
          </li>
          <li className="nav-link">
            <Link to="/highscores">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
