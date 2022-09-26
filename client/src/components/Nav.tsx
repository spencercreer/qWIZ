import React from "react";

function Nav() {
  return (
    <header className="header">
      <h1 className="h-1 w-auto hover:text-green-500 duration-200">qWIZ</h1>
      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <p >Highscores</p>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <p >Profile</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
