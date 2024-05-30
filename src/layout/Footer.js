import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer class="footer mt-5">
      <hr className="w-75 container-fluid justify-content-center" />
      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <h5>{t("community")}</h5>
            <ul class="footer-links">
              <li>
                <a class="link">{t("activities")}</a>
              </li>
              <li>
                <a class="link">{t("volunteering")}</a>
              </li>
              <li>
                <a class="link">{t("initiatives")}</a>
              </li>
              <li>
                <a class="link">{t("resources")}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2">
            <h5>{t("hoge-vucht")}</h5>
            <ul class="footer-links">
              <li>
                <a class="link">{t("neighbourhood-point")}</a>
              </li>
              <li>
                <a class="link">{t("history")}</a>
              </li>
              <li>
                <a class="link">{t("news")}</a>
              </li>
              <li>
                <a class="link">{t("location")}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2">
            <h5>{t("doughnut")}</h5>
            <ul class="footer-links">
              <li>
                <a class="link">{t("about")}</a>
              </li>
              <li>
                <a class="link">{t("principles")}</a>
              </li>
              <li>
                <a class="link">{t("resources")}</a>
              </li>
              <li>
                <a class="link">{t("tools")}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2">
            <h5>{t("legal")}</h5>
            <ul class="footer-links">
              <li>
                <a class="link">{t("legal-disclaimer")}</a>
              </li>
              <li>
                <a class="link">{t("privacy-policy")}</a>
              </li>
              <li>
                <a class="link">{t("terms-of-service")}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>{t("latest-news")}</h5>
            <div className="footer-newsletter row">
              <div className="col-md-10">
                <input type="email" className="form-control" placeholder="E-mail" />
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary">{t("subscribe")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center copyright bg-hoge-vucht txt-white">© 2024 Copyright: Hoge Vucht Donut</div>
    </footer>
  );
}

export default Footer;
