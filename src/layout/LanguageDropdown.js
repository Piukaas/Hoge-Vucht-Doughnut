import React, { useState, useEffect } from "react";
import dutch from "../images/dutch.svg";
import english from "../images/english.svg";
import { useTranslation } from "react-i18next";

function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t, ready } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };

  const flag = i18n.language === "nl" ? dutch : english;

  return (
    <div onClick={toggleOpen} className="btn dropdown-toggle position-relative">
      <img src={flag} alt="Flag" />
      {isOpen && (
        <div className="bg-hoge-vucht language-dropdown">
          <p onClick={() => changeLanguage("nl")}>
            <img src={dutch} alt="Dutch flag" />
            {t("dutch")}
          </p>
          <p onClick={() => changeLanguage("en")}>
            <img src={english} alt="English flag" />
            {t("english")}
          </p>
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
