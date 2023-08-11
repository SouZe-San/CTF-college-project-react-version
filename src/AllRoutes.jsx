/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home/Home";
import Challenges from "./pages/Challenges/page";
import Dashboard from "./pages/Dashboard/page";
import Login from "./pages/Auth/page";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/challenges" element={<Challenges />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
