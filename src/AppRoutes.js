import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./layout/Home";

const AppRoutes = () => (
  <div className="mt-100">
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);

export default AppRoutes;
