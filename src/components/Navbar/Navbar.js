import React from "react";
import "./button.css";
import "./index.css";

export function Navbar() {
  return (
    <nav className="NavbarItens">
      <h1>ARCADAFÉ</h1>
      <div id="menuToggle">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="toggle">
          <div className="bar bar--top"></div>
          <div className="bar bar--middle"></div>
          <div className="bar bar--bottom"></div>
        </label>
      </div>
    </nav>
  );
}
