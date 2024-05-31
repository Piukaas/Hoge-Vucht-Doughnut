import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./layout/home/Home";
import Activities from "./activities/Activities";
import Details from "./activities/Details";

const AppRoutes = () => (
  <div className="content col-md-11 container-fluid justify-content-center">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/activities/:id" element={<Details />} />
    </Routes>
  </div>
);

export default AppRoutes;
