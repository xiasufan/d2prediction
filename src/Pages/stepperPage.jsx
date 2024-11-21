import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Prediction from "../Components/Prediction";

const StepperPage = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => {
    if (currentStep === totalSteps) {
      setCurrentStep(1); // Reset to step 1 when we reach step 3
    } else if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1); // Go to the next step
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1); // Go to the previous step
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="bg-gray-600 p-4 rounded-lg">
            Step 1 Content (Placeholder for future development)
          </div>
        );
      case 2:
        return (
          <div className="bg-gray-600 p-4 rounded-lg">
            <Prediction/>
          </div>
        );
      case 3:
        return (
          <div className="bg-gray-600 p-4 rounded-lg">
            Step 3 Content (Placeholder for future development)
          </div>
        );
      default:
        return <div className="bg-gray-600 p-4 rounded-lg">Step not found</div>;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 relative">
      <button
        onClick={() => navigate("/d2prediction")}
        className="absolute top-4 left-4 flex items-center gap-2 text-sm text-gray-400 mb-4">
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

      <div className="bg-gray-800 rounded-lg p-6 shadow-lg mt-8">
        <h2 className="text-2xl font-bold mb-4">Let's Predict!</h2>
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-4 py-2 bg-gray-700 rounded-md text-white ${
              currentStep === 1 ? "cursor-not-allowed" : ""
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

          <div className="flex gap-4">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold ${
                  currentStep === step ? "bg-blue-500" : "bg-gray-700"
                }`}>
                {step}
              </div>
            ))}
          </div>

          <button
            onClick={nextStep}
            className={`px-4 py-2 bg-gray-700 rounded-md text-white`}>
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

        <div className="h-48 bg-gray-500 rounded-lg mb-6">
          {" "}
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
};

export default StepperPage;
