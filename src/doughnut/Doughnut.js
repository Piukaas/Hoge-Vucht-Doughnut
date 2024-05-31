import React from "react";
import { useTranslation } from "react-i18next";
import { Chart, ArcElement, CategoryScale } from "chart.js";
import doughnut2 from "../images/doughnut2.jpg";

Chart.register(ArcElement, CategoryScale);

const DoughnutChart = () => {
  const { t } = useTranslation();

  return (
    <div className="section row">
      <img src={doughnut2} alt="Doughnut" className="col-md-4 details-image" />
      <div className="col-md"></div>

      <div className="col-md-7">
        <h2>{t("whatIsTheDoughnut")}</h2>
        <p>{t("doughnutDescription.part1")}</p>
        <p>{t("doughnutDescription.part2")}</p>
        <p>{t("doughnutDescription.part3")}</p>
      </div>
    </div>
  );
};

export default DoughnutChart;
