import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./layout/home/Home";
import Activities from "./activities/Activities";

const AppRoutes = () => (
  <div className="content col-md-11 container-fluid justify-content-center">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/activities" element={<Activities />} />
    </Routes>
  </div>
);

export default AppRoutes;
