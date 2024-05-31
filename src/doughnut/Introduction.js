import React from "react";
import { useTranslation } from "react-i18next";
import books from "../images/books.jpg";

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <div className="section row">
      <div className="col-md-6">
        <h1>{t("introduction")}</h1>
        <p>{t("introductionDescription.part1")}</p>
        <p>{t("introductionDescription.part2")}</p>
        <p>{t("introductionDescription.part3")}</p>
        <p>{t("introductionDescription.part4")}</p>
      </div>

      <div className="col-md"></div>
      <img src={books} alt="Books" className="col-md-5 details-image" />
    </div>
  );
};

export default Introduction;
