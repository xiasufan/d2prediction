import heroes from "../constants/Heroes";

/**
 * Retrieves hero details by hero ID.
 * @param {number} heroId
 * @returns {Object} Hero object
 */
export const getHero = (heroId) => {
  return heroes.find((h) => h.id === heroId);
};
