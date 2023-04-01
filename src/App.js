import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Schedule from "./components/ScheduleList";
// import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route path="/schedule" component={Schedule} />
      </Routes>
    </Router>
  );
}

export default App;