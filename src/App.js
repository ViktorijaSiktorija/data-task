import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Data from "./components/Data";
import DataCreate from "./components/DataCreate";
import DataUpdate from "./components/DataUpdate";
import LineCharts from "./components/LineCharts";

export default function App() {
  return (
    <div>
      <Data />
      <DataCreate />
      <Router>
        <Routes>
          <Route exact path="/update/:id" element={<DataUpdate />} />
        </Routes>
      </Router>
      <LineCharts />
    </div>
  );
}
