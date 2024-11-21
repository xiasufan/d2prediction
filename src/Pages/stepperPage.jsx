import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Prediction from "../Components/Prediction";
import Preparation from "../Components/Preparation";
import Result from "../Components/Result";

const StepperPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const changeStep = (direction) => {
    setCurrentStep((prev) =>
      direction === "next"
        ? prev === totalSteps
          ? 1
          : prev + 1
        : prev > 1
        ? prev - 1
        : prev
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Preparation
            onGameTypeSelect={(type) =>
              console.log("Game Type Selected:", type)
            }
          />
        );
      case 2:
        return <Prediction />;
      case 3:
        return <Result totalPredictions={50} correctPredictions={35} />;
      default:
        return <div className="bg-gray-600 p-4 rounded-lg">Step not found</div>;
    }
  };

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
              onClick={() => changeStep("prev")}
              disabled={currentStep === 1}
              className={`px-4 py-2 bg-gray-700 rounded-md ${
                currentStep === 1 ? "cursor-not-allowed opacity-50" : ""
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
              {Array.from({ length: totalSteps }, (_, i) => i + 1).map(
                (step) => (
                  <div
                    key={step}
                    className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${
                      currentStep === step ? "bg-blue-500" : "bg-gray-700"
                    }`}>
                    {step}
                  </div>
                )
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={() => changeStep("next")}
              className="px-4 py-2 bg-gray-700 rounded-md">
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