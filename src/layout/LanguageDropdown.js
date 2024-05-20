import React, { useState } from "react";
import dutch from "../images/dutch.svg";
import english from "../images/english.svg";

function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div style={{ position: "relative" }} onClick={toggleOpen} className="btn dropdown-toggle">
      <img src={dutch} alt="Dutch flag" />
      {isOpen && (
        <div class="bg-hoge-vucht" style={{ position: "absolute", zIndex: 1, paddingRight: 5, paddingLeft: 10, marginTop: 20, borderBottomRightRadius: "20px", borderBottomLeftRadius: "20px" }}>
          <p style={{ textAlign: "left", marginLeft: 0 }}>
            <img src={dutch} alt="Dutch flag" />
            Nederlands
          </p>
          <p style={{ textAlign: "left", marginLeft: 0 }}>
            <img src={english} alt="English flag" />
            English
          </p>
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
