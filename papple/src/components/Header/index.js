import React, {useState} from "react";
import './header.scss';
import logo from '../../assets/images/logo/logo.png';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  const showSearch = (e) => {
    e.preventDefault();
    setIsOpen(true)
  }

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="topnav" id="myTopnav">
        <a href="#home" className="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
      {isOpen == true ? <div className="search-container">
        <input type="text" placeholder="Search.." name="search"/>
        <button onClick={showSearch}>Search</button>
          </div>
        :null}
      <div className="rightnav" >
        <a href="/e" onClick={showSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </a>
        <a href="/">
          <i className="fa-solid fa-basket-shopping"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;