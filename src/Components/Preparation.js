import React, { useState } from "react";

const Preparation = ({ onGameTypeSelect }) => {
  const [selectedType, setSelectedType] = useState("");

  const handleSelect = (type) => {
    setSelectedType(type);
    onGameTypeSelect(type);
  };

  return (
    <div className="bg-gray-600 p-6 rounded-lg text-center">
      <h3 className="text-xl font-bold mb-4">Choose Match Type</h3>
      <div className="flex justify-center gap-6">
        {["Professional Match", "High-Rank Match"].map((type) => (
          <button
            key={type}
            onClick={() => handleSelect(type)}
            className={`px-6 py-3 rounded-lg text-white font-semibold ${
              selectedType === type
                ? "bg-blue-600"
                : "bg-gray-700 hover:bg-gray-500"
            }`}>
            {type}
          </button>
        ))}
      </div>
      {selectedType && (
        <p className="mt-4 text-sm text-gray-300">
          Selected: <span className="font-bold text-white">{selectedType}</span>
        </p>
      )}
    </div>
  );
};

export default Preparation;
