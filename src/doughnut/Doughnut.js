import React from "react";
import { useTranslation } from "react-i18next";
import { Chart, ArcElement, CategoryScale } from "chart.js";

Chart.register(ArcElement, CategoryScale);

const DoughnutChart = () => {
  const { t } = useTranslation();

  return (
    <div className="section-primary">
      <h2>{t("whatIsTheDoughnut")}</h2>
      <p>{t("doughnutDescription")}</p>
    </div>
  );
};

export default DoughnutChart;
