import React from "react";
import { useTranslation } from "react-i18next";

const Principles = () => {
  const { t } = useTranslation();

  return (
    <div className="section-secondary">
      <h2>{t("doughnutPrinciples")}</h2>
      <p>{t("principlesDescription")}</p>
    </div>
  );
};

export default Principles;
