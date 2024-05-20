import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";

const AppRoutes = () => (
  <Routes>
    <Route path="/hello" element={<Footer />} />
  </Routes>
);

export default AppRoutes;
