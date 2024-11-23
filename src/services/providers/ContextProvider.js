// ContextProvider.js
import React, { createContext, useState } from "react";

const MatchContext = createContext();

const ContextProvider = ({ children }) => {
  console.log("updating context...");
  const [matches, setMatches] = useState([]);
  const [currentMatch, setCurrentMatch] = useState(null);

  const [correctPredictions, setCorrectPredictions] = useState(0);
  const [totalPredictions, setTotalPredictions] = useState(0);
  const [isPredictionMade, setIsPredictionMade] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState("radiant");

  return (
    <MatchContext.Provider
      value={{
        matches,
        currentMatch,
        setMatches,
        setCurrentMatch,
        correctPredictions,
        setCorrectPredictions,
        totalPredictions,
        setTotalPredictions,
        isPredictionMade,
        setIsPredictionMade,
        selectedTeam,
        setSelectedTeam,
      }}>
      {children}
    </MatchContext.Provider>
  );
};

export { ContextProvider, MatchContext };
