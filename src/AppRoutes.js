import React from "react";
import { Route, Routes } from "react-router-dom";
import Activities from "./activities/Activities";
import Details from "./activities/Details";
import Initiatives from "./initiatives/Initiatives";
import Home from "./layout/home/Home";

const AppRoutes = () => (
  <div className="content col-md-11 container-fluid justify-content-center">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/activities/:id" element={<Details />} />
      <Route path="/initiatives" element={<Initiatives />} />
    </Routes>
  </div>
);

export default AppRoutes;
