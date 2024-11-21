import React, { useState } from "react";

const Prediction = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const team1 = Array(5).fill("Hero");
  const team2 = Array(5).fill("Hero");

  return (
    <div className="flex justify-center items-start bg-gray-800 p-6 rounded-lg">
      {/* Team 1 Section */}
      <div className="w-1/2 flex flex-col items-center">
        <h2 className="text-xl font-semibold text-white mb-4">Team 1</h2>
        <div
          className="w-full p-4 border-4 border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all bg-gray-700"
          onClick={() => setSelectedTeam("Team 1")} // Select Team 1 when clicking anywhere inside the team container
        >
          <div className="space-y-4">
            {team1.map((player, index) => (
              <div
                key={index}
                className="bg-gray-600 p-4 rounded-lg shadow-md text-white text-center cursor-pointer hover:scale-105 transition-all">
                <p>{player}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prediction Section */}
      <div className="flex flex-col justify-center items-center mx-6">
        <p className="text-lg text-gray-400 mb-4">VS</p>
        <p className="text-xl font-semibold text-white text-center">
          {selectedTeam
            ? `You are predicting ${selectedTeam} to win`
            : "Select a team to predict"}
        </p>
        <button
          className={`px-4 py-2 rounded-md shadow-md transition-all mt-4 ${
            selectedTeam
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
          onClick={() => alert(`You predicted ${selectedTeam}`)}
          disabled={!selectedTeam}>
          Predict
        </button>
      </div>

      {/* Team 2 Section */}
      <div className="w-1/2 flex flex-col items-center">
        <h2 className="text-xl font-semibold text-white mb-4">Team 2</h2>
        <div
          className="w-full p-4 border-4 border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-all bg-gray-700"
          onClick={() => setSelectedTeam("Team 2")} // Select Team 2 when clicking anywhere inside the team container
        >
          <div className="space-y-4">
            {team2.map((player, index) => (
              <div
                key={index}
                className="bg-gray-600 p-4 rounded-lg shadow-md text-white text-center cursor-pointer hover:scale-105 transition-all">
                <p>{player}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
