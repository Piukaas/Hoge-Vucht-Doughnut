import React from "react";
import { useTranslation } from "react-i18next";

const Principles = () => {
  const { t } = useTranslation();

  return (
    <div className="section-secondary">
      <h2>{t("doughnutPrinciples")}</h2>
      <p>{t("principlesDescription")}</p>

      <div className="row container-fluid justify-content-center">
        <div className="col-md-4 mb-20">
          <div className="feature-box row align-items-center">
            <div className="col-md-2">
              <i className="fas fa-stroopwafel fa-2xl"></i>
            </div>
            <div className="col-md-10">
              <h3>{t("principle1Title")}</h3>
              <p>{t("principle1Description")}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-20">
          <div className="feature-box row align-items-center">
            <div className=" col-md-2">
              <i className="fas fa-earth-europe fa-2xl"></i>
            </div>
            <div className="col-md-10">
              <h3>{t("principle2Title")}</h3>
              <p>{t("principle2Description")}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-20">
          <div className="feature-box row align-items-center">
            <div className=" col-md-2">
              <i className="fas fa-people-group fa-2xl"></i>
            </div>
            <div className="col-md-10">
              <h3>{t("principle3Title")}</h3>
              <p>{t("principle3Description")}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-20">
          <div className="feature-box row align-items-center">
            <div className=" col-md-2">
              <i className="fas fa-circle-nodes fa-2xl"></i>
            </div>
            <div className="col-md-10">
              <h3>{t("principle4Title")}</h3>
              <p>{t("principle4Description")}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-20">
          <div className="feature-box row align-items-center">
            <div className=" col-md-2">
              <i className="fas fa-paper-plane fa-2xl"></i>
            </div>
            <div className="col-md-10">
              <h3>{t("principle5Title")}</h3>
              <p>{t("principle5Description")}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-20">
          <div className="feature-box row align-items-center">
            <div className=" col-md-2">
              <i className="fas fa-recycle fa-2xl"></i>
            </div>
            <div className="col-md-10">
              <h3>{t("principle6Title")}</h3>
              <p>{t("principle6Description")}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-20">
          <div className="feature-box row align-items-center">
            <div className=" col-md-2">
              <i className="fas fa-chart-line fa-2xl"></i>
            </div>
            <div className="col-md-10">
              <h3>{t("principle7Title")}</h3>
              <p>{t("principle7Description")}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-20">
          <div className="feature-box row align-items-center">
            <div className=" col-md-2">
              <i className="fas fa-chart-pie fa-2xl"></i>
            </div>
            <div className="col-md-10">
              <h3>{t("principle8Title")}</h3>
              <p>{t("principle8Description")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Principles;
