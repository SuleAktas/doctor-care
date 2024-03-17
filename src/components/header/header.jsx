import React, { useState } from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";

function Header() {
  const headerImage = process.env.PUBLIC_URL + "/images/headerIcon.png";

  const { t } = useTranslation();

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
          {t("headerLink1")}
        </a>
        <a href="#">{t("headerLink2")}</a>
        <a href="#">{t("headerLink3")}</a>
        <a href="#">{t("headerLink4")}</a>
      </div>
      <div className="button-wider-page">
        <div className="info-button2">
          <div className="info-btn-text2"> {t("headerButton")}</div>
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
        <a href="#">{t("headerLink1")}</a>
        <a href="#">{t("headerLink2")}</a>
        <a href="#">{t("headerLink3")}</a>
        <a href="#">{t("headerLink4")}</a>
        <div className="header-button">
          <div className="header-btn-text"> {t("headerButton")}</div>
        </div>
      </div>

      <div className="menu-button">
        <button className="icon-button" onClick={openNav}>
          <img src={headerImage} alt=" Header Icon" />
        </button>
      </div>
    </div>
  );
}

export default Header;
