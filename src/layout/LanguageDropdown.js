import React, { useState, useEffect } from "react";
import dutch from "../images/dutch.svg";
import english from "../images/english.svg";
import { useTranslation } from "react-i18next";

function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();

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
    <div onClick={toggleOpen} className="btn dropdown-toggle">
      <img src={flag} alt="Flag" className="toggle" />
      {isOpen && (
        <div className="bg-hoge-vucht language-dropdown">
          <p className="align-left language" onClick={() => changeLanguage("nl")}>
            <img src={dutch} className="mr-10" alt="Dutch flag" />
            {t("dutch")}
          </p>
          <hr />
          <p className="align-left language" onClick={() => changeLanguage("en")}>
            <img src={english} className="mr-10" alt="English flag" />
            {t("english")}
          </p>
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
