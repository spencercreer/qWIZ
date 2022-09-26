import React from "react";

function Nav() {
  return (
    <header className="header">
      <h1 className="h-6 w-auto hover:text-green-500 duration-200">qWIZ</h1>
      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="nav-link">
            <p >Highscores</p>
          </li>
          <li className="nav-link">
            <p >Profile</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
