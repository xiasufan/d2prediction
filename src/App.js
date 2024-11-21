import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homePage";
import StepperPage from "./Pages/stepperPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/d2prediction" element={<HomePage />} />
        <Route path="/stepper" element={<StepperPage />} />
      </Routes>
    </Router>
  );
};

export default App;
