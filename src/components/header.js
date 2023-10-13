import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Header(props) {
  return (
    <div className="header">
      <nav className="navbar bg-body-tertiary justify-content-center">
        <div>
          <span className="navbar-brand mb-0 h1">My Todo-App</span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
