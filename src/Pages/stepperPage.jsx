import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Prediction from "../components/Prediction";
import Preparation from "../components/Preparation";
import Result from "../components/Result";
import { MatchContext } from "../services/providers/ContextProvider";
import { calculateAccuracy } from "../utils/helpers";

const StepperPage = () => {
  const { currentMatch, totalPredictions, correctPredictions } =
    useContext(MatchContext);
  const navigate = useNavigate();
  const [gameType, setGameType] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // Change step based on direction or specific step
  const goToStep = (step) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  };

  // Render content based on current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <Preparation onGameTypeSelect={(type) => setGameType(type)} />;
      case 2:
        return <Prediction />;
      case 3:
        // Pass accuracy to Result component in step 3
        return (
          <Result
            correctPredictions={correctPredictions}
            totalPredictions={totalPredictions}
            accuracy={calculateAccuracy(correctPredictions, totalPredictions)}
          />
        );
      default:
        return <div className="bg-gray-600 p-4 rounded-lg">Step not found</div>;
    }
  };

  // Step indicator component
  const StepIndicator = ({ step }) => (
    <div
      onClick={() => goToStep(step)}
      className={`w-8 h-8 flex items-center justify-center rounded-full font-bold cursor-pointer transition-all ${
        currentStep === step
          ? "bg-blue-500 text-white scale-110"
          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
      }`}>
      {step}
    </div>
  );

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/d2prediction")}
        className="flex items-center gap-2 text-sm text-gray-400 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Home
      </button>
      {currentMatch?.match_id}
      {/* Stepper Container */}
      <div className="flex flex-col flex-grow bg-gray-800 rounded-lg shadow-lg">
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold">Let's Predict!</h2>
        </div>

        {/* Content and Navigation */}
        <div className="flex flex-col flex-grow p-6">
          {/* Steps Indicator */}
          <div className="flex justify-between items-center mb-6">
            {/* Previous Button */}
            <button
              onClick={() => goToStep(currentStep - 1)}
              disabled={currentStep === 1}
              className={`px-4 py-2 bg-gray-700 rounded-md ${
                currentStep === 1 ? "opacity-50" : ""
              }`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Steps */}
            <div className="flex gap-4">
              {Array.from({ length: totalSteps }, (_, i) => (
                <StepIndicator key={i + 1} step={i + 1} />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => goToStep(currentStep + 1)}
              disabled={currentStep === 3}
              className={`px-4 py-2 bg-gray-700 rounded-md ${
                currentStep === 3 ? "opacity-50" : ""
              }`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-grow rounded-lg overflow-auto">
            {renderStepContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepperPage;
