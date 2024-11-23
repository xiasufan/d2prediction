import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./services/providers/ContextProvider";
import HomePage from "./pages/HomePage";
import StepperPage from "./pages/StepperPage";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/d2prediction" element={<HomePage />} />
          <Route path="/d2prediction/stepper" element={<StepperPage />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;
