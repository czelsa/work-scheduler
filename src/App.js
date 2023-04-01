import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from './components/Common/Header';
import Schedule from "./components/Scheduler/ScheduleList";
// import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Header />
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