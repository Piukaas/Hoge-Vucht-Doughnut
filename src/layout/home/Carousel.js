import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";

const CarouselComponent = () => {
  const { t } = useTranslation();

  return (
    <Carousel className="carousel mb-10">
      <Carousel.Item>
        <img className="d-block w-100 no-user-select" src={image1} alt="First slide" />
        <Carousel.Caption className="carousel-caption">
          <h2>{t("carousel-caption1")}</h2>
          <h5>{t("carousel-text1")}</h5>
          <button className="btn btn-primary">{t("read-more")}</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 no-user-select" src={image2} alt="Second slide" />
        <Carousel.Caption className="carousel-caption">
          <h2>{t("carousel-caption2")}</h2>
          <h5>{t("carousel-text2")}</h5>
          <button className="btn btn-primary">{t("read-more")}</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 no-user-select" src={image3} alt="Third slide" />
        <Carousel.Caption className="carousel-caption">
          <h2>{t("carousel-caption3")}</h2>
          <h5>{t("carousel-text3")}</h5>
          <button className="btn btn-primary">{t("read-more")}</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
