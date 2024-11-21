import React from "react";

const Result = ({ totalPredictions, correctPredictions }) => {
  const accuracy =
    totalPredictions > 0
      ? ((correctPredictions / totalPredictions) * 100).toFixed(2)
      : 0;

  return (
    <div className="bg-gray-600 p-6 rounded-lg text-center">
      <h3 className="text-xl font-bold mb-4">Results Summary</h3>
      <div className="text-3xl font-bold text-blue-500 mb-4">
        Accuracy: {accuracy}%
      </div>
      <div className="flex justify-around items-center mt-6">
        <div className="bg-blue-700 p-4 rounded-lg text-white">
          <p className="text-lg">Total Predictions</p>
          <p className="text-2xl font-bold">{totalPredictions}</p>
        </div>
        <div className="bg-green-700 p-4 rounded-lg text-white">
          <p className="text-lg">Correct Predictions</p>
          <p className="text-2xl font-bold">{correctPredictions}</p>
        </div>
        <div className="bg-red-700 p-4 rounded-lg text-white">
          <p className="text-lg">Incorrect Predictions</p>
          <p className="text-2xl font-bold">
            {totalPredictions - correctPredictions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;
