import React from "react";
import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <div className="section-secondary">
      <h1>{t("introduction")}</h1>
      <p>{t("introductionDescription")}</p>
    </div>
  );
};

export default Introduction;
