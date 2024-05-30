import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg bg-hoge-vucht fixed-top txt-white">
      <div className="container-fluid justify-content-start ml-10">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-person-circle mr-5"></i>
          Thijs
        </Link>
        <LanguageDropdown />
      </div>
      <div className="container-fluid justify-content-center">
        <Link className="navbar-brand" to="/activities">
          {t("activities")}
        </Link>
        <Link className="navbar-brand" to="/initiatives">
          {t("initiatives")}
        </Link>
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <Link className="navbar-brand" to="/doughnut">
          {t("doughnut")}
        </Link>
        <Link className="navbar-brand" to="/news">
          {t("news")}
        </Link>
      </div>
      <div className="container-fluid justify-content-end mr-10">
        <i className="fa fa-search mr-5"></i>
        <div className="search-container form-group">
          <input type="search" className="form-control" placeholder={t("search")} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
