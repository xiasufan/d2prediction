// src/hooks/useResult.js
import { useState, useEffect, useContext } from "react";
import { MatchContext } from "../services/providers/ContextProvider";
import { calculateAccuracy } from "../utils/helpers";

const useResult = () => {
  const {
    correctPredictions,
    totalPredictions,
    setCorrectPredictions,
    setTotalPredictions,
  } = useContext(MatchContext);

  const updatePrediction = (isCorrect) => {
    setTotalPredictions((prev) => prev + 1);
    if (isCorrect) {
      setCorrectPredictions((prev) => prev + 1);
    }
  };

  useEffect(() => {
    // Effect to log the updated accuracy whenever it changes (optional)
    const accuracy = calculateAccuracy(correctPredictions, totalPredictions);
    console.log(`Current accuracy: ${accuracy}%`);
  }, [correctPredictions, totalPredictions]);

  return {
    correctPredictions,
    totalPredictions,
    accuracy: calculateAccuracy(correctPredictions, totalPredictions),
    updatePrediction,
  };
};

export default useResult;
