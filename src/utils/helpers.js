import heroes from "../constants/Heroes";

/**
 * Retrieves hero details by hero ID.
 * @param {number} heroId
 * @returns {Object} Hero object
 */
export const getHero = (heroId) => {
  return heroes.find((h) => h.id === heroId);
};

export const calculateAccuracy = (correctPredictions, totalPredictions) => {
  if (totalPredictions > 0) {
    const accuracy = (correctPredictions / totalPredictions) * 100;
    return parseFloat(accuracy.toFixed(2)); // Round to 2 decimal places
  }
  return 0;
};
