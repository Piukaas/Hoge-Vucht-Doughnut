import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./layout/home/Home";

const AppRoutes = () => (
  <div className="content col-md-11 container-fluid justify-content-center">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);

export default AppRoutes;
