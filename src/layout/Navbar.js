import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import LanguageDropdown from "./LanguageDropdown";

class Navbar extends React.Component {
  changeLanguage = (language) => {
    // Implement your language change logic here
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-hoge-vucht fixed-top txt-white" style={{ height: "75px", borderBottomRightRadius: "20px", borderBottomLeftRadius: "20px" }}>
        <LanguageDropdown />

        <div className="container-fluid justify-content-center">
          <Link className="navbar-brand" to="/">
            Activities
          </Link>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="150" style={{ marginTop: "75px", border: "5px solid #f9f4fa", borderRadius: "50%", position: "ab", userSelect: "none" }} draggable="false" />
          </Link>
          <Link className="navbar-brand" to="/hello">
            Fortnite
          </Link>
        </div>
        <Link className="navbar-brand" to="/">
          Inloggen
        </Link>
      </nav>
    );
  }
}

export default Navbar;
