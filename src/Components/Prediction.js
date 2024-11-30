import React, { useState, useEffect, useContext } from "react";
import { getHero } from "../utils/helpers";
import HeroCard from "./HeroCard";
import useMatches from "../hooks/useMatches";
import useResult from "../hooks/useResult"; // Import the custom hook
import { MatchContext } from "../services/providers/ContextProvider";

const Prediction = () => {
  console.log("Rendering Prediction component...");
  const { matches, currentMatch, fetchMatches, setCurrentMatch, removeMatch } =
    useMatches();
  const {
    setIsPredictionMade,
    isPredictionMade,
    selectedTeam,
    setSelectedTeam,
  } = useContext(MatchContext);

  const { accuracy, updatePrediction } = useResult(); // Use the custom hook

  useEffect(() => {
    console.log("Current match:", currentMatch);
  }, [currentMatch]);

  const handleTeamSelect = (team) => {
    if (currentMatch) {
      const isCorrect =
        (team === "Radiant" && currentMatch.radiant_win) ||
        (team === "Dire" && !currentMatch.radiant_win);

      setSelectedTeam(team); // Save the user's selection
      setIsPredictionMade(true);
      updatePrediction(isCorrect); // Update prediction accuracy
    }
  };

  const handleContinuePredicting = () => {
    if (currentMatch) {
      // Get a random match from the matches array
      const randomIndex = Math.floor(Math.random() * matches.length);
      const nextMatch = matches[randomIndex];

      if (nextMatch) {
        setCurrentMatch(nextMatch);
      }

      // Remove the current match from the list
      removeMatch(currentMatch.match_id);
    }

    // Reset prediction state
    setIsPredictionMade(false);
    setSelectedTeam(null); // Reset the selected team
  };

  const handleViewMatchDetails = () => {
    if (currentMatch) {
      const matchUrl = `https://stratz.com/matches/${currentMatch.match_id}`;
      window.open(matchUrl, "_blank");
    }
  };

  const handleSkipMatch = () => {
    if (currentMatch) {
      // Skip current match by removing it and loading next match
      const nextMatch = matches.find(
        (match) => match.match_id !== currentMatch.match_id
      );
      if (nextMatch) {
        setCurrentMatch(nextMatch);
      }
      removeMatch(currentMatch.match_id);
    }
    setIsPredictionMade(false);
    setSelectedTeam(null); // Reset the selected team
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 p-4 md:p-6 rounded-lg w-full">
      <h1 className="text-xl md:text-2xl font-bold text-white mb-4">
        Who will win?
      </h1>

      {/* Buttons for team selection or feedback actions */}
      <div className="flex gap-8 md:gap-20 mb-6 items-center">
        {!isPredictionMade ? (
          <>
            <button
              className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              onClick={() => handleTeamSelect("Radiant")}>
              Radiant
            </button>

            <button
              className="px-4 py-2 text-sm font-semibold text-white bg-gray-500 hover:bg-gray-600 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              onClick={handleSkipMatch}>
              Skip
            </button>

            <button
              className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              onClick={() => handleTeamSelect("Dire")}>
              Dire
            </button>
          </>
        ) : (
          <>
            <button
              className="px-6 py-3 text-lg font-semibold text-white bg-green-500 hover:bg-green-600 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              onClick={handleViewMatchDetails}>
              View Match Details
            </button>
            {selectedTeam && (
              <span
                className={`text-3xl font-bold mx-4 ${
                  (selectedTeam === "Radiant" && currentMatch.radiant_win) ||
                  (selectedTeam === "Dire" && !currentMatch.radiant_win)
                    ? "text-green-500"
                    : "text-red-500"
                }`}>
                {(selectedTeam === "Radiant" && currentMatch.radiant_win) ||
                (selectedTeam === "Dire" && !currentMatch.radiant_win)
                  ? "✓"
                  : "✗"}
              </span>
            )}
            <button
              className="px-6 py-3 text-lg font-semibold text-white bg-gray-500 hover:bg-orange-400 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              onClick={handleContinuePredicting}>
              Continue Predicting
            </button>
          </>
        )}
      </div>

      {currentMatch ? (
        <>
          <div className="w-full mb-6">
            <div className="flex flex-col md:flex-row md:gap-20">
              <TeamDisplay
                title="Radiant Team"
                team={currentMatch.radiant_team}
              />
              <TeamDisplay title="Dire Team" team={currentMatch.dire_team} />
            </div>
          </div>
        </>
      ) : (
        <p className="text-white">Loading matches...</p>
      )}
    </div>
  );
};

const TeamDisplay = ({ title, team }) => (
  <div className="w-full bg-gradient-to-r from-purple-500 to-blue-600 p-4 rounded-lg shadow-lg overflow-hidden">
    <h3 className="text-xl font-semibold text-white text-center mb-4">
      {title}
    </h3>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 justify-items-center">
      {team.map((heroId) => {
        const hero = getHero(heroId);
        return (
          <HeroCard
            key={hero.id}
            heroName={hero.name}
            displayName={hero.displayName}
            heroId={hero.id}
            className="transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          />
        );
      })}
    </div>
  </div>
);

export default Prediction;
