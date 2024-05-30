import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg bg-hoge-vucht fixed-top txt-white">
      <LanguageDropdown />

      <div className="container-fluid justify-content-center">
        <Link className="navbar-brand" to="/activities">
          {t("activities")}
        </Link>
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <Link className="navbar-brand" to="/hello">
          {t("doughnut")}
        </Link>
      </div>
      <Link className="navbar-brand" to="/">
        {t("login")}
      </Link>
    </nav>
  );
}

export default Navbar;
