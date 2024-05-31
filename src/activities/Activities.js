import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Activities = () => {
  const { t } = useTranslation();
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [sortOption, setSortOption] = useState("date-asc");
  const [statusFilter, setStatusFilter] = useState("upcoming");
  const [startDate, setStartDate] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const activitiesPerPage = 6;

  const filterActivities = useCallback(
    (activitiesData) => {
      let filtered = activitiesData;

      if (searchQuery) {
        filtered = filtered.filter((activity) => activity.title.toLowerCase().includes(searchQuery.toLowerCase()));
      }

      if (selectedTag) {
        filtered = filtered.filter((activity) => activity.tags.some((tag) => tag.name === selectedTag));
      }

      if (statusFilter) {
        filtered = filtered.filter((activity) => activity.status === statusFilter);
      }

      if (startDate) {
        const selectedDate = new Date(startDate);
        filtered = filtered.filter((activity) => {
          const activityDate = new Date(activity.startDate);
          return activityDate.getDate() === selectedDate.getDate() && activityDate.getMonth() === selectedDate.getMonth() && activityDate.getFullYear() === selectedDate.getFullYear();
        });
      }

      if (sortOption === "name-asc") {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortOption === "name-desc") {
        filtered.sort((a, b) => b.title.localeCompare(a.title));
      } else if (sortOption === "date-asc") {
        filtered.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
      } else if (sortOption === "date-desc") {
        filtered.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
      }

      setFilteredActivities(filtered);
      setCurrentPage(1);
    },
    [searchQuery, selectedTag, sortOption, statusFilter, startDate]
  );

  useEffect(() => {
    axios.get("/data/activities.json").then((response) => {
      const data = response.data;
      setActivities(data);
      const uniqueTags = [...new Set(data.flatMap((activity) => (Array.isArray(activity.tags) ? activity.tags.map((tag) => tag.name) : [])))];
      setTags(uniqueTags);
      setFilteredActivities(data);
      filterActivities(data);
    });
  }, [filterActivities]);

  useEffect(() => {
    filterActivities(activities);
  }, [activities, filterActivities]);

  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = filteredActivities.slice(indexOfFirstActivity, indexOfLastActivity);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredActivities.length / activitiesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

  return (
    <section>
      <div className="container">
        <h2 className="text-center">{t("activities")}</h2>
        <p className="text-center">{t("activitiesDescription")}</p>

        <div className="filter-row mb-4">
          <div className="row">
            <div className="col-md-3 mb-3 d-flex align-items-center">
              <i className="fa fa-search mr-5"></i>
              <input type="text" className="form-control" placeholder={t("searchByTitle")} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <div className="col-md-2 mb-3">
              <select className="form-control" value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
                <option value="">{t("filterByTag")}</option>
                {tags.map((tag) => (
                  <option key={tag} value={tag}>
                    {t(tag)}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2 mb-3">
              <select className="form-control" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="">{t("filterByStatus")}</option>
                <option value="upcoming">{t("upcoming")}</option>
                <option value="cancelled">{t("cancelled")}</option>
                <option value="finished">{t("finished")}</option>
              </select>
            </div>
            <div className="col-md-2 mb-3">
              <input type="date" className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div className="col-md-3 mb-3 d-flex align-items-center">
              <i className="fa-solid fa-sort mr-5"></i>
              <select className="form-control" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="">{t("sortBy")}</option>
                <option value="name-asc">{t("sortByNameA-Z")}</option>
                <option value="name-desc">{t("sortByNameZ-A")}</option>
                <option value="date-asc">{t("sortDateAscending")}</option>
                <option value="date-desc">{t("sortDateDescending")}</option>
              </select>
            </div>
            <hr />
          </div>
        </div>

        <div className="row">
          {currentActivities.length > 0 ? (
            currentActivities.map((activity) => (
              <Link className="card-box col-md-4 mb-4" key={activity.id} to={{ pathname: `${activity.id}` }}>
                <div className="feature-box">
                  <img src={activity.imageUrl} alt={activity.title} className="img-fluid mb-2" />
                  <h3 className="align-center">{activity.title}</h3>
                  <div className="tags">
                    <span className={`badge ${getBadgeClass(activity.status)} mr-5`}>{t(activity.status)}</span>-
                    {Array.isArray(activity.tags)
                      ? activity.tags
                          .filter((tag) => tag.type === "targetAudience")
                          .map((tag) => (
                            <span key={tag.name} className="badge badge-secondary ml-5">
                              {tag.name === "children" ? (
                                <i className="fa fa-baby"></i>
                              ) : tag.name === "youth" ? (
                                <i className="fa fa-children"></i>
                              ) : tag.name === "adults" ? (
                                <i className="fa fa-user"></i>
                              ) : tag.name === "seniors" ? (
                                <i className="fa fa-person-cane"></i>
                              ) : tag.name === "weelchairAccessible" ? (
                                <i className="fa fa-wheelchair"></i>
                              ) : null}
                            </span>
                          ))
                      : null}
                  </div>
                  <p className="mt-1">{activity.description}</p>
                  <p>
                    <strong>{t("startDate")}</strong> {new Date(activity.startDate).toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })}
                  </p>
                  <div className="tags">
                    {Array.isArray(activity.tags)
                      ? activity.tags
                          .filter((tag) => tag.type === "activityType")
                          .map((tag) => (
                            <span key={tag.name} className="badge badge-primary mr-5">
                              {t(tag.name)}
                            </span>
                          ))
                      : null}
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-12">
              <p>{t("noActivitiesFound")}</p>
            </div>
          )}
        </div>

        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            {pageNumbers.map((number) => (
              <li key={number} className={`page-item ${number === currentPage ? "active" : ""}`}>
                <a
                  href="/"
                  className="page-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(number);
                  }}
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Activities;
