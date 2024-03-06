import React, { useState } from "react";
import "./header.css";
import headerImage from "./headerImg.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="header">
      <div className="header-title">
        Doctor<b className="header-title-bold">Care</b>
      </div>
      <div className="links-wider-page">
        <a href="#" className="selected">
          Início
        </a>
        <a href="#">Sobre</a>
        <a href="#">Serviços</a>
        <a href="#">Depoimentos</a>
      </div>
      <div className="button-wider-page">
        <div className="info-button2">
          {" "}
          <div className="info-btn-text2"> AGENDE SUA CONSULTA</div>
        </div>
      </div>
      <div
        id="mySidenav"
        className={`sidenav ${isOpen ? "open" : ""}`}
        style={{ width: isOpen ? "250px" : "0" }}
      >
        <a href="#" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#">Início</a>
        <a href="#">Sobre</a>
        <a href="#">Serviços</a>
        <a href="#">Depoimentos</a>
        <div className="header-button">
          <div className="header-btn-text"> AGENDE SUA CONSULTA</div>
        </div>
      </div>

      <div className="menu-button">
        <button className="icon-button" onClick={openNav}>
          <img src={headerImage} alt=" image" />
        </button>
      </div>
    </div>
  );
}

export default Header;
