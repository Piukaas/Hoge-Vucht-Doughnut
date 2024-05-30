import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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

  useEffect(() => {
    axios.get("/data/activities.json").then((response) => {
      const data = response.data;
      setActivities(data);
      const uniqueTags = [...new Set(data.flatMap((activity) => activity.tags))];
      setTags(uniqueTags);
      setFilteredActivities(data); // Initially set filtered activities to all activities
      filterActivities(data);
    });
  }, []);

  useEffect(() => {
    filterActivities(activities); // Pass the activities state to filterActivities
  }, [searchQuery, selectedTag, sortOption, statusFilter, startDate]);

  const filterActivities = (activitiesData) => {
    let filtered = activitiesData;

    if (searchQuery) {
      filtered = filtered.filter((activity) => activity.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (selectedTag) {
      filtered = filtered.filter((activity) => activity.tags.includes(selectedTag));
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
    setCurrentPage(1); // Reset to the first page whenever filters change
  };

  // Calculate the activities for the current page
  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
  const currentActivities = filteredActivities.slice(indexOfFirstActivity, indexOfLastActivity);

  // Calculate the page numbers for the pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredActivities.length / activitiesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="feature-heading">
      <div className="container">
        <h2 className="text-center">Feature Heading</h2>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.</p>

        <div className="filter-row mb-4">
          <div className="row">
            <div className="col-md-4 mb-3 d-flex align-items-center">
              <i className="fa fa-search mr-5"></i>
              <input type="text" className="form-control" placeholder="Search by title" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <div className="col-md-2 mb-3">
              <select className="form-control" value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
                <option value="">Filter by tag</option>
                {tags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-2 mb-3">
              <select className="form-control" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                <option value="">Filter by status</option>
                <option value="upcoming">Upcoming</option>
                <option value="cancelled">Cancelled</option>
                <option value="finished">Finished</option>
              </select>
            </div>
            <div className="col-md-2 mb-3">
              <input type="date" className="form-control" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div className="col-md-2 mb-3 d-flex align-items-center">
              <i className="fa-solid fa-sort mr-5"></i>
              <select className="form-control" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                <option value="">Sort by</option>
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                <option value="date-asc">Date Ascending</option>
                <option value="date-desc">Date Descending</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          {currentActivities.length > 0 ? (
            currentActivities.map((activity) => (
              <div key={activity.id} className="col-md-4 mb-4">
                <div className="feature-box">
                  <img src={activity.imageUrl} alt={activity.title} className="img-fluid mb-2" />
                  <h3>
                    {activity.title} - <span className={`status ${activity.status}`}>{activity.status}</span>
                  </h3>
                  <div className="tags">
                    {activity.tags.map((tag) => (
                      <span key={tag} className="badge badge-secondary mr-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p>{activity.description}</p>
                  <p>
                    <strong>Start Date:</strong> {new Date(activity.startDate).toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p>No activities found.</p>
            </div>
          )}
        </div>

        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            {pageNumbers.map((number) => (
              <li key={number} className={`page-item ${number === currentPage ? "active" : ""}`}>
                <a
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
