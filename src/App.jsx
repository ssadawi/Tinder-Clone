import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Header from "./components/header";
import "./css/app.css";

const App = () => {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </div>
  );
};

export default App;
