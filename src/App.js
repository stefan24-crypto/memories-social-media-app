import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";
import AddMemory from "./Pages/AddMemory";
import MemoryDetail from "./Pages/MemoryDetailPage";
import Layout from "./Components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddMemory />} />
        <Route path="/add/:memoryID" element={<MemoryDetail />} />
      </Routes>
    </Layout>
  );
};

export default App;
