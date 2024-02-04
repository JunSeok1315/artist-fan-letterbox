import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import fakeData from "fakeData.json";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter/:id" element={<Detail fakeData={fakeData} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
