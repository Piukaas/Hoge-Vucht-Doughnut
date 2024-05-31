import React, { useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import doughnut3 from "../images/doughnut3.png";
import SectionNavigation from "./SectionNavigation";
import Doughnut from "./Doughnut";
import Introduction from "./Introduction";
import Principles from "./Principles";

const DoughnutMain = () => {
  const { t } = useTranslation();
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);

  const sectionRefs = useMemo(() => [sectionRef1, sectionRef2, sectionRef3, sectionRef4], []);

  const handleScrollTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 75,
      behavior: "smooth",
    });
  };

  const handleNavClick = (index) => (event) => {
    event.preventDefault();
    handleScrollTo(sectionRefs[index]);
  };

  return (
    <div id="about">
      <div className="row">
        <div className="col-md-7">
          <div ref={sectionRefs[0]}>
            <h1>{t("aboutDoughnutEconomics")}</h1>
            <p>{t("aboutDescription")}</p>
          </div>
          <nav className="nav-section">
            <ul className="nav-list no-bullets">
              <li>
                <a className="link" href="#about" onClick={handleNavClick(0)}>
                  1. {t("aboutDoughnutEconomics")}
                </a>
              </li>
              <li>
                <a className="link" href="#introduction" onClick={handleNavClick(1)}>
                  2. {t("Introduction")}
                </a>
              </li>
              <li>
                <a className="link" href="#doughnut" onClick={handleNavClick(2)}>
                  3. {t("whatIsTheDoughnut")}
                </a>
              </li>
              <li>
                <a className="link" href="#principles" onClick={handleNavClick(3)}>
                  4. {t("doughnutPrinciples")}
                </a>
              </li>
            </ul>
          </nav>
          <SectionNavigation currentIndex={0} handleNavClick={handleNavClick} />
        </div>

        <div className="col-md"></div>
        <img src={doughnut3} alt="Doughnut" className="col-md-4 details-image" />
      </div>

      <div id="introduction" ref={sectionRefs[1]}>
        <hr />
        <Introduction />
        <SectionNavigation currentIndex={1} handleNavClick={handleNavClick} />
      </div>
      <div id="doughnut" ref={sectionRefs[2]}>
        <hr />
        <Doughnut />
        <SectionNavigation currentIndex={2} handleNavClick={handleNavClick} />
      </div>
      <div id="principles" ref={sectionRefs[3]}>
        <hr />
        <Principles />
        <SectionNavigation currentIndex={3} handleNavClick={handleNavClick} />
      </div>
    </div>
  );
};

export default DoughnutMain;
