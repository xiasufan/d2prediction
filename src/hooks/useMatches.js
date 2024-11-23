// useMatches.js
import { useContext, useEffect, useCallback } from "react";
import { MatchContext } from "../services/providers/ContextProvider";
import axios from "axios";

const useMatches = () => {
  const { matches, currentMatch, setMatches, setCurrentMatch } =
    useContext(MatchContext);

  const fetchMatches = useCallback(
    async (lessThanMatchId = null) => {
      try {
        const url = lessThanMatchId
          ? `https://api.opendota.com/api/publicMatches?min_rank=80&less_than_match_id=${lessThanMatchId}`
          : `https://api.opendota.com/api/publicMatches?min_rank=80`;

        const response = await axios.get(url);
        const newMatches = response.data.slice(1);

        setMatches((prevMatches) => [...prevMatches, ...newMatches]);

        if (newMatches.length > 0) {
          // Set the last match ID for pagination (optional)
          const lastMatchId = newMatches[newMatches.length - 1].match_id;
          // You can store lastMatchId if needed in the context or state
        }
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    },
    [setMatches]
  );

  useEffect(() => {
    // Load initial data if matches are empty
    if (matches.length === 0) {
      fetchMatches();
    } else if (!currentMatch) {
      const randomIndex = Math.floor(Math.random() * matches.length);
      setCurrentMatch(matches[randomIndex]);
    }
  }, [matches, currentMatch, fetchMatches, setCurrentMatch]);

  const removeMatch = (matchId) => {
    setMatches((prevMatches) =>
      prevMatches.filter((match) => match.match_id !== matchId)
    );
  };

  return {
    matches,
    currentMatch,
    fetchMatches,
    removeMatch,
    setCurrentMatch,
  };
};

export default useMatches;
