import React from "react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  return (
    <section className="feature-heading mt-10">
      <div className="container">
        <h2 className="text-center">{t("welcomeMessage")}</h2>
        <p className="text-center">{t("introMessage")}</p>
        <div className="row">
          <div className="col-md-6 mb-20">
            <div className="feature-box row align-items-center">
              <div className="icon-container col-md-2">
                <i className="fas fa-kiwi-bird fa-2xl"></i>
              </div>
              <div className="col-md-10">
                <h3>{t("funnyIncidentTitle")}</h3>
                <p>{t("funnyIncidentDescription")}</p>
                <button className="btn btn-primary">{t("readMore")}</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-20">
            <div className="feature-box row align-items-center">
              <div className="icon-container col-md-2">
                <i className="fas fa-bullhorn fa-2xl"></i>
              </div>
              <div className="col-md-10">
                <h3>{t("libraryOpeningTitle")}</h3>
                <p>{t("libraryOpeningDescription")}</p>
                <button className="btn btn-primary">{t("learnMore")}</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-20">
            <div className="feature-box row align-items-center">
              <div className="icon-container col-md-2">
                <i className="fas fa-bullseye fa-2xl"></i>
              </div>
              <div className="col-md-10">
                <h3>{t("currentGoalTitle")}</h3>
                <p>{t("currentGoalDescription")}</p>
                <button className="btn btn-primary">{t("getInvolved")}</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-20">
            <div className="feature-box row align-items-center">
              <div className="icon-container col-md-2">
                <i className="fas fa-file-lines fa-2xl"></i>
              </div>
              <div className="col-md-10">
                <h3>{t("newDataTitle")}</h3>
                <p>{t("newDataDescription")}</p>
                <button className="btn btn-primary">{t("viewData")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
