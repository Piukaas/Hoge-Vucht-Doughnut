import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import doughnut from "../images/doughnut.jpg";
import Map from "./Map";
import { useTranslation } from "react-i18next";

const Details = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    fetch("/data/activities.json")
      .then((response) => response.json())
      .then((data) => {
        const foundActivity = data.find((activity) => String(activity.id) === String(id));
        setActivity(foundActivity);
      });
  }, [id]);

  function getBadgeClass(status) {
    switch (status) {
      case "upcoming":
        return "badge-success";
      case "cancelled":
        return "badge-danger";
      case "finished":
        return "badge-warning";
      default:
        return "badge-primary";
    }
  }

  if (!activity) {
    return <div>{t("noActivityFound")}</div>;
  }

  return (
    <div className="row">
      <div className="col-md-12 row mb-20">
        <div className="col-md-8">
          <h2>{activity.title}</h2>
          <p>{activity.description}</p>
          <span className={`badge ${getBadgeClass(activity.status)} mr-5`}>{t(activity.status)}</span>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <ul className="tags">
                {Array.isArray(activity.tags)
                  ? activity.tags
                      .filter((tag) => tag.type === "targetAudience")
                      .map((tag) => (
                        <li key={tag.name} className="mb-1">
                          <span className="badge badge-secondary ml-5">
                            {tag.name === "children" ? (
                              <i className="fa fa-baby mr-5"></i>
                            ) : tag.name === "youth" ? (
                              <i className="fa fa-children mr-5"></i>
                            ) : tag.name === "adults" ? (
                              <i className="fa fa-user mr-5"></i>
                            ) : tag.name === "seniors" ? (
                              <i className="fa fa-person-cane mr-5"></i>
                            ) : tag.name === "weelchairAccessible" ? (
                              <i className="fa fa-wheelchair mr-5"></i>
                            ) : null}
                            {t(tag.name)}
                          </span>
                        </li>
                      ))
                  : null}
              </ul>
            </div>

            <div className="col-md-6">
              <ul className="tags">
                {Array.isArray(activity.tags)
                  ? activity.tags
                      .filter((tag) => tag.type === "activityType")
                      .map((tag) => (
                        <li key={tag.name} className="mb-1">
                          <span className="badge badge-primary mr-5">{t(tag.name)}</span>
                        </li>
                      ))
                  : null}
              </ul>
            </div>
          </div>
        </div>
        <img className="col-md-4 details-image" src={doughnut} alt="Doughnut" />
      </div>

      <div className="feature-box col-md-7">
        <Map address={`${activity.address.street} ${activity.address.number}, ${activity.address.postal} ${activity.address.city}, The Netherlands`} />
        <h4 className="mt-1">{t("address")}</h4>
        <p className="mt-1">
          {activity.address.street} {activity.address.number}, {activity.address.postal} {activity.address.city}
        </p>
      </div>

      <div className="col-md"></div>

      <div className="feature-box col-md-4">
        <img src={activity.imageUrl} alt={activity.title} className="img-fluid " />
        <h4 className="mt-1">{t("contactInformation")}</h4>
        <p>
          {t("name")}
          {activity.contactInfo.name}
        </p>
        <p>
          {t("initiative")}
          {activity.contactInfo.organisation}
        </p>
        <p>
          {t("phone")}
          <a className="link" href={`tel:${activity.contactInfo.phone}`}>
            {activity.contactInfo.phone}
          </a>
        </p>
        <p>
          {t("email")}
          <a className="link" href={`mailto:${activity.contactInfo.email}`}>
            {activity.contactInfo.email}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Details;
