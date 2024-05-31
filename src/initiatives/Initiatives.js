import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Initiatives = () => {
  const { t } = useTranslation();
  const [initiatives, setInitiatives] = useState([]);
  const [filteredInitiatives, setFilteredInitiatives] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("name-asc");

  const [currentPage, setCurrentPage] = useState(1);
  const initiativesPerPage = 6;

  const filterInitiatives = useCallback(
    (initiativesData) => {
      let filtered = initiativesData;

      if (searchQuery) {
        filtered = filtered.filter((initiative) => initiative.name.toLowerCase().includes(searchQuery.toLowerCase()));
      }

      if (sortOption === "name-asc") {
        filtered.sort((a, b) => (a.name && b.name ? a.name.localeCompare(b.name) : 0));
      } else if (sortOption === "name-desc") {
        filtered.sort((a, b) => (a.name && b.name ? b.name.localeCompare(a.name) : 0));
      }

      setFilteredInitiatives(filtered);
      setCurrentPage(1);
    },
    [searchQuery, sortOption]
  );

  useEffect(() => {
    axios.get("/data/initiatives.json").then((response) => {
      const data = response.data;
      setInitiatives(data);
      setFilteredInitiatives(data);
      filterInitiatives(data);
    });
  }, [filterInitiatives]);

  useEffect(() => {
    filterInitiatives(initiatives);
  }, [initiatives, filterInitiatives]);

  const indexOfLastInitiative = currentPage * initiativesPerPage;
  const indexOfFirstInitiative = indexOfLastInitiative - initiativesPerPage;
  const currentInitiatives = filteredInitiatives.slice(indexOfFirstInitiative, indexOfLastInitiative);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredInitiatives.length / initiativesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <div className="container">
        <h2 className="text-center">{t("initiatives")}</h2>
        <p className="text-center">{t("initiativesDescription")}</p>

        <div className="filter-row mb-4">
          <div className="row">
            <div className="col-md-4 mb-3 d-flex align-items-center">
              <i className="fa fa-search mr-5"></i>
              <input type="text" className="form-control" placeholder={t("searchByName")} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>

            <div className="col-md mb-3"></div>
            <div className="col-md-3 mb-3 d-flex align-items-center">
              <i className="fa-solid fa-sort mr-5"></i>
              <select className="form-control" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="">{t("sortBy")}</option>
                <option value="name-asc">{t("sortByNameA-Z")}</option>
                <option value="name-desc">{t("sortByNameZ-A")}</option>
              </select>
            </div>
            <hr />
          </div>
        </div>

        <div className="row">
          {currentInitiatives.length > 0 ? (
            currentInitiatives.map((initiative) => (
              <Link className="card-box col-md-4 mb-4" key={initiative.id} to="">
                <div className="feature-box">
                  <img src={initiative.imageUrl} alt={initiative.name} className="img-fluid mb-2" />
                  <h3>{initiative.name}</h3>
                  <p className="mt-1">{initiative.goal}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-12">
              <p>{t("noInitiativesFound")}</p>
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

export default Initiatives;
