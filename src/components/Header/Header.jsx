import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {

  return (
    <div className="header">
      <div className="logo">
        <Link to={'/'}><a href="" >LOGO</a></Link>
      </div>
      <div className="navs">
        <Link to={'/about'}><a href="">ABOUT</a></Link>
        <Link to={'/products'}><a href="">PRODUCTS</a></Link>
        <a href="">RAMAZAN</a>
      </div>

      <div className="bars">
        <i class="fa-solid fa-bars-staggered bars-icon"></i>
      </div>
    </div>
  );
};

export default Header;
