import React from "react";
import { Route, Routes } from "react-router";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Detail from "../components/Detail";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<Home />} />
      </Routes>
    </>
  );
}
