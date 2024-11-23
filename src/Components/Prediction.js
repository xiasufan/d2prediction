import React, { useState, useEffect } from "react";
import { getHero } from "../utils/helpers";
import HeroCard from "./HeroCard";
import useMatches from "../hooks/useMatches";

const Prediction = ({ onAccuracyChange }) => {
  const { matches, currentMatch, fetchMatches, setCurrentMatch, removeMatch } =
    useMatches();

  const [predictionFeedback, setPredictionFeedback] = useState("");
  const [isPredictionMade, setIsPredictionMade] = useState(false);
  const [correctPredictions, setCorrectPredictions] = useState(0);
  const [totalPredictions, setTotalPredictions] = useState(0);

  useEffect(() => {
    console.log("Rendering Prediction component...");
    console.log("Current match:", currentMatch);
  }, [currentMatch]);
  useEffect(() => {
    if (totalPredictions > 0) {
      const accuracy = (correctPredictions / totalPredictions) * 100;
      onAccuracyChange(accuracy, correctPredictions, totalPredictions);
    }
  }, [correctPredictions, totalPredictions, onAccuracyChange]);

  const handleTeamSelect = (selectedTeam) => {
    if (currentMatch) {
      const isCorrect =
        (selectedTeam === "Radiant" && currentMatch.radiant_win) ||
        (selectedTeam === "Dire" && !currentMatch.radiant_win);

      setPredictionFeedback(
        isCorrect ? "You predicted correctly! ✓" : "Prediction incorrect. ✗"
      );
      setIsPredictionMade(true);

      setTotalPredictions((prev) => prev + 1);
      if (isCorrect) {
        setCorrectPredictions((prev) => prev + 1);
      }
    }
  };

  const handleContinuePredicting = () => {
    if (currentMatch) {
      const nextMatch = matches.find(
        (match) => match.match_id !== currentMatch.match_id
      );
      if (nextMatch) {
        setCurrentMatch(nextMatch);
      }
      removeMatch(currentMatch.match_id);
    }
    setPredictionFeedback("");
    setIsPredictionMade(false);
  };

  const handleViewMatchDetails = () => {
    if (currentMatch) {
      const matchUrl = `https://stratz.com/matches/${currentMatch.match_id}`;
      window.open(matchUrl, "_blank");
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 p-4 md:p-6 rounded-lg w-full">
      <h1 className="text-xl md:text-2xl font-bold text-white mb-4">
        Who will win?
      </h1>

      {currentMatch ? (
        <>
          <div className="w-full mb-6">
            <h2 className="text-lg font-semibold text-white mb-2">
              Match Details
            </h2>
            <div className="flex flex-col md:flex-row md:gap-20">
              <TeamDisplay
                title="Radiant Team"
                team={currentMatch.radiant_team}
              />
              <TeamDisplay title="Dire Team" team={currentMatch.dire_team} />
            </div>
          </div>

          {predictionFeedback && (
            <div className="mb-4 text-white text-lg md:text-xl">
              <p>{predictionFeedback}</p>
            </div>
          )}

          {!isPredictionMade && (
            <div className="flex gap-8 md:gap-20 mb-4">
              <button
                className="btn bg-blue-500 hover:bg-blue-600"
                onClick={() => handleTeamSelect("Radiant")}>
                Radiant
              </button>
              <button
                className="btn bg-blue-500 hover:bg-blue-600"
                onClick={() => handleTeamSelect("Dire")}>
                Dire
              </button>
            </div>
          )}

          {isPredictionMade && (
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <button
                className="btn bg-green-500 hover:bg-green-600"
                onClick={handleViewMatchDetails}>
                View Match Details
              </button>
              <button
                className="btn bg-gray-500 hover:bg-orange-400"
                onClick={handleContinuePredicting}>
                Continue Predicting
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-white">Loading matches...</p>
      )}
    </div>
  );
};

const TeamDisplay = ({ title, team }) => (
  <div className="w-full">
    <h3 className="text-md font-semibold text-white mb-2">{title}</h3>
    <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 w-full">
      {team.map((heroId) => {
        const hero = getHero(heroId);
        return (
          <HeroCard
            key={hero.id}
            heroName={hero.name}
            displayName={hero.displayName}
            heroId={hero.id}
          />
        );
      })}
    </div>
  </div>
);

export default Prediction;
