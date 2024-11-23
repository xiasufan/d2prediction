// ContextProvider.js
import React, { createContext, useState } from "react";

const MatchContext = createContext();

const ContextProvider = ({ children }) => {
  const [matches, setMatches] = useState([]);
  const [currentMatch, setCurrentMatch] = useState(null);

  return (
    <MatchContext.Provider
      value={{
        matches,
        currentMatch,
        setMatches,
        setCurrentMatch,
      }}>
      {children}
    </MatchContext.Provider>
  );
};

export { ContextProvider, MatchContext };
