import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import heroes from "../Constants/heroes";
import HeroCard from "./HeroCard";

const Prediction = ({ onAccuracyChange }) => {
  const [matches, setMatches] = useState([]);
  const [currentMatch, setCurrentMatch] = useState(null);
  const [lastMatchId, setLastMatchId] = useState(null);
  const [predictionFeedback, setPredictionFeedback] = useState("");
  const [isPredictionMade, setIsPredictionMade] = useState(false);

  const [correctPredictions, setCorrectPredictions] = useState(0);
  const [totalPredictions, setTotalPredictions] = useState(0);

  useEffect(() => {
    if (totalPredictions > 0) {
      const accuracy = (correctPredictions / totalPredictions) * 100;
      onAccuracyChange(accuracy, correctPredictions, totalPredictions);
    }
  }, [correctPredictions, totalPredictions, onAccuracyChange]);

  const fetchMatches = useCallback(async (lessThanMatchId = null) => {
    try {
      const url = lessThanMatchId
        ? `https://api.opendota.com/api/publicMatches?min_rank=80&less_than_match_id=${lessThanMatchId}`
        : `https://api.opendota.com/api/publicMatches?min_rank=80`;

      const response = await axios.get(url);
      const newMatches = response.data.slice(1);

      setMatches((prevMatches) => {
        const updatedMatches = [...prevMatches, ...newMatches];
        return updatedMatches;
      });

      if (newMatches.length > 0) {
        setLastMatchId(newMatches[newMatches.length - 1].match_id);
      }
    } catch (error) {
      console.error("Error fetching matches:", error);
    }
  }, []);

  useEffect(() => {
    if (matches.length === 0) {
      fetchMatches();
    } else if (!currentMatch) {
      const randomIndex = Math.floor(Math.random() * matches.length);
      setCurrentMatch(matches[randomIndex]);
    }
  }, [matches, currentMatch, fetchMatches]);

  const getHero = (heroId) => {
    return heroes.find((h) => h.id === heroId);
  };

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
    setMatches((prevMatches) => {
      const remainingMatches = prevMatches.filter(
        (match) => match.match_id !== currentMatch.match_id
      );

      if (remainingMatches.length === 0) {
        fetchMatches(lastMatchId);
      }

      return remainingMatches;
    });

    if (matches.length > 0) {
      const randomIndex = Math.floor(Math.random() * matches.length);
      setCurrentMatch(matches[randomIndex]);
    } else {
      setCurrentMatch(null);
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
    <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg">
      <h1 className="text-2xl font-bold text-white mb-4">
        Dota 2 Match Prediction
      </h1>

      {currentMatch ? (
        <>
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-white mb-2">
              Match Details
            </h2>
            <div className="flex gap-20">
              <div className="w-full">
                <h3 className="text-md font-semibold text-white mb-2">
                  Radiant Team
                </h3>
                <div className="grid grid-cols-5 gap-4 w-full">
                  {currentMatch.radiant_team.map((heroId) => {
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
              <div className="w-full">
                <h3 className="text-md font-semibold text-white mb-2">
                  Dire Team
                </h3>
                <div className="grid grid-cols-5 gap-4 w-full">
                  {currentMatch.dire_team.map((heroId) => {
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
            </div>
          </div>

          {predictionFeedback && (
            <div className="mb-4 text-white text-xl">
              <p>{predictionFeedback}</p>
            </div>
          )}

          {!isPredictionMade && (
            <div className="flex gap-20 mb-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => handleTeamSelect("Radiant")}>
                Radiant
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => handleTeamSelect("Dire")}>
                Dire
              </button>
            </div>
          )}

          {isPredictionMade && (
            <div className="flex gap-4">
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                onClick={handleViewMatchDetails}>
                View Match Details
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-orange-400"
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

export default Prediction;
