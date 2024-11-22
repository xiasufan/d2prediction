import React from "react";

const Result = ({ correctPredictions, totalPredictions, accuracy }) => {
  // Format the accuracy to two decimal places
  const formattedAccuracy = accuracy !== null ? accuracy.toFixed(2) : "N/A";

  // Calculate the background color based on accuracy
  const getAccuracyColor = (accuracy) => {
    if (accuracy === null) return "#6B7280"; // Gray for null accuracy
    const green = Math.min((accuracy / 100) * 255, 255);
    const red = Math.min(((100 - accuracy) / 100) * 255, 255);
    const yellow = Math.min((Math.abs(accuracy - 50) / 50) * 255, 255);

    // Return a color that blends from red to yellow to green
    return `rgb(${red}, ${yellow}, ${green})`;
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-lg mx-auto">
      <h3 className="text-3xl font-bold text-center text-white mb-6">
        Prediction Result
      </h3>
      <div className="text-center">
        {/* Display accuracy in large, bold text in the center */}
        Accuracy:{" "}
        <p
          className="text-6xl font-extrabold mb-4"
          style={{
            color: accuracy !== null ? getAccuracyColor(accuracy) : "#6B7280", // Set text color based on accuracy
          }}>
          {formattedAccuracy !== "N/A" ? `${formattedAccuracy}%` : "N/A"}
        </p>
        {/* Display total predictions below accuracy */}
        <p className="text-xl text-white mb-2">
          <span className="font-semibold text-gray-300">
            {correctPredictions} out of {totalPredictions}
          </span>
        </p>
        {/* Add the message to refresh the page */}
        <p className="text-lg text-gray-400 mt-4">
          Refresh the page to start over.
        </p>
      </div>
    </div>
  );
};

export default Result;
